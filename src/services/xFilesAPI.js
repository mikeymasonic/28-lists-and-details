export const fetchDetail = (name) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
    .then(res => res.json())
    .then(json => ({
      name: json[0].name,
      occupation: json[0].occupation,
      status: json[0].status,
      image: json[0].image,
      description: json[0].description,
      portrayedBy: json[0].portrayedby
    }));
};

export const fetchList = (page) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?perPage=20&page=${page}`)
    .then(res => res.json())
    .then(json=> json.results);
};

// export const fetchDetail = (name) => {
//   return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
//     .then(res => res.json());
// };

// export const fetchList = (page) => {
//   return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?perPage=20&page=${page}`)
//     .then(res => res.json())
//     .then(json => json.results)
//     .then(json => ({
//       name: json.name,
//       occupation: json.occupation,
//       status: json.status,
//       image: json.image
//     }));
// };
