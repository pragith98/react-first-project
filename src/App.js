import NavigationBar from "./components/navigationBar/navigationBar";
import EmployeeList from "./components/employee/EmployeeList";
import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <div className="container mt-3">
        <EmployeeList />
      </div>
    </React.Fragment>
  );
}

export default App;
