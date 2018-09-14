import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Form from "../pages/Form/Form";
import Draw from "../pages/Draw/Draw";
export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Home />;
            }}
          />
          <Route
            exact
            path="/forms"
            render={() => {
              return <Form />;
            }}
          />
          <Route
            exact
            path="/draw"
            render={() => {
              return <Draw />;
            }}
          />
        </Switch>
      </main>
    );
  }
}
