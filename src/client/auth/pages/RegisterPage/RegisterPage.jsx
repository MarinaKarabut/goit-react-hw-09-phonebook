import {useCallback} from 'react';
import { useDispatch} from 'react-redux';

import useForm from '../../../../shared/hooks/useForm';
import { register} from '../../../../redux/auth/auth-operations'
import { initialState } from './initialState';
import { fields } from './fields'
import FormField from '../../../../shared/components/FormField'
import Button from '../../../../shared/components/Button'


import styles from './RegisterPage.module.css'


const RegisterPage = () => {
    const dispatch = useDispatch()

    const onSubmit = useCallback((data) => dispatch(register(data)), [dispatch])
    
    const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });


    return (
        <div className={styles.formGroup}>
            <form onSubmit={handleSubmit}>
                <FormField {...fields.username} value={data.name} onChange={handleChange} />
                <FormField {...fields.email} value={data.email} onChange={handleChange }/>
                <FormField {...fields.password} value={data.password} onChange={handleChange }/>
                <Button type="submit">SING UP</Button>
            </form>
        </div>
    )


}

export default RegisterPage

