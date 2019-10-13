import React from 'react';
import { action } from '@storybook/addon-actions';
import { TextInput } from '../src/atoms/inputs';
import { text, boolean, number } from '@storybook/addon-knobs';
import { addParameters } from '@storybook/react';
import readme from '../README.md';

export default {
  title: 'Input',
};

export const Text = () => <TextInput type="text" maxLength="4" />;

export const NumberInput = () => <TextInput type="number" max="4" />;
