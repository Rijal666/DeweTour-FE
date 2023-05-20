/** @format */
import Navbars from "../components/Navbar";
import { Button, Container } from "react-bootstrap";
import Footer from "../components/Footer";

function Profile() {
  return (
    <>
      <Navbars />
      <Container>
        <div>
          <div
            style={{
              margin: "100px",
              boxShadow: "2px 2px 20px grey",
              padding: "20px 50px",
              borderRadius: "10px",
            }}
          >
            <div className="d-flex justify-content-between">
              <div>
                <h1 className="fw-bold mb-5">Personal Info</h1>
                <div className="d-flex gap-3 mb-3">
                  <img
                    src="/images/vector.svg"
                    alt=""
                    width="50px"
                    height="50px"
                  />
                  <div>
                    <h5 className="fw-bold">Tatang Sutatang</h5>
                    <p style={{ color: "#8A8C90", fontWeight: "bold" }}>
                      Full name
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3 mb-3">
                  <img
                    src="/images/mail.svg"
                    alt=""
                    width="50px"
                    height="50px"
                  />
                  <div>
                    <h5 className="fw-bold">Tatang Sutatang</h5>
                    <p style={{ color: "#8A8C90", fontWeight: "bold" }}>
                      Email
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3 mb-3">
                  <img
                    src="/images/phone.svg"
                    alt=""
                    width="50px"
                    height="50px"
                  />
                  <div>
                    <h5 className="fw-bold">Tatang Sutatang</h5>
                    <p style={{ color: "#8A8C90", fontWeight: "bold" }}>
                      Mobile phone
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3 mb-3">
                  <img
                    src="/images/place.svg"
                    alt=""
                    width="50px"
                    height="50px"
                  />
                  <div>
                    <h5 className="fw-bold">Tatang Sutatang</h5>
                    <p style={{ color: "#8A8C90", fontWeight: "bold" }}>
                      Addres
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-3">
                  <img src="/images/profile.svg" alt="" />
                </div>
                <Button
                  style={{
                    backgroundColor: "#FFAF00",
                    padding: "10px 65px",
                    border: "none",
                  }}
                >
                  Change Photo Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
        <h1 className="my-5 fw-bold">History Trip</h1>
        <div
          style={{
            boxShadow: "2px 2px 20px grey",
            padding: "50px",
            borderRadius: "10px",
          }}
        >
          <div className="d-flex justify-content-between mb-4">
            <img src="/images/icon.png" alt="" />
            <div className="text-end">
              <h1 className="fw-bold ">Booking</h1>
              <h4>Saturday, 22 july 2020</h4>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-5">
              <div>
                <h3 className="fw-bold">6D/4N Fun Tassie Vacation</h3>
                <p
                  style={{
                    color: "#959595",
                    fontWeight: "bold",
                    marginBottom: "30px",
                  }}
                >
                  Bekasi
                </p>
                <span
                  style={{
                    color: "#3CF71E",
                    backgroundColor: "#E9FDEB",
                    fontWeight: "bold",
                    padding: "5px",
                    borderRadius: "10px",
                  }}
                >
                  Approve
                </span>
              </div>
              <div>
                <div style={{ display: "flex", gap: "70px" }}>
                  <div>
                    <h5 className="fw-bold">Date trip</h5>
                    <p style={{ color: "#959595", fontWeight: "bold" }}>
                      26 agustus 2020
                    </p>
                  </div>
                  <div>
                    <h5 className="fw-bold">Duration</h5>
                    <p style={{ color: "#959595", fontWeight: "bold" }}>
                      6 Day 4 Night
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "55px" }}>
                  <div>
                    <h5 className="fw-bold">Accomodation</h5>
                    <p style={{ color: "#959595", fontWeight: "bold" }}>
                      26 agustus 2020
                    </p>
                  </div>
                  <div>
                    <h5 className="fw-bold">Transportation</h5>
                    <p style={{ color: "#959595", fontWeight: "bold" }}>
                      6 Day 4 Night
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center me-5">
              <img src="/images/barcode.svg" alt="#" />
              <h4>TCK0101</h4>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
export default Profile;
