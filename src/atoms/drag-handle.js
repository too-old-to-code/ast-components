import styled from 'styled-components';
import { FlexBox } from './flex-box';

export const DragHandle = styled(FlexBox).attrs(() => ({
  className: 'drag-handle',
}))`
  width: 30px;
  background-color: white;
  opacity: 0.3;
  cursor: grab;
  border-left: 1px solid black;
`;
