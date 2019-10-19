import './navbar.scss';
import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  color: white;
  background-color: grey;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Navbar = () => {
  const [isActive, toggleActive] = useState(false);
  return (
    <Nav>
      <span>
        <button
          className={`hamburger hamburger--collapse ${isActive ? 'is-active' : ''}`}
          type="button"
          onClick={() => toggleActive(!isActive)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </span>
    </Nav>
  );
};
