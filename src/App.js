import React from 'react';
import './App.css'
import MenuAppBar from './component/header/header'
import MenuBar from './component/menu bar/menuBar'
import SideBar from './component/sidebar/sidebar'
import Main from './component/font/index'
import Contact from './component/contact/contact'
import Testimonies from './component/testimonies/testimones'
import Service from './component/services/service'
import { BrowserRouter as Router, Route , Switch } from "react-router-dom"
import Login from './component/login/login';
import SignUp from './component/signUp/signUp'
class App extends React.Component {
  render() {

    return (<div>
      <Router>
<Switch>
        <div className="display">

          <div className="box1">
            <SideBar />
          </div>

          <div className="box2">
          </div>


        </div>
        <Main />
        <Route path={'/services'} component={Service} />

    
        <Testimonies />
        <Contact />


     {/* <div>  <Login/></div> 
     <div>  <SignUp/> </div>  */}
      </Switch>
      </Router>
    </div>)

  }
}

export default App