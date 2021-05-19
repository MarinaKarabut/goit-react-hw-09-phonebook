import {useCallback} from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { deleteContact } from '../../../../redux/contacts/contacts-operations'
import { getVisibleContacts} from '../../../../redux/contacts/selectors'
import ContactsListItem from '../ContactListItem'



const ContactList = () => {
  
  const contacts = useSelector(state => getVisibleContacts(state), shallowEqual)

  const dispatch = useDispatch()

  const onDeleteContact= useCallback((id) => dispatch(deleteContact(id)), [dispatch])

  const contactElements = contacts.map(({ id, ...props }) => (
      <ContactsListItem key={id}  {...props} onClick={()=> onDeleteContact(id)}
      />
    ))
        
    return (
        <ul>
            {contactElements}
        </ul>
    )
};


export default ContactList;


