import React, { useState, useEffect } from 'react';
import Details from '../../components/Details/Details';
import { fetchDetail } from '../../services/xFilesAPI.js';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
  const [character, setCharacter] = useState({});
  let { name } = useParams();

  useEffect(() => {
    fetchDetail(name)
      .then(character => setCharacter(character));
  }, []);

  return (
    <>
      <Details {...character[0]} />
    </>
  );
};

export default CharacterDetail;
