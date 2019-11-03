import React from 'react';
import styled from 'styled-components';

const ButtonSpacer = styled.div`
  display: flex;
  align-items: space-around;
  justify-content: center;
  height: 80px;
  flex: 1;
`;

const Space = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftSpace = styled(Space)`
  justify-content: flex-start;
`;

const RightSpace = styled(Space)`
  justify-content: flex-end;
`;
export const AstButtonSpacer = props => {
  return (
    <ButtonSpacer>
      <LeftSpace>{props.leftButton}</LeftSpace>
      <RightSpace>{props.rightButton}</RightSpace>
    </ButtonSpacer>
  );
};
