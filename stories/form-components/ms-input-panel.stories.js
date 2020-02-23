import React, { useState } from 'react';

import { MsInputPanel, MsInputGroup, MsInputGroupEditor } from '../../src/form-components';

export default {
  title: 'FormComponents.MsInputPanel',
};

export const ExampleMsInputGroupPanel = () => (
  <MsInputPanel>
    <MsInputGroup label="Word" extraDetail="(in English)" id="primary-lang"></MsInputGroup>
    <MsInputGroup
      label="Word"
      extraDetail="(in Spanish)"
      id="secondary-lang"
      chars={['ñ', 'ë', 'g', 'p']}
    ></MsInputGroup>
    <MsInputGroup label="Memestory" id="memestory" textarea></MsInputGroup>
  </MsInputPanel>
);

export const MyEditor = () => {
  const [value, setValue] = useState('');
  return (
    <MsInputPanel>
      <MsInputGroup label="Lesson" id="lesson"></MsInputGroup>

      <MsInputGroupEditor label="Lesson" />
    </MsInputPanel>
  );
};
