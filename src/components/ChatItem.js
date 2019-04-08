import React from 'react';

import Avatar from 'material-ui/Avatar';
import { ListItem, ListItemText } from 'material-ui/List';
import titleInitials from '../utils/titleInitials'



const ChatItem = ({chat, index})=>{
  return(
    <ListItem key={index} button>
      <Avatar>{titleInitials(chat.title)}</Avatar>
      <ListItemText primary={chat.title}/>
    </ListItem>
  )
}


export default ChatItem;
