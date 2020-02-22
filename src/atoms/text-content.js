import React from 'react';
import styled from 'styled-components';

export const TextContent = styled.div.attrs(() => ({
  contentEditable: true,
}))`
  height: 40px;
  width: 300px;
  border: 1px solid blue;
`;
