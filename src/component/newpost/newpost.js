import React from 'react'
import './newpost.css'


class AddPost extends React.Component {
    render() {
        return (<div className="container-fluid">


            <div className="fix1"> 
            <div class="wrapper">
  <div class="title">
    <h1>SignUp</h1>
  </div>
  <div class="contact-form">
    <div class="input-fields">
      <input type="text" class="input" placeholder="Name"/>
      <input type="text" class="input" placeholder="Email Address"/>
      <input type="text" class="input" placeholder="Phone"/>
      <input type="text" class="input" placeholder="Subject"/>
    </div>
    {/* <div class="msg">
      <textarea placeholder="Message"></textarea>
    </div> */}
  </div>
      <div class="btn">Sign Up</div>
      {/* <a  href="#" className="btn1" > Already Sign In?</a> */}
</div>
            </div>

            {/* <div className="fix1">
            <div className="row">
                <div className="col-md-12 Height12">

                    <form>


                        <div className="tumbin">
                            <h1>SignUp</h1>

                            <div class="input-field">
                                <input type="text" id="name" required />
                                <label for="name">Your name:</label>
                            </div>
                        </div>
                        <div className="tumbin">

                            <div class="input-field">
                                <input type="email" id="email" required />
                                <label for="email">Your email:</label>
                            </div>
                        </div>
                        <div className="tumbin">


                            <div class="input-field">
                                <input type="password" id="password" required />
                                <label for="password">Your password:</label>
                            </div>
                        </div>
                        <div className="tumbin">


                            <div class="input-field">
                                <input type="text" id="country" required />
                                <label for="country">Your country:</label>
                            </div>
                        </div>
                        <input type="button" class="btn" value="Sign Up" />




                    </form>

                </div>

            </div>

            </div> */}

        </div>)
    }
}

export default AddPost 