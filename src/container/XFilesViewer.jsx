import React, { useState, useEffect } from 'react';
import List from '../components/List/List.jsx';

const XFilesViewer = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://xfiles-api.herokuapp.com/api/v1/characters?perPage=500&page=1')
      .then(res => res.json())
      .then(json=> json.results)
      .then(fetchedCharacters => setCharacters(fetchedCharacters));
  }, []);

  console.log(characters);

  return (
    <>
      <List characters={characters} />
    </>
  );
};

export default XFilesViewer;
