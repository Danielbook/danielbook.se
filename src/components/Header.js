import React from 'react';
import { Banner, Box, Heading, Subhead } from 'rebass';
import BannerImg from '../img/me3.jpg';

const Header = () => (
  <Banner
    style={{
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
    }}
    backgroundImage={BannerImg}
  >
    <div style={{
      position: 'absolute',
      top: 55,
      color: '#666',
    }}
    >
      <Box>
        <Heading f={[6, 7, 8]} center>
          Daniel Böök
        </Heading>
        <Subhead f={[1, 2, 3]}>
          M.Sc. student of Computer Science in Media Technology at LiU, attending my fifth year
        </Subhead>
      </Box>
    </div>
  </Banner>
);

export default Header;
