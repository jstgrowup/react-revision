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
              <div className="card-container">
                <img
                  src={`https://robohash.org/${monster.id}?set=set2`}
                  alt={`monster ${monster.name}`}
                />{" "}
                <h2>{monster?.name}</h2>
                <p>{monster?.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CardList;
