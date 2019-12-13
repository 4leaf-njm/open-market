import React from "react";
import MainNavigation from "./navigation/MainNavigation";
import reducer from "./reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

let store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    );
  }
}

export default App;
