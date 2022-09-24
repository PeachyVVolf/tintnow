import React from 'react';
import styles from '../resources/styles/bookNow.module.css';

const SimpleMap = () => {
    return (
        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435518.68178262905!2d74.05419232157851!3d31.483220875219246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1664034472787!5m2!1sen!2s" width="320" height="330" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    )
}

export default SimpleMap;