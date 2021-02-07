import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { updateUser } from '../../../redux/methods/users';

import {
  CButton,
  CForm,
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
  updateUser: PropTypes.func,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  close: PropTypes.func,
  persons: WithPersonsHocPropTypes,
  users: WithUsersHocPropTypes,
};

const EditUserModal = ({
  isOpen,
  toggle,
  close,
  updateUser,
  persons,
  users,
  defaultValues,
}) => {
  const form = useForm({ defaultValues: defaultValues });
  const onSubmit = async (data) => {
    const res = await updateUser(defaultValues.id, {
      email: data.email,
      personId: data.personId,
    });

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
    persons.list.filter(
      (person) =>
        !usePersonsIds.includes(person.id) ||
        person.id === defaultValues.personId
    );

  return (
    <CModal color="success" show={isOpen} onClose={toggle}>
      {form.isSubmitting && <Spinner full />}
      <CForm autoComplete="off" onSubmit={form.handleSubmit(onSubmit)}>
        <CModalHeader closeButton>EDITING USER</CModalHeader>
        <CModalBody>
          <Input
            form={form}
            type="email"
            name="email"
            label="Email"
            placeholder="Email"
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
              defaultValue={defaultValues.personId}
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
            Edit user
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
  updateUser,
};

EditUserModal.propTypes = propTypes;

const enhance = compose(connect(null, mapDispatch), withPersons, withUsers);

export default enhance(EditUserModal);
