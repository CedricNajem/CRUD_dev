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

  handleDelete = (i) => {
    let employeeData = this.state.employeeData;
    employeeData.splice(i, 1);
    this.setState({
      employeeData: employeeData,
    });
  };

  handleEdit = (i) => {};

  render() {
    let employeeData = this.state.employeeData;
    return (
      <div>
        <form ref="myForm">
          <label>Name</label>
          <input type="text" ref="txtName" placeholder="Enntrée Nom" />
          <label>Age</label>
          <input type="text" ref="txtAge" placeholder="Enntrée Age" />
          <button onClick={(e) => this.handleSubmit(e)}> Sauvegarder </button>
        </form>

        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {employeeData.map((data, i) => (
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>
                <button onClick={this.handleEdit(i)}>Edit</button>
              </td>
              <td>
                <button onClick={this.handleDelete(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
