import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function MainNav() {
  const [searchField, setSearchField] = useState("");
  const router = useRouter();

  function handleSearchSubmit(e) {
    e.preventDefault();
    router.push(`/artwork?title=true&q=${searchField}`);
  }

  return (
    <>
      <Navbar className="fixed-top navbar-dark bg-primary">
        <Navbar.Brand className="m-2">Vinicius Souza da Silva</Navbar.Brand>
        <Nav className="me-auto">
          <Link href="/" passHref legacyBehavior>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link href="/search" passHref legacyBehavior>
            <Nav.Link>Advanced Search</Nav.Link>
          </Link>
        </Nav>
        <Form className="d-flex" onSubmit={handleSearchSubmit}>
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
          />
          <Button variant="outline-light" type="submit">
            Search
          </Button>
        </Form>
      </Navbar>
      <br />
      <br />
    </>
  );
}
