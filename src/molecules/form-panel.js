import React, { useState } from 'react';
import styled from 'styled-components';
import { QuestionGroup } from './question-group';

export const AltChars = styled.div`
  background-color: grey;
  color: white;
  z-index: 25;
  position: absolute;
  bottom: -1em;
  right: 0;
  padding: 2px;
  display: none;
  input:focus + & {
    display: block;
  }
`;

export const AltChar = styled.div`
  padding: 2px 4px;
  border: 1px dotted lightgrey;
  display: inline-block;
`;

function handleClick(evt) {
  evt.preventDefault();

  console.log(evt.target.innerHTML);
  console.log('hello');
}

export const Panel = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ margin: '5px', display: 'flex', flexDirection: 'column' }}>
      <QuestionGroup label={'Word'} extraDetail={'(in English)'} value={'default'} />
      <QuestionGroup
        label={'Word'}
        onChange={e => setValue(e.target.value)}
        extraDetail={'(in Spanish)'}
        value={value}
      >
        <AltChars
          onMouseDown={e => {
            e.preventDefault();
            setValue(value + e.target.innerHTML);
          }}
        >
          <AltChar>ñ</AltChar>
          <AltChar>é</AltChar>
          <AltChar>â</AltChar>
        </AltChars>
      </QuestionGroup>
      <QuestionGroup label={'Memory story'} value={'default'} textarea />
    </div>
  );
};
