import React, { Component } from 'react';
import styles from './headerTitle.module.css';
console.log(styles);
class HeaderTitle extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.header}>C.M.T.G.</h1>
                <h1 className={styles.header}>(Choose Me The Game!)</h1>
            </div>
        );
    }
}

export default HeaderTitle;