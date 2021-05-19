import { useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { addContact } from '../../../../redux/contacts/contacts-operations'


import useForm from '../../../../shared/hooks/useForm';

import FormField from '../../../../shared/components/FormField'
import Button from '../../../../shared/components/Button'


import {fields} from "./fields";


import { initialState } from "./initialState"

const ContactForm = () => {


    const dispatch = useDispatch()

    const onSubmit = useCallback((contact) => dispatch(addContact(contact)), [dispatch])

    const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });

    return (
        <form onSubmit={handleSubmit}>
            <FormField {...fields.username} value={data.name} onChange={handleChange} />
            <FormField {...fields.phone} value={data.number} onChange={handleChange} />
            <Button type="submit">Add contact</Button>
          </form>
        )

}
export default ContactForm
