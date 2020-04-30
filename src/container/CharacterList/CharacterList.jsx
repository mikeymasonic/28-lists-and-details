import React, { useState, useEffect } from 'react';
import List from '../../components/List/List';
import { fetchList } from '../../services/xFilesAPI';
import { useParams } from 'react-router-dom';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  let { page } = useParams();
  if(!page) page = 1;

  useEffect(() => {
    fetchList(page)
      .then(apiCharacters => setCharacters(apiCharacters));
  }, [page]);

  const characterNodes = characters.map(character => {
    return <List key={character.name} {...character} />;
  });
  
  return (
    <>
      {characterNodes}
    </>
  );
};

export default CharacterList;
