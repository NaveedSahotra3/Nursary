import React from 'react';
import './App.css'
import MenuAppBar from './component/header/header'
import MenuBar from './component/menu bar/menuBar'
import SideBar from './component/sidebar/sidebar'
import Main from './component/font/index'
import Contact from './component/contact/contact'
import Testimonies from './component/testimonies/testimones'
import Service from './component/services/service'
import Product from './component/products/product'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import Login from './component/login/login';
import SignUp from './component/signUp/signUp';
import LogIn from './component/login/login'
import App2 from './App2'
import AddPost from './component/newpost/newpost'
class App extends React.Component {
  render() {

    return (<div>
      <Router>
        <Switch>
{/* <AddPost/> */}



          <Route path='/' exact component={App2} />
          <Route path='/signup' exact component={SignUp} />
         <Route path='/LogIn' exact componen={LogIn} /> 
           <Route path='/newpost' title="TRy" componen={AddPost} /> 

        </Switch>


      </Router>
    </div>)

  }
}

export default App