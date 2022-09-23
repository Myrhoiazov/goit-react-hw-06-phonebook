import s from '../Filter/Filter.module.css';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const FilterList = () => {
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch()

  const handleFilterValue = ev => {
    dispatch(setFilter(ev.target.value));
  };

  if (contacts.length === 0) {
    return;
  }

  return (
    <div>
      <label>
        <span className={s.label}>Find contacts by name</span>
        <input
          className={s.input}
          type="text"
          value={filter.value}
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleFilterValue}
        />
      </label>
    </div>
  );
};

// FilterList.propTypes = {
//   filter: PropTypes.string.isRequired,
//   contacts: PropTypes.array.isRequired,
//   onFindContacts: PropTypes.func.isRequired,
// };

export default FilterList;
