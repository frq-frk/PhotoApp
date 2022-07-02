import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import "./Photo.css";

import { Link } from "react-router-dom";

import axios from "axios";

const Photo = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://picsum.photos/v2/list");
        setPhotos(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <Container>
      <Row>
        {photos.length ? (
          photos.map((item) => (
            <Col key={item.id} md={4} className="single-photo">
              <Card>
                <Card.Header>Author : {item.author}</Card.Header>
                <Card.Img
                  variant="top"
                  src={item.download_url}
                  className="card-photo"
                />
                <Card.Body className="btn-wrap">
                  <a className="btn btn-dark" href={item.url}>
                    Download
                  </a>
                  <Link className="btn btn-dark" to={`view/${item.id}`}>
                    View
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className="spinner">
            <Spinner animation="border" role="status"></Spinner>
          </div>
        )}
      </Row>
    </Container>
  );
};

export default Photo;
