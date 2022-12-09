import Moment from "moment/moment";

function Employee(props) {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-3 d-flex justify-content-center">
          <img className="rounded-3" src={props.employees.picture.medium} alt="" />
        </div>
        <div className="col-9">
          <h3>
            {`${props.employees.name.title} ${props.employees.name.first} ${props.employees.name.last}`}
          </h3>
          {props.employees.location.city} <br />
          <small>{Moment(props.employees.dob.date).format("DD/MM/YYYY")}</small>
        </div>
      </div>
    </li>
  );
}

export default Employee;
