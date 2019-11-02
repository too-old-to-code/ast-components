import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const AstPlainBox = styled.div`
  ${props => (props.noPadding ? 'padding: 0' : 'padding: 10px')};
  border: 1px solid grey;
  margin: 10px;
`;
