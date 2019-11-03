import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const FADE_SPEED = 0.2;
const SLIDE_SPEED = 0.2;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const slideIn = keyframes`
  from { transform: translateY(-200px) }
  to { transform: translateY(0)}
`;

const slideOut = keyframes`
  from { transform: translateY(0) }
  to { transform: translateY(-200px)}
`;

const ModalBackground = styled.div.attrs(props => ({
  className: props.isModalActive ? 'modal-active' : '',
}))`
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
  z-index: 100;
  align-items: center;
  justify-content: center;
  &.modal-active {
    visibility: visible;
    animation: ${fadeIn} ${FADE_SPEED}s ease-in;
  }
`;

const ModalWrapper = styled.div`
  animation: ${slideOut} ${SLIDE_SPEED}s ease-in;
  transform: translateY(-200px);
  min-width: 400px;
  min-height: 300px;
  background: white;
  color: black;
  .modal-active & {
    animation: ${slideIn} ${SLIDE_SPEED}s ease-out;
    transform: translateY(0);
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
  });
  return (
    <ModalBackground isModalActive={isModalActive} ref={openModal}>
      <ModalWrapper>{children(isModalActive)}</ModalWrapper>
    </ModalBackground>
  );

  // return (
  //   <ModalBackground isModalActive={isModalActive} ref={openModal}>
  //     <ModalWrapper>{children}</ModalWrapper>
  //   </ModalBackground>
  // );
};
