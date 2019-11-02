import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AstPlainBox } from '../atoms/plain-box';
import { DragHandle } from '../atoms/drag-handle';
import { FlexBox } from '../atoms/flex-box';
import { AstBadge } from '../atoms/badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TruncatedText } from '../atoms';

const DraggableBox = styled(AstPlainBox)`
  display: flex;
  > * {
    padding: 10px 5px;
  }
`;

const IconBox = styled(FlexBox)`
  width: 30px;
  border-left: 1px solid grey;
`;

export const AstDraggableBox = props => {
  return (
    <DraggableBox noPadding {...props}>
      <FlexBox flex="1" align="center">
        <TruncatedText>{props.children}</TruncatedText>
      </FlexBox>
      <FlexBox>
        <AstBadge>{props.category}</AstBadge>
      </FlexBox>
      <IconBox>
        <FontAwesomeIcon icon="edit" />
      </IconBox>
      <DragHandle justify="center" align="center">
        <FontAwesomeIcon icon="grip-vertical" />
      </DragHandle>
    </DraggableBox>
  );
};

AstDraggableBox.propTypes = {
  children: PropTypes.object,
  category: PropTypes.string,
};
