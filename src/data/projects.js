import oklart from '../img/oklart.png';
import procedural from '../img/procedural.png';
import kulan from '../img/kulan.png';
import domescape from '../img/domescape.png';
import portfolio from '../img/portfolio.png';
import spotplanner from '../img/spotplanner.png';
import spotscaleCloud from '../img/spotscaleCloud.png';

const projects = [
  {
    image: spotscaleCloud,
    type: 'webpage',
    heading: 'Spotscale Cloud',
    text: 'Summer and part time work for Spotscale 2017. Cloud service for users to upload images. Also a bit of UI and user management.',
    link: 'https://cloud.spotscale.com/',
  },
  {
    image: oklart,
    type: 'webpage',
    heading: 'Oklart',
    text: 'Bachelor degree project. A web app that fetches data from SMHI and visualizes the weather with uncertainty data calculated.',
    github: 'https://github.com/Danielbook/Oklart',
    link: 'https://arcane-fortress-56134.herokuapp.com/',
  },
  {
    image: spotplanner,
    type: 'webpage',
    heading: 'Spotplanner',
    text: 'Summer and part time work for Spotscale 2016. Helped in building some of the tools for Spotplanner',
    link: 'http://spotplanner.spotscale.com/',
  },
  {
    type: 'video',
    heading: 'Lifting Log',
    text: 'A minimalistic webb app for logging your workouts, project for the course TDDD27. Created with MongoDB, ExpressJS, React and NodeJS.  ',
    github: 'https://github.com/Danielbook/liftinglog',
    link: 'https://www.youtube.com/watch?v=wPLN9c6DJos',
    embed: 'https://www.youtube.com/embed/wPLN9c6DJos',
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
    image: procedural,
    type: 'webpage',
    heading: 'Procedural Planet',
    text: "Procedural planets built using Three.js, as well as ashima's webgl-noise",
    github: 'https://github.com/Danielbook/Planet-moon-and-sun',
    link: 'https://danielbook.github.io/Planet-moon-and-sun/',
  },
  {
    image: domescape,
    type: 'app',
    heading: 'Domescape',
    text: 'Landscape with real time position of the sun created in OpenGL and SGCT for viewing in a dome',
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
