
import Usermenu from './components/Usermenu';
import Start from './components/Start';
import ApplicationsList from './components/ApplicationsList';
import Footer from './components/Footer';
import { useState } from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';



const App = () => {

  // const [user, setUser] = useState({user: "Tove"});


  return (
    <>
      <Router>
          <div className="navBar">
           
            <nav className="mainNav">
            <Link to="/"><div className="logo"><h3>Sweet</h3></div></Link>
              <ul>
                <li><Link to="/applications">
                  <span className="nav-icons"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 3.5H3.5V0H0V3.5ZM5.25 14H8.75V10.5H5.25V14ZM3.5 14H0V10.5H3.5V14ZM0 8.75H3.5V5.25H0V8.75ZM8.75 8.75H5.25V5.25H8.75V8.75ZM10.5 0V3.5H14V0H10.5ZM8.75 3.5H5.25V0H8.75V3.5ZM10.5 8.75H14V5.25H10.5V8.75ZM14 14H10.5V10.5H14V14Z" fill="white"/>
</svg>
</span>
                  Applications</Link>
                  </li>
                <li><Link to="/data-sources">
                <span className="nav-icons"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.62689 7.95483C7.41762 7.96132 7.20834 7.96493 7.00003 7.96493C6.79099 7.96493 6.581 7.96156 6.37124 7.95483C4.6054 7.90648 3.1982 7.65703 2.18502 7.30126C1.70874 7.14058 1.30102 6.95151 0.986145 6.73526V8.44578V8.56605V8.68633V8.99639C1.67074 9.71105 3.96747 10.3701 6.99979 10.3701C10.0321 10.3701 12.3288 9.71105 13.0134 8.99639V8.68633V8.56605V8.44578V6.73526C12.6964 6.95295 12.2851 7.14347 11.8047 7.30463C10.792 7.65872 9.38768 7.90672 7.62689 7.95483Z" fill="white"/>
                  <path d="M0.986145 3.58145V5.29197V5.41224V5.53252V5.84258C1.6207 6.50504 3.64009 7.11988 6.34695 7.20599C6.37461 7.20696 6.40299 7.2072 6.4309 7.20792C6.50932 7.21008 6.58749 7.21225 6.66711 7.21345C6.77704 7.21537 6.88793 7.21634 6.99979 7.21634C7.11164 7.21634 7.22253 7.21537 7.33246 7.21369C7.41184 7.21249 7.49026 7.21032 7.56868 7.20816C7.59658 7.20744 7.62497 7.20696 7.65263 7.20623C10.3595 7.11988 12.3789 6.50504 13.0134 5.84282V5.53252V5.41224V5.29197V3.58145C11.8427 4.3856 9.36772 4.81088 6.99979 4.81088C4.63186 4.81088 2.15712 4.3856 0.986145 3.58145Z" fill="white"/>
                  <path d="M12.981 2.05474C12.7111 1.02015 10.6356 0 6.99979 0C3.37308 0 1.29982 1.0151 1.02151 2.04704C1.00106 2.0824 0.986145 2.12113 0.986145 2.16491V2.28518V2.71961C1.66857 3.43187 3.94895 4.08928 6.99979 4.08928C10.0506 4.08928 12.3312 3.43187 13.0134 2.71961V2.28518V2.16491C13.0134 2.1245 13 2.08818 12.981 2.05474Z" fill="white"/>
                  <path d="M0.986145 9.86237V11.8351C0.986145 11.874 0.996489 11.9109 1.01429 11.9436C1.29837 13.121 3.83998 14 6.99979 14C10.1524 14 12.6899 13.1246 12.9834 11.9515C13.0026 11.9169 13.0134 11.8772 13.0134 11.8351V9.86285C12.0188 10.5631 9.96932 11.1134 6.99979 11.1134C4.03001 11.1134 1.98056 10.5626 0.986145 9.86237Z" fill="white"/>
                  </svg></span>
                  Data sources</Link></li>
                <li><Link to="/user-management">
                <span className="nav-icons"><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M6.993 2.1C6.993 3.262 6.062 4.2 4.9 4.2C3.738 4.2 2.8 3.262 2.8 2.1C2.8 0.938 3.738 0 4.9 0C6.062 0 6.993 0.938 6.993 2.1ZM11.893 3.15C11.893 4.116 11.116 4.9 10.15 4.9C9.184 4.9 8.4 4.116 8.4 3.15C8.4 2.184 9.184 1.4 10.15 1.4C11.116 1.4 11.893 2.184 11.893 3.15ZM10.15 6.3C8.869 6.3 6.3 6.944 6.3 8.225V9.8H14V8.225C14 6.944 11.431 6.3 10.15 6.3ZM0 8.05C0 6.419 3.269 5.6 4.9 5.6C5.362 5.6 5.95 5.67 6.559 5.796C5.131 6.587 4.9 7.63 4.9 8.225V9.8H0V8.05Z" fill="white"/>
</svg>
</span>
                  User management</Link></li>
              </ul>
            </nav>
            <div className="footer">
              <Footer />
            </div>
          </div>
        <Usermenu />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/applications" component={ApplicationsList} />
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App;
