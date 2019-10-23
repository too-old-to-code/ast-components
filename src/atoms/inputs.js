import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Input = styled.input`
  font-size: 1em;
  padding: 0.5em 0.6em;
  display: inline-block;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px #ddd;
  vertical-align: middle;
  box-sizing: border-box;
`;
// border-radius: 4px;
const Check = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  min-height: 30px;
  > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    &:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }
  &:hover input ~ span {
    background-color: #ccc;
  }
  > input:checked ~ span {
    background-color: #2196f3;
  }
  > span:after {
    content: '';
    position: absolute;
    display: none;
  }
  > input:checked ~ span:after {
    display: block;
  }
  > span:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const Radio = styled.label`
  font-family: sans-serif;
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  min-height: 30px;
  > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }
  &:hover input ~ span {
    background-color: #ccc;
  }
  > input:checked ~ span {
    background-color: #2196f3;
  }
  > span:after {
    content: '';
    position: absolute;
    display: none;
  }
  > input:checked ~ span:after {
    display: block;
  }
  > span:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

export const TextInput = () => {
  return <Input />;
};

function handleOptions(values, value) {
  if (values.includes(value)) {
    return values.filter(val => val !== value);
  }
  return [...values, value];
}

export const Checkbox = ({ label, name, checked, values, value, onChange }) => {
  return (
    <Check>
      {label}
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onClick={() => onChange(typeof value === 'boolean' ? !value : handleOptions(values, value))}
      />
      <span />
    </Check>
  );
};

Checkbox.propTypes = {
  value: PropTypes.string | PropTypes.boolean,
  values: PropTypes.array,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.exact({ label: PropTypes.string, value: PropTypes.string })),
  name: PropTypes.string.isRequired,
};

export const AstRadioButton = props => {
  return (
    <Radio onClick={() => props.onChange(props.value)}>
      {props.label}
      <input name={props.name} type="radio" checked={props.checked} onChange={function() {}} />
      <span />
    </Radio>
  );
};

AstRadioButton.propTypes = {
  value: PropTypes.string.required,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.required,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
