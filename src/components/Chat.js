import React from 'react';
import {withStyles} from 'material-ui/styles';




import MessageInput from './MessageInput'
import Message from './Message';



const styles = (theme)=>({
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
    paddingTop: '120px',
  },

  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  messageWrappperFromMe: {
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#e6dcff'
  },
})

class Chat extends React.Component{

  componentDidMount(){
    this.scrollDownHistory();
  }

  componentDidUpdate(){
    this.scrollDownHistory();
  }

  scrollDownHistory(){
    const messagesWrapper = this.refs.messagesWrapper;

    if(messagesWrapper){
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }


  render(){
    const {messages, classes} = this.props

    return(
      <main className={classes.chatLayout}>
        <div className={classes.messagesWrapper} ref="messagesWrapper">
          {messages && messages.map((message, index) => (<Message message = {message} index = {index} classes = {classes}/>)
          )}
        </div>
        <MessageInput classes = {classes}/>
      </main>
    )
  }
}

export default withStyles(styles)(Chat)
