import React from 'react';
import styles from './CustomInput.module.scss';


export const CustomInput = (props) => {
    return (
        <input {...props} className={styles.input} />
    );
};
