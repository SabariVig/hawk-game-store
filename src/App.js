import React from "react";
import Nav from "./Components/Nav";
import Home from "./pages/Home";
import { AppProvider } from "./Context/AppContext";
import {Switch ,Route } from 'react-router-dom'
import GamePage from './pages/GamePage';

function App() {
  return (
    <AppProvider>
        <Nav />
      <Switch>
        {/* <Home /> */}
        <Route exact path="/game" component={GamePage} ></Route>
        <Route exact  path="/" component={Home}></Route>
        </Switch>
    </AppProvider>
  );
}

export default App;
