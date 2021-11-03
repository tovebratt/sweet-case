
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
            <Link to="/"><p>Sweet logo</p></Link>
              <ul>
                <li><Link to="/applications">Applications</Link></li>
                <li><Link to="/data-sources">Data sources</Link></li>
                <li><Link to="/user-management">User management</Link></li>
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
