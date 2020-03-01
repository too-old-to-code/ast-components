import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import styled from 'styled-components';

const MsCollapsibleInner = styled.div`
  margin: -10px 10px 0 10px;
  padding: '10px';
  overflow: hidden;
  background-color: ${({ theme }) => theme && theme.colors && theme.colors.secondary};
`;

export const MsCollapsible = props => {
  return (
    <Collapsible
      trigger={props.initial}
      open={props.open}
      accordionPosition={props.accordionPosition}
      transitionTime={170}
    >
      <MsCollapsibleInner>{props.children}</MsCollapsibleInner>
    </Collapsible>
  );
};

MsCollapsible.propTypes = {
  initial: PropTypes.object,
  open: PropTypes.bool,
  accordionPosition: PropTypes.string,
  children: PropTypes.object,
};
