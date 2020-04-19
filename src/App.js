import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import BoardPage from "./pages/BoardPage";

import 'react-toastify/dist/ReactToastify.min.css';
import {toast, ToastContainer} from "react-toastify";

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
          <ToastContainer position={toast.POSITION.BOTTOM_RIGHT}/>
      </Router>
  );
}

export default App;
