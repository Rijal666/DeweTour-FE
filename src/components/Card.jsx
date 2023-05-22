/** @format */

import Card from "react-bootstrap/Card";
import { Container, NavLink } from "react-bootstrap";

function Cards() {
  const getTrip = JSON.parse(localStorage.getItem("getTrip"));
  console.log(getTrip);
  return (
    <Container>
      <div
        style={{
          marginBottom: "50px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {getTrip !== null &&
          getTrip.map((item, id) => {
            return (
              <Card
                key={id}
                style={{
                  width: "300px",
                  padding: "10px",
                  boxShadow: "2px 2px 20px grey",
                }}
              >
                <NavLink href={`/Detail/${id}`}>
                  <Card.Img variant="top" src={item.Image} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <div className="d-flex my-0">
                      <Card.Text style={{ color: "#FFAF00" }}>
                        {item.price}
                      </Card.Text>
                      <Card.Text
                        className="ms-auto"
                        style={{ color: "#878787" }}
                      >
                        {item.country}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </NavLink>
              </Card>
            );
          })}
      </div>
    </Container>
  );
}

export default Cards;
