export const fetchList = (page) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?perPage=20&page=${page}`)
    .then(res => res.json())
    .then(json => ({
      name: json.login,
      occupation: json.followers,
      status: json.following,
      image: json.avatar_url
    }));
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


