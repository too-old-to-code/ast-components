import React from 'react';
import { action } from '@storybook/addon-actions';
import { PrimaryButton, SecondaryButton, PrimaryLink } from '../../src/atoms/buttons';
import { text } from '@storybook/addon-knobs';
import { addParameters } from '@storybook/react';
import readme from './buttons.readme.md';

export default {
  title: 'Atoms.Buttons',
};

addParameters({
  readme: {
    // You can set the global code theme here.
    codeTheme: 'duotone-sea',
    // content: readme,
    sidebar: readme,

    // You can exclude prop tables globally here.
    // excludePropTables: [ButtonWithPropTypes],
  },
});

export const Primary = () => (
  <PrimaryButton disabled onClick={() => console.log('clicked')}>
    {text('value', 'Hello Storybook')}
  </PrimaryButton>
);

export const Link = () => (
  <PrimaryLink href="http://google.com">{text('value', 'Hello Storybook')}</PrimaryLink>
);

export const Secondary = () => (
  <SecondaryButton disabled onClick={action('clicked')}>
    {text('value', 'Hello Storybook')}
  </SecondaryButton>
);

Primary.story = {
  name: 'Primary',
};

Secondary.story = {
  name: 'Secondary',
};
