import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import initialState from "../initialState";
import rootReducer from "../reducers/index";
import Navbar from "../containers/Navbar";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Photography from "./Photography";
import MegaFooter from "./MegaFooter";
import {Container} from "rebass";
import biblio from "../biblio";
import Scroll from "react-scroll";

// require('../../scss/main.scss');

var Element = Scroll.Element;

const store = createStore(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());

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
          <Navbar />
          <Element name="home">
            <Header/>
          </Element>
          <Container >
            <Element name="about">
              <About/>
            </Element>
            <Element name="projects">
              <Projects projects={store.getState().projects}/>
            </Element>
            <Element name="photography">
              <Photography/>
            </Element>
          </Container>
          <MegaFooter />
        </div>
      </Provider>
    )
  }
}

App.childContextTypes = {
  rebass: React.PropTypes.object
};

export default App;

