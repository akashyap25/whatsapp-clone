import { Avatar } from '@mui/material'
import React from 'react'
import "../src/SidebarChat.css"

function SidebarChat() {
  return (<div className='sidebarChat'>
  <div className='sidebar'>
  <Avatar/>
  <div className='sidebarChat_info'>
  <h2> Class group</h2>
  <p> This is the last message</p>
  </div>
  </div>

  <div className='sidebar'>
  <Avatar/>
  <div className='sidebarChat_info'>
  <h2> Class group</h2>
  <p> This is the last message</p>
  </div>
  </div>

  <div className='sidebar'>
  <Avatar/>
  <div className='sidebarChat_info'>
  <h2> Class group</h2>
  <p> This is the last message</p>
  </div>
  </div>
 

  </div>
  )
}

export default SidebarChat