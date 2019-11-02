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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { SortableList } from '../../src/molecules/sortable-list';
import { SortableList } from '../../src/app';
import { FlexBox } from '../../src/app';
import { AstMainArea } from '../../src/app';
import { AstModalConductor } from '../../src/app';

export default {
  title: 'Organisms.Test',
};

const theme1 = {
  colors: {
    default: 'grey',
    primary: 'blue',
    info: 'cyan',
    success: 'green',
    warning: 'orange',
    danger: 'red',
  },
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

const theme = {
  colors: {
    default: '#718093',
    primary: '#7f8fa6',
    info: '#00a8ff',
    success: '#4cd137',
    warning: '#fbc531',
    danger: '#e84118',
    light: '#f5f6fa',
    lightish: '#dcdde1',
    dark: '#2f3640',
    darkish: '#353b48',
  },
  menu: {
    textColor: 'dodgerblue',
    hoverTextColor: 'yellow',
    background: 'linear-gradient(to left, #243B55, #141E30);',
  },
  navbar: {
    textColor: '#e7e7e7',
    hoverTextColor: 'white',
    background: '#192a56',
    backgroundSelected: '#2dbeff',
    height: '55px',
  },
  sidebar: {
    background: '#273c75',
    textColor: 'grey',
    collapsedWidth: '55px',
    width: '300px',
  },
};

export const Test = () => {
  return (
    <ThemeProvider theme={theme}>
      <AstModalConductor isModalActive={false} />
      <div>
        <Bubble>hello</Bubble>
        {<AstSidebar></AstSidebar>}
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
        <AstMainArea>
          <SortableList>
            {[
              { id: 1, name: 'cat', category: 'word' },
              { id: 2, name: 'dog', category: 'word' },
              { id: 4, name: 'dog', category: 'word' },
              { id: 5, name: 'dog', category: 'word' },
              { id: 6, name: 'dog', category: 'word' },
              { id: 7, name: 'dog', category: 'word' },
              { id: 8, name: 'dog', category: 'word' },
              { id: 9, name: 'dog', category: 'word' },
              { id: 10, name: 'dog', category: 'word' },
              { id: 11, name: 'dog', category: 'word' },
              {
                id: 3,
                name:
                  'The cat bit the dog very hard, to the point that the poor dog whelped and ran away as fast as his little legs would carry him.',
                category: 'sentence',
              },
            ].map(obj => {
              return (
                <AstDraggableBox data-id={obj.id} category={obj.category} key={obj.id} lightish>
                  {obj.name}
                </AstDraggableBox>
              );
            })}
          </SortableList>
        </AstMainArea>
      </div>
    </ThemeProvider>
  );
};
