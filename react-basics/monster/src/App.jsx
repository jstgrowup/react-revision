import { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log("done rendering");
          }
        )
      );
  }
  render() {
    return (
      <>
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1> Monster name is {monster.name}</h1>
            </div>
          );
        })}
      </>
    );
  }
}

export default App;
