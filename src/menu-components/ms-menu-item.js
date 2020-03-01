import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AstPlainBox } from '../atoms/plain-box';
import { MsDragHandle, MsFlexBox, MsCollapsible } from '../ms-atoms';
import { AstBadge } from '../atoms/badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TruncatedText } from '../atoms';
import { MsInputPanel } from '../form-components';
const DraggableBox = styled(AstPlainBox)`
  display: flex;
  font-family: ${({ theme }) => theme && theme.font && theme.font.primary};
  background-color: ${({ theme }) => theme && theme.colors && theme.colors.primary};
  > * {
    padding: 10px 5px;
  }
  + * .Collapsible__contentOuter {
    margin-top: -10px !important;
  }
`;

const IconBox = styled(MsFlexBox)`
  width: 30px;
  border-left: 1px solid grey;
`;

export const MsMenuItem = props => {
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
        <MsFlexBox flex="1" align="center">
          <TruncatedText>{props.children}</TruncatedText>
        </MsFlexBox>
        <MsFlexBox>
          <AstBadge>{props.category}</AstBadge>
        </MsFlexBox>
        <IconBox onClick={() => doStuff(!isShown)}>
          <FontAwesomeIcon icon="edit" />
        </IconBox>
        <MsDragHandle />
      </DraggableBox>
      <MsCollapsible accordionPosition={props.id + ''} open={isShown}>
        {props.content}
      </MsCollapsible>
    </div>
  );
};

MsMenuItem.propTypes = {
  children: PropTypes.string,
  category: PropTypes.string,
  content: PropTypes.required,
  id: PropTypes.string.required,
};
