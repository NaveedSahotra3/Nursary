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
import MyAccount from './component/myAccount/myAccount'
import PostDetail from './component/PostDetail/PostDetail'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import Login from './component/login/login';
// import SignUp from './component/signUp/signUp';


class App2 extends React.Component {
  render() {

    return (<div > 


<Router>
        <div className="display">

          <div className="box1">
            <SideBar />
          </div>

          <div className="box2">

          </div>
        </div>
          <div className="Margin">
          <Route path='/' exact component={Main} />
          <Route path='/myaccount' exact component={MyAccount} />

          <Route path='/services' exact component={Service} />
          <Route path='/product' exact component={Product} />
          <Route path='/testimonies' exact component={Testimonies} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/postDetail' exact component={PostDetail} />

        </div>


          {/* </> */}
       
</Router>
     


    </div>)

  }
}

export default App2