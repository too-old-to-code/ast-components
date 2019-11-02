import React, { useState } from 'react';
import styled from 'styled-components';
import { Sidebar } from '../atoms/sidebar';
import { SideBurger } from '../atoms/burger-menu';

export const AstSidebar = props => {
  const [isOpen, toggleOpenState] = useState(false);
  return (
    <Sidebar isActive={isOpen}>
      <SideBurger toggleOpen={() => toggleOpenState(!isOpen)} isActive={isOpen} />
      {props.children}
    </Sidebar>
  );
};
