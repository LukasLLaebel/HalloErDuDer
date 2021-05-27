import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: 'Om os',
};

// ABOUT DATA
export const aboutData = {
  img: 'Omos.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.uvm.dk/',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'LOGO.png',
    title: 'Kampagnen: Hallo Er Du Der?',
    info: 'Er en kampagnen lavet af Børne- og Undervisningsministeriet, som skal sætte fokus på det voksende problem med at elever/studerende i højere grad bliver forstyrret af sociale medier.',
    info2: '',
    url: 'https://luka2313.wixsite.com/kampagner1',
    repo: 'Se Kampagnevideoen',
  },
  {
    id: nanoid(),
    img: 'none',
    title: 'Kampagneplakat',
    info: ' ',
    info2: ' ',
    url: 'https://luka2313.wixsite.com/kampagner1/plakat',
    repo: 'Plakat',
  },
];



// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'halloerduder1234@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'none',
      url: '',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/hallo_er_du_der/',
    },
    {
      id: nanoid(),
      name: 'none',
      url: '',
    },
    {
      id: nanoid(),
      name: 'none',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
