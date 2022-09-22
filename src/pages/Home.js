import React from 'react';
import Header from '../components/Header';
import ListComponent from '../components/ListComponent';
import SubHeader from '../components/SubHeader';
import styles from '../resources/styles/home.module.css';
import invisible from '../resources/images/invisible.svg';
import stars from '../resources/images/stars.svg';
import sun from '../resources/images/sun.svg';
import sportsCar from '../resources/images/sports-car.svg';
import eye from '../resources/images/eye.svg';
import cold from '../resources/images/cold.svg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {

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
    },
    {
      image: eye,
      altText: 'eyeIcon',
      text: 'Reduced Glare & Eye Strain'
    },
    {
      image: cold,
      altText: 'temperatureIcon',
      text: 'Maintain a Cooler Interior Temperature'
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
      <Header/>
      <SubHeader/>
      <h3>6 Reasons To Tint Your Windows</h3>
      <ListComponent listData={list}/>
      <div className={styles.questionSection}>
        <h1>Still have questions? Speak to a local Expert</h1>
        <button>Contact Us</button>
      </div>
      <h3>Our Platform</h3>
      <ListComponent listData={list} />
      <h2>Connecting People to quality services</h2>
      <div className={styles.aboutSection}>
        <h4>Client</h4>
        <ListComponent listData={smallerList} />
        <button>About Client</button>
      </div>
      <div className={styles.aboutSection}>
        <h4>Services</h4>
        <ListComponent listData={smallerList} />
        <button>About Services</button>
      </div>
      <div className={styles.aboutSection}>
        <h2>Why Join TintShop?</h2>
        <ListComponent listData={smallerList} />
        <button>Join Now</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Home