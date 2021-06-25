
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import React from 'react'
import AppContext from "./Context/AppContext";
import Navbar from './Components/Navbar';

function App() {

  const [profileUserName, setProfileUserName] = useState("");
  const [tweets, setTweets]= useState([]);
  const [tweetController, setTweetController] = useState({});
  return (
    <div >
   
  <Router>
  <AppContext.Provider
	value={{
	profileUserName: profileUserName,
	setProfileUserName: setProfileUserName,
  tweets: tweets,
	setTweets: setTweets,
	tweetController:tweetController,
  setTweetController:setTweetController,
	}}>
  <Navbar></Navbar>
  <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/profile" component={Profile} />
  </Switch>
  </AppContext.Provider>
 </Router>
       
  </div>
    
    
  );
}

export default App;
