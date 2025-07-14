import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const MatchCard = ({ match, onWatch }) => (
  <Card className="bg-dark text-white mb-3 shadow-sm" style={{ borderRadius: '12px', height: '100%' }}>
    <Card.Body>
      <Badge bg="danger" className="mb-2">LIVE</Badge>
      <h6>Football</h6>
      <h5 className="fw-bold mb-2">{match.title}</h5>
      {/* <p className="mb-1 text-muted">Time: {match.time}</p> */}
      <p className="mb-3 text-white">Score: <strong>{match.score}</strong></p>
      <Button variant="secondary" size="sm" onClick={() => onWatch(match.videoUrl)}>
        WATCH
      </Button>
    </Card.Body>
  </Card>
);

export default MatchCard;
