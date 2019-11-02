import styled from 'styled-components';

export const AstMainArea = styled.main`
  padding-left: ${props => props.theme.sidebar.width};
  padding-top: ${props => props.theme.navbar.height};
  @media (max-width: ${'767'}px) {
    padding-left: ${props => props.theme.sidebar.collapsedWidth};
  }
`;
