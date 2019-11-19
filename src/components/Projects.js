/* eslint-disable indent */
import React from 'react';
import styled from 'styled-components';
import Github from 'react-icons/lib/go/mark-github';
import Laptop from 'react-icons/lib/fa/laptop';
import Video from 'react-icons/lib/fa/youtube';
import { Flex, Box, Embed, Card, BackgroundImage, Heading, Text, NavLink, PanelHeader } from 'rebass';

const BorderedCard = styled(Card)`
	border: 1px solid rgba(0, 0, 0, .1);
	box-shadow: 0 0 4px rgba(0, 0, 0, .25)
`;

class Projects extends React.Component {
  static linkOrVideo(type) {
    if (type === 'webpage') {
     return (<Laptop />);
    } else if (type === 'video') {
      return <Video />;
    }
      return null;
  }

  render() {
    return (
      <div>
        <PanelHeader my={1} f={[4, 5, 6]}>
          Projects
        </PanelHeader>
        <Flex wrap mx={-2}>
          {this.props.projects.map(({ image, heading, text, type, link, github, embed }, i) => (
            <Box key={i} px={3} py={3} width={[1, 1 / 3, 1 / 3]}>
              <BorderedCard p={2}>
                {type === 'video' ?
                  <Embed ratio={1}>
                    <iframe
                      allowFullScreen
                      src={embed}
                    />
                  </Embed> :
                  <BackgroundImage src={image} /> }
                <Flex p={2} align="center">
                  <Heading f={[2, 3, 4]}>
                    {heading}
                  </Heading>
                  {link ? (
                    <NavLink href={link} target="_blank">
                      {Projects.linkOrVideo(type)}
                    </NavLink>) : null }
                  {github ? (
                    <NavLink href={github} target="_blank">
                      <Github />
                    </NavLink>) : null }
                </Flex>
                <Text p={2}>
                  {text}
                </Text>
              </BorderedCard>
            </Box>
          ))}
        </Flex>
      </div>
    );
  }
}

Projects.childContextTypes = {
  reactIconBase: React.PropTypes.object,
};

export default Projects;
