import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ name, image, occupation, status, description, portrayedBy }) => (
  <>
    <h3>{name}</h3>
    <img src={image} />
    <h4>Occupation: {occupation}</h4>
    <h4>Status: {status}</h4>
    <p>Description: {description}</p>
    <p>Portrayed By: {portrayedBy}</p>
  </>
);

Details.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  occupation: PropTypes.string,
  status: PropTypes.string,
  description: PropTypes.string,
  portrayedBy: PropTypes.string

};

export default Details;


