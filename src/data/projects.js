import oklart from '../img/oklart.png';
import procedural from '../img/procedural.png';
import kulan from '../img/kulan.png';
import domescape from '../img/domescape.png';
import portfolio from '../img/portfolio.png';

const projects = [
  {
    image: oklart,
    type: 'webpage',
    heading: 'Oklart',
    text: 'Bachelor degree project. A web app that fetches data from SMHI and visualizes the weather with uncertainty data calculated.',
    github: 'https://github.com/Danielbook/Oklart',
    link: 'https://arcane-fortress-56134.herokuapp.com/',
  },
  {
    image: procedural,
    type: 'webpage',
    heading: 'Procedural Planet',
    text: "Procedural planets built using Three.js, as well as ashima's webgl-noise",
    github: 'https://github.com/Danielbook/Planet-moon-and-sun',
    link: 'https://danielbook.github.io/Planet-moon-and-sun/',
  },
  {
    image: kulan,
    type: 'webpage',
    heading: 'Kulan i Kläppen 2016',
    text: 'Web page for renting out our ski lodge in Kläppen. Built with React and Redux',
    github: 'https://github.com/Danielbook/kulan2016',
    link: 'http://www.kulaniklappen.se',
  },
  {
    image: domescape,
    type: 'app',
    heading: 'Domescape',
    text: 'Landscape with realtime position of the sun created in OpenGL and SGCT for viewing in a dome',
    github: 'https://github.com/Danielbook/Domescape',
    link: '',
  },
  {
    type: 'video',
    heading: 'Interhelios',
    text: 'Android game created for the course TNM048 at LiU',
    github: 'https://github.com/Danielbook/Interhelios',
    link: 'https://www.youtube.com/watch?v=crZpxgsYBw8',
    embed: 'https://www.youtube.com/embed/crZpxgsYBw8',
  },

  {
    image: portfolio,
    type: 'webpage',
    heading: 'Portfolio page',
    text: 'This portfolio page. Built using React, Redux, Rebass and Reflexbox',
    github: 'https://github.com/Danielbook/danielbook.se',
    link: '',
  },

];

export default projects;
