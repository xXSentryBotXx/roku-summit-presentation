// Import React
import React from 'react';

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
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={3} fit lineHeight={1} textColor="secondary">
            Los Gatos, California.
          </Heading>
          <Heading size={3} fit lineHeight={1} textColor="tertiary">
            October 8th and 9th, 2019.
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Roku Summit Topics
          </Heading>
          <List>
            <ListItem>9.2 Firmware update.</ListItem>
            <ListItem>Dev Dashboard Features</ListItem>
            <ListItem>Roku Debugging!</ListItem>
            <ListItem>SceneGraph</ListItem>
            <ListItem>RAF</ListItem>
            <ListItem>Voice Commands</ListItem>
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
            RAF
          </Heading>
          <List>
            <Appear><ListItem>Client Side Ad Stitching </ListItem></Appear>
            <Appear><ListItem>In-Pod ad Stitching</ListItem></Appear>
            <Appear><ListItem>JIT Ad Fetching</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Voice Commands
          </Heading>
          <List>
            <Appear><ListItem>Voice Commands</ListItem></Appear>
            <Appear><ListItem>Direct to Play</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Questions?</Quote>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
