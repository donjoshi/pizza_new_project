import React,{ useState} from 'react'
import Logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'
import { Reorder } from '@mui/icons-material';




function Navbar() {
   const [openLinks,setOpenLinks]=useState(false) 
const toggleNavbar=()=>{
    setOpenLinks(!openLinks)
}

  return (
    <div className="navbar"> 
    <img src={Logo} ></img>

    <div className="leftSide" id={ openLinks ? "open" : "close"}></div>
        {/* <img src={Logo} ></img> */}
        <div className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    <div className="rightSide"></div>
         <Link to="/">Home</Link>
         <Link to="/menu">Menu</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
         <button onClick={toggleNavbar}>
            <ReorderIcon className="reorder"/>
         </button>
      
    </div>
  )
}


export default Navbar