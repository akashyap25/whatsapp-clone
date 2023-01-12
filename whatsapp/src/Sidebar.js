
import React from 'react';
import "../src/Sidebar.css"
import  DonutLargeIcon  from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import  ChatIcon from '@mui/icons-material/Chat';
import  MoreVertIcon  from '@mui/icons-material/MoreVert';
import  SearchOutlined  from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';


function sidebar() {
  return (
  <div className='sidebar'>
    <div className='sidebar_header'>
    <Avatar/>
      <div className='sidebar_headerRight'>
      <IconButton>
      <DonutLargeIcon/>
      </IconButton>
      <IconButton>
      <ChatIcon/>
      </IconButton>
      <IconButton>
      <MoreVertIcon/>
      </IconButton>
      </div>
    </div>

     <div className='sidebar_search'>
      <div className='sidebar_searchContainer'>
        <SearchOutlined/>
        <input placeholder='Search or start new text' type="text"/>
      </div>
     </div>

     <div className='sidebar_chats'>
     <SidebarChat />
     
     </div>
      </div>

  )
}

export default sidebar
