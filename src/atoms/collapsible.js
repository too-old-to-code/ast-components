import React from 'react';
import PropTypes from 'prop-types';
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

AstCollapsible.propTypes = {
  initial: PropTypes.object,
  open: PropTypes.bool,
  accordionPosition: PropTypes.string,
  children: PropTypes.object,
};
