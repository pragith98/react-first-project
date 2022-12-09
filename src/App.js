import NavigationBar from "./components/navigationBar/navigationBar";
import EmployeeList from "./components/employee/EmployeeList";
import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <NavigationBar></NavigationBar>
      <EmployeeList></EmployeeList>
    </React.Fragment>
  );
}

export default App;
