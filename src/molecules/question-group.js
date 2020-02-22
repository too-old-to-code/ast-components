import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { TextContent } from '../app';
import ContentEditable from 'react-contenteditable';
// import Textarea from 'react-expanding-textarea';
import Textarea from 'tester';
const QGroup = styled.div`
  display: flex;
  padding: 10px 5px;
  flex: 1;
  font-size: 1.1em;
  font-family: sans-serif;
  position: relative;
  @media (max-width: ${'768'}px) {
    flex-direction: column;
  }
`;

const QGroupLabel = styled.label`
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

const QGroupInput = styled.input`
  flex: 1;
  border: 3px solid #273c75;
  height: 32px;
  padding: 3px 10px;
  font-family: sans-serif;
  font-size: 1.1em;
  line-height: 32px;
  position: relative;
  @media (max-width: ${'768'}px) {
    height: 32px;
    padding: 3px 10px;
  }
`;

// })) //   rows: 1, //
// const QGroupTextArea = styled(Textarea).attrs(() => ({
//   rows: 1,
// }))`
//   border: 3px solid #273c75;
//   font-size: 1.1em;
//   padding: 3px 10px;
//   line-height: 32px;
//   min-height: 32px;
//   flex: 1;
//   vertical-align: top;
//   font-family: sans-serif !important;
//   @media (max-width: ${'768'}px) {
//     vertical-align: top;
//     padding: 3px 10px;
//     flex: initial;
//     line-height: 32px;
//     min-height: 32px;
//   }
// `;

const QGroupTextContent = styled(ContentEditable)`
  border: 3px solid #273c75;
  font-size: 1.1em;
  padding: 3px 10px;
  line-height: 32px;
  background: white;
  min-height: 32px;
  flex: 1;
  vertical-align: top;
  font-family: sans-serif !important;
  @media (max-width: ${'768'}px) {
    vertical-align: top;
    padding: 3px 10px;
    flex: initial;
    line-height: 32px;
    min-height: 32px;
  }
`;
// height: initial !important;
// width: initial;
// flex-direction: row;
// line-height: initial;
// display: inline;

// height: 32px;
//
function highlight(text, selection, tagType) {
  const color = tagType === 'origin' ? '#af3011' : '#37a425';
  let re = new RegExp(`<span data-id="${tagType}"[^>]*>(.*?)</span>`);
  return text
    .replace(re, '$1')
    .replace(
      selection.toString(),
      x =>
        `<span data-id="${tagType}" style="padding: 2px 5px; background-color: ${color}; border-radius: 2px; color: white;">${x}</span>`
    );
}

export const QuestionGroup = props => {
  // console.log(props);
  const [currentText, changeText] = useState('oh my god this is bollox');
  const textEditable = useRef();
  // console.log(currentText);
  return (
    <QGroup>
      <QGroupLabel>
        {props.label}
        <span>{props.extraDetail}</span>
      </QGroupLabel>
      {props.textarea ? (
        // <QGroupTextArea placeholder="Group" defaultValue={props.value} />
        <div style={{ flex: 1 }}>
          <QGroupTextContent
            onClick={() => console.log('up')}
            onChange={e => changeText(e.target.value)}
            html={currentText}
            ref={textEditable}
          ></QGroupTextContent>
          <button
            onClick={() => {
              console.log('pressed');
              // document.execCommand('backColor', false, '#af3011');
              // document.execCommand('formatBlock', false, 'white');
              let selection = document.getSelection();
              if (selection.toString() !== '') {
                changeText(highlight(currentText, selection, 'origin'));
              }
            }}
          >
            Origin
          </button>
          <button
            onClick={() => {
              // document.execCommand('backColor', false, '#37a425');
              // document.execCommand('formatBlock', false, 'white');
              let selection = document.getSelection();
              if (selection.toString() !== '') {
                changeText(highlight(currentText, selection, 'target'));
              }
            }}
          >
            Target
          </button>
        </div>
      ) : (
        <React.Fragment>
          <QGroupInput
            type="text"
            placeholder="Group"
            value={props.value}
            onChange={props.onChange}
          />
          {props.children}
        </React.Fragment>
      )}
    </QGroup>
  );
};
