import React from 'react';
import homeImage from '../resources/images/homeHeader.svg';
import styles from '../resources/styles/header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={homeImage} alt='headerImg' />
        </div>
    )
}

export default Header;