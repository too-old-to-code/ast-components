import React from 'react';
import styled from 'styled-components';
import { MsFlexBox } from './ms-flexbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DragHandle = styled(MsFlexBox).attrs(() => ({
  className: 'drag-handle',
}))`
  width: 30px;
  // background-color: white;
  // opacity: 0.3;
  cursor: grab;
  border-left: 1px solid black;
`;

export const MsDragHandle = () => (
  <DragHandle justify="center" align="center">
    <FontAwesomeIcon icon="grip-vertical" />
  </DragHandle>
);
