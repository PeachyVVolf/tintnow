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
import Packages from '../components/Packages';
import PlatformFeature from '../components/PlatformFeature';

const AboutService = () => {
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
        }
    ]

    const packages = [
        {
            name: 'Gold',
            info: ['Lorem ipsum dolor sit amet, consectetur',
                    'Lorem ipsum dolor sit amet, consectetur',
                    'Lorem ipsum dolor sit amet, consectetur'
                ],
            price: '100'
        },     
        {
            name: 'Platinum',
            info: ['Lorem ipsum dolor sit amet, consectetur',
                    'Lorem ipsum dolor sit amet, consectetur',
                    'Lorem ipsum dolor sit amet, consectetur'
                ],
            price: '300'
        },     
        {
            name: 'Bronze',
            info: ['Lorem ipsum dolor sit amet, consectetur',
                    'Lorem ipsum dolor sit amet, consectetur',
                    'Lorem ipsum dolor sit amet, consectetur'
                ],
            price: '50'
        }
    ]

    return (
        <div className={styles.home}>
            <Navbar/>
            <Header image={aboutImage}/>
            <h3>Lead Generator</h3>
            <ListComponent listData={list}/>
            <div className={styles.allPackages}>
                <h3>Packages</h3>
                <Packages packages={packages} />
            </div>
            <h2>Platform Features</h2>
            <div className={styles.features}>
                <PlatformFeature 
                    index={0} 
                    image={getConnected} 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
                <h3>Title</h3>
                <PlatformFeature 
                    index={1} 
                    image={getConnected} 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
                <h3>Title</h3>
                <PlatformFeature 
                    index={0} 
                    image={getConnected} 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
                <h3>Title</h3>
                <PlatformFeature 
                    index={1} 
                    image={getConnected} 
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
            </div>
        </div>
    )
}

export default AboutService;