import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { addReadme } from 'storybook-readme';
import { jsxDecorator } from 'storybook-addon-jsx';

// import { withInfo } from '@storybook/addon-info';
// addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(addReadme);
addDecorator(jsxDecorator);
// addDecorator(
//   withInfo({
//     header: false, // Global configuration for the info addon across all of your stories.
//   })
// );

addDecorator(withA11y);
// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
