import React from 'react'
import './service.css'



class Service extends React.Component{
    render(){

        return(<div>

<section id="services">
        <div class="container">
          <h1 class="main-heading">OUR Services</h1>
          <p class="para">Read our latest news and updates about fitness.</p>
        

        <div class="blog-pics">
          <div class="main-div">
            <img src={require('./outdoor.jpg')} style={{width:"90%" , height:"250px"}}/>
             
           <div class="blog-head">
             <p><i class="fa fa-long-arrow-right" style={{fontSize:"20px" , color:"red"}}></i> Outdoor Plants..</p>
             <h5 class="blog-date">September 15</h5><br/><br/>
             <h6 class="blog-data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation..</h6>
             <button class="blog-btn">Read More..</button>
           </div>
            
          </div>
          <div class="main-div">
            <img src={require('./indoor.jpg')} style={{width:"90%" , height:"250px"}} />
                 <div class="blog-head">
             <p><i class="fa fa-long-arrow-right" style={{fontSize:"20px" , color:"red"}}></i>  Indoor Plants ...</p>
             <h5 class="blog-date">September 15</h5><br/><br/>
              <h6 class="blog-data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation...</h6>
             <button class="blog-btn">Read More..</button>
           </div>
          </div>
          <div class="main-div">
            <img src={require('./desert.jpg')} style={{width:"90%" , height:"250px"}}/>
            <div class="blog-head">
             <p><i class="fa fa-long-arrow-right" style={{fontSize:"20px" , color:"red"}} ></i>  Desert Plants..</p>
             <h5 class="blog-date">September 15</h5><br/><br/>
              <h6 class="blog-data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation..</h6>
             <button class="blog-btn">Read More..</button>
           </div>
          </div>
        </div>
      </div>
      </section>
        </div>)
    }
}


export default Service