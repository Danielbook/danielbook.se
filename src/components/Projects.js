/* eslint-disable indent */
import React from 'react';
import { Flex, Box } from 'reflexbox';

import Github from 'react-icons/lib/go/mark-github';
import Laptop from 'react-icons/lib/fa/laptop';
import Video from 'react-icons/lib/fa/youtube';

import { Embed, Card, BackgroundImage, Heading, Text, NavLink, PanelHeader } from 'rebass';

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
        <Flex wrap gutter={2}>
          {this.props.projects.map(({ image, heading, text, type, link, github, embed }, i) => (
            <Box key={i} col={12} sm={4} p={2}>
              {type === 'video' ?
                <Card>
                  <Embed ratio={1}>
                    <iframe
                      allowFullScreen
                      src={embed}
                    />
                  </Embed>
                  <Flex align="center">
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
                  <Text>
                    {text}
                  </Text>
                </Card>
                :
                <Card>
                  <BackgroundImage src={image} />
                  <Flex align="center">
                    <Heading f={[2, 3, 4]}>
                      {heading}
                    </Heading>
                    {link ? (
                      <NavLink href={link} target="_blank">
                        {type === 'webpage' ? <Laptop /> : null}
                      </NavLink>) : null }

                    {github ? (<NavLink href={github} target="_blank">
                      <Github />
                    </NavLink>) : null }
                  </Flex>
                  <Text>
                    {text}
                  </Text>
                </Card>
              }
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
