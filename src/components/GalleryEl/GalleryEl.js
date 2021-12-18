import React from 'react';
import styles from './GalleryEl.module.scss'


export const GalleryEl = ({ img, open, id }) => {

    return (
        <img onClick={open} src={img} alt="img" className={styles.img} />
    );
};
