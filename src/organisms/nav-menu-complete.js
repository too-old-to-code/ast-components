import React, { useState } from 'react';
import { Menu } from '../atoms/mobile-menu';
import { Navbar } from '../atoms/navbar';
import { BurgerMenu } from '../atoms/burger-menu';

export const NavMenuComplete = () => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <React.Fragment>
      <Navbar />
      <Menu isOpen={isOpen} />
      <BurgerMenu toggleOpen={() => toggleOpen(!isOpen)} isActive={isOpen} />
    </React.Fragment>
  );
};
