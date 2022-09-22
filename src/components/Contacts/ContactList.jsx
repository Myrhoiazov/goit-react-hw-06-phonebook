import s from '../Contacts/ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
  if (contacts.length === 0) {
    return;
  }

  return (
    <div>
      <ul className={s.list}>
        {contacts.map(({ userName, number, id }) => (
          <li className={s.item} key={id}>
            <p className={s.text}>
              {userName} <span className={s.tel}>Tel: {number}</span>{' '}
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func,
};

export default ContactList;
