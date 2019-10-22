import './navbar.scss';
import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  color: white;
  background-color: grey;
  ${props => props.theme.navbar}
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 54px;
  justify-content: space-between;
`;
// @media (min-width: ${'768'}px) {
// }

// display: flex;
// justify-content: space-between;
const Span = styled.span`
  @media (min-width: ${'768'}px) {
    display: none;
  }
`;

export const Navbar = props => {
  const [isActive, toggleActive] = useState(false);
  return (
    <Nav>
      <Span>
        <button
          className={`hamburger hamburger--${props.menuBtn || 'collapse'} ${
            isActive ? 'is-active' : ''
          }`}
          type="button"
          onClick={() => toggleActive(!isActive)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </Span>
      <div style={{ display: 'flex' }}>{}</div>
      <div style={{ display: 'flex' }}>{props.itemsRight}</div>
    </Nav>
  );
  // <span style={{ display: 'flex' }}>{props.itemsLeft}</span>
};
