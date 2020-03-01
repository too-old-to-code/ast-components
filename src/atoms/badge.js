import styled from 'styled-components';

export const AstBadge = styled.span`
  background-color: ${({ theme }) => theme && theme.colors && theme.colors.navbar};
  color: white;
  padding: 4px;
  border-radius: 5px;
  font-size: 12px;
  font-family: sans-serif;
`;
