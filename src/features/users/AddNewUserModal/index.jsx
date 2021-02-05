import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { addModerator } from '../../../redux/methods/users';

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
import CIcon from '@coreui/icons-react';
import clsx from 'clsx';
import Spinner from '../../../reusable/Spinner';

const propTypes = {
  addModerator: PropTypes.func,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  close: PropTypes.func,
};

const AddNewUserModal = ({ isOpen, toggle, close, addModerator }) => {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearErrors,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    const res = await addModerator(data);

    if (res.error) {
      setError('form', {
        type: 'manual',
        message: res.error,
      });
    } else {
      close();
    }

    return true;
  };

  return (
    <CModal color="success" show={isOpen} onClose={toggle}>
      {isSubmitting && <Spinner full />}
      <CForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <CModalHeader closeButton>ADDING NEW USER</CModalHeader>
        <CModalBody>
          <CLabel htmlFor="email">Email</CLabel>
          <CInput
            disabled={isSubmitting}
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            innerRef={register({ required: true })}
            invalid={!!errors.email}
            onChange={() => clearErrors('form')}
            autoComplete="off"
            className={clsx(!errors.email && 'mb-2')}
          />
          {errors.email && (
            <small className="d-block text-danger text-small mb-2">
              Pole wymagane
            </small>
          )}
          <CLabel htmlFor="pwd">Password</CLabel>
          <CInput
            disabled={isSubmitting}
            id="pwd"
            type="password"
            placeholder="Hasło"
            name="pwd"
            innerRef={register({ required: true })}
            invalid={!!errors.pwd}
            onChange={() => clearErrors('form')}
            autoComplete="off"
          />
          {errors.pwd && (
            <CFormText className="help-block">
              <span className="text-danger">Pole wymagane</span>
            </CFormText>
          )}
          {errors.form && (
            <small className="d-block text-danger text-small mb-2">
              {errors.form.message}
            </small>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton disabled={isSubmitting} type="submit" color="success">
            Add new user
          </CButton>
          <CButton disabled={isSubmitting} color="secondary" onClick={toggle}>
            Cancel
          </CButton>
        </CModalFooter>
      </CForm>
    </CModal>
  );
};

const mapDispatch = {
  addModerator,
};

AddNewUserModal.propTypes = propTypes;

export default connect(null, mapDispatch)(AddNewUserModal);
