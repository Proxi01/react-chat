import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import ChatPage from './ChatPage';
import WelcomePage from './WelcomePage'


import Sidebar from './Sidebar';
import ChatHeader from './ChatHeader';
import Chat from './Chat'



import { chats, messages } from '../mock-data';



const App = ()=>(
  <Router>
    <Switch>
      <Route exact path="/(welcome)?" component={WelcomePage}/>
      <Route exact path='/chat' component={ChatPage} />

      <Redirect to="/" />
    </Switch>
  </Router>
)



/*class App extends React.Component {



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
}*/

export default App;
