import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../resources/styles/home.module.css';
import bookStyles from '../resources/styles/bookNow.module.css';
import SimpleMap from '../components/SimpleMap';
import '../resources/styles/global.css';

const BookNow = () => {

    return (
        <div className={`${styles.home} ${bookStyles.bookNow}`}>
            {/* <Navbar/> */}
            <h4>
                <span>Book Now</span>
                <label className={bookStyles.switch}>
                    <input type="checkbox" />
                    <span className={`${bookStyles.slider} ${bookStyles.round}`}></span>
                </label>
            </h4>
            <SimpleMap/>
            <div className={`dp-flex ${bookStyles.storeOption}`}>
                <div className={`dp-flex-50`}><p>Store 1</p></div>
                <div className={`dp-flex-50 ${bookStyles.discount}`}><p>20%</p></div>
            </div>
            <div className={`dp-flex ${bookStyles.storeOption}`}>
                <div className={`dp-flex-50`}><p>Store 2</p></div>
                <div className={`dp-flex-50 ${bookStyles.discount}`}><p>30%</p></div>
            </div>
            <div className={`dp-flex ${bookStyles.storeOption}`}>
                <div className={`dp-flex-50`}><p>Store 3</p></div>
                <div className={`dp-flex-50 ${bookStyles.discount}`}><p>10%</p></div>
            </div>
        </div>
    )
}

export default BookNow;