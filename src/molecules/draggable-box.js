import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AstPlainBox } from '../atoms/plain-box';
import { DragHandle } from '../atoms/drag-handle';
import { FlexBox } from '../atoms/flex-box';
import { AstBadge } from '../atoms/badge';

const DraggableBox = styled(AstPlainBox)`
  display: flex;
  > * {
    padding: 10px 5px;
  }
`;

export const AstDraggableBox = props => {
  return (
    <DraggableBox noPadding>
      <FlexBox flex={1} justify="flex-start" align="center">
        {props.children}
      </FlexBox>
      <FlexBox>
        <AstBadge>{props.category}</AstBadge>
      </FlexBox>
      <DragHandle justify="center" align="center">
        ^
      </DragHandle>
    </DraggableBox>
  );
};
