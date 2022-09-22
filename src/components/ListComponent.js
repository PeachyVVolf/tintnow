import React from 'react';
import styles from '../resources/styles/listComponent.module.css';

const ListComponent = ({listData}) => {
    return (
        <div className={styles.listComponent}>
            <ul>
                {listData.map((listItem, index) => (
                    <li key={index}>
                        <img src={listItem.image} alt={listItem.altText} />
                        <p>{listItem.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListComponent;