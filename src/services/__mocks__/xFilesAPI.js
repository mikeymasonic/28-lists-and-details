export const fetchList = () => {
  return Promise.resolve(
    [
      {
        name: 'Fox Mulder',
        occupation: 'FBI Agent',
        status: 'Alive',
        image: 'https://vignette.wikia.nocookie.net/x-files/images/c/c0/TXF_Mulder.jpg/revision/latest/scale-to-width-down/310?cb=20171214040226'
      },
      {
        name: 'Dana Scully',
        occupation: 'FBI Agent',
        status: 'Alive',
        image: 'https://vignette.wikia.nocookie.net/x-files/images/3/31/TXF_Scully.jpg/revision/latest/scale-to-width-down/310?cb=20171214040235'
      },
    ]
  );
};

export const fetchDetail = () => {
  return Promise.resolve(
    {
      name: 'Dana Scully',
      occupation: 'FBI Agent',
      status: 'Alive',
      image: 'https://vignette.wikia.nocookie.net/x-files/images/3/31/TXF_Scully.jpg/revision/latest/scale-to-width-down/310?cb=20171214040235',
      description: 'Dana Katherine Scully (Played by Gillian Anderson) is an FBI Special Agent and medical doctor with a background in hard science who brought her scientific expertise and perspective to the X-files. (TXF: "Pilot", et al.) In 2002, she went on the run from the law with her former partner, Fox Mulder. (TXF: "The Truth") She was employed as a doctor at Our Lady of Sorrows Hospital by 2008, at which time she became involved in an FBI case on which Mulder worked in an unofficial capacity. (The X-Files: I Want to Believe) In 2016 she returned to the FBI along with Mulder and together they reopened the X-files and resumed their investigations into them whilst also continuing her duties as a doctor at the hospital. (TXF: "My Struggle")',
      portrayedBy: 'Gillian Anderson'
    }
  );
};
