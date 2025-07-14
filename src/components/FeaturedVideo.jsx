import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';

const FeaturedVideo = ({ videoUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && videoUrl) {
      videoRef.current.load();
      videoRef.current.play().catch((e) => {
        console.warn('Autoplay failed:', e);
      });
    }
  }, [videoUrl]);

  return (
    <Container className="my-4">
      {videoUrl ? (
        <video
          ref={videoRef}
          width="100%"
          height="500px"
          controls
          autoPlay
          playsInline
          style={{ borderRadius: '12px' }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div style={{ color: 'gray', textAlign: 'center', padding: '2rem' }}>
          <p>Select a match to watch the live stream 🎥</p>
        </div>
      )}
    </Container>
  );
};

export default FeaturedVideo;
