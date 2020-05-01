import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import BoardPage from "./pages/BoardPage";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";

import 'react-toastify/dist/ReactToastify.min.css';
import {toast, ToastContainer} from "react-toastify";

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path={'/'}>
                  {/*<HomePage/>*/}
                  <BoardPage/>
              </Route>
              <Route path={'/auth'}>
                  <AuthPage/>
              </Route>
              <Route path={"/u1/"}>
                  <BoardPage/>
              </Route>
              <Redirect to={"/auth"}/>
          </Switch>
          <ToastContainer position={toast.POSITION.BOTTOM_RIGHT}/>
      </Router>
  );
}

export default App;
