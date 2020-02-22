import React, { useState } from 'react';
import styled from 'styled-components';
import { BubbleDropdown } from './navbar-dropdown';
const Dropdown = styled.div`
  position: relative;
`;

export const AstDropdown = props => {
  const [visibilityStatus, toggleVisibility] = useState(false);
  return (
    <Dropdown onClick={() => toggleVisibility(!visibilityStatus)}>
      {props.trigger}
      <BubbleDropdown
        onClick={e => e.stopPropagation()}
        className={visibilityStatus ? 'selected' : ''}
      >
        {props.children}
      </BubbleDropdown>
    </Dropdown>
  );
};
