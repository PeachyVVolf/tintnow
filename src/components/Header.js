import React from 'react';
import styles from '../resources/styles/header.module.css';

const Header = ({image}) => {
    return (
        <div className={styles.header}>
            <img src={image} alt='headerImg' />
        </div>
    )
}

export default Header;