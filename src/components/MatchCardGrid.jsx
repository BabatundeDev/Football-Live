import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MatchCard from './MatchCard';

const MatchCardGrid = ({ onWatch }) => {
  const [matchData, setMatchData] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await fetch("https://v3.football.api-sports.io/fixtures?live=all", {
          headers: {
            "x-apisports-key": "aa915af020541fa385ab1fb6484cbca1"
          }
        });

        const data = await res.json();
        const matches = data.response.map((match) => {
          const homeTeam = match.teams.home.name;
          const awayTeam = match.teams.away.name;
          const homeGoals = match.goals.home;
          const awayGoals = match.goals.away;

          return {
            title: `${homeTeam} vs ${awayTeam}`,
            time: `${match.fixture.status.elapsed || 0}’`,
            score: homeGoals !== null && awayGoals !== null ? `${homeGoals} : ${awayGoals}` : 'TBD',
            videoUrl: "/footbal-short.mp4"
          };
        });

        setMatchData(matches);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <Container className="pb-4">
      <Row xs={1} sm={2} md={3} className="g-4">
        {matchData.map((match, index) => (
          <Col key={index}>
            <MatchCard match={match} onWatch={onWatch} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MatchCardGrid;
