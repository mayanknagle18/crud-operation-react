import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Person from "./Person";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");

    let history = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

    let a = id;
    let b = firstName;
    let c = lastName;
    let d = age;

    Person.push({
        id: a,
        firstname: b,
        lastname: c,
        age: d,
    });
       history("/");
    };

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin: "10rem"}}>
               
                <Form.Group className="mb-3" controlId="Id">
                    <Form.Control type="text" placeholder="Enter Id" required onChange={(e) => {setId(e.target.value)}}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Control type="text" placeholder="Enter First Name" required onChange={(e) => {setFirstName(e.target.value)}}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Control type="text" placeholder="Enter Last Name" required onChange={(e) => {setLastName(e.target.value)}}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age" required onChange={(e) => {setAge(e.target.value)}}>
                    </Form.Control>
                </Form.Group>

            <Button onClick={(e)=> {submitHandler(e)}} type="submit">SUBMIT</Button>
            </Form>
        </div>
    );
};
export default Add;