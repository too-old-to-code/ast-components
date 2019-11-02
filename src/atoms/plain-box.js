import PropTypes from 'prop-types';
import styled from 'styled-components';
import { checkColor } from '../helpers';

export const AstPlainBox = styled.div`
  ${props => (props.noPadding ? 'padding: 0' : 'padding: 10px')};
  background-color: ${props => checkColor(props)};
  border: 1px solid grey;
  margin: 10px;
`;

AstPlainBox.propTypes = {
  noPadding: PropTypes.bool,
  danger: PropTypes.bool,
};

AstPlainBox.defaultProps = {
  noPadding: false,
  danger: false,
};
