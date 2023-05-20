/** @format */

import Navbars from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Card";
import { Button, Container } from "react-bootstrap";
function IncomeTrip() {
  return (
    <>
      <Navbars />
      <Container>
        <div className="d-flex my-5 justify-content-between">
          <h1 className="fw-bold">Income Trip</h1>
          <Button
            href="/AddTrip"
            style={{
              backgroundColor: "#FFAF00",
              border: "none",
              padding: "0 50px",
            }}
          >
            Add Trip
          </Button>
        </div>
        <div className="mx-3">
          <Cards />
        </div>
      </Container>
      <Footer />
    </>
  );
}
export default IncomeTrip;
