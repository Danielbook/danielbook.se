import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Container, Provider as RebassProvider } from 'rebass';
import Scroll from 'react-scroll';
import initialState from '../initialState';
import rootReducer from '../reducers/index';
import Navbar from '../containers/Navbar';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Photography from './Photography';

const Element = Scroll.Element;


if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const store = createStore(
  rootReducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RebassProvider>
          <Navbar />
          <Element name="home">
            <Header />
          </Element>
          <Container >
            <Element name="about">
              <About />
            </Element>
            <Element name="projects">
              <Projects projects={store.getState().projects} />
            </Element>
            <Element name="photography">
              <Photography />
            </Element>
          </Container>
        </RebassProvider>
      </Provider>
    );
  }
}

App.childContextTypes = {
  rebass: React.PropTypes.object,
};

export default App;

