import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../reusable/formFields/Input';
import Select from '../../reusable/formFields/Select';

const propTypes = {
  form: PropTypes.object.isRequired,
};

const PersonsForm = ({ form }) => {
  return (
    <>
      <Input form={form} required name="name" label="Name" placeholder="Name" />
      <Input
        form={form}
        name="surname"
        label="Surname"
        placeholder="Surname"
        required
      />
      <Input form={form} name="nick" label="Nick" placeholder="Nick" />
      <Input form={form} name="role" label="Role" placeholder="Role" />
      <Input
        form={form}
        name="photoUrl"
        label="Url to photo"
        placeholder="Url to photo"
      />
      <Input
        form={form}
        type="number"
        name="age"
        label="Age"
        placeholder="Age"
        min={1}
        max={100}
        required
      />
      <Select
        form={form}
        label="Gender"
        name="gender"
        options={[
          {
            value: 0,
            label: 'Male',
          },
          {
            value: 1,
            label: 'Female',
          },
          {
            value: 2,
            label: 'Other',
          },
        ]}
        valueAsNumber
      />
    </>
  );
};

PersonsForm.propTypes = propTypes;

export default PersonsForm;
