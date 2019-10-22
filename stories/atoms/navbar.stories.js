import React from 'react';
import { Navbar } from '../../src/atoms/navbar';
import { NavbarItem } from '../../src/atoms/navbar-item';
import { setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import readme from './navbar.readme.md';
import { addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

setAddon(JSXAddon);

addParameters({
  readme: {
    codeTheme: 'duotone-sea',
    sidebar: readme,
  },
});

const theme = {
  navbar: `
    font-family: sans-serif;
    color: dodgerblue;
    background-color: dodgerblue;
    &:hover {
      color: green;
      background-color: blue;
    }
  `,
};

// add('story for my component');
export default {
  title: 'Atoms.Navbar',
};

export const Nav = () => (
  <ThemeProvider theme={theme}>
    <Navbar
      menuBtn="spin"
      itemsLeft={
        <React.Fragment>
          <NavbarItem>hello</NavbarItem>
          <NavbarItem>goodbye</NavbarItem>
        </React.Fragment>
      }
      itemsRight={
        <React.Fragment>
          <NavbarItem>hello</NavbarItem>
          <NavbarItem>goodbye</NavbarItem>
        </React.Fragment>
      }
    ></Navbar>
  </ThemeProvider>
);

Nav.story = {
  name: 'Navbar',
};
