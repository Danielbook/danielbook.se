// export default class Header extends React.Component {
//   render() {
//     return (
//       <header>
//           <div className="center">
//             <img src="img/danielhexbw.png" alt="Daniel"/>
//           </div>
//           <div className="center">
//               <h1>Daniel Böök</h1>
//               <p>M.Sc. student of Computer Science in Media Technology at Linköping University, attending my forth year</p>
//               <p>I am into programming, mainly web, apps and graphics</p>
//               <p>Photography is also a passion of mine, and you can view my photography portfolio down below</p>
//           </div>
//       </header>
//     );
//   }
// }

import React from 'react'
import { Box } from 'reflexbox'
import {
  Banner,
  Heading,
  Text,
  Button
} from 'rebass'

const Header = ({ toggle }) => (
  <Banner
    style={{
      minHeight: '75vh',
      paddingTop: 48,
      backgroundAttachment: 'fixed'
    }}
    backgroundImage='img/danielhexbw.png'>
    <Heading size={1} big children='Daniel Böök' />

  </Banner>
);

export default Header