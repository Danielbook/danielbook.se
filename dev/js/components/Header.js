import React from "react";
import {Banner, Heading, Text} from "rebass";

const Header = () => (
  <Banner
    style={{
      minHeight: '100vh',
      paddingTop: 48,
      backgroundAttachment: 'fixed'
    }}
    align="center"
    backgroundImage='img/me3.jpg'>
    <Heading size={1} big children='Daniel Böök' />
    <Text children='M.Sc. student of Computer Science in Media Technology at LiU, attending my forth year'/>
  </Banner>
);

export default Header