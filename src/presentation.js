// Import React
import React from 'react';
// import roughViz from 'rough-viz';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear
} from 'spectacle';

import { Bar, Pie, Donut, Scatter, BarH } from 'react-roughviz';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#DDD',
    secondary: '#662d91',
    tertiary: '#333',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Roku Summit 2019
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Roku Summit Topics
          </Heading>
          <List>
            <ListItem>9.2 Firmware update.</ListItem>
            <ListItem>Dev Dashboard Features</ListItem>
            <ListItem>Updated Cert Requirements</ListItem>
            <ListItem>Roku Debugging!</ListItem>
            <ListItem>SceneGraph</ListItem>
            <ListItem>Roku Pay</ListItem>
            <ListItem>RAF</ListItem>
            <ListItem>Voice Commands</ListItem>
            <ListItem>Roku Products</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            9.2 Firmware update
          </Heading>
          <List>
            <Appear><ListItem>Instant Sign up</ListItem></Appear>
            <Appear><ListItem>Roku universal search</ListItem></Appear>
            <Appear><ListItem>Roku Zones</ListItem></Appear>
            <Appear><ListItem>Featured Free</ListItem></Appear>
            <Appear><ListItem>CDN Switching</ListItem></Appear>
            <Appear><ListItem>Roku Pay</ListItem></Appear>
            <Appear><ListItem>Audio/CC Track Select</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Dev Dashboard Features
          </Heading>
          <List>
            <Appear><ListItem>Audience Insight Reports</ListItem></Appear>
            <Appear><ListItem>Multi-User access to same Dev Account</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Updated Certification Requirements
          </Heading>
          <List>
            <Appear><ListItem>April 1st, 2020:</ListItem></Appear>
            <Appear><ListItem>Enhanced transport controls</ListItem></Appear>
            <Appear><ListItem>Subscription services must implement RED in signup flow</ListItem></Appear>
            <Appear><ListItem>New - Instant Signup</ListItem></Appear>
            <Appear><ListItem>Fall 2020:</ListItem></Appear>
            <Appear><ListItem>Thumbnails must be displayed during trick play for VOD longer than 15 min</ListItem></Appear>
            <Appear><ListItem>Subscription services must support on device upgrade and downgrade</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Updated Certification Requirements
          </Heading>
          <List>
            <Appear><ListItem>Giga, Paolo, Jackson frozen at 9.1 and will not accept new builds after Oct 31</ListItem></Appear>
            <Appear><ListItem>deviceInfo.getVersion() is frozen on all 9s (will return 99999E99), use getOSVersion()</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Roku Debugging
          </Heading>
          <List>
            <Appear><ListItem>9.2 introduces a network debug protocol that works with Microsoft DAP IDEs</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            SceneGraph
          </Heading>
          <List>
            <Appear><ListItem>“rsg_version=1.2” is opt in for 9.2</ListItem></Appear>
            <Appear><ListItem>Roku working on Selenium style automation system but its not available yet</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Roku Pay
          </Heading>
          <List>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            RAF
          </Heading>
          <List>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Voice Commands
          </Heading>
          <List>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Roku Products
          </Heading>
          <List>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
            <Appear><ListItem></ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
