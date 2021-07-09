import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import EpisodesList from "./components/EpisodesList";
import SingleEpisode from "./components/SingleEpisode";
import SingleChar from "./components/SingleChar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/episode/:id">
          <SingleEpisode />
        </Route>
        <Route path="/character/:id">
          <SingleChar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
