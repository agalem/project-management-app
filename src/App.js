import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import BoardPage from "./pages/BoardPage";

function App() {
  return (
    <Router>
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
