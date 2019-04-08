import React from 'react';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';

import Sidebar from './components/Sidebar';
import ChatHeader from './components/ChatHeader';
import Chat from './components/Chat'


import titleInitials from './utils/titleInitials'

import { chats, messages } from './mock-data';


const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },


});

class App extends React.Component {



  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ChatHeader/>
        <Sidebar chats={chats}/>
        <Chat messages = {messages}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
