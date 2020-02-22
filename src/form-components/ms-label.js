import styled from 'styled-components';

export const MsLabel = styled.label`
  width: 150px;
  padding: 3px;
  font-size: 1.1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > span {
    font-size: 0.7em;
  }
  @media (max-width: ${'768'}px) {
    flex-direction: row;
    width: initial;
    display: inline;
    font-size: 1em;
    > span {
      font-size: 1em;
      margin-left: 4px;
    }
  }
`;
