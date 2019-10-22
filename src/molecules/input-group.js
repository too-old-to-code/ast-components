import React from 'react';
import { AstRadioButton, Checkbox } from '../atoms/inputs';
import PropTypes from 'prop-types';

export const RadioButtonGroup = ({ name, onChange, value: selected, options }) => (
  <React.Fragment>
    {options.map(({ label, value }) => (
      <AstRadioButton
        key={value}
        label={label}
        checked={selected === value}
        value={value}
        name={name}
        onChange={onChange}
      />
    ))}
  </React.Fragment>
);

export const CheckboxGroup = ({ name, onChange, value: selected, options }) => {
  return (
    <React.Fragment>
      {options.map(({ label, value }) => (
        <Checkbox
          key={value}
          label={label}
          checked={selected.includes(value)}
          value={value}
          name={name}
          values={selected}
          onChange={onChange}
        />
      ))}
    </React.Fragment>
  );
};

RadioButtonGroup.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.exact({ label: PropTypes.string, value: PropTypes.string })),
  name: PropTypes.string.isRequired,
};
