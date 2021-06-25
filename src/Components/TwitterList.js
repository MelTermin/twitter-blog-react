import React from 'react'
import { useContext } from "react";
import AppContext from "../Context/AppContext";

function TwitterList( ) {
  const appContext = useContext(AppContext);
  const sortedList=appContext.tweets.sort((a, b) => b.date - a.date);
  
  
  return (
    <div>
    <ul className="tweet-list">
  {sortedList.map((tweet)=> (
    <li key={tweet.id}>
      <div className="item-container">
      <div className="name-display">
    <p > {tweet.userName}</p>
    <p> {new Date (tweet.date).toISOString("en-US",{
      hour:"2-digit",
      minute:"2-digit",
       })}</p>
    </div>
    <br></br>
    <p>{tweet.content}</p>
  </div>
  </li>
  ))}
    </ul>
  </div>
  )
}

export default TwitterList
