import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import VotersScreen from "./screens/VotersScreen";
import VoterDetailsScreen from "./screens/VoterDetailsScreen";
import Register from "./screens/Register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={VotersScreen} />
        <Route path="/voter/:id" exact component={VoterDetailsScreen} />
        <Route path="/register" exact component={Register} />
      </BrowserRouter>
    </>
  );
};

export default App;
