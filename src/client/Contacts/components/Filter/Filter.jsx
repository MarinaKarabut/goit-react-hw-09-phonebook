import {useCallback} from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { filterContacts } from '../../../../redux/contacts/contacts-actions'
import {getFilterContacts} from '../../../../redux/contacts/selectors'

import styles from './Filter.module.css'


const Filter = () => {
  const value = useSelector(state => getFilterContacts(state), shallowEqual)

  const dispatch = useDispatch()
  
  const onChange = useCallback(({ target }) => dispatch(filterContacts(target.value)), [dispatch])


  const id = uuidv4();
    return (
        <label htmlFor={id}>
          Finds contacts by name <input
          className = {styles.input} 
          type="text"
          value = {value}
          onChange={onChange}
          id={id}
          />
      
        </label>
    )
};


export default Filter;
