import PropTypes from 'prop-types';

export const User = PropTypes.shape({
  id: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.number,
});
