import React from 'react';
import styles from '../resources/styles/header.module.css';
import '../resources/styles/global.css';
import homeHeaderVehicle from '../resources/images/homeHeaderVehicle.svg';
import homeHeaderResidental from '../resources/images/homeHeaderResidental.svg';
import homeHeaderCommercial from '../resources/images/homeHeaderCommercial.svg';

const SubHeader = () => {
  return (
        <div className={`${styles.subHeader} dp-flex`}>
            <div className='dp-flex-33'>
                <img src={homeHeaderVehicle} alt='homeHeaderVehicle' />
                <p>Vehicle</p>
            </div>
            <div className='dp-flex-33'>
                <img src={homeHeaderCommercial} alt='homeHeaderCommercial' />
                <p>Commercial</p>
            </div>
            <div className='dp-flex-33'>
                <img src={homeHeaderResidental} alt='homeHeaderResidental' />
                <p>Residental</p>
            </div>
        </div>
  )
}

export default SubHeader