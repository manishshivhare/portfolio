import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type-checking

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="projectCard">
      <div className="projectCardContent">
        <img className="projectImage hover" src={src} alt={`${h3} logo`} />
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
    </a>
  );
}

// Prop types validation
ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
};

export default ProjectCard;
