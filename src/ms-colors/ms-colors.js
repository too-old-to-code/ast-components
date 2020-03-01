import React from 'react';
import styled from 'styled-components';

const ColorBox = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Primary = styled(ColorBox)`
  background-color: ${({ theme }) => theme && theme.colors && theme.colors.primary};
`;

const Secondary = styled(ColorBox)`
  background-color: ${({ theme }) => theme && theme.colors && theme.colors.secondary};
`;

export const MsColors = () => {
  return (
    <div>
      <Primary>Primary</Primary>
      <Primary light>Primary Light</Primary>
      <Secondary>Secondary</Secondary>
      <Secondary light>Secondary Light</Secondary>
    </div>
  );
};
