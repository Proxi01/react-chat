import React from 'react';

import classnames from 'classnames';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from './Avatar';

import titleInitials from '../utils/titleInitials'



const Message = ({classes, message, index})=>{
  const isMessageFromMe = message.sender === 'me';

  const userAvatar = (
    <Avatar colorFrom = {message.sender}>
      {message.sender}
    </Avatar>
  );

  return (
    // <div className={classNames(classes.messageWrapper, isMessageFromMe && classes.messageWrappperFromMe)}>
    <div key={index} className={classnames(classes.messageWrapper,
      isMessageFromMe && classes.messageWrappperFromMe)}>
      {!isMessageFromMe && userAvatar}
      <Paper className={ classnames(classes.message,
        isMessageFromMe && classes.messageFromMe)}>
        <Typography variant="caption">
          {message.sender}
        </Typography>
        <Typography variant="body1">
          {message.content}
        </Typography>
      </Paper>
      {isMessageFromMe && userAvatar}
    </div>
  );
}

export default Message;
