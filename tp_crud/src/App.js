import { React, Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employeeData: [],
    };
  }

  render() {
    return (
      <form ref="myForm">
        <label>Name</label>
        <input type="text" ref="txtName" placeholder="Enntrée Nom" />
        <label>Age</label>
        <input type="text" ref="txtAge" placeholder="Enntrée Age" />
        <button> Sauvegarder </button>
      </form>
    );
  }
}

export default App;
