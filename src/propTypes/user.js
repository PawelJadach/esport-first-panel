import PropTypes from 'prop-types';

export const User = PropTypes.shape({
  id: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.number,
});

export const Person = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
  age: PropTypes.number,
  nick: PropTypes.string,
  gender: PropTypes.number,
  photoUrl: PropTypes.string,
  role: PropTypes.string,
});
