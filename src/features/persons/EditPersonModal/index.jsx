import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { updatePersonById } from '../../../redux/methods/persons';

import {
  CButton,
  CForm,
  CFormText,
  CInput,
  CLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
} from '@coreui/react';
import Spinner from '../../../reusable/Spinner';
import Input from '../../../reusable/formFields/Input';
import PersonsForm from '../../../components/PersonsForm';

const propTypes = {
  updatePersonById: PropTypes.func,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  close: PropTypes.func,
};

const EditPersonModal = ({
  isOpen,
  toggle,
  close,
  updatePersonById,
  initialValues,
}) => {
  const form = useForm({ defaultValues: initialValues });

  const onSubmit = async (data) => {
    const res = await updatePersonById(initialValues.id, data);

    if (res.error) {
      setError('form', {
        type: 'manual',
        message: res.error,
      });
    } else {
      close();
    }
    form.reset();
    return true;
  };

  return (
    <CModal color="success" show={isOpen} onClose={toggle}>
      {form.isSubmitting && <Spinner full />}
      <CForm autoComplete="off" onSubmit={form.handleSubmit(onSubmit)}>
        <CModalHeader closeButton>EDITING PERSON</CModalHeader>
        <CModalBody>
          <PersonsForm form={form} />
        </CModalBody>
        <CModalFooter>
          <CButton disabled={form.isSubmitting} type="submit" color="success">
            Edit person
          </CButton>
          <CButton
            disabled={form.isSubmitting}
            color="secondary"
            onClick={toggle}
          >
            Cancel
          </CButton>
        </CModalFooter>
      </CForm>
    </CModal>
  );
};

const mapDispatch = {
  updatePersonById,
};

EditPersonModal.propTypes = propTypes;

export default connect(null, mapDispatch)(EditPersonModal);
