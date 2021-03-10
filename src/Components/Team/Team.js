import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "./Team.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Team = (props) => {
  const { strTeam, intFormedYear, idTeam, strTeamBadge } = props.team;

  return (
    
      <div className="col-md-3 my-3 mx-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={strTeamBadge} />
          <Card.Body className="text-center">
            <Card.Title>{strTeam}</Card.Title>
            <Card.Text>Founded: {intFormedYear}</Card.Text>
            <Button as={Link} to={`/team/${idTeam}`} variant="primary">
              Explore <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Card.Body>
        </Card>
      </div>
    
  );
};

export default Team;
