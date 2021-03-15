import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { addNewLeague } from '../../../redux/methods/leagues';

import {
  CButton,
  CForm,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
} from '@coreui/react';
import Spinner from '../../../reusable/Spinner';
import LeaguesForm from '../../../components/forms/LeaguesForm';

const propTypes = {
  addNewLeague: PropTypes.func,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  close: PropTypes.func,
};

const AddNewLeagueModal = ({ isOpen, toggle, close, addNewLeague }) => {
  const form = useForm();

  const onSubmit = async (_, e) => {
    const formData = new FormData(e.target);

    const res = await addNewLeague(formData);

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
        <CModalHeader closeButton>ADDING NEW LEAGUE</CModalHeader>
        <CModalBody>
          <LeaguesForm form={form} />
        </CModalBody>
        <CModalFooter>
          <CButton disabled={form.isSubmitting} type="submit" color="success">
            Add new league
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
  addNewLeague,
};

AddNewLeagueModal.propTypes = propTypes;

export default connect(null, mapDispatch)(AddNewLeagueModal);
