import React, { Component } from 'react';
import styles from './searchField.module.css';

class searchField extends Component {
    render() {
        return (
            <div>
                <input className={styles.input} type="text" placeholder="Type here name of the game" />
            </div>
        );
    }
}

export default searchField;