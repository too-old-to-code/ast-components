import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';

export const AstCollapsible = props => {
  return (
    <Collapsible
      trigger={props.initial}
      open={props.open}
      accordionPosition={props.accordionPosition}
      transitionTime={170}
    >
      {props.children}
    </Collapsible>
  );
};
