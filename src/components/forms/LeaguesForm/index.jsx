import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../reusable/formFields/Input';
import FileInput from '../../../reusable/formFields/FileInput';

const propTypes = {
  form: PropTypes.object.isRequired,
};

const LeaguesForm = ({ form }) => {
  return (
    <>
      <Input form={form} required name="name" label="Name" placeholder="Name" />
      <Input
        form={form}
        name="linkToPage"
        label="Link to page"
        placeholder="Link to page"
      />
      <FileInput form={form} name="img" label="Image" />
    </>
  );
};

LeaguesForm.propTypes = propTypes;

export default LeaguesForm;
