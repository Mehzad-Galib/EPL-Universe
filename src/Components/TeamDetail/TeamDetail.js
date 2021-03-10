import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./TeamDetail.css";
import { Image, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faFutbol, faMapMarkerAlt, faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare,faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import malePic from '../../barcelona.png';
import femalePic from '../../female.png';

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
  if (clubType === 'Male') {
    return (
      <>
      <div>
      <div className='imageCover'>
             
             <img src={`https://img.uefa.com/imgml/uefacom/ucl/social/og-default.jpg`} alt=""/>
         </div>
        <div className="image">
          <img src={club.strTeamBadge} alt="" />
        </div>
      </div>
      
        <div className="container mt-5 mb-5 detail">
          <div className="clubDetail">
            <h2>
              Club Details
            </h2>
            <h3><FontAwesomeIcon icon={faFlag} /> Name: {club.strTeam}</h3>
            <h4><FontAwesomeIcon icon={faFutbol} /> Sports Type: {club.strSport}</h4>
            <h4><FontAwesomeIcon icon={faVenusMars} /> Gender: {club.strGender} </h4>
            <h4><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {club.intFormedYear}</h4>
          </div>

          <div className="clubPic">
            <Image src={malePic} />
          </div>
        </div>
        <div className="container mt-5">
          <p className="description">{club.strDescriptionEN}</p>
        </div>
        <div className='logo'>
        
          <div className='singleLogo'><Button href={'https://' + club.strFacebook} target="_blank">
               <FontAwesomeIcon icon={faFacebookSquare} /></Button></div>
          <div className='singleLogo'> <Button href={'https://' + club.strInstagram} target="_blank">
               <FontAwesomeIcon icon={faInstagramSquare} /></Button></div>
          <div className='singleLogo'><Button href={'https://' + club.strTwitter} target="_blank">
               <FontAwesomeIcon icon={faTwitterSquare} /></Button></div>
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
            <Image src={femalePic} />
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
