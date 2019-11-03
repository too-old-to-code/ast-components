import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { AstModalWrapper } from './modal-wrapper';

const FADE_SPEED = 0.2;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const ModalBackground = styled.div.attrs(props => ({
  className: props.isModalActive ? 'modal-active' : '',
}))`
  font-family: sans-serif;
  visibility: hidden;
  display: flex;
  position: fixed;
  transition: visibility ${FADE_SPEED}s;
  animation: ${fadeOut} ${FADE_SPEED}s ease-in;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  align-items: center;
  justify-content: center;
  z-index: 1000;
  &.modal-active {
    visibility: visible;
    animation: ${fadeIn} ${FADE_SPEED}s ease-in;
  }
`;

export const AstModalConductor = ({ children, isModalActive }) => {
  // const [isOpen, toggleOpen] = useState(false);
  const openModal = useRef();

  useEffect(() => {
    let targetElement = openModal;
    if (isModalActive) {
      disableBodyScroll(targetElement);
    } else {
      enableBodyScroll(targetElement);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isModalActive]);
  return (
    <ModalBackground isModalActive={isModalActive} ref={openModal}>
      {children(isModalActive)}
    </ModalBackground>
  );
};
