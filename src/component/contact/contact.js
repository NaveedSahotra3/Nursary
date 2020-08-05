import React from 'react'


import '../contact/contact.css'


class Contact extends React.Component{

render(){

    return(<div>
         <section id="contact-section">
           <div class="container">
           	 <h2>Contact Us</h2>
              <p>Email us and keep upto date with our latest news</p>
             <div class="contact-form">

               
               <div>
                 <i class="fa fa-map-marker"></i><span class="form-info">  192 City Boston Amercia #345</span>
                 <br/>
                 <i class="fa fa-phone" > </i><span class="form-info">  +92 00034567890</span><br/>
                 <i class="fa fa-envelope"></i><span class="form-info">  JhonDoe12@Gmail.com</span>
               </div>
               
                
           <div>        
             <form>
               <input type="text" placeholder="Your Name" required/>
               <input type="text" placeholder="Last Name"/><br/>
               <input type="Email" placeholder="Email" required/><br/>
               <input type="text" placeholder="Subject of this message"/><br/>
               <textarea name="message" placeholder="Message" rows="5" required></textarea> 
               <br/>
               <button class="submit" >Send Message</button> 
             </form>   
               </div>
             </div>
           </div>
         </section>
    </div>)

}

}


export default Contact