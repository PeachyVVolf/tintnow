import React, { useRef, useEffect } from 'react';
import styles from '../resources/styles/navbar.module.css';

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
                    <button>Book Now</button>
                </div>
                <div className={styles.navOptions}>
                    <ul>
                        <li><p>Home</p></li>
                        <li><p>Client Platform</p></li>
                        <li><p>Service Platform</p></li>
                        <br/>
                        <li><p>Log In</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SubNav;