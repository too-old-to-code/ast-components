import React from 'react';
import { action } from '@storybook/addon-actions';
import { MyButton, RedButton } from '../src/atoms/Button';
import { PrimaryButton, SecondaryButton } from '../src/atoms/buttons';
import { text, boolean, number } from '@storybook/addon-knobs';
import { addParameters } from '@storybook/react';
import readme from '../README.md';

export default {
  title: 'Button',
};

addParameters({
  readme: {
    // You can set the global code theme here.
    codeTheme: 'duotone-sea',
    content: readme,
    sidebar: readme,

    // You can exclude prop tables globally here.
    // excludePropTables: [ButtonWithPropTypes],
  },
});

export const Text = () => (
  <MyButton onClick={action('clicked')}>{text('Label', 'Hello Storybook')}</MyButton>
);

export const Primary = () => (
  <PrimaryButton disabled onClick={() => console.log('clicked')}>
    {text('Label', 'Hello Storybook')}
  </PrimaryButton>
);

export const Secondary = () => (
  <SecondaryButton disabled onClick={action('clicked')}>
    {text('Label', 'Hello Storybook')}
  </SecondaryButton>
);

export const emoji = () => (
  <RedButton onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </RedButton>
);

Text.story = {
  name: 'MyButton',
};

emoji.story = {
  name: 'RedButton',
};
