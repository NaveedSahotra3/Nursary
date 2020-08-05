import React from 'react'
 import '../sidebar/sideBar.css'
 import Main from '../font/index'
 import {Link} from 'react-router-dom'
class SideBar extends React.Component{
    render(){
        return(
        <div>
             <input type="checkbox" id="check"/>
  
    <header className="positon1">
      <label for="check">
        <i class="fas fa-bars" id="sidebar_btn"></i>
      </label>
      <div class="left_area">
        <h3>Plants <span>Planet</span></h3>
      </div>
      <div class="right_area">
        <a href="#" class="logout_btn">Logout</a>
      </div>
    </header>
   
    <div class="sidebar ">
      <center>
        <img src="1.png" class="profile_image" alt=""/>
        <div className="row">
        <h4 className="col-xs-12 col-md-12" >PLANTS PLANET</h4>
        </div>
      </center>
      <Link href="#"><i class="fas fa-home"></i><span>Home</span></Link>
      <Link to={'/services'}><i class="fas fa-info-circle"></i><span>Services</span></Link>
      <Link href="#"><i class="fas fa-table"></i><span>Product</span></Link>
      <Link href="#"><i class="fas fa-phone"></i><span>Contact Us</span></Link>
   
    </div>
  

    <div class="content">

{/* <Main/> */}
    </div>


        </div>)
    }
}

export default SideBar