import React from "react";
import Nav from "./Components/Nav";
import Home from "./pages/Home";
import { AppProvider } from "./Context/AppContext";
import {Switch ,Route } from 'react-router-dom'
import GamePage from './pages/GamePage';
import GameRouter from './pages/GameRouter';

function App() {
  return (
    <AppProvider>
        <Nav />
      <Switch>
        <Route exact path="/game/:gamename" component={GamePage} ></Route>
        <Route exact path="/g" component={GameRouter} ></Route>
        <Route exact  path="/" component={Home}></Route>
        </Switch>
    </AppProvider>
  );
}

export default App;
