
import Navbar from "./Navbar";
import { useState, useContext } from "react";
import AppContext from "../Context/AppContext";

function Profile( ) {

const savedUserName = JSON.parse(window.localStorage.getItem("username"));
const [userName, setUserName] = useState(savedUserName);
const appContext = useContext(AppContext);


const handleProfileName=(event) => {
  setUserName (event.target.value);
  
}

const handleProfileNameSubmit = () => {
  appContext.setProfileUserName(userName);
  window.localStorage.setItem("username", JSON.stringify(userName));
  window.alert("User name has been succesfully changed!");

}
  return (
    <div>
    
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <p className="profile-text">Profile</p>
     <br></br>
     
     <small className="username-text">User Name</small>
     <br></br>
     <div className="profile-wrapper">
     <input className="input-profile" placeholder="Please type a username..." type="text" value={userName} onInput={handleProfileName}  ></input>
   
     <button className="btn-save" onClick={handleProfileNameSubmit}>Save</button>
     </div>
    </div>
  )
}

export default Profile
