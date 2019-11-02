import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'center'};
  ${props => (props.flex ? `flex: ${props.flex}` : '')};
`;
