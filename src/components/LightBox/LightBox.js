import React from 'react';
import cn from 'classnames';
import styles from './LightBox.module.scss'
import { Comment } from '../Comment/Comment';


export const LightBox = ({ visible, img, comments }) => {


    return (
        <div className={visible === true ? cn(styles.lightbox, styles.active) : styles.lightbox}>
            <div className={styles.lightbox__content}>
                <img className={styles.lightbox__img} src={img} alt="img" />
                <Comment data={comments} />
            </div>
        </div>
    );
};
