import React from "react";
import {Flex, Box} from "reflexbox";
import {Footer, Divider, Block, Heading, NavItem} from "rebass";
import Facebook from "react-icons/lib/fa/facebook-official";
import Instagram from "react-icons/lib/fa/instagram";
import Twitter from "react-icons/lib/fa/twitter-square";
import Github from "react-icons/lib/go/mark-github";


//TODO redo contact info


const cols = [
  {
    heading: 'Contact',
    links:   [
      {href: 'mailto:daniel.book.93@gmail.com?Subject=Hello!', target:"_blank", children: 'Mail'},
      {href: '', children: 'Telefon'},
    ]
  },
  {
    heading: 'Social Media',
    links:   [
      {href: 'https://www.facebook.com/Danielbook93', target:"_blank", children: 'Facebook', icon: <Facebook />},
      {href: 'https://www.instagram.com/danielbook', target:"_blank", children: 'Instagram', icon: <Instagram />},
      {href: 'https://twitter.com/Daniel_Book', target:"_blank", children: 'Twitter', icon: <Twitter />},
      {href: 'https://github.com/Danielbook', target:"_blank", children: 'Github', icon: <Github />}
    ]
  },
];

class MegaFooter extends React.Component {
  render() {
    return (
      <Footer
        mt={4}
        color='white'
        backgroundColor='black'>
        <Box col={12} px={2} py={4}>
          <Flex wrap gutter={2}>
            {cols.map(({heading, links}, i) => (

              <Box key={i}
                   px={3}
                   col={12}
                   sm={12 / cols.length}>
                <Heading
                  level={4}
                  size={3}
                  alt
                  children={heading}/>
                <Block borderTop py={2}>
                  {links.map((link, i) => (
                    <NavItem key={i}
                             style={{
                               paddingLeft:  0,
                               paddingRight: 0,
                             }}
                             px={0}
                             {...link}
                    />
                  ))}
                </Block>
              </Box>
            ))}
          </Flex>
          <Divider />
        </Box>
      </Footer>
    );
  }
}

export default MegaFooter;