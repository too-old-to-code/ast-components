import React from 'react';
// import { action } from '@storybook/addon-actions';

// import { text } from '@storybook/addon-knobs';
// import { addParameters, storiesOf } from '@storybook/react';
// import readme from './input-group.readme.md';
// import { withInfo } from '@storybook/addon-info';

import { MsInputGroup, MsTextAreaWithHighlight } from '../../src/form-components';
// import { MsTextArea } from '../../src/form-components';

export default {
  title: 'FormComponents.MsInputGroup',
};

export const ExampleMsInputGroup = () => (
  <div>
    <MsInputGroup label="Word" extraDetail="(in English)" id="primary-lang"></MsInputGroup>
    <MsInputGroup
      label="Word"
      extraDetail="(in Spanish)"
      id="secondary-lang"
      chars={['ñ', 'ë', 'g', 'p']}
    ></MsInputGroup>
    <MsInputGroup label="Memestory" id="memestory" textarea></MsInputGroup>
    <MsTextAreaWithHighlight label="stuff" id="other" />
  </div>
);
