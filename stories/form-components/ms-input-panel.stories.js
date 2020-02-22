import React from 'react';

import { MsInputPanel, MsInputGroup } from '../../src/form-components';

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
