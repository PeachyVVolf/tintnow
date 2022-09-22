import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ListComponent from '../components/ListComponent';
import styles from '../resources/styles/home.module.css';
import '../resources/styles/global.css';
import aboutImage from '../resources/images/aboutImage.svg';
import getConnected from '../resources/images/getConnected.svg';

import invisible from '../resources/images/invisible.svg';
import stars from '../resources/images/stars.svg';
import sun from '../resources/images/sun.svg';
import sportsCar from '../resources/images/sports-car.svg';

const AboutClient = () => {
    const list = [
        {
            image: invisible,
            altText: 'invisibleIcon',
            text: 'Increased yor privacy in yor car, home or office.'
        },
        {
            image: stars,
            altText: 'starsIcon',
            text: 'Gives windows a reflective shine.'
        },
        {
            image: sun,
            altText: 'sunIcon',
            text: 'Blocks 98% of infrared heat from the sun.'
        },
        {
            image: sportsCar,
            altText: 'sportsCarIcon',
            text: 'Protect your car interior from UV damage.'
        }
    ]
    const smallerList = [
        {
          image: invisible,
          altText: 'invisibleIcon',
          text: 'Increased yor privacy in yor car, home or office.'
        },
        {
          image: stars,
          altText: 'starsIcon',
          text: 'Gives windows a reflective shine.'
        },
        {
          image: sun,
          altText: 'sunIcon',
          text: 'Blocks 98% of infrared heat from the sun.'
        },
      ]

    return (
        <div className={styles.home}>
            <Navbar/>
            <Header image={aboutImage}/>
            <h3>Advantages</h3>
            <ListComponent listData={list}/>
            <h3>Our Guarantees</h3>
            <ListComponent listData={smallerList}/>
            <h3>Get Connected</h3>
            <div className={`dp-flex ${styles.contactArea}`}>
                <div className='dp-flex-50'>
                    <img src={getConnected} alt='getConnected'/>
                </div>
                <div className='dp-flex-50'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor 
                    </p>
                    <button>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default AboutClient;