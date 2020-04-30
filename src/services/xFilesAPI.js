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
