import React from "react";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import initialState from '../initialState';
import rootReducer from '../reducers/index';

import {Flex, Box} from 'reflexbox'

import Navbar from '../containers/Navbar';

import Header from './Header';
import Projects from './Projects';
import Photography from './Photography';
import Contact from './Contact';

// require('../../scss/main.scss');

import biblio from '../biblio';

import Scroll from 'react-scroll';
var Element = Scroll.Element;

const store = createStore(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());

//TODO add waypoint for scrollspy



class App extends React.Component {
  getChildContext() {
    return {
      rebass: biblio
    }
  }

  constructor(){
    super();
  }

  render () {
    return (
      <Provider store={store}>
        <div>
          <Navbar/>
          <Element name="home">
            <Header/>
          </Element>
          <Element name="projects">
            <Projects/>
          </Element>
          <Element name="photography">
            <Photography/>
          </Element>
          <Element name="contact">
            <Contact/>
          </Element>
        </div>
      </Provider>
    )
  }
}

App.childContextTypes = {
  rebass: React.PropTypes.object
};

export default App;

