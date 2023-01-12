import  Express  from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js"
import Pusher from "pusher";
import cors from 'cors';


const app= Express();
const port = process.env.port || 9000


const pusher = new Pusher({
  appId: "1509868",
  key: "898cb4e778173714ac8e",
  secret: "2b720b286879b747bbb8",
  cluster: "ap2",
  useTLS: true
});

const db = mongoose.connection;

db.once("open", ()=> {
 console.log("DB connected");
 const messageCollection  = db.collection("messagecontents");
 const changeStream = messageCollection.watch();

 changeStream.on("change", (change)=>{
    console.log(changeStream);

    if(change.operationType==="insert"){
      const messageDetails= change.fullDocument;
      pusher.trigger('messages','inserted' ,{

        name:messageDetails.name,
        message:messageDetails.message,
        timestamp:messageDetails.timestamp,
        received:messageDetails.received
      });

    } else {
      console.log('Error trigering Pusher');
    }
 }); 
});

app.use(Express.json());
app.use(cors());

const connection_url ='mongodb+srv://admin:qMUicRgEeRAU@cluster0.mdseqya.mongodb.net/whatsappdb?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
  useUnifiedTopology:true
});


app.get("/", (req,res) => res.status(200).send("Hello world"));

app.post('/messages/new', (req,res) => {
  const dbMessage= req.body;

  Messages.create(dbMessage, (err,data) => {
       if(err) {
        res.status(500).send(err)
       } else {
        res.status(200).send(data)
       }
  });
});


app.listen(port, () => console.log(`Listening on local host:${port}`));