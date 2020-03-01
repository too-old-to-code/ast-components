import PropTypes from 'prop-types';
import styled from 'styled-components';

export const MsFlexBox = styled.div`
  display: flex;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  flex: ${props => props.flex}
  min-width: 0;
`;

MsFlexBox.propTypes = {
  align: PropTypes.string,
  justify: PropTypes.string,
  flex: PropTypes.string,
};

MsFlexBox.defaultProps = {
  align: 'center',
  justify: 'center',
  flex: 'initial',
};
