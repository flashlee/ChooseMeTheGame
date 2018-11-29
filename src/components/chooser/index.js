import React, { Component } from 'react';
import styles from './chooser.module.css';
import GamesToChoose from '../gamesToChoose';

class Chooser extends Component {
    render() {
        return (
            <div className={styles.container}>
                <GamesToChoose />
                <button>Choose A Game!</button>
            </div>
        );
    }
}

export default Chooser;