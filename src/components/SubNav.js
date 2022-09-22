import React, { useRef, useEffect } from 'react';
import styles from '../resources/styles/navbar.module.css';
import { Link } from 'react-router-dom';

function useOutsideAlerter(ref, setOpenNav) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenNav(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

const SubNav = ({openNav, setOpenNav}) => {

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setOpenNav);

    return (
        <div ref={wrapperRef} className={openNav ? styles.sideNavOpen : styles.sideNavClosed}>
            <div className={styles.navData}>
                <div className={styles.navBtnContainer}>
                    <button><Link to='/book-now'>Book Now</Link></button>
                </div>
                <div className={styles.navOptions}>
                    <ul>
                        <li><Link to='/'><p>Home</p></Link></li>
                        <li><Link to='/about-client'><p>Client Platform</p></Link></li>
                        <li><Link to='/about-service'><p>Service Platform</p></Link></li>
                        <br/>
                        <li><p>Log In</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SubNav;