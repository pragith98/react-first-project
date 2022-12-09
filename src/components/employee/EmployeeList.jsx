import Employee from "./Employee";

const employees = [
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
];

const EmployeeListComponent = () => {
  return employees.map((employee) => {
    return <Employee employees={employee} key={employee.id}></Employee>;
  });
};

function EmployeeList() {
  return (
    <div className="row">
      <div className="col-5 mx-auto">
        <ul className="list-group">
          <EmployeeListComponent></EmployeeListComponent>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeList;
