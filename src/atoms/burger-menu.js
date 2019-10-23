import './navbar.scss';
import React from 'react';
import styled from 'styled-components';

const Menu = styled.button.attrs(({ isActive, menuBtn }) => ({
  className: `hamburger hamburger--${menuBtn || 'spin'} ${
    isActive ? 'is-active' : ''
  } sidebar-menu`,
  type: 'button',
}))`
  z-index: 200 !important;
  position: fixed;
  left: 0;
  @media (min-width: ${'768'}px) {
    display: none !important;
  }
`;

export const BurgerMenu = props => {
  return (
    <Menu onClick={props.toggleOpen} isActive={props.isActive}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </Menu>
  );
};
