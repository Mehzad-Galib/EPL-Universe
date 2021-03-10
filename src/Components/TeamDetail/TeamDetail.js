import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./TeamDetail.css";
import { Image, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const TeamDetail = () => {
  let { id } = useParams();
  const [club, setClub] = useState({});
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => setClub(data.teams[0]));
  }, [id]);
  // conditional Rendering
  const clubType = club.strGender;
  if (clubType) {
    return (
      <>
        <div className="image">
          <img src={club.strTeamBanner} alt="" />
        </div>
        <div className="container mt-5 mb-5 detail">
          <div className="clubDetail">
            <h2>
              <FontAwesomeIcon icon={faFutbol} /> Club Details
            </h2>
            <h3>Name: {club.strTeam}</h3>
            <h4>Stadium: {club.strStadium}</h4>
            <h4>Location: {club.strStadiumLocation} </h4>
            <h4>Capacity: {club.intStadiumCapacity}</h4>
          </div>

          <div className="clubPic">
            <Image src={club.strTeamFanart2} />
          </div>
        </div>
        <div className="container mt-5">
          <p className="description">{club.strDescriptionEN}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="image">
          <img src={club.strTeamBanner} alt="" />
        </div>
        <div className="container mt-5 mb-5 detail">
          <div className="clubDetail">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>
                  <FontAwesomeIcon icon={faFutbol} /> Club Details
                </Card.Title>
                <Card.Subtitle className="mb-2">
                  Name: {club.strTeam}
                </Card.Subtitle>
                <Card.Text>
                  <h4>Stadium: {club.strStadium}</h4>
                  <h4>Location: {club.strStadiumLocation} </h4>
                  <h4>Capacity: {club.intStadiumCapacity}</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="clubPic">
            <Image src={club.strTeamFanart4} />
          </div>
        </div>
        <div className="container mt-5">
          <p className="description">{club.strDescriptionEN}</p>
        </div>
      </>
    );
  }
};

export default TeamDetail;
