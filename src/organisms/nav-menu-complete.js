import React, { useState, useEffect, useRef } from 'react';
import { Menu } from '../atoms/mobile-menu';
import { Navbar } from '../atoms/navbar';
import { BurgerMenu } from '../atoms/burger-menu';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export const NavMenuComplete = () => {
  const [isOpen, toggleOpen] = useState(false);
  const openMenu = useRef();
  useEffect(() => {
    let targetElement = openMenu;
    if (isOpen) {
      disableBodyScroll(targetElement);
    } else {
      enableBodyScroll(targetElement);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  });

  return (
    <React.Fragment>
      <Navbar />
      <Menu isOpen={isOpen} ref={openMenu} />
      <BurgerMenu toggleOpen={() => toggleOpen(!isOpen)} isActive={isOpen} />
    </React.Fragment>
  );
};

