import React from 'react';
import styles from '../resources/styles/bookNow.module.css';

const SimpleMap = () => {
    return (
        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799070274!2d-74.25987305798014!3d40.69767006494068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1664206731038!5m2!1sen!2s" width="320" height="330" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    )
}

export default SimpleMap;