import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ContentEditable from 'react-contenteditable';
import { MsCharBlock } from './ms-char-block';
import PropTypes from 'prop-types';

const _inputBase = `
  background: none;
  border: none;
  border-bottom: 2px solid #273c75;
  outline: none;
  flex: 1;
  font-family: sans-serif !important;
  font-size: 1.1em;
  line-height: 32px;
  min-height: 32px;
  min-width: 200px;
  padding: 3px 10px;
  &:focus {
    box-shadow: 0px 7px 7px -7px #4D90FE;
  }
`;

export const MsInput = styled.input.attrs(() => ({
  autoComplete: 'off',
}))`
  ${_inputBase}
  height: 32px;
  position: relative;
  @media (max-width: ${'768'}px) {
    height: 32px;
    padding: 3px 10px;
  }
`;

export const MsTextArea = styled(ContentEditable)`
  ${_inputBase}
  vertical-align: top;
  @media (max-width: ${'768'}px) {
    vertical-align: top;
    padding: 3px 10px;
    // flex: initial;
    line-height: 32px;
    min-height: 32px;
  }
`;

const MsCharsPanel = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  display: none;
  background: #ffffffc9;
  background: none;
  zindex: 5;
  input:focus + & {
    display: flex;
  }
  [contenteditable='true']:focus + & {
    display: flex;
  }
`;

function highlight(text, selection, tagType) {
  const color = tagType === 'origin' ? '#37a425' : '#af3011';
  let re = new RegExp(`<span data-id="${tagType}"[^>]*>(.*?)</span>`);
  // console.log(selection.focusNode.parentElement.innerHTML);
  // console.log(selection.focusNode.parentElement.innerHTML.split(re));
  let temp = text.replace(re, '$1');
  console.log(selection.toString());
  // let temp = selection.baseNode.parentNode.innerText;
  // console.log(temp);
  console.log(selection.anchorOffset);
  console.log(selection.focusOffset);
  console.log(selection.rangeCount);
  console.log(selection);
  let start = Math.min(selection.anchorOffset, selection.focusOffset);
  // console.log(selection.collapseToEnd());
  // console.log(selection.anchorOffset);
  let [str1, str2] = [temp.substring(0, start), temp.substring(start)];
  // console.log(str1 + str2);

  let a = str2.replace(
    selection.toString().trim(),
    x =>
      `<span data-id="${tagType}" style="padding: 2px 5px; background-color: ${color}; border-radius: 2px; color: white;">${x}</span>`
  );
  // selection.removeAllRanges();
  // let b = str2.replace(selection.toString().trim(), x => (
  //   <span
  //     data-id={tagType}
  //     style={{
  //       padding: '2px 5px',
  //       backgroundColor: color,
  //       borderRadius: '2px',
  //       color: 'white',
  //     }}
  //   >
  //     ${x}
  //   </span>
  // ));
  return str1 + a;
}

export const MsTextAreaWithHighlight = props => {
  const [value, setValue] = useState('');
  return (
    <div style={{ position: 'relative', display: 'flex', minWidth: '226px', flex: 1 }}>
      <MsTextArea html={value} onChange={e => setValue(e.target.value)}></MsTextArea>
      <MsCharsPanel>
        <MsCharBlock
          style={{ backgroundColor: 'green' }}
          onMouseDown={e => e.preventDefault()}
          onMouseUp={() => {
            let selection = document.getSelection();
            if (selection.toString() !== '') {
              setValue(highlight(value, selection, 'origin'));
            }
          }}
        />
        <MsCharBlock
          style={{ backgroundColor: 'red' }}
          onMouseDown={e => e.preventDefault()}
          onMouseUp={() => {
            let selection = document.getSelection();
            if (selection.toString() !== '') {
              setValue(highlight(value, selection, 'target'));
            }
          }}
        />
      </MsCharsPanel>
    </div>
  );
};

export const MsInputWithChars = props => {
  const [value, setValue] = useState('');
  return (
    <div style={{ position: 'relative', display: 'flex', minWidth: '226px', flex: 1 }}>
      <MsInput id={props.id} value={value} onChange={e => setValue(e.target.value)}></MsInput>
      <MsCharsPanel>
        {props.chars.map(char => (
          <MsCharBlock
            key={char}
            onMouseDown={e => {
              e.preventDefault();
              setValue(value + char);
            }}
          >
            {char}
          </MsCharBlock>
        ))}
      </MsCharsPanel>
    </div>
  );
};

MsInputWithChars.propTypes = {
  chars: PropTypes.array,
  id: PropTypes.string,
};
