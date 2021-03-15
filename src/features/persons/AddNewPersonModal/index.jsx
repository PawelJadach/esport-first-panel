import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { addNewPerson } from '../../../redux/methods/persons';

import {
  CButton,
  CForm,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
} from '@coreui/react';
import Spinner from '../../../reusable/Spinner';
import PersonsForm from '../../../components/forms/PersonsForm';

const propTypes = {
  addNewPerson: PropTypes.func,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  close: PropTypes.func,
};

const AddNewUserModal = ({ isOpen, toggle, close, addNewPerson }) => {
  const form = useForm();

  const onSubmit = async (data) => {
    const res = await addNewPerson(data);

    if (res.error) {
      form.setError('form', {
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
        <CModalHeader closeButton>ADDING NEW PERSON</CModalHeader>
        <CModalBody>
          <PersonsForm form={form} />
        </CModalBody>
        <CModalFooter>
          <CButton disabled={form.isSubmitting} type="submit" color="success">
            Add new person
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
  addNewPerson,
};

AddNewUserModal.propTypes = propTypes;

export default connect(null, mapDispatch)(AddNewUserModal);
