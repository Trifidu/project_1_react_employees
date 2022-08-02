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
        {
          name: "Chandler Bing",
          salary: 5000,
          increase: false,
          promotion: true,
          id: 1,
        },
        {
          name: "Monica Geller",
          salary: 5000,
          increase: true,
          promotion: false,
          id: 2,
        },
        {
          name: "Ross Geller",
          salary: 1200,
          increase: false,
          promotion: false,
          id: 3,
        },
        {
          name: "Rachel Green",
          salary: 950,
          increase: false,
          promotion: false,
          id: 4,
        },
        {
          name: "Phoebe Buffay",
          salary: 750,
          increase: false,
          promotion: false,
          id: 5,
        },
        {
          name: "Joey Tribbiani",
          salary: 800,
          increase: false,
          promotion: false,
          id: 6,
        },
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
      promotion: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            increase: !item.increase,
          };
        }
        return item;
      }),
    }));
  };

  onTogglePromotion = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            promotion: !item.promotion,
          };
        }
        return item;
      }),
    }));
  };

  render() {
    const companyName = "Test Company";
    const employees = this.state.data.length;
    const increasedEmployees = this.state.data.filter(
      (item) => item.increase
    ).length;
    return (
      <div className="app">
        <AppInfo
          companyName={companyName}
          employees={employees}
          increasedEmployees={increasedEmployees}
        />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onTogglePromotion={this.onTogglePromotion}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
