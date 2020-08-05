import React from 'react'
import './signUp.css'


class SignUp extends React.Component {
    render() {
        return (<div className="container-fluid">

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


        </div>)
    }
}

export default SignUp 