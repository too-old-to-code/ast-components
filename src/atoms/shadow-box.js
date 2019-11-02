import PropTypes from 'prop-types';
import styled from 'styled-components';
import { checkColor } from '../helpers';

// function checkColor(props) {
//   switch (true) {
//     case props.danger:
//       return props.theme.colors.danger;
//     case props.success:
//       return props.theme.colors.success;
//     case props.default:
//       return props.theme.colors.default;
//     case props.primary:
//       return props.theme.colors.primary;
//     case props.warning:
//       return props.theme.colors.warning;
//     case props.info:
//       return props.theme.colors.info;
//     default:
//       return 'initial';
//   }
// }

export const AstShadowBox = styled.div`
  ${props => (props.noPadding ? 'padding: 0' : 'padding: 10px')};
  margin: 10px;
  ${props => {
    console.log('==========================', props);
    return props.bottom
      ? `
        box-shadow: 0 10px 6px -6px #777;
        background-color: yellow;
      `
      : `position: relative;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        background-color: ${checkColor(props)};
        &:before,
        &:after {
          content: '';
          position: absolute;
          z-index: -1;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
          top: 10px;
          bottom: 10px;
          left: 10px;
          right: 10px;
        }
        &:after {
          right: 10px;
          left: auto;
          transform: skew(8deg) rotate(3deg);
        }`;
  }}
`;

AstShadowBox.propTypes = {
  noPadding: PropTypes.bool,
  bottom: PropTypes.bool,
  color: PropTypes.string,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  default: PropTypes.bool,
};

AstShadowBox.defaultProps = {
  color: 'initial',
  danger: false,
  success: false,
  info: false,
  warning: false,
  default: false,
};
