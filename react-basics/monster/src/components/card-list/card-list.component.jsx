import React, { Component } from "react";

class CardList extends Component {
  render() {
    console.log("render from cardlist");
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1> Monster name is {monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CardList;
