import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { addReadme } from 'storybook-readme';

// import { withInfo } from '@storybook/addon-info';
addDecorator(withKnobs);
addDecorator(addReadme);
addDecorator(
  withInfo({
    header: false, // Global configuration for the info addon across all of your stories.
  })
);

addDecorator(withInfo);
addDecorator(withA11y);
// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
