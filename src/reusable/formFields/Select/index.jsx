import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { CInput, CLabel } from '@coreui/react';

const propTypes = {
  name: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  form: PropTypes.object.isRequired,
  valueAsNumber: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  noOptions: PropTypes.string,
};

const Select = ({
  name,
  required = false,
  label,
  form,
  valueAsNumber = false,
  options = [],
  noOptions = 'Select...',
  defaultValue = '',
}) => {
  const inputSettings = {
    valueAsNumber: valueAsNumber,
  };

  if (required) {
    inputSettings.required = 'Field is required';
  }
  return (
    <div className="mb-3">
      <CLabel htmlFor={name}>{label}</CLabel>
      <select
        id={name}
        className="custom-select"
        name={name}
        ref={form.register(inputSettings)}
        value={form.getValues(name)}
        defaultValue={defaultValue}
      >
        <option hidden value="">
          {noOptions}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = propTypes;

export default Select;
