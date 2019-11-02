import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FlexBox } from './flex-box';

export const DragHandle = styled(FlexBox).attrs(props => ({
  className: 'drag-handle',
}))`
  width: 50px;
  background-color: white;
  opacity: 0.3;
`;
