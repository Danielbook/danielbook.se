import React from "react";
import {Link, IndexLink } from 'react-router';

export default class Header extends React.Component {

    render() {
        return (
            <div>
                <div className="center">
                  <img src="img/danielhexbw.png" alt="Daniel" className="img-responsive front-img" />
                </div>
              <div className="row center">
                <div className="col-xs-6 left">
                <div className="col-md-6"><IndexLink to="/" id="home" className="navigation" activeClassName="active">HOME</IndexLink></div>
                <div className="col-md-6"><Link to="/projects" className="navigation" activeClassName="active">PROJECTS</Link></div>
              </div>
              <div className="col-xs-6 right">
                <div className="col-md-6"><Link to="/photography" className="navigation" activeClassName="active">PHOTOGRAPHY</Link></div>
                <div className="col-md-6"><Link to="/contact" className="navigation" activeClassName="active">CONTACT</Link></div>
                </div>
              </div>
            </div>
        );
    }

}
