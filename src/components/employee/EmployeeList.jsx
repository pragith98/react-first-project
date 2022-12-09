import { useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
  const [employees, setEmployee] = useState([
    {
      id: 1,
      name: {
        title: "Mr.",
        first: "Jennie",
        last: "Nichols",
      },
      location: {
        city: "Billings",
      },
      dob: {
        date: "1992-03-08T15:13:16.688Z",
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
    },
    {
      id: 2,
      name: {
        title: "Mr.",
        first: "Erica",
        last: "Gonzales",
      },
      location: {
        city: "Terrace",
      },
      dob: {
        date: "1992-03-08T15:13:16.688Z",
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/76.jpg",
      },
    },
    {
      id: 3,
      name: {
        title: "Mr.",
        first: "Jeremiah",
        last: "Chapman",
      },
      location: {
        city: "Sandy",
      },
      dob: {
        date: "1992-03-08T15:13:16.688Z",
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/77.jpg",
      },
    },
  ]);

  const EmployeeListComponent = () => {
    return employees.map((employee) => {
      return <Employee employees={employee} key={employee.id}></Employee>;
    });
  };

  const AddEmployee = () => {
    const newEmployee = {
      id: 4,
      name: {
        title: "Mr.",
        first: "Jeremiah",
        last: "Chapman",
      },
      location: {
        city: "Sandy",
      },
      dob: {
        date: "1992-03-08T15:13:16.688Z",
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/50.jpg",
      },
    };

    //setEmployee((employees) => employees.concat(newEmployee));
    setEmployee((employees) => [...employees, newEmployee]);
  };

  return (
    <div className="row">
      <div className="col-sm-5 mx-auto">
        <button className="btn btn-primary mb-2" onClick={AddEmployee}>
          Add Employee
        </button>
        <ul className="list-group">
          <EmployeeListComponent></EmployeeListComponent>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeList;
