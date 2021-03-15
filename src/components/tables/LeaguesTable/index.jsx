import React from 'react';
import PropTypes from 'prop-types';
import { CButton, CButtonGroup, CDataTable } from '@coreui/react';

import { League } from '../../../propTypes/user';

const propTypes = {
  leagues: PropTypes.arrayOf(League),
  handleEdit: PropTypes.func,
  handleRemove: PropTypes.func,
};

const LeaguesTable = ({ leagues = [], handleEdit, handleRemove }) => {
  const fields = [
    { key: 'image', _style: { width: '20%' } },
    { key: 'name', _style: { width: '20%' } },
    { key: 'linkToPage', _style: { width: '20%' } },
    {
      key: 'actions',
      label: '',
      _style: { width: '1%' },
    },
  ];

  return (
    <CDataTable
      items={leagues}
      fields={fields}
      tableFilter
      itemsPerPage={20}
      hover
      pagination
      scopedSlots={{
        linkToPage: (item) => {
          return (
            <td>
              {item.linkToPage ? (
                <a href={item.linkToPage}>{item.linkToPage}</a>
              ) : (
                'No link'
              )}
            </td>
          );
        },
        image: (item) => {
          return (
            <td style={{ width: '100px', height: '60px', overflow: 'hidden' }}>
              <img
                src={`${process.env.REACT_APP_BE_URL}/leagues/img/${item.id}`}
                alt={item.name}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </td>
          );
        },
        actions: (item) => {
          return (
            <td>
              <CButtonGroup>
                <CButton
                  onClick={() => handleEdit(item)}
                  color="primary"
                  variant="outline"
                  size="sm"
                >
                  Edit
                </CButton>
                <CButton
                  onClick={() => handleRemove(item)}
                  color="danger"
                  size="sm"
                >
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

LeaguesTable.propTypes = propTypes;

export default LeaguesTable;
