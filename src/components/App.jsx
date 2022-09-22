import { useState, useEffect, useMemo } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Form/Form.jsx';
import Container from './Container/Container.jsx';
import ContactList from './Contacts/ContactList.jsx';
import FilterList from './Filter/FilterList.jsx';

const CONTACTS_KEY = 'contacts';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem(CONTACTS_KEY));

    if (list.length) {
      setContacts(list);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handlerSubmitUser = data => {
    const hasUserContacts = contacts.some(
      user => user.userName === data.userName
    );

    if (hasUserContacts) {
      toast.error(`${data.userName} is already in contacts`);
      return;
    }

    setContacts(state => [...state, data]);
  };

  const handleDeleteUser = id => {
    setContacts(state => state.filter(user => user.id !== id));
  };

  const handleFilterValue = ev => {
    setFilter(ev.target.value);
  };

  const handleFilter = useMemo(() => {
    return contacts.filter(user =>
      user.userName.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, contacts]);

  return (
    <Container>
      <Form onSubmit={handlerSubmitUser} />
      <FilterList
        filter={filter}
        contacts={contacts}
        onFindContacts={handleFilterValue}
      />
      <ContactList contacts={handleFilter} onDelete={handleDeleteUser} />
      <ToastContainer />
    </Container>
  );
};

