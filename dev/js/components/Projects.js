import React from "react";
import {Flex, Box} from "reflexbox";

import Github from "react-icons/lib/go/mark-github";
import Laptop from "react-icons/lib/fa/laptop";

import {PageHeader, Embed, Card, CardImage, Heading, Text, Space, NavItem} from "rebass";

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {
      reactIconBase: {
        color: 'black',
        size:  18
      }
    }
  }

  render() {
    return (
      <div>
        <PageHeader
          my={1}
          heading='Projects'
          description=''/>
        <Flex wrap gutter={2}>
          {this.props.projects.map(({image, heading, text, type, link, github}, i) => (
            <Box key={i} col={12} sm={4} p={2}>
              {type === 'video' ?
                <Card>
                  <Embed ratio={1}>
                    <iframe
                      allowFullScreen
                      src="https://www.youtube.com/embed/crZpxgsYBw8"
                    />
                  </Embed>
                  <Flex align='center'>
                    <Heading level={4} children={heading}/>
                    <Space auto/>
                    {link ? (
                      <NavItem href = {link} target="_blank">
                        {type === 'webpage' ? <Laptop /> : null}
                      </NavItem>) : null }
                    {github ? (<NavItem href={github} target="_blank">
                      <Github />
                    </NavItem>) : null }
                  </Flex>
                  <Text small children={text}/>
                </Card>
                :
                <Card>
                  <CardImage src={image}/>
                  <Flex align='center'>
                    <Heading level={4} children={heading}/>
                    <Space auto/>
                    {link ? (
                      <NavItem href = {link} target="_blank">
                        {type === 'webpage' ? <Laptop /> : null}
                      </NavItem>) : null }

                    {github ? (<NavItem href={github} target="_blank">
                      <Github />
                    </NavItem>) : null }
                  </Flex>
                  <Text small children={text}/>
                </Card>
              }
            </Box>
          ))}
        </Flex>
      </div>
    )
  }
}

Projects.childContextTypes = {
  reactIconBase: React.PropTypes.object
};

export default Projects;
