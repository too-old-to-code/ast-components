import React from 'react';
import { MsColors } from '../../src/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/themes/theme-1';

export default {
  title: 'Colors.MsColors',
};

export const ExampleMsColors = () => (
  <ThemeProvider theme={theme}>
    <MsColors />
  </ThemeProvider>
);
