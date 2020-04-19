import React from "react";
import "./index.css";
import "./theme/_index.scss";
import { Header } from "./Header";
import { Explore } from "./Explore";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components/macro";
import { PlaceDetails } from "./PlaceDetails";
import { observer, inject } from "mobx-react";
import { Home } from "./Home";
import { QuoteDetails } from "./Components/Quote/QuoteDetails";

const App: React.FC = observer(() => {
  return (
    <Root>
      <Router>
        <Header />
        <MainContent>
          <Switch>
            <Route path="/about"></Route>
            <Route path={`/place/:placeId`}>
              <PlaceDetails />
            </Route>
            <Route path={`/quote/:symbol`}>
              <QuoteDetails />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </MainContent>
      </Router>
    </Root>
  );
});

export default App;

const Root = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.section`
  flex: 1;
`;

// const PlaceDetailsO = observer(PlaceDetails);
