
import { useSelector, shallowEqual, useDispatch} from 'react-redux';

import { getUserName } from '../../../../redux/auth/auth-selectors'

import {logOut} from '../../../../redux/auth/auth-operations'


import Button from '../../../../shared/components/Button'
import defaultAvatar from './avatar.jpg'


import styles from './UserMenu.module.css'

const UserMenu = () => {
 
    const name = useSelector(state => getUserName(state), shallowEqual)
    const avatar= defaultAvatar

    const dispatch = useDispatch()

    const onLogout = ()=>dispatch(logOut())

    return (
        <div className={ styles.container}>
            <img src={avatar} alt="" width="32" className={ styles.avatar}/>
            <span className={ styles.name}>Welcome, {name}</span>
            <Button onClick={onLogout} className={ styles.btn}>Logout</Button>
            
        </div>
    )
};

export default UserMenu;
