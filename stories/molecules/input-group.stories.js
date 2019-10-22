import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { PrimaryButton, SecondaryButton } from '../../src/atoms/buttons';
import { RadioButtonGroup, CheckboxGroup } from '../../src/molecules/input-group';
import { text } from '@storybook/addon-knobs';
import { addParameters, storiesOf } from '@storybook/react';
import readme from './input-group.readme.md';
import { withInfo } from '@storybook/addon-info';
export default {
  title: 'Molecules.InputGroup',
};

addParameters({
  readme: {
    codeTheme: 'duotone-sea',
    sidebar: readme,
  },
  text: 'gasraesasdfadgadfg',
});

const options = [
  { label: 'First', value: 'AA' },
  { label: 'Second', value: 'BB' },
  { label: 'Third', value: 'CC' },
  { label: 'Fourth', value: 'DD' },
];

export const MyGroup = () => {
  const [radioOption, changeRadioOption] = useState({ myVal: options[0].value });

  return (
    <div>
      <h2 id="radio-label">Label</h2>
      <div role="radiogroup" aria-labelledby="radio-label">
        <RadioButtonGroup
          options={options}
          name="demo"
          onChange={a => changeRadioOption({ ...radioOption, myVal: a })}
          value={radioOption.myVal}
        />
        {radioOption.myVal}
      </div>
    </div>
  );
};

export const Checkbox = () => {
  const [myForm, changeOptions] = useState({ myVal: [] });

  return (
    <div>
      <h2 id="radio-label">Label</h2>
      <div role="radiogroup" aria-labelledby="radio-label">
        <CheckboxGroup
          options={options}
          name="demo"
          onChange={a => changeOptions({ ...myForm, myVal: a })}
          value={myForm.myVal}
        />
      </div>
      {myForm.myVal.map(a => a)}
    </div>
  );
};

// storiesOf('bugger', module)
//   // .addDecorator(withInfo)
//   .add('test', () => <div>hello</div>, { info: 'tut tut' });
// // MyGroup.story = {};
