import React from 'react';
import '../resources/styles/global.css';
import styles from '../resources/styles/platformFeature.module.css';

const PlatformFeature = ({index, image, text}) => {
    return (
        <div className={`dp-flex ${styles.platformFeature}`}>
            {index === 0 ?
            <>
                <div className='dp-flex-40'><img src={image} alt='featureImage'/></div>
                <div className='dp-flex-50'><p>{text}</p></div>
            </>
            :
            <>
                <div className='dp-flex-50'><p>{text}</p></div>
                <div className='dp-flex-40'><img src={image} alt='featureImage'/></div>
            </>
            }
        </div>
    )
}

export default PlatformFeature;