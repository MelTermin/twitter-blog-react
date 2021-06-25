import {Link} from "react-router-dom"

function Navbar( {userName}) {
  return (
    <div className="navbar">
      <nav>
    <ul >
      <Link to={{pathname: "/" , 
      state: { profileUserName: userName },
      }}> Home</Link>
      <Link to={{pathname: "/profile" , 
      state: { profileUserName: userName },
      }}> Profile</Link>
    </ul>
    
      </nav>
      
    </div>
  )
}

export default Navbar
