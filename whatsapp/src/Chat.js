import React  from "react";
import {useState} from "react";
import  MoreVert  from '@mui/icons-material/MoreVert'
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import AttachFile from '@mui/icons-material/AttachFile'
import { Avatar, IconButton } from '@mui/material'
import '../src/Chat.css'
import { InsertEmoticon, Mic } from '@mui/icons-material'
import axios from "./axios.js";

function Chat( {messages}) {

  const [input, setInput] = useState("");

const sendMessage = async(e) => {
  e.preventDefault();

 await axios.post('/messages/new',{
    "message": input,
    "name": "Anurag",
    "timestamp": "just",
    "received": false
  });
  setInput('');
};

  return (
    <div className='Chatbox'>
        <div className='chat_header'>
        <Avatar/>

        <div className='chat_headerInfo'>
        <h3> Room name</h3>
        <p> last seen... </p>
        </div>

        <div className='chat_headerRight'>
             <IconButton>
              <SearchOutlined/>
             </IconButton>
             <IconButton>
              <AttachFile/>
             </IconButton>
             <IconButton>
              <MoreVert/>
             </IconButton>
        </div>

        </div>

        <div className='chat_body'>
        {messages.map((message)=>(

     
        <p className={`chat_message ${message.received&& "chat_reciever"}`}>
          <span className='chat_name'>{message.name}</span>
          {message.message}
          <span className='chat_timestamp'>{message.timestamp}</span>
         </p>
         ))}

        </div>

        <div className='chat_footer'>
           <InsertEmoticon/>
           <form>
            <input value={input} onChange={e=> setInput(e.target.value)} placeholder='Type a message' type="text"/>
            <button onClick={sendMessage} type='submit'>Send a message</button>
           </form>
           <Mic/>
        </div>
    </div>
  );
}

export default Chat