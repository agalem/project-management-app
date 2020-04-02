import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import styled from "styled-components";

import NavBar from "./components/NavBar/NavBar";
import BoardPage from "./pages/BoardPage";

const AppContainer = styled.div`
    background-color: purple;
`;

function App() {
  return (
      <AppContainer>
            <Router>
                <NavBar/>
              <Switch>
                <Route exact path={"/"}>
                  <BoardPage/>
                </Route>
                <Redirect to={"/"}/>
              </Switch>
            </Router>
      </AppContainer>
  );
}

export default App;
