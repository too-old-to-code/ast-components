import styled from 'styled-components';
import { getButtonColors } from '../helpers';

export const Button = styled.button`
  font-size: 1.1em;
  margin: 1em;
  padding: 0.5em 1em;
  border: none;
  border-radius: ${props => props.theme.buttons.borderRadius};
  ${props => getButtonColors(props)}
  &:disabled {
    opacity: 0.5;
  }
`;

