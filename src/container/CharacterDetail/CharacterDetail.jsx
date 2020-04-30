import React, { useState, useEffect } from 'react';
import Details from '../../components/Details/Details';
import { fetchDetail } from '../../services/xFilesAPI.js';
import { useParams } from 'react-router-dom';

const CharacterInfo = () => {
  const [character, setCharacter] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetchDetail(id)
      .then(character => setCharacter(character));
  }, []);

  return (
    <>
      <Details {...character} />
    </>
  );
};

export default CharacterInfo;
