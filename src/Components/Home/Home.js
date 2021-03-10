import React, { useState, useEffect } from "react";
import Team from "../Team/Team";
import Header from '../Header/Header';

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  return (
    <>
    <Header></Header>
      <div className="container mt-5 mb-5">
        <div className="row">
          {teams.map((team) => (
            <Team key={team.idTeam} team={team}></Team>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
