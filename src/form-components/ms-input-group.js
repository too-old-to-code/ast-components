import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { MsInput, MsLabel, MsTextArea, MsInputWithChars, MsTextAreaWithHighlight } from './';
import PropTypes from 'prop-types';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import foreign from '../../static/alt.ico';
import './ms-input-group.css';

const InputGroup = styled.div`
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

function test() {
  // console.log('test');
  let selection = document.getSelection();
  if (selection.toString() !== '') {
    console.log('yoooooooo');
    // changeText(highlight(currentText, selection, 'origin'));
  }
}

export const MsInputGroupEditor = props => {
  const textEditable = useRef(null);
  const [isFocused, toggleFocus] = useState(false);
  return (
    <InputGroup>
      {/* <MsLabel
      //   htmlFor={props.id}
      //   onClick={() => textEditable.current && textEditable.current.focus()}
      // >
      //   {props.label}
      //   <span>{props.extraDetail}</span>
      // </MsLabel>*/}
      <Editor
        onFocus={() => toggleFocus(true)}
        onBlur={() => toggleFocus(false)}
        toolbarOnFocus
        toolbar={{
          options: [
            'emoji',
            'inline',
            'textAlign',
            'blockType',
            /*'fontSize',*/ 'list',
            // 'fontFamily',
          ],
          blockType: {
            inDropdown: false,
            options: ['Normal', 'H1', 'H2'],
          },
          inline: {
            options: ['bold', 'italic', 'underline'],
          },
          list: {
            // inDropdown: true,
            options: ['unordered', 'ordered'],
          },
          textAlign: {
            inDropdown: false,
            options: ['left', 'center'],
          },
          fontSize: {
            options: [8, 12, 16],
          },
          emoji: {
            icon: foreign,
            emojis: ['ç', 'ñ', 'ê', 'î', 'œ', 'ū'],
          },
        }}
        // editorState={value}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName={isFocused ? 'focusedEditorClassName' : 'editorClassName'}
        // onEditorStateChange={setValue}
      />
    </InputGroup>
  );
};

export const MsInputGroup = props => {
  const textEditable = useRef(null);

  return props.textarea ? (
    <InputGroup>
      <MsLabel
        htmlFor={props.id}
        onClick={() => textEditable.current && textEditable.current.focus()}
      >
        {props.label}
        <span>{props.extraDetail}</span>
      </MsLabel>
      <MsTextAreaWithHighlight
        id={props.id}
        html={'hello'}
        onMouseUp={test}
        innerRef={textEditable}
      ></MsTextAreaWithHighlight>
      {/*<MsTextArea
        id={props.id}
        html={'hello'}
        onMouseUp={test}
        innerRef={textEditable}
      ></MsTextArea>*/}
    </InputGroup>
  ) : (
    <InputGroup>
      <MsLabel htmlFor={props.id}>
        {props.label}
        <span>{props.extraDetail}</span>
      </MsLabel>
      {props.chars ? (
        <MsInputWithChars chars={props.chars} id={props.id} />
      ) : (
        <MsInput id={props.id} />
      )}
    </InputGroup>
  );
};

MsInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
  extraDetail: PropTypes.string,
  id: PropTypes.string,
  chars: PropTypes.array,
};

MsInputGroupEditor.propTypes = {
  label: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
  extraDetail: PropTypes.string,
  id: PropTypes.string,
  chars: PropTypes.array,
};
