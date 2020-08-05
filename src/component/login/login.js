import React from 'react'
import './login.css'


class Login extends React.Component {
  render() {
    return (<div className="container-fluid">

      <div className="row">

        <div className="col-md-12">
          <form>
            <div className="tumbin">
              <h1>Login</h1>

              <div class="input-field">
                <input type="text" id="name" required />
                <label for="name">Your name:</label>
              </div>
            </div>
            <div className="tumbin">


              <div class="input-field">
                <input type="password" id="password" required />
                <label for="password">Your password:</label>
              </div>
            </div>
            <input type="button" class="btn" value="Sign Up" />

          </form>
        </div>

      </div>


    </div>)
  }
}

export default Login
