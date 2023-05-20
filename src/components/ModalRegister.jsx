/** @format */

import { Button, Modal, Form } from "react-bootstrap";
import React from "react";

export const Register = (props) => {
  let user = {
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  };

  const handleRegister = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    props.onHide(true);
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <img
          src="/images/palm.png"
          alt="#"
          width="30%"
          style={{ position: "absolute" }}
        />
        <img
          src="/images/hibiscus.png"
          alt="#"
          style={{ position: "absolute", left: "433px", borderRadius: "6px" }}
        />
        <div className="px-5 pb-3">
          <p className="fs-3 fw-bold text-center " style={{ paddingTop: 50 }}>
            Register
          </p>
          <Form className="mt-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold">Full Name</Form.Label>
              <Form.Control
                className="p-2 mb-3"
                // onChange={OnChangeHandler}
                name="fullname"
                // value={email}
                type="text"
                onChange={(e) => (user.fullname = e.target.value)}
              />
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control
                className="p-2 mb-3"
                // onChange={OnChangeHandler}
                name="email"
                // value={email}
                type="email"
                onChange={(e) => (user.email = e.target.value)}
              />
              <Form.Label className="fw-bold">Password</Form.Label>

              <Form.Control
                type="password"
                // onChange={OnChangeHandler}
                name="password"
                // value={password}
                onChange={(e) => (user.password = e.target.value)}
              />
              <Form.Label className="fw-bold">Phone</Form.Label>
              <Form.Control
                className="p-2 mb-3"
                // onChange={OnChangeHandler}
                name="phone"
                // value={email}
                type="number"
                onChange={(e) => (user.phone = e.target.value)}
              />
              <Form.Label className="fw-bold">Address</Form.Label>
              <Form.Control
                className=" mb-3"
                as="textarea"
                // onChange={OnChangeHandler}
                name="address"
                // value={email}
                style={{
                  height: "100px",
                  resize: "none",
                }}
                onChange={(e) => (user.address = e.target.value)}
              />
            </Form.Group>
            <Button
              type="submit"
              className="fw-bold border-0 w-100 py-2 mt-3"
              style={{ backgroundColor: "#FFAF00" }}
              onClick={handleRegister}
            >
              Register
            </Button>
          </Form>

          <p className="text-center mt-3">
            Already have an account ? Klik{" "}
            <span
              onClick={props.onClick}
              className="fw-bold"
              style={{ cursor: "pointer" }}
            >
              Here
            </span>
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Register;
