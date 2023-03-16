import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useState} from 'react';

// Screens
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';

// Components
import Navbar from './Components/Navbar';
import Backdrop from './Components/Backdrop'
import SideDrawer from './Components/SideDrawer'

function  App() {
  const [sideToggle, setSideToggle] = useState(false);
    return (
     <Router basename={process.env.PUBLIC_URL}>
      <Navbar click={() => setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={()=> setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={()=> setSideToggle(false)}/>
       <main>
         <Switch>
           <Route exact path="/" component={HomeScreen}/>
           <Route exact path="/product/:id" component ={ProductScreen}/>
           <Route exact path="/cart" component={CartScreen}/>
         </Switch>
       </main>
      </Router>
  );
    
}

export default App;
