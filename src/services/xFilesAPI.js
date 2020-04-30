// export const fetchList = (page) => {
//   return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?perPage=20&page=${page}`)
//     .then(res => res.json())
//     .then(json=> json.results)
//     .then(json => ({
//       name: json.name,
//       occupation: json.occupation,
//       status: json.status,
//       image: json.image
//     }));
// };

// export const fetchDetail = (name) => {
//   return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
//     .then(res => res.json())
//     .then(json=> json.results)
//     .then(json.results => ({
//       name: json.name,
//       occupation: json.occupation,
//       status: json.status,
//       image: json.image,
//       description: json.description,
//       portrayedBy: json.portrayedby
//     }));
// };

export const fetchList = (page) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?perPage=20&page=${page}`)
    .then(res => res.json())
    .then(json=> json.results);
};

export const fetchDetail = (name) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
    .then(res => res.json());
};


// export const fetchList = (page) => {
//   return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?perPage=20&page=${page}`)
//     .then(res => res.json())
//     .then(json => ({
//       username: json.login,
//       followers: json.followers,
//       following: json.following,
//       image: json.avatar_url,
//       profileUrl: json.html_url
//     }));
// };

// export const fetchUserRepos = username => {
//   return fetch(`https://api.github.com/users/${username}/repos`)
//     .then(res => res.json())
//     .then(json => json.map(repo => ({
//       name: repo.name,
//       language: repo.language,
//       url: repo.html_url,
//       description: repo.description
//     })));
// };

// import React, { useState, useEffect } from 'react';

// export default function xFilesAPI() {

//   const [characters, setCharacters] = useState([]);

//   useEffect(() => {
//     fetch('https://xfiles-api.herokuapp.com/api/v1/characters?perPage=500&page=1')
//       .then(res => res.json())
//       .then(json=> json.results)
//       .then(fetchedCharacters => setCharacters(fetchedCharacters));
//   }, []);

//   console.log(characters);
// }


