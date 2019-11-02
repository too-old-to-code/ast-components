import PropTypes from 'prop-types';
import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  flex: ${props => props.flex}
  min-width: 0;
`;

FlexBox.propTypes = {
  align: PropTypes.string,
  justify: PropTypes.string,
  flex: PropTypes.string,
};

FlexBox.defaultProps = {
  align: 'center',
  justify: 'center',
  flex: 'initial',
};
