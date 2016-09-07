import React from "react";
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';

export default class Homepage extends React.Component {
  render() {
    return (
      <Grid fluid className="content-box">
        <p>Hi! My name is Daniel Böök and I am a M.Sc. student of Computer Science in Media Technology at LiU, starting my forth year this autumn</p>
        <p>I am into programming, mainly web and apps. You can checkout my bachelor's degree project <a href="http://visapp.itn.liu.se:3000/" target="_blank">here</a>, other projects done at Uni. and in my spare time can be found in the <Link to="/projects">Projects</Link> tab.</p>
        <p>Photography is also a passion of mine, and you can view my photography portfolio in the <Link to="/photography">Photography</Link> tab.</p>
      </Grid>
    );
  }
}
