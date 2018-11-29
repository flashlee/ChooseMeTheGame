import React, { Component } from 'react';
import styles from './chooser.module.css';
import GamesToChoose from '../gamesToChoose';

class Chooser extends Component {
    render() {
        return (
            <div className={styles.container}>
                <GamesToChoose />
                <button className={styles.baton}>Choose!</button>
            </div>
        );
    }
}

export default Chooser;