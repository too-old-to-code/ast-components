import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SLIDE_SPEED = 0.2;

const slideIn = keyframes`
  from { transform: translateY(-200px) }
  to { transform: translateY(0)}
`;

const slideOut = keyframes`
  from { transform: translateY(0) }
  to { transform: translateY(-200px)}
`;

const ModalWrapperBase = styled.div`
  animation: ${slideOut} ${SLIDE_SPEED}s ease-in;
  transform: translateY(-200px);
  display: flex;
  flex-direction: column;
  width: 400px;
  min-height: 300px;
  background: white;
  color: black;
  .modal-active & {
    animation: ${slideIn} ${SLIDE_SPEED}s ease-out;
    transform: translateY(0);
  }
  @media (max-width: ${'767'}px) {
    max-width: 100%;
    margin: 0 5px;
    min-height: 50%;
  }
`;

// animation: ${zoomOut} ${SLIDE_SPEED}s ease-in;
// .modal-active & {
//   animation: ${zoomIn} ${SLIDE_SPEED}s ease-out;
//   transform: translateZ(0);
// }
const ModalHeading = styled.header`
  background: ${props => props.theme.colors.light};
  text-align: center;
`;

const ModalMain = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  @media (max-width: ${'767'}px) {
    flex-direction: column;
  }
`;

const ModalFooter = styled.footer`
  position: relative;
  display: flex;
`;

const IconWrapper = styled.span`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  color: ${props => props.theme.colors[props.icon]};
  border-right: #f4f4f4 2px solid;
  @media (max-width: ${'767'}px) {
    border-right: initial;
    padding: 20px;
  }
`;

const TextWrapper = styled.span`
  flex: 2;
  align-items: center;
  display: flex;
  margin-left: 25px;
  @media (max-width: ${'767'}px) {
    padding: 20px 5px;
    margin-right: 20px;
  }
`;

export const AstModalWrapper = props => {
  return (
    <ModalWrapperBase>
      {props.heading && (
        <ModalHeading>
          <h2>{props.heading}</h2>
        </ModalHeading>
      )}
      <ModalMain>
        {props.icon && (
          <IconWrapper>
            {props.icon === 'warning' && <FontAwesomeIcon icon="exclamation-triangle" size="3x" />}
            {props.icon === 'info' && <FontAwesomeIcon icon="info-circle" size="3x" />}
          </IconWrapper>
        )}
        <TextWrapper>{props.children}</TextWrapper>
      </ModalMain>
      {props.footer && <ModalFooter>{props.footer}</ModalFooter>}
    </ModalWrapperBase>
  );
};

AstModalWrapper.propTypes = {
  heading: PropTypes.string,
  icon: PropTypes.oneOf(['warning', 'info']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  footer: PropTypes.object,
};
