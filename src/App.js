import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import BoardPage from "./pages/BoardPage";


function App() {
  return (
      <Router>
          <NavBar/>
          <Switch>
              <Route exact path={"/"}>
                  <BoardPage/>
              </Route>
              <Redirect to={"/"}/>
          </Switch>
      </Router>
  );
}

export default App;
