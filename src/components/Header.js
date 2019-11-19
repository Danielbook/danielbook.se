import React from 'react';
import { Banner, Box, Heading, Subhead } from 'rebass';
import styled from 'styled-components';
import BannerImg from '../img/background.jpg';

const StyledHeading = styled(Heading)`
  color: #444;
`;

const Header = () => (
  <div>
    <Banner
      bg="gray8"
      backgroundImage={BannerImg}
    >
      <div style={{
        position: 'absolute',
        top: 55,
        color: '#666',
      }}
      >
        <Box>
          <StyledHeading f={[6, 7, 8, 9]} center>
          Daniel Böök
          </StyledHeading>
          <Subhead f={[1, 2, 3, 4]}>
          M.Sc. student of Computer Science in Media Technology at LiU, attending my fifth year
          </Subhead>
        </Box>
      </div>
    </Banner>
  </div>
);

export default Header;
