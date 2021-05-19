
import { useSelector, shallowEqual } from 'react-redux';

import styles from './HomePage.module.css'

import {getIsAuthenticated} from '../../redux/auth/auth-selectors';

const HomePage = () => {
    const isAuthenticated = useSelector(state => getIsAuthenticated(state), shallowEqual);
    
    return (
        <div className={ styles.container}>
            <h1 className={styles.title}>Welcome  to your personal phonebook! </h1>
            {!isAuthenticated && <p className={ styles.notification}>Please, Sign up or Log in to have access to the
            Phonebook!</p>}
            
        </div>
    )
};

export default HomePage;
