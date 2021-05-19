
import { useSelector,  shallowEqual} from "react-redux";

import NavbarNav from '../NavbarNav'
import UserMenu from '../UserMenu'
import AuthNav from '../AuthNav'

import {getIsAuthenticated} from '../../../../redux/auth/auth-selectors'

import styles from "./Navbar.module.css";




const Navbar = () => {
    const isAuthenticated = useSelector(state => getIsAuthenticated(state), shallowEqual);

    return (
        <nav className="navbar">
            <div className={ styles.container}>
                <div className={ styles.navbarRow}>
                    < NavbarNav isAuthenticated={isAuthenticated} />
                    { isAuthenticated? <UserMenu/> : <AuthNav/>}
                </div>
            </div>
        </nav>
    )
}



export default Navbar;

