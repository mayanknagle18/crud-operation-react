import React from "react";
import { Button, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from "./Person";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const history = useNavigate();

    const editHandler = (Id, FirstName, LastName, Age) => {
        localStorage.setItem("Id", Id);
        localStorage.setItem("FirstName", FirstName);
        localStorage.setItem("LastName", LastName);
        localStorage.setItem("Age", Age);
    };

    const deleteHandler = (id) => {
        let index = Person.map(function(e){
                return e.id;
            }).indexOf(id);
        Person.splice(index, 1);
        history("/");
    };

    return(
        <React.Fragment>
            <div style={{margin: "5rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                Person && Person.length > 0 
                                ? 
                                Person.map((item) => {
                                    return(
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.firstname}</td>
                                            <td>{item.lastname}</td>
                                            <td>{item.age}</td>
                                            <td>
                                                <Link to="/edit">
                                                <Button variant="primary" onClick={() => {editHandler(item.id, item.firstname, item.lastname, item.age)}}>EDIT</Button>
                                                </Link>
                                                &nbsp;
                                                <Button variant="danger" onClick={() => {deleteHandler(item.id)}}>DELETE</Button>
                                            </td>
                                        </tr>
                                    );
                                })
                                :
                                "No Data Found!"
                            }
                    </tbody>
                </Table>
                <br />
                <Link className="d-grid gap-2" to="/create">
                <Button variant="success" size="lg">CREATE</Button>
                </Link>
            </div>
        </React.Fragment>
    );
};
export default Home;