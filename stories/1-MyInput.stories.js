import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { TextInput, Checkbox, AstRadioButton } from '../src/atoms/inputs';
import { text, boolean, number } from '@storybook/addon-knobs';
import { addParameters } from '@storybook/react';
import readme from '../README.md';

export default {
  title: 'Input',
};

export const Text = () => <TextInput type="text" maxLength="4" />;

export const NumberInput = () => <input type="number" max="4" />;
export const Check = () => {
  const [ticked, toggleTicked] = useState(false);
  return (
    <div>
      <Checkbox value={ticked} onChange={toggleTicked} />
      {String(ticked)}
    </div>
  );
};
export const RadioButton = () => {
  const [radioValue, changeRadioValue] = useState(1);
  return (
    <div>
      <AstRadioButton
        label="Amazing"
        name="test"
        value="1"
        selectedvalue={radioValue}
        changeRadioValue={changeRadioValue}
      />
      <AstRadioButton
        label="Something"
        name="test"
        value="2"
        selectedvalue={radioValue}
        changeRadioValue={changeRadioValue}
      />
      <AstRadioButton
        label="Great"
        name="test"
        value="3"
        selectedvalue={radioValue}
        changeRadioValue={changeRadioValue}
      />
    </div>
  );
};
// export const RadioButton = () => <AstRadioButton name="test"/>;
