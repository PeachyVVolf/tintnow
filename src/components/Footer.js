import React from 'react';
import styles from '../resources/styles/footer.module.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.companyInfo}>
                <ul>
                    <li><p>LOGO</p></li>
                    <li><p>Address 123</p></li>
                    <li><p>City</p></li>
                    <li><p>123456788</p></li>
                    <li><p>Follow us</p><FaFacebookF/><FaTwitter/><FaLinkedinIn/></li>
                </ul>
            </div>
            <div className={styles.footerNav}>
                <ul>
                    <li><p>Home</p></li>
                    <li><p>Client Platform</p></li>
                    <li><p>Service Platform</p></li>
                </ul>
                <button>Book Now</button>
            </div>
            <div className={styles.postFooter}>
                <p>2022, TintNow. All rights reserved <span>Privacy Policy</span></p>
            </div>
        </div>
    )
}

export default Footer;