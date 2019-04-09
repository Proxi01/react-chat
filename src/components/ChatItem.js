import React from 'react';

import Avatar from './Avatar';
import { ListItem, ListItemText } from 'material-ui/List';
import titleInitials from '../utils/titleInitials'



const ChatItem = ({chat, index})=>{
  return(
    <ListItem key={index} button>
      <Avatar colorFrom = {chat.title}>{chat.title}</Avatar>
      <ListItemText primary={chat.title}/>
    </ListItem>
  )
}


export default ChatItem;
