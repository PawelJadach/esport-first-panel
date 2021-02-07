import PropTypes from 'prop-types';

export const User = PropTypes.shape({
  id: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.number,
  person: Person,
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

export const WithPersonsHocPropTypes = PropTypes.shape({
  list: PropTypes.arrayOf(Person),
  isFetched: PropTypes.bool,
  isLoading: PropTypes.bool,
});

export const WithUsersHocPropTypes = PropTypes.shape({
  list: PropTypes.arrayOf(User),
  isFetched: PropTypes.bool,
  isLoading: PropTypes.bool,
});
