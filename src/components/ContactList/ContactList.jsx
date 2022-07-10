import PropTypes from 'prop-types';

export default function ContactList({ children }) {
  return <ul>{children}</ul>;
}

ContactList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired),
};
