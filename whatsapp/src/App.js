import React, {useEffect}  from "react";
import {useState} from "react";
import "../src/App.css"
import Sidebar from './Sidebar'
import Chatbox from './Chat'
import Pusher from "pusher-js";
import axios from './axios';


function App() {
   const [messages,setMessages]= useState([]);

  useEffect(()=>{
    axios.get("/messages/sync").then(response =>{
      setMessages(response.data);
    });
  },[]);

useEffect(() => {
 
  var pusher = new Pusher('898cb4e778173714ac8e', {
    cluster: 'ap2'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted',(newMessage) =>{
    setMessages([...messages,newMessage])
  });
 
  return () => {
    channel.unbind_all();
    channel.unsubscribe();
  };
  
},[messages]);





  return (
    <div className="app">
      <div className='app_body'>
      
     <Sidebar />

      <Chatbox messages={messages} />
      </div>
   
    </div>
  );
}

export default App;
