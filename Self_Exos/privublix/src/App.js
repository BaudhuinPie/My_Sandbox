import React from 'react';
import './App.css';
import {Switch} from 'react-router-dom';
import MyPublicRoute from './routerControllers/MyPublicRoute';
//public exposed pages
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

    <Switch>
       <MyPublicRoute restricted={false} component={HomePage} path="/" exact/>
       <MyPublicRoute restricted={true} component={SignIn} path="/signin" exact/>
       {/* <PrivateRoute  component={Dashboard} path="/dashboard" exact/> */}
    </Switch>
    </div>
  );
}

export default App;
