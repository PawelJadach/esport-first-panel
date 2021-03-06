import React from 'react';
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
import Spinner from '../../../reusable/Spinner';
import {
  WithPersonsHocPropTypes,
  WithUsersHocPropTypes,
} from '../../../propTypes/user';
import Select from '../../../reusable/formFields/Select';
import Input from '../../../reusable/formFields/Input';
import { withPersons } from '../../../hoc/withPersons';
import { compose } from 'redux';
import { withUsers } from '../../../hoc/withUsers';

const propTypes = {
  addModerator: PropTypes.func,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  close: PropTypes.func,
  persons: WithPersonsHocPropTypes,
  users: WithUsersHocPropTypes,
};

const AddNewUserModal = ({
  isOpen,
  toggle,
  close,
  addModerator,
  persons,
  users,
}) => {
  const form = useForm();
  const onSubmit = async (data) => {
    const res = await addModerator(data);

    if (res.error) {
      form.setError('form', {
        type: 'manual',
        message: res.error,
      });
    } else {
      close();
    }

    return true;
  };

  const usePersonsIds =
    users &&
    users.list &&
    users.list.map((user) => user.person && user.person.id);

  const unusedPersons =
    usePersonsIds &&
    persons &&
    persons.list &&
    persons.list.filter((person) => !usePersonsIds.includes(person.id));

  return (
    <CModal color="success" show={isOpen} onClose={toggle}>
      {form.isSubmitting && <Spinner full />}
      <CForm autoComplete="off" onSubmit={form.handleSubmit(onSubmit)}>
        <CModalHeader closeButton>ADDING NEW USER</CModalHeader>
        <CModalBody>
          <Input
            form={form}
            type="email"
            name="email"
            label="Email"
            placeholder="Email"
            required
          />
          <Input
            form={form}
            type="password"
            name="pwd"
            label="Password"
            placeholder="Password"
            required
          />
          {persons.isFetched && users.isFetched && (
            <Select
              label="Person"
              form={form}
              name="personId"
              options={[
                { value: '', label: 'Not set person' },
                ...unusedPersons.map((person) => ({
                  value: person.id,
                  label: `${person.name} ${person.surname}`,
                })),
              ]}
            />
          )}
          {form.errors.form && (
            <small className="d-block text-danger text-small mb-2">
              {form.errors.form.message}
            </small>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton disabled={form.isSubmitting} type="submit" color="success">
            Add new user
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
  addModerator,
};

AddNewUserModal.propTypes = propTypes;

const enhance = compose(connect(null, mapDispatch), withPersons, withUsers);

export default enhance(AddNewUserModal);
