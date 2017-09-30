import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import { Fixed, NavLink, Toolbar } from 'rebass';
import { updateActive } from '../actions/';

const Link = Scroll.Link;

const CustomToolbar = styled(Toolbar)`
  background-color: #333
  `;

class Navbar extends Component {
  constructor() {
    super();
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.dropdownOpen = false;
  }

  handleActiveClass(className) {
    this.props.updateActiveClass(className);
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  render() {
    const activeClass = this.props.activeClass;
    const contactClass = activeClass === 'contact' ? 'active' : 'inactive';
    const projectsClass = activeClass === 'projects' ? 'active' : 'inactive';
    const photographyClass = activeClass === 'projects' ? 'active' : 'inactive';
    const topClass = activeClass === 'top' ? 'active' : 'inactive';

    return (
      <div>
        <Fixed top left right z={1}>
          <CustomToolbar>
            <NavLink ml="auto" is="span">
              <Link
                to="home"
                activeClass="test"
                onSetActive={className => this.handleActiveClass(className)}
                spy
                smooth
                duration={1000}
              >
                Home
              </Link>
            </NavLink>
            <NavLink is="span">
              <Link
                to="about"
                activeClass="test"
                onSetActive={className => this.handleActiveClass(className)}
                spy
                smooth
                offset={-48}
                duration={1000}
              >
                About
              </Link>
            </NavLink>
            <NavLink is="span">
              <Link
                to="projects"
                activeClass="test"
                onSetActive={className => this.handleActiveClass(className)}
                spy
                smooth
                offset={-48}
                duration={1000}
              >
                Projects
              </Link>
            </NavLink>
            <NavLink is="span">
              <Link
                to="photography"
                activeClass="test"
                onSetActive={className => this.handleActiveClass(className)}
                spy
                smooth
                offset={-48}
                duration={1000}
              >
                Photography
              </Link>
            </NavLink>
          </CustomToolbar>
        </Fixed>
      </div>
    );
  }
}

Navbar.propTypes = {
  updateActiveClass: PropTypes.func.isRequired,
};

Navbar.childContextTypes = {
  reactIconBase: React.PropTypes.object,
};

const mapStateToProps = state => ({
  activeClass: state.activeClass,
  aDialogVisible: state.aDialogVisible,
});

const mapDispatchToProps = dispatch => ({
  updateActiveClass: (newClass) => {
    dispatch(updateActive(newClass));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
