import React from "react";
import Nav from "./Components/Nav";
import Home from "./pages/Home";
import { AppProvider } from "./Context/AppContext";

function App() {
  return (
    <AppProvider>
      <div>
        <Nav />
        <Home />
      </div>
    </AppProvider>
  );
}

export default App;
