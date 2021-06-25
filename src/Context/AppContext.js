import React from "react";

const AppContext = React.createContext({
	profileUserName: "",
	setProfileUserName: "",
	tweets: "",
	setTweets: "",
	tweetController: "", 
  setTweetController:"", 
});

export default AppContext;