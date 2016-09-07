import React from "react";
import { Grid } from 'react-bootstrap';

export default class Contact extends React.Component {
  render() {
    return (
      <Grid>
        <div className="row center animated fadeIn">
          <div className="col-xs-6 hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a">
            <a href="mailto:hello@danielbook.se" className="hi-icon">
              <i className="fa fa-envelope fa-2x"/>
            </a>
            <p className="contactInfo">hello@danielbook.se</p>
          </div>
          <div className="col-xs-6 hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a">
            <a href="" className="hi-icon">
              <i className="fa fa-phone fa-2x"/>
            </a>
            <p className="contactInfo">+46738093120</p>
          </div>
        </div>
        <div className="row center">
          <div className="col-sm-4 center">
            <div className="col-xs-6 center hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a">
              <a href="https://www.facebook.com/Danielbook1993" target="_blank" className="hi-icon">
                <i className="fa fa-facebook fa-2x"/>
              </a>
            </div>
            <div className="col-xs-6 center hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a">
              <a href="https://twitter.com/Daniel_Book" target="_blank" className="hi-icon">
                <i className="fa fa-twitter fa-2x"/>
              </a>
            </div>
          </div>
          <div className="col-sm-4 center">
            <div className="col-xs-6 center hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a">
              <a href="https://instagram.com/danielbook/" target="_blank" className="hi-icon">
                <i className="fa fa-instagram fa-2x"/>
              </a>
            </div>
            <div className="col-xs-6 center hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a">
              <a href="https://linkedin.com/pub/daniel-böök/7b/b36/a12/" target="_blank" className="hi-icon">
                <i className="fa fa-linkedin fa-2x"/>
              </a>
            </div>
          </div>
          <div className="col-sm-4 center">
            <div className="col-xs-6 center hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a">
              <a href="https://github.com/Danielbook" target="_blank" className="hi-icon">
                <i className="fa fa-github fa-2x"/>
              </a>
            </div>
            <div className="col-xs-6 center hi-icon-wrap hi-icon-effect-1 hi-icon-effect-1a">
              <a href="https://www.flickr.com/photos/danielbook/" target="_blank" className="hi-icon">
                <i className="fa fa-flickr fa-2x"/>
              </a>
            </div>
          </div>
        </div>
      </Grid>
    );
  }

}