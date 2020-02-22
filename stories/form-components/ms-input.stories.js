import React, { useState } from 'react';
// import { action } from '@storybook/addon-actions';

// import { text } from '@storybook/addon-knobs';
// import { addParameters, storiesOf } from '@storybook/react';
// import readme from './input-group.readme.md';
// import { withInfo } from '@storybook/addon-info';

import { MsInput, MsTextArea } from '../../src/form-components';
// import { MsTextArea } from '../../src/form-components';

export default {
  title: 'FormComponents.MsInput',
};

export const ExampleMsInput = () => <MsInput />;

export const ExampleMsTextArea = () => <MsTextArea />;
