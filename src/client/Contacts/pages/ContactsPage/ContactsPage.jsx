import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';

import {fetchContacts} from '../../../../redux/contacts/contacts-operations'


import styles from './ContactsPage.module.css';

const Phonebook = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])


  return (
      <div className={styles.box}>
        <h1 className={styles.tittle}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.tittle}>Contacts</h2>
        <Filter/>
        <ContactList />
      </div>
    );
  
}

export default Phonebook 


  
