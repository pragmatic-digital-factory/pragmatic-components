import React, { Component } from "react";
import Main from "./components/Main";
import "./App.css";
import FormProvider from "./pages/Form/FormProvider";
class App extends Component {
  render() {
    return (
      <div className="App">
        <FormProvider>
          <Main />
        </FormProvider>
      </div>
    );
  }
}

export default App;
