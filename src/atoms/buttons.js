import React from 'react';
// import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const PrimaryButton = styled(Button)`
  color: dodgerblue;
  background-color: orange;
  &:hover {
    color: green;
    background-color: gold;
  }
  border: 2px solid palevioletred;
`;

export const SecondaryButton = styled(Button)`
  color: white;
  background-color: black;
  &:hover {
    color: green;
    background-color: gold;
  }
  border: 2px solid palevioletred;
`;

export const DefaultButton = styled(Button)`
  color: dodgerblue;
  background-color: orange;
  &:hover {
    color: green;
    background-color: gold;
  }
  border: 2px solid palevioletred;
`;
