import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Person from "./Person";
import { useNavigate } from "react-router-dom";

const Edit = () => {
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");

    let history = useNavigate();

    let index = Person.map(function(e){
        return e.id;
    }).indexOf(id);

    const updateHandler = (e) => {
        e.preventDefault();

        let a = Person[index];
        a.id = id;
        a.firstname = firstName;
        a.lastname = lastName;
        a.age = age;

        history("/");
    }

    useEffect(() => {
        setId(localStorage.getItem("Id"));
        setFirstName(localStorage.getItem("FirstName"));
        setLastName(localStorage.getItem("LastName"));
        setAge(localStorage.getItem("Age"));
    }, []);
    
    return(
        <div>
            <Form className="d-grid gap-2" style={{margin: "10rem"}}>
               
               <Form.Group className="mb-3" controlId="Id">
                   <Form.Control type="text" value={id} placeholder="Enter Id" required onChange={(e) => {setId(e.target.value)}}>
                   </Form.Control>
               </Form.Group>
               <Form.Group className="mb-3" controlId="formFirstName">
                   <Form.Control type="text" value={firstName} placeholder="Enter First Name" required onChange={(e) => {setFirstName(e.target.value)}}>
                   </Form.Control>
               </Form.Group>
               <Form.Group className="mb-3" value={lastName} controlId="formLastName">
                   <Form.Control type="text" placeholder="Enter Last Name" required onChange={(e) => {setLastName(e.target.value)}}>
                   </Form.Control>
               </Form.Group>
               <Form.Group className="mb-3" value={age} controlId="formAge">
                   <Form.Control type="text" placeholder="Enter Age" required onChange={(e) => {setAge(e.target.value)}}>
                   </Form.Control>
               </Form.Group>
               
           <Button onClick={(e)=> {updateHandler(e)}} type="submit">UPDATE</Button>
           </Form>
        </div>
    );
};
export default Edit;