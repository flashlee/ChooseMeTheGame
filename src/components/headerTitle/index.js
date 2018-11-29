import React, { Component } from 'react';
import styles from './headerTitle.module.css';
console.log(styles);
class HeaderTitle extends Component {
    render() {
        return (
            <h1 className={styles.header}>C.O.G.</h1>
        );
    }
}

export default HeaderTitle;