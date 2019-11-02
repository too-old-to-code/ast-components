import React from 'react';
import styled from 'styled-components';

export const Sidebar = styled.aside.attrs(props => ({
  className: props.isActive ? 'is-active' : '',
}))`
  padding-top: ${({ theme }) => `calc(${theme.navbar.height}*2)`};
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => (theme.sidebar && theme.sidebar.background) || '#404e53'};
  color: ${({ theme }) => (theme.sidebar && theme.sidebar.textColor) || 'black'};
  transition: transform 0.2s;
  @media (max-width: ${'767'}px) {
    width: 100%;
    &.is-active {
      transform: translateX(calc(55px - 100%));
    }
  }
`;
