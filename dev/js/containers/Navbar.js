import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {updateActive} from "../actions/index.js";
import {Fixed, Toolbar, NavItem, Space} from "rebass";
import Scroll from "react-scroll";
var Link = Scroll.Link;

class Navbar extends Component {
  handleActiveClass(className) {
    this.props.updateActiveClass(className);
  }

  render() {
    const activeClass = this.props.activeClass;
    const contactClass = activeClass === "contact" ? "active" : "inactive";
    const projectsClass = activeClass === "projects" ? "active" : "inactive";
    const photographyClass = activeClass === "projects" ? "active" : "inactive";
    const topClass = activeClass === "top" ? "active" : "inactive";

    // let navClasses = classNames({
    //   "custom-navbar": true,
    //   "navtop": activeClass === "top"});

    return (
      <Fixed top left right zIndex={1}>
        <Toolbar>
          <Space auto/>
            <Link
              to="home"
              activeClass="test"
              onSetActive={(className) => this.handleActiveClass(className)}
              spy={true}
              smooth={true}
              duration={1000}>
              Home
            </Link>
            <Link to="about"
                  activeClass="test"
                  onSetActive={(className) => this.handleActiveClass(className)}
                  spy={true}
                  smooth={true}
                  duration={1000}>
              About
            </Link>
            <Link to="projects"
                  activeClass="test"
                  onSetActive={(className) => this.handleActiveClass(className)}
                  spy={true}
                  smooth={true}
                  duration={1000}>
              Projects
            </Link>
            <Link
              to="photography"
              activeClass="test"
              onSetActive={(className) => this.handleActiveClass(className)}
              spy={true}
              smooth={true}
              duration={1000}>
              Photography
            </Link>
        </Toolbar>
      </Fixed>
    );
  }
}

Navbar.propTypes = {
  updateActiveClass: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    activeClass:    state.activeClass,
    aDialogVisible: state.aDialogVisible
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateActiveClass: (newClass) => {
      dispatch(updateActive(newClass))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)