import React from 'react';
import styles from '../resources/styles/serviceType.module.css';

const ServiceType = () => {
    return (
        <div className={styles.serviceType}>
            <h4>Service Type</h4>
            <p>Vehicle Tint</p>
            <p>Commercial</p>
            <p>Residential</p>
        </div>
    )
}

export default ServiceType;