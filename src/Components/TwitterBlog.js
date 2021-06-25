import React from 'react'
import { useEffect, useState, useContext } from "react";
import { postTweet } from "../Components/API";
import AppContext from "../Context/AppContext";

function TwitterBlog() {

  

const [content, setContent]= useState("");
const [date, setDate]= useState("");
const { userName } = "";
const [disabled, setDisabled]= useState(false);
const [error, setError]= useState("");
const [isLoading, setIsLoading] = useState(false);
const appContext = useContext(AppContext);

useEffect(() => {
appContext.setTweetController({
content: content,
userName:appContext.profileUserName || "Unknown user",
date: Date.now(),
id:Math.floor(Math.random()*1000),
});
}, [content, userName, date]);


const setContentHandler= (e)=> {
  setContent(e.target.value)
  //console.log(e.target.value)//
  if (e.target.value.length>140){
   setError("This tweet can't contain more then 140 chars")
  setDisabled(true);
     } else {
  setDisabled(false);
  setError("");
    }
    }

const submitTweetHandler= () => {
setIsLoading(true);


const postedTweet = {
content: appContext.tweetController.content,
userName: appContext.tweetController.userName,
date: new Date(appContext.tweetController.date),
};
postTweet(postedTweet)
.then((response) => response.json())
.then((data) => {
setTimeout(() => {
setIsLoading(false);
}, [1000]);

appContext.setTweets((prevState) => {
  return [appContext.tweetController, ...prevState];
  });
  appContext.setTweetController({});
  setContent("");
})
.catch((error) => {
console.error(error);
setError(error);
});
  };

  return (
    <div className="wrapper">
    
    
    <span class="placeholder">What's happening?</span>
    <br></br>
    <br></br>
  
    <p userName= {userName}></p>
    <input className="input" placeholder="What do you have in mind..." type="text" value= {content} onChange={setContentHandler} ></input>
    <div class="tweet-line">
    <br></br>
    
 
    <div className="error-wrapper">
    <strong className="error-message">{error}</strong>

    {isLoading && (
      <div class="loader1">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    )}
    {!isLoading && (
    <button
  disabled={disabled}
  className="btn"
  onClick= {submitTweetHandler}>Tweet</button>
)}
   
   </div>
    </div>
    </div>
   

  )
}

export default TwitterBlog
