import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const AstShadowBox = styled.div`
  ${props => (props.noPadding ? 'padding: 0' : 'padding: 10px')};
  margin: 10px;
  ${props =>
    props.bottom
      ? `
        box-shadow: 0 10px 6px -6px #777;
      `
      : `position: relative;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        background-color: white !important;
        &:before,
        &:after {
          content: '';
          position: absolute;
          z-index: -1;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
          top: 10px;
          bottom: 10px;
          left: 10px;
          right: 10px;
        }
        &:after {
          right: 10px;
          left: auto;
          transform: skew(8deg) rotate(3deg);
        }`}
  &.sortable-chosen {
    box-shadow: 0 10px 6px -6px #777;
    border: 1px solid black;
    background-color: white;
    transform: translateZ(inherit);
  }

  ${props => `background-color: ${props.color};`}
`;
