
import {useCallback} from 'react';
import { useDispatch} from 'react-redux';

import { logIn } from '../../../../redux/auth/auth-operations'
import useForm from '../../../../shared/hooks/useForm';
import { initialState } from './initialState';

import FormField from '../../../../shared/components/FormField'
import Button from '../../../../shared/components/Button'
import { fields } from './fields'

import styles from './LoginPage.module.css'



const LoginPage = () => {
    const dispatch = useDispatch()

    const onSubmit = useCallback((data) => dispatch(logIn(data)), [dispatch])
    
    const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });
    
    return (
        <>
            <div className={styles.formGroup}>
                    <form onSubmit={handleSubmit }>
                        <FormField {...fields.email} value={data.email} onChange={handleChange }/>
                        <FormField {...fields.password} value={data.password } onChange={handleChange }/>
                        <Button type="submit">LOG IN</Button>
                     </form>
            </div>
           
        </>)
}

export default LoginPage;
