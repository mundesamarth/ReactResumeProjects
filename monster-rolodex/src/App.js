import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("didMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) =>
        this.setState(
          () => {
            return { monsters: user };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    const filterdArray = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          onChange={(event) => {
            console.log(event.target.value);
            const searchField = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return {searchField};
            });
          }}
        />

        {filterdArray.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
