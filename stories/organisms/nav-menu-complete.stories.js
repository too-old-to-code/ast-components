import React from 'react';
import { NavMenuComplete } from '../../src/organisms/nav-menu-complete';
import { ThemeProvider } from 'styled-components';
import { NavbarDropdown, BubbleDropdown } from '../../src/atoms/navbar-dropdown';
import { AstSidebar } from '../../src/molecules/sliding-sidebar';
import { Bubble } from '../../src/atoms/bubble';
import Gravatar from 'react-gravatar';
import logo from '../../static/favicon.ico';
import { AstShadowBox } from '../../src/atoms/shadow-box';
import { AstPlainBox } from '../../src/atoms/plain-box';
import { AstDraggableBox } from '../../src/molecules/draggable-box';

import { SortableList } from '../../src/molecules/sortable-list';
export default {
  title: 'Organisms.Test',
};

const theme = {
  menu: {
    textColor: 'dodgerblue',
    hoverTextColor: 'yellow',
    background: 'linear-gradient(to left, #243B55, #141E30);',
  },
  navbar: {
    textColor: '#e7e7e7',
    hoverTextColor: 'white',
    background: '#74b9ff',
    backgroundSelected: '#2dbeff',
    height: '55px',
  },
  sidebar: {
    background: '#0984e3',
    textColor: 'grey',
  },
};

export const Test = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Bubble>hello</Bubble>
        {/*<AstSidebar></AstSidebar>*/}
        <NavMenuComplete
          burgerStyle="collapse"
          logo={<img style={{ height: '100%' }} src={logo} />}
          desktopItems={
            <React.Fragment>
              <span>About</span>
              <span>Home</span>
              <div>
                <Gravatar
                  email="andrewt51@hotmail.com"
                  size={35}
                  style={{ borderRadius: '50%', border: '2px solid white' }}
                />
                {/*<NavbarDropdown>otherstuff</NavbarDropdown>*/}
                <BubbleDropdown>Some stuff here</BubbleDropdown>
              </div>
            </React.Fragment>
          }
          mobileItems={
            <React.Fragment>
              <a href="#">About</a>
              <div>Home</div>
            </React.Fragment>
          }
        />

        <h1>helllo</h1>
        <h1>helllo</h1>
        <h1>helllo</h1>
        <SortableList>
          {[
            { id: 1, name: 'cat', category: 'word' },
            { id: 2, name: 'dog', category: 'word' },
            { id: 3, name: 'The cat bit the dog', category: 'sentence' },
          ].map(obj => {
            return (
              <AstDraggableBox data-id={obj.id} category={obj.category} key={obj.id}>
                <span className="">{obj.name}</span>
              </AstDraggableBox>
            );
          })}
        </SortableList>
        <h1>helllo</h1>
      </div>
    </ThemeProvider>
  );
};
