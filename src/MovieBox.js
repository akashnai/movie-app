import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import "./MovieBox.css";

const API_IMAGE = "https://image.tmdb.org/t/p/w500/";
const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className="card text-center bg-secondary mb-3">
      <div className="card-body">
        <img
          className="card-img-top poster-image"
          src={API_IMAGE + poster_path}
          alt="Movie-Poster"
        />
        <div className="card-body">
          <button type="button" onClick={handleShow} className="btn btn-dark">
            View More
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                className="card-img-top"
                style={{ width: "14rem" }}
                src={API_IMAGE + poster_path}
                alt="Movie-Poster"
              />
              <h3>{title}</h3>
              <h4>IMDB: {vote_average}</h4>
              <h5>Release Date: {release_date}</h5>
              <br />
              <h6>{overview}</h6>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
