import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../src/atoms/buttons';
import { text, boolean, radios, optionsKnob, array, select } from '@storybook/addon-knobs';
import { addParameters } from '@storybook/react';
import readme from './buttons.readme.md';
import { theme } from '../../src/themes/theme-1';
import { ThemeProvider } from 'styled-components';
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

const label = 'Colors';
const options = {
  default: 'default',
  primary: 'primary',
  warning: 'warning',
  danger: 'danger',
  success: 'success',
  info: 'info',
};
const defaultValue = 'warning';
const groupId = 'types';

export const Primary = () => {
  const value = radios(label, options, defaultValue, groupId);
  const currentVal = {};
  currentVal[value] = true;

  return (
    <ThemeProvider theme={theme}>
      <Button
        disabled={boolean('Disabled', false)}
        {...currentVal}
        onClick={() => console.log('clicked')}
      >
        {text('value', 'Hello Storybook')}
      </Button>
    </ThemeProvider>
  );
};

export const Danger = () => (
  <ThemeProvider theme={theme}>
    <Button danger onClick={action('clicked')}>
      {text('value', 'Hello Storybook')}
    </Button>
    <Button danger disabled onClick={action('clicked')}>
      {text('value', 'Hello Storybook')}
    </Button>
  </ThemeProvider>
);

export const Default = () => (
  <ThemeProvider theme={theme}>
    <Button default onClick={action('clicked')}>
      {text('value', 'Hello Storybook')}
    </Button>
    <Button default disabled onClick={action('clicked')}>
      {text('value', 'Hello Storybook')}
    </Button>
  </ThemeProvider>
);

export const Success = () => (
  <ThemeProvider theme={theme}>
    <Button success onClick={action('clicked')}>
      {text('value', 'Hello Storybook')}
    </Button>
    <Button success disabled onClick={action('clicked')}>
      {text('value', 'Hello Storybook')}
    </Button>
  </ThemeProvider>
);

export const Info = () => (
  <ThemeProvider theme={theme}>
    <Button info onClick={action('clicked')}>
      {text('value', 'Hello Storybook')}
    </Button>
    <Button info disabled onClick={action('clicked')}>
      {text('value', 'Hello Storybook')}
    </Button>
  </ThemeProvider>
);

export const Warning = () => (
  <ThemeProvider theme={theme}>
    <Button warning onClick={action('clicked')}>
      {text('value', 'Hello Storybook')}
    </Button>
    <Button warning disabled onClick={action('clicked')}>
      {text('value', 'Hello Storybook')}
    </Button>
  </ThemeProvider>
);

Primary.story = {
  name: 'Primary',
};

Danger.story = {
  name: 'Danger',
};

Default.story = {
  name: 'Default',
};

Success.story = {
  name: 'Success',
};

Info.story = {
  name: 'Info',
};

Warning.story = {
  name: 'Warning',
};
