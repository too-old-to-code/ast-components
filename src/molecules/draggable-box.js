import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AstPlainBox } from '../atoms/plain-box';
import { DragHandle } from '../atoms/drag-handle';
import { FlexBox } from '../atoms/flex-box';
import { AstBadge } from '../atoms/badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TruncatedText } from '../atoms';
import { AstCollapsible } from '../atoms/collapsible';
import { Panel } from './form-panel';
const DraggableBox = styled(AstPlainBox)`
  display: flex;
  > * {
    padding: 10px 5px;
  }
  + * .Collapsible__contentOuter {
    margin-top: -10px !important;
  }
`;

const IconBox = styled(FlexBox)`
  width: 30px;
  border-left: 1px solid grey;
`;

export const AstDraggableBox = props => {
  const [isShown, toggleShown] = useState(false);
  const [buffer, toggleBuffer] = useState(true);
  function doStuff() {
    console.log(buffer);
    if (!buffer) return;
    toggleBuffer(false);
    toggleShown(!isShown);
    setTimeout(() => {
      toggleBuffer(true);
    }, 200);
  }
  return (
    <div>
      <DraggableBox noPadding {...props}>
        <FlexBox flex="1" align="center">
          <TruncatedText>{props.children}</TruncatedText>
        </FlexBox>
        <FlexBox>
          <AstBadge>{props.category}</AstBadge>
        </FlexBox>
        <IconBox onClick={() => doStuff(!isShown)}>
          <FontAwesomeIcon icon="edit" />
        </IconBox>
        <DragHandle justify="center" align="center">
          <FontAwesomeIcon icon="grip-vertical" />
        </DragHandle>
      </DraggableBox>
      <AstCollapsible accordionPosition={props.id + ''} open={isShown}>
        <div
          style={{
            margin: '-10px 10px 0 10px',
            padding: '10px',
            overflow: 'hidden',
            background: '#e3d9d9',
          }}
        >
          <Panel />
        </div>
      </AstCollapsible>
    </div>
  );
};

AstDraggableBox.propTypes = {
  children: PropTypes.string,
  category: PropTypes.string,
};
