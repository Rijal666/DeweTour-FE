/** @format */
import React, { useState, useEffect } from "react";
import { Container, Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";

function Navbars() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loginUsers, setLoginUsers] = useState({});

  const handleClose = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleShowLogin = () => {
    handleClose(true);
    setShowLogin(true);
  };

  const handleShowRegister = () => {
    handleClose(true);
    setShowRegister(true);
  };

  useEffect(() => {
    if (localStorage.getItem("loginUsers")) {
      setLoginUsers(JSON.parse(localStorage.getItem("loginUsers")));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loginUsers");
    setLoginUsers({});
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        style={{
          backgroundImage: `url("/images/bg.png")`,
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src="/images/icon.png" width="70%" alt="#"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto gap-4">
              {!loginUsers?.email ? (
                <>
                  <Button
                    variant="outline-light"
                    style={{ padding: "5px 30px" }}
                    onClick={handleShowLogin}
                  >
                    Login
                  </Button>
                  <Button
                    style={{
                      color: "white",
                      padding: "5px 30px",
                      backgroundColor: "#FFAF00",
                      border: "none",
                    }}
                    onClick={handleShowRegister}
                  >
                    Register
                  </Button>
                </>
              ) : loginUsers?.email === "admin@gmail.com" ? (
                <>
                  <NavDropdown
                    title={
                      <img
                        src="/images/Ellipse.svg"
                        alt=""
                        style={{ width: "60px" }}
                      />
                    }
                  >
                    <NavDropdown.Item href="/IncomeTrip">
                      <img
                        src="/images/journey.svg"
                        alt=""
                        style={{ width: "20px" }}
                      />
                      <span className="ms-3 fw-bold">Trip</span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout} href="/">
                      {" "}
                      <img
                        src="/images/logout.svg"
                        alt=""
                        style={{ width: "20px" }}
                      />
                      <span className="ms-3 fw-bold">Logout</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <NavDropdown
                    title={
                      <img
                        src="/images/Ellipse.svg"
                        alt=""
                        style={{ width: "60px" }}
                      />
                    }
                  >
                    <NavDropdown.Item href="/Profile">
                      <img
                        src="/images/user.svg"
                        alt=""
                        style={{ width: "20px" }}
                      />
                      <span className="ms-3 fw-bold">Profile</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/Profile">
                      <img
                        src="/images/bill.svg"
                        alt=""
                        style={{ width: "20px" }}
                      />
                      <span className="ms-3 fw-bold">pay</span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout} href="/">
                      {" "}
                      <img
                        src="/images/logout.svg"
                        alt=""
                        style={{ width: "20px" }}
                      />
                      <span className="ms-3 fw-bold">Logout</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalLogin
        show={showLogin}
        isLogin={setIsLogin}
        onHide={handleClose}
        onClick={handleShowRegister}
      />
      <ModalRegister
        show={showRegister}
        onHide={handleClose}
        onClick={handleShowLogin}
      />
    </>
  );
}

export default Navbars;
