import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactList/ContactList';
import { Filter }  from 'components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { AppContainer } from './App.styled';
import { selectIsLoading, selectError } from 'redux/selectors';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/operations';

export function App() {
  
 const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <AppContainer className="container">
      <h1>PhoneBook</h1>
      <ContactForm />

      <div>
    <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactsList />
      </div>
    </AppContainer>
  );
}