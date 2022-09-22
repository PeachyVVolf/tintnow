import React from 'react';
import styles from '../resources/styles/package.module.css';

const Package = ({name, info, price, currentSlide, index}) => {
    return (
        <div className={styles.singlePackage}>
            <p className={styles.packageName}>{name}</p>
            <div className={currentSlide !== index ? styles.currentSlide : styles.packageInfo}>
                {info.map((singleInfo, index)=>(
                    <p key={index}>{singleInfo}</p>
                ))}
                <p className={styles.packagePrice}>${price}</p>
            </div>
        </div>
    )
}

export default Package;