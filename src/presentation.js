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
} from 'spectacle';

import { Bar, Pie, Donut, Scatter, BarH } from 'react-roughviz';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#662d91',
    secondary: '#DDD',
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
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <h3>Bar</h3>
          <Bar
            data='https://raw.githubusercontent.com/jwilber/random_data/master/flavors.csv'
            labels='flavor'
            values='price'
          />
        </Slide>
        <Slide>
          <h3>Pie</h3>
          <Pie
            data={{
              labels: ['North', 'South', 'East', 'West'],
              values: [10, 5, 8, 3]
            }}
            title='Regions'
            colors={['red', 'orange', 'blue', 'skyblue']}
            roughness={2}
          />
        </Slide>
        <Slide>
          <h3>Donut</h3>
          <Donut
            data={{
              labels: ['JNCO Jeans', 'Sweat Pants', 'Jorts'],
              values: [20, 10, 2]
            }}
            title='Pants I Got Clowned On For Wearing In High School'
            colors={['red', 'orange', 'blue', 'skyblue']}
            roughness={2}
          />
        </Slide>
        <Slide>
          <h3>Scatter</h3>
          <Scatter
            data={{
              x: [1, 2, 3, 7, 5, 9],
              y: [240, 40, 40, 160, 100],
            }}
            title='Regions'
            radius={[25, 10, 40, 30, 60]}
            colors={['green', 'red', 'blue', 'black']}
            axisRoughness={2}
          />
        </Slide>
        <Slide>
          <h3>BarH</h3>
          <BarH
            data={{
              labels: ['1992 Ford Aerostar Van', '2013 Kia Rio', '1980 Honda CB 125s', '1992 Toyota Tercel'],
              values: [8, 4, 6, 2]
            }}
            title="Vehicles I've Had"
            colors={['red', 'orange', 'blue', 'skyblue']}
            roughness={2}
          />
        </Slide>
      </Deck>
    );
  }
}
