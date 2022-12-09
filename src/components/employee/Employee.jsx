function Employee(props) {
  return (
    <li>
      <img src={props.employees.picture.medium} alt="" /> <br />
      Name:{" "}
      {`${props.employees.name.title} ${props.employees.name.first} ${props.employees.name.last}`}
      <br />
      Address: {props.employees.location.city}
      <br />
      Birthday: {props.employees.dob.date}
    </li>
  );
}

export default Employee;
