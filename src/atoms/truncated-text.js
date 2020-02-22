import styled from 'styled-components';

export const TruncatedText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  flex: 1;
  min-width: 0;
`;
