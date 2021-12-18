import React from 'react';
import styles from './CustomTextArea.module.scss';


export const CustomTextArea = (props) => {
    return (
        <textarea {...props} className={styles.input} />
    );
};
