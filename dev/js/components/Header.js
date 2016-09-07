import React from "react";
import { Link, IndexLink } from 'react-router';
import { Row, Col, Grid, Image } from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row className="center">
          <Image responsive src="img/danielhexbw.png" alt="Daniel" className="front-img" />
        </Row>
        <Row className="center">
          <Col xs={5}>
            <div className="col-md-6"><IndexLink to="/" id="home" className="navigation" activeClassName="active">HOME<hr className="line"/></IndexLink></div>
            <div className="col-md-6"><Link to="/projects" className="navigation" activeClassName="active">PROJECTS<hr className="line"/></Link></div>
          </Col>
          <Col xs={5} xsOffset={2}>
            <div className="col-md-6"><Link to="/photography" className="navigation" activeClassName="active">PHOTOGRAPHY<hr className="line"/></Link></div>
            <div className="col-md-6"><Link to="/contact" className="navigation" activeClassName="active">CONTACT<hr className="line"/></Link></div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
