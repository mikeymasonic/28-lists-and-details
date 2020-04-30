import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const List = ({ name, occupation, status, image }) => (
  <section>
    <p><Link to={`detail/${name}`} >{name}</Link></p>
    {occupation && <p>Occupation: {occupation}</p>}
    {status && <p>Status: {status}</p>}
    {image && <img src={image} />}
  </section>
);

List.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string,
  status: PropTypes.string,
  image: PropTypes.string,
};

export default List;
