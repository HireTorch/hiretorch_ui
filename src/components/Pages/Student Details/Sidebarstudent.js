import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import React from 'react'

 function Sidebarstudent() {

  return ( 
    <><div class="sidebar">
          <a class="active" href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
      </div><div class="content">
hello 
          </div></>
  )
}
export default Sidebarstudent;