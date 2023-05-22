/** @format */
import { useNavigate } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import React from "react";
import Swal from "sweetalert2";

export const Login = (props) => {
  let data = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    let users = JSON.parse(localStorage.getItem("users"));
    let user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (!user) {
      alert("user not found");
    } else {
      localStorage.setItem("loginUsers", JSON.stringify(user));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login success",
        showConfirmButton: true,
      });
      if (user.email === "admin@gmail.com") {
        navigate("/Income");
      } else {
        window.location.reload();
      }
    }
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
            Login
          </p>
          <Form className="mt-4" onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control
                className="p-2 mb-3"
                // onChange={OnChangeHandler}
                name="email"
                // value={email}
                type="email"
                onChange={(e) => (data.email = e.target.value)}
              />
              <Form.Label className="fw-bold">Password</Form.Label>

              <Form.Control
                type="password"
                // onChange={OnChangeHandler}
                name="password"
                // value={password}
                onChange={(e) => (data.password = e.target.value)}
              />
            </Form.Group>
            <Button
              type="submit"
              className="fw-bold border-0 w-100 py-2 mt-3"
              style={{ backgroundColor: "#FFAF00" }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Form>

          <p className="text-center mt-3">
            Don't have an account ? Klik{" "}
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

export default Login;
