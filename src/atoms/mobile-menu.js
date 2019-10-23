import React from 'react';
import styled, { keyframes } from 'styled-components';
const SPEED = 0.1;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Menu = styled.nav.attrs(props => ({ className: props.isOpen ? 'is-open' : '' }))`
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: #3b3939;
  transition: visibility ${SPEED}s;
  animation: ${fadeOut} ${SPEED}s ease-in;
  &.is-open {
    visibility: visible;
    display: block;
    transition: visibility ${SPEED}s;
    animation: ${fadeIn} ${SPEED}s ease-in;
  }
`;
