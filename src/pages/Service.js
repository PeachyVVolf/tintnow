import React from 'react';
import { useState } from 'react';
import DropDown from '../components/DropDown';
import styles from '../resources/styles/service.module.css';
import '../resources/styles/global.css';

const Service = () => {

    const [windowColors, setWindowColors] = useState({
        "frontWindow": "#D9D9D9",
        "frontLeftWindow": "#D9D9D9",
        "frontRightWindow": "#D9D9D9",
        "backLeftWindow": "#D9D9D9",
        "backRightWindow": "#D9D9D9",
        "backWindow": "#D9D9D9",
        "topWindow": "#D9D9D9"
    })

    const options = [
        "Option 1",
        "Option 2",
        "Option 3"
    ]

    return (
        <div className={styles.service}>
            <h4>Service</h4>
            <DropDown options={options} title="Date and Time"/>
            <DropDown options={options} title="Make"/>
            <DropDown options={options} title="Model"/>
            <DropDown options={options} title="Year"/>
            <h4>Select Windows</h4>
            <div className={styles.windows}>
                <div className='dp-flex'>
                    <div 
                        onClick={
                            ()=>setWindowColors(windowColors["frontWindow"] === "#D9D9D9" 
                            ? {
                                ...windowColors,
                                "frontWindow": "#1F6BFF"
                                } 
                            : {
                                ...windowColors,
                                "frontWindow": "#D9D9D9"
                                }
                            )
                        } 
                        className={styles.frontWindow} 
                        style={{backgroundColor:windowColors["frontWindow"]}}
                    />
                </div>
                <div className={`dp-flex ${styles.middleWindows}`}>
                    <div className={`dp-flex-20 ${styles.leftWindows}`}>
                        <div 
                            onClick={
                                ()=>setWindowColors(windowColors["frontLeftWindow"] === "#D9D9D9" 
                                ? {
                                    ...windowColors,
                                    "frontLeftWindow": "#1F6BFF"
                                    } 
                                : {
                                    ...windowColors,
                                    "frontLeftWindow": "#D9D9D9"
                                    }
                                )
                            } 
                            className={styles.frontLeftWindow} 
                            style={{backgroundColor:windowColors["frontLeftWindow"]}}
                        />
                        <div 
                            onClick={
                                ()=>setWindowColors(windowColors["backLeftWindow"] === "#D9D9D9" 
                                ? {
                                    ...windowColors,
                                    "backLeftWindow": "#1F6BFF"
                                    } 
                                : {
                                    ...windowColors,
                                    "backLeftWindow": "#D9D9D9"
                                    }
                                )
                            } 
                            className={styles.backLeftWindow} 
                            style={{backgroundColor:windowColors["backLeftWindow"]}}
                        />
                    </div>
                    <div className='dp-flex-50'>
                        <div 
                            onClick={
                                ()=>setWindowColors(windowColors["topWindow"] === "#D9D9D9" 
                                ? {
                                    ...windowColors,
                                    "topWindow": "#1F6BFF"
                                    } 
                                : {
                                    ...windowColors,
                                    "topWindow": "#D9D9D9"
                                    }
                                )
                            } 
                            className={styles.topWindow} 
                            style={{backgroundColor:windowColors["topWindow"]}}
                        />
                    </div>
                    <div className={`dp-flex-20 ${styles.leftWindows}`}>
                        <div 
                            onClick={
                                ()=>setWindowColors(windowColors["frontRightWindow"] === "#D9D9D9" 
                                ? {
                                    ...windowColors,
                                    "frontRightWindow": "#1F6BFF"
                                    } 
                                : {
                                    ...windowColors,
                                    "frontRightWindow": "#D9D9D9"
                                    }
                                )
                            } 
                            className={styles.frontRightWindow} 
                            style={{backgroundColor:windowColors["frontRightWindow"]}}
                        />
                        <div 
                            onClick={
                                ()=>setWindowColors(windowColors["backRightWindow"] === "#D9D9D9" 
                                ? {
                                    ...windowColors,
                                    "backRightWindow": "#1F6BFF"
                                    } 
                                : {
                                    ...windowColors,
                                    "backRightWindow": "#D9D9D9"
                                    }
                                )
                            } 
                            className={styles.backRightWindow} 
                            style={{backgroundColor:windowColors["backRightWindow"]}}
                        />
                    </div>
                </div>
                <div className='dp-flex'>
                    <div 
                        onClick={
                            ()=>setWindowColors(windowColors["backWindow"] === "#D9D9D9" 
                            ? {
                                ...windowColors,
                                "backWindow": "#1F6BFF"
                                } 
                            : {
                                ...windowColors,
                                "backWindow": "#D9D9D9"
                                }
                            )
                        } 
                        className={styles.backWindow} 
                        style={{backgroundColor:windowColors["backWindow"]}}
                    />
                </div>
            </div>
        </div>
    )
}

export default Service;