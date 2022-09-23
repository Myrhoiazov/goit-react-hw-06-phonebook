// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import s from '../Contacts/ContactList.module.css';
import { deleteItem } from 'redux/itemsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();



    const filteredContacts = contacts.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))

  if (contacts.length === 0) {
    return;
  }

  return (
    <div>
      <ul className={s.list}>
        {filteredContacts.map(({ name, number, id }) => (
          <li className={s.item} key={id}>
            <p className={s.text}>
              {name} <span className={s.tel}>Tel: {number}</span>
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => dispatch(deleteItem(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       userName: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDelete: PropTypes.func,
// };

export default ContactList;
