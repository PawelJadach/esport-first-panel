import React from 'react';
import PropTypes from 'prop-types';
import { CButton, CButtonGroup, CDataTable } from '@coreui/react';

import { Person } from '../../../propTypes/user';

const propTypes = {
  persons: PropTypes.arrayOf(Person),
};

const PersonsTable = ({ persons = [], remove, updatePerson }) => {
  const fields = [
    { key: 'name', _style: { width: '20%' } },
    { key: 'surname', _style: { width: '20%' } },
    { key: 'nick', _style: { width: '20%' } },
    {
      key: 'actions',
      label: '',
      _style: { width: '1%' },
    },
  ];

  const handleEdit = (item) => () => {
    updatePerson(item);
  };

  const handleRemove = (item) => () => {
    remove(item.id);
  };

  return (
    <CDataTable
      items={persons}
      fields={fields}
      tableFilter
      itemsPerPage={20}
      hover
      pagination
      scopedSlots={{
        actions: (item) => {
          return (
            <td>
              <CButtonGroup>
                <CButton
                  color="primary"
                  variant="outline"
                  size="sm"
                  onClick={handleEdit(item)}
                >
                  Edit
                </CButton>
                <CButton color="danger" size="sm" onClick={handleRemove(item)}>
                  Remove
                </CButton>
              </CButtonGroup>
            </td>
          );
        },
      }}
    />
  );
};

PersonsTable.propTypes = propTypes;

export default PersonsTable;
