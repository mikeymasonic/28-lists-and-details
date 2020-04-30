import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const List = ({ name, occupation, status, image }) => (
  <ul key={name}>
    <li><Link to={`detail/${name}`} >{name}</Link></li>
    <li>{occupation}</li>
    <li>{status}</li>
    <img src={image} />
  </ul>
);

List.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string,
  status: PropTypes.string,
  image: PropTypes.string,

};

export default List;
