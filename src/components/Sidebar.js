import React from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';

import AddIcon from 'material-ui-icons/Add';

import ChatItem from './ChatItem';
import DrawerHeader from './DrawerHeader';
import DrawerBottom from './DrawerBottom';



import { withStyles } from 'material-ui/styles';



const styles = (theme)=>({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: 320,
  },
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
  },
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
  },
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    overflow: 'hidden',
  },
})

const Sidebar = ({chats, classes})=>{


  return(
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
     <DrawerHeader/>

      <Divider />
      <List className={classes.chatsList}>
        {chats.map((chat, index) => (
          <ChatItem chat={chat} index={index}/>
        ))}
      </List>
      <Button
        variant="fab"
        color="primary"
        className={classes.newChatButton}
      >
        <AddIcon />
      </Button>

      <DrawerBottom/>



    </Drawer>
  )

}


export default withStyles(styles)(Sidebar);
