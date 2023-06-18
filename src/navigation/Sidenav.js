import React from 'react'
import "./Sidenav.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
// import SlideshowIcon from "@mui/icons-material/Slideshow";
// import ChatIcon from "@mui/icons-material/Chat";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


function Sidenav() {
  return (
    <div className="sidenav">
      <img  className="sidenav__logo"src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" 
      alt=""/>
      <div className="sidenav__buttons">
      <Button variant="text" className="sidenav__button">
      <HomeIcon/>
      <span>Home</span>
        </Button>

        {/* <button className="sidenav__button">
            <HomeIcon/>
            <span>Home</span> */}
            
        {/* </button> */}
        <Button variant="text" className="sidenav__button" href='/search'>
        <SearchIcon/>
      <span>Search</span>
        </Button>
        <Button variant="text" className="sidenav__button" href='/explorer'>
        <ExploreIcon/>
      <span>Explore</span>
        </Button>
        {/* <button  className="sidenav__button" >
            <SearchIcon/>
            <span>Search</span>
            
        </button>

        <button className="sidenav__button" >
            <ExploreIcon/>
            <span>Explore</span>
            
        </button> */}

        
            
            
       
      
      </div>
    </div>
  )
}

export default Sidenav;
