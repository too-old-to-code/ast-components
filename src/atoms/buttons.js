import styled, { css } from 'styled-components';
import { getButtonColors } from '../helpers';

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: none;
  border-radius: ${props => props.theme.buttons.borderRadius};
  ${props => getButtonColors(props)}
  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`;

const Link = styled.a`
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

export const PrimaryLink = styled(Link)`
  ${props => props.theme.primary}
  text-decoration: none;
  &:hover {
    color: green;
    background-color: gold;
  }
  border: 2px solid palevioletred;
`;

export const PrimaryButton = styled(Button)`
  ${props => props.theme.primary}
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
