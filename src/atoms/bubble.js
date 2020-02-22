import styled from 'styled-components';

export const Bubble = styled.div`
  min-width: 80px;
  min-height: 20px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  filter: drop-shadow(rgba(0, 0, 0, 0.3) 0 1px 3px);
  color: black;
  &:after {
    border: 10px solid;
    border-color: transparent transparent white;
    content: '';
    left: 82%;
    margin-left: -10px;
    position: absolute;
    bottom: 100%;
  }
`;
