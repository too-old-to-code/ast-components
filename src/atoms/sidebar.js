import styled from 'styled-components';

export const Sidebar = styled.aside.attrs(props => ({
  className: props.isActive ? 'is-active' : '',
}))`
  padding-top: ${({ theme }) => `calc(${theme.navbar.height}*2)`};
  z-index: 5;
  width: ${({ theme }) => theme.sidebar.width};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => (theme.sidebar && theme.sidebar.background) || '#404e53'};
  color: ${({ theme }) => (theme.sidebar && theme.sidebar.textColor) || 'black'};
  @media (max-width: ${'767'}px) {
    transition: all 0.2s;
    width: 100%;
    &:not(.is-active) {
      transform: translateX(calc(${({ theme }) => theme.sidebar.collapsedWidth} - 100%));
    }
  }
`;
