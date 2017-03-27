import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {updateActive} from "../actions/index.js";
import {Dropdown, DropdownMenu, Button, Arrow, Fixed, Toolbar, NavItem, Space} from "rebass";
import Github from "react-icons/lib/fa/github-square";
import Facebook from "react-icons/lib/fa/facebook-official";
import Instagram from "react-icons/lib/fa/instagram";
import LinkedIn from "react-icons/lib/fa/linkedin-square";
import Scroll from "react-scroll";
var Link = Scroll.Link;

class Navbar extends Component {
  constructor() {
    super();
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.dropdownOpen = false;
  }
  handleActiveClass(className) {
    this.props.updateActiveClass(className);
  }
  getChildContext() {
    return {
      reactIconBase: {
        color: 'white',
        size:  18
      }
    }
  }

  toggleDropdown () {
    console.log(this.dropdownOpen);
    if(this.dropdownOpen) {
      this.dropdownOpen = false;
    } else {
      this.dropdownOpen = true;
    }
  }

  render() {
    const activeClass = this.props.activeClass;
    const contactClass = activeClass === "contact" ? "active" : "inactive";
    const projectsClass = activeClass === "projects" ? "active" : "inactive";
    const photographyClass = activeClass === "projects" ? "active" : "inactive";
    const topClass = activeClass === "top" ? "active" : "inactive";


    return (
      <Fixed top left right zIndex={1}>
        <Toolbar>
          <Dropdown>
            <NavItem onClick={this.toggleDropdown()}>
              Contact
              <Arrow />
            </NavItem>
            <DropdownMenu
              onDismiss={this.toggleDropdown()}
              open={this.dropdownOpen}>
              <NavItem is="a" href="https://www.facebook.com/Danielbook93" target="_blank">
                <Facebook/>
              </NavItem>
              <NavItem is="a" href="https://www.instagram.com/danielbook" target="_blank">
                <Instagram/>
              </NavItem>
              <NavItem is="a" href="https://github.com/Danielbook" target="_blank">
                <Github/>
              </NavItem>
              <NavItem is="a" href="https://www.facebook.com/Danielbook93" target="_blank">
                <LinkedIn/>
              </NavItem>
            </DropdownMenu>
          </Dropdown>

          <Space auto/>
          <NavItem>
            <Link
              to="home"
              activeClass="test"
              onSetActive={(className) => this.handleActiveClass(className)}
              spy={true}
              smooth={true}
              duration={1000}>
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="about"
                  activeClass="test"
                  onSetActive={(className) => this.handleActiveClass(className)}
                  spy={true}
                  smooth={true}
                  duration={1000}>
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link to="projects"
                  activeClass="test"
                  onSetActive={(className) => this.handleActiveClass(className)}
                  spy={true}
                  smooth={true}
                  duration={1000}>
              Projects
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="photography"
              activeClass="test"
              onSetActive={(className) => this.handleActiveClass(className)}
              spy={true}
              smooth={true}
              duration={1000}>
              Photography
            </Link>
          </NavItem>
        </Toolbar>
      </Fixed>
    );
  }
}

Navbar.propTypes = {
  updateActiveClass: PropTypes.func.isRequired
};

Navbar.childContextTypes = {
  reactIconBase: React.PropTypes.object
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