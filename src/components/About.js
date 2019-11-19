import React from 'react';
import { Box, Flex, NavLink, PanelHeader, Text } from 'rebass';
import Email from 'react-icons/lib/md/mail-outline';
import Facebook from 'react-icons/lib/fa/facebook-official';
import Instagram from 'react-icons/lib/fa/instagram';
import Twitter from 'react-icons/lib/fa/twitter-square';
import Github from 'react-icons/lib/go/mark-github';

const cols = [
  {
    href: 'mailto:daniel.book.93@gmail.com?Subject=Hello!',
    target: '_blank',
    children: 'Mail',
    icon: <Email />,
  },
  {
    href: 'https://www.facebook.com/Danielbook93',
    target: '_blank',
    children: 'Facebook',
    icon: <Facebook />,
  },
  {
    href: 'https://www.instagram.com/danielbook',
    target: '_blank',
    children: 'Instagram',
    icon: <Instagram />,
  },
  {
    href: 'https://twitter.com/Daniel_Book',
    target: '_blank',
    children: 'Twitter',
    icon: <Twitter />,
  },
  {
    href: 'https://github.com/Danielbook',
    target: '_blank',
    children: 'Github',
    icon: <Github />,
  },
];

const texts = [
  'Hi! My name is Daniel and I have recently started my fifth and final year at M.Sc in Media technology.',
  'My main interests lie in the realm of programming(mainly web and graphics), information visualization, but also recently in machine learning and AI-programming',
  'Photography is also a passion of mine, mainly in portraiture and landscape. Check out some of my photos down below.',
];
/* eslint-disable react/no-array-index-key */

const About = () => (
  <div>
    <PanelHeader my={1} f={[4, 5, 6]}>
      About
    </PanelHeader>

    {texts.map((text, n) => (
      <Text key={n}>
        {text}
      </Text>
    ))}

    <Flex>
      {cols.map((item, i) => (
        <Box key={i} px={1} py={2} width={1 / 5}>
          <Text center>
            <NavLink
              key={i}
              {...item}
              f={30}
            >
              {item.icon}
            </NavLink>
          </Text>
        </Box>
      ))}

    </Flex>
  </div>
);

export default About;
