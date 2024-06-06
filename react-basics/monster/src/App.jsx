import { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "subham",
    };
  }
  render() {
    return (
      <>
        <h1>Hi {this.state.name}</h1>
        <button
          onClick={() => {
            this.setState({ name: "say" });
          }}
        >
          Change Name
        </button>
      </>
    );
  }
}

export default App;
