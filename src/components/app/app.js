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
      term: "",
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

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [prop]: !item[prop],
          };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  render() {
    const { data, term } = this.state;
    const companyName = "Test Company";
    const employees = data.length;
    const increasedEmployees = data.filter((item) => item.increase).length;
    const visibleData = this.searchEmp(data, term);

    return (
      <div className="app">
        <AppInfo
          companyName={companyName}
          employees={employees}
          increasedEmployees={increasedEmployees}
        />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
