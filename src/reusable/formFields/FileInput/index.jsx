import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { CInput, CLabel } from '@coreui/react';

const propTypes = {
  name: PropTypes.string,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  form: PropTypes.object.isRequired,
};

const FileInput = ({
  name,
  required = false,
  autoComplete = 'off',
  label,
  placeholder,
  type = 'text',
  form,
  min,
  max,
}) => {
  const inputSettings = {};
  if (required) {
    inputSettings.required = 'Field is required';
  }

  if (type === 'number') {
    inputSettings.valueAsNumber = true;
  }
  return (
    <>
      {label && <CLabel htmlFor={name}>{label}</CLabel>}
      <CInput
        type="file"
        disabled={form.isSubmitting}
        id={name}
        placeholder={placeholder}
        name={name}
        innerRef={form.register(inputSettings)}
        invalid={!!form.errors[name]}
        onChange={() => {
          form.clearErrors('form');
          form.clearErrors(name);
        }}
        className={clsx(!form.errors[name] && 'mb-3')}
      />
      {form.errors[name] && (
        <small className="d-block text-danger text-small mb-3">
          {form.errors[name].message}
        </small>
      )}
    </>
  );
};

FileInput.propTypes = propTypes;

export default FileInput;
