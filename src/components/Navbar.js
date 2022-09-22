import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from '../resources/styles/navbar.module.css';
import SubNav from './SubNav';


  
const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);

    return (
        <div className={styles.navbar}>
            <GiHamburgerMenu onClick={()=>setOpenNav(!openNav)}/>
            <SubNav openNav={openNav} setOpenNav={setOpenNav} />
        </div>
    )
}

export default Navbar;