import React from 'react';
import { Bubble } from './bubble';
import styled from 'styled-components';

export const NavbarDropdown = styled.div`
  position: absolute;
  top: ${({ theme }) => (theme.navbar && theme.navbar.height) || '54px'};
  right: 0;
  padding: 20px;
  border-top: none;
  display: none;
  background: #2dbeff;
`;
// border: 1px solid grey;
//
export const BubbleDropdown = styled(Bubble)`
  position: absolute;
  top: ${({ theme }) => (theme.navbar && `calc(${theme.navbar.height} + 5px)`) || '54px'};
  right: 5px;
  padding: 20px;
  border-top: none;
  display: none;
`;
// background: #2dbeff;
// display: none;
