import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  primary: `
    color: dodgerblue;
    background-color: orange;
    &:hover {
      color: green;
      background-color: blue;
    }
  `,
  secondary: `
    color: dodgerblue;
    background-color: orange;
    &:hover {
      color: green;
      background-color: gold;
    }
  `,
  default: `
    color: dodgerblue;
    background-color: orange;
    &:hover {
      color: green;
      background-color: gold;
    }
  `,
};

const determineColor = props =>
  (props.primary && props.theme.primary) ||
  (props.secondary && props.theme.secondary) ||
  props.theme.default;

const Button = styled.button`
  color: dodgerblue;
  background-color: orange;
  &:hover {
    color: green;
    background-color: gold;
  }
  ${determineColor}
  ${props =>
    props.disabled &&
    `
      opacity: 0.25;
      cursor: not-allowed;
      &:hover {
        color: inherit;
        background-color: inherit;
      }
    `}
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const MyButton = props => (
  <ThemeProvider theme={theme}>
    <Button primary disabled>
      {props.children}
    </Button>
  </ThemeProvider>
);

MyButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
};
