import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: "Chandler Bing", salary: 5000, increase: false, id: 1 },
        { name: "Monica Geller", salary: 3900, increase: false, id: 2 },
        { name: "Ross Geller", salary: 3500, increase: false, id: 3 },
        { name: "Rachel Green", salary: 4200, increase: false, id: 4 },
        { name: "Phoebe Buffay", salary: 1200, increase: false, id: 5 },
        { name: "Joey Tribbiani", salary: 1100, increase: false, id: 6 },
      ],
    };
    this.maxId = 7;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
