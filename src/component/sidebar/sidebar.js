import React from 'react'
import '../sidebar/sideBar.css'
import Main from '../font/index'
import { Link } from 'react-router-dom'


class SideBar extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" id="check" />

        <header className="positon1">
          <label for="check">
            <i class="fas fa-bars" id="sidebar_btn"></i>
          </label>
          <div class="left_area">
            <h3>Plants <span>Planet</span></h3>
          </div>
          <div class="right_area">
          <Link to="/LogIn">  
          
           <a class="logout_btn">Sign In</a>
       
          
          </Link> 
          </div>
        </header>

        <div class="sidebar ">
          <center>
            <img src="1.png" class="profile_image" alt="" />
            {/* <div className="row">
              <h4 className="col-xs-12 col-md-12" >PLANTS PLANET</h4>
            </div> */}
          </center>
          <Link to="/"><i class="fas fa-home"></i><span>Home</span></Link>
         
          <Link to='/myaccount'><i class="fa fa-user"></i><span>My Account</span></Link>

          <Link to='/services'><i class="fas fa-info-circle"></i><span>Services</span></Link>
          <Link to="/product"><i class="fas fa-table"></i><span>Product</span></Link>
          <Link to="/testimonies"><i class="fas fa-quote-left"></i><span>Testimonies</span></Link>
          <Link to="/contact"><i class="fas fa-phone"></i><span>Contact Us</span></Link>

        </div>


        <div class="content">

          {/* <Main/> */}
        </div>


      </div>)
  }
}

export default SideBar