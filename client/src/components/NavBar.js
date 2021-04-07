import React from "react";
import { Navbar, Nav, FormControl, InputGroup, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function NavBar() {
  const { signOut } = useAuth();
  const history = useHistory();
  
  return (
    <>
      <Navbar bg="light" variant="light" fixed="top" inline>
        <Navbar.Brand href="/">Charity-Finder</Navbar.Brand>
        <Nav className="mr-10"/>
        <InputGroup className="w-25 mr-auto">
          <FormControl
          className="ml-auto"
            placeholder="Search for a charity...."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
           <Button variant="outline-success">Search</Button>
        </InputGroup>
        <Nav.Link href="/profile" className="">Home</Nav.Link>
        <Button
          className="ml-5"
          variant="danger"
          onClick={async () => {
            await signOut();
            history.push("/signIn");
          }}
        >
          Logout
        </Button>
      </Navbar>

        
    </>
  );
}

export default NavBar;
