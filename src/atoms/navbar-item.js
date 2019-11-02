import styled from 'styled-components';

export const NavbarItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: black;
  width: 100px;
  @media (max-width: ${'767'}px) {
    display: none;
  }
`;

