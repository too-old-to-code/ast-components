import React from 'react';
// import { action } from '@storybook/addon-actions';
import { AstShadowBox } from '../../src/atoms/shadow-box';

export default {
  title: 'Atoms.ShadowBox',
};

export const ShadowBox = () => {
  return <AstShadowBox>Here is some text</AstShadowBox>;
};

export const ShadowBoxVariant = () => {
  return (
    <AstShadowBox bottom color="dodgerblue">
      <span style={{ color: 'white', fontFamily: 'sans-serif' }}>Here is some text</span>
    </AstShadowBox>
  );
};
