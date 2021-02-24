import React from 'react';
import PropTypes from 'prop-types';
import { CBadge, CButton, CButtonGroup, CDataTable } from '@coreui/react';

import { Newsletter } from '../../propTypes/user';

const propTypes = {
  newsletter: PropTypes.arrayOf(Newsletter),
  remove: PropTypes.func,
};

const NewsletterTable = ({ newsletter = [], remove }) => {
  const fields = [
    { key: 'email', _style: { width: '20%' } },
    { key: 'isActive', _style: { width: '20%' } },
    {
      key: 'actions',
      label: '',
      _style: { width: '1%' },
    },
  ];

  const newsletterStatusColor = {
    true: {
      color: 'success',
      text: 'Active',
    },
    false: {
      color: 'danger',
      text: 'Inactive',
    },
  };

  const handleRemove = (item) => () => {
    remove(item.id);
  };

  return (
    <CDataTable
      items={newsletter}
      fields={fields}
      tableFilter
      itemsPerPage={20}
      hover
      pagination
      scopedSlots={{
        isActive: (item) => {
          const { color, text } = newsletterStatusColor[item.isActive];

          return (
            <td>
              <CBadge color={color}>{text}</CBadge>
            </td>
          );
        },
        actions: (item) => {
          return (
            <td>
              <CButtonGroup>
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

NewsletterTable.propTypes = propTypes;

export default NewsletterTable;
