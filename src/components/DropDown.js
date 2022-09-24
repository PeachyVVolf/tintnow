import React from 'react';
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import styles from '../resources/styles/service.module.css';

const DropDown = ({options, title}) => {

    const [openDrop, setOpenDrop] = useState(false);
    const [option, setOption] = useState("");

    return (
        <div className={styles.dropDown} onClick={()=>setOpenDrop(!openDrop)}>
            <p>{option || title} <MdKeyboardArrowDown/></p>
            {openDrop &&
                <div className={styles.dropDownOptions}>
                    {options.map((option, index)=> (
                        <p onClick={()=>setOption(option)} key={index}>{option}</p>
                    ))}
                </div>
            }
        </div>
    )
}

export default DropDown