import { React, Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employeeData: [],
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let employeeData = this.state.employeeData;
    let name = this.refs.txtName.value;
    let age = this.refs.txtAge.value;
    let newEmployee = {
      name: name,
      age: age,
    };

    employeeData.push(newEmployee);

    this.setState({
      employeeData: employeeData,
    });

    this.refs.myForm.reset();
  }

  render() {
    return (
      <form ref="myForm">
        <label>Name</label>
        <input type="text" ref="txtName" placeholder="Enntrée Nom" />
        <label>Age</label>
        <input type="text" ref="txtAge" placeholder="Enntrée Age" />
        <button onClick={(e) => this.handleSubmit(e)}> Sauvegarder </button>
      </form>
    );
  }
}

export default App;
