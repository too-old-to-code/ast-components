import styled from 'styled-components';

export const MsCharBlock = styled.span`
  // padding: 5px 10px;
  // margin: 1px 2px;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  border-radius: 40px 20px 40px 20px / 40px 20px 40px 20px;
  // background-color: rgba(54, 50, 198, 0.67);
  background-color: #192a56;
  background-color: ${({ theme }) => theme && theme.colors && theme.colors.navbar};
  font-family: sans-serif;
  color: white;
  font-weight: bold;
`;
