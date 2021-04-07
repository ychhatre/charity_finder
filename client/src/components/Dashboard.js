import React from "react";
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

function Dashboard() {
  const { currentUser } = useAuth(); 
  console.log(JSON.stringify(currentUser))
  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Navbar.Brand href="/">Charity-Finder</Navbar.Brand>
      <Nav className="mr-auto" /> 
      <Form inline>
        <FormControl type="text" placeholder="Search for a charity..." className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form>
    </Navbar>
  );
}

export default Dashboard;
