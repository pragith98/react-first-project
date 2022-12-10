import { useEffect, useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
  const [loadData, setLoadData] = useState(false);

  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    fetch("https://www.randomuser.me/api")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setEmployee((previousState) => {
          return [...previousState, responseData.results[0]];
        });
      });
  }, [loadData]);

  const EmployeeListComponent = () => {
    return employees.map((employee) => {
      return <Employee employees={employee} key={employee.email} />;
    });
  };

  const AddEmployee = () => {
    setLoadData(!loadData);
  };

  return (
    <div className="row">
      <div className="col-sm-5 mx-auto">
        <button className="btn btn-primary mb-2" onClick={AddEmployee}>
          Add Employee
        </button>
        <ul className="list-group">{EmployeeListComponent()}</ul>
      </div>
    </div>
  );
}

export default EmployeeList;
