import React from 'react'
import { useContext, useEffect } from "react";
import TwitterBlog from "./TwitterBlog";
import TwitterList from "./TwitterList";
import '../App.css';
import AppContext from "../Context/AppContext";

function Home() {

const appContext = useContext(AppContext);


  useEffect(() => {
    fetch("https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet")
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    appContext.setTweets(data.tweets)
    });
  }, []);


	useEffect(() => {
		const interval = setInterval(() => {
      fetch("https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet")
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      appContext.setTweets(data.tweets)
      });
		
		}, 40000);
		return () => clearInterval(interval);
	}, []);

  return (
    <div>

    <TwitterBlog  ></TwitterBlog>
   <TwitterList ></TwitterList>
    </div>
  )
}

export default Home