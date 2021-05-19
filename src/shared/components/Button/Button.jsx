import React from 'react';
import PropTypes from 'prop-types'


import styles from './Button.module.css'

const Button =({ children, type = 'button', onClick = () => null,className}) =>{
    return <button  className={`${styles.btn} ${className}`} type={type} onClick={onClick}>{children}</button>
};

export default Button;

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
}
