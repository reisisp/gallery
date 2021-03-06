import React from 'react';
import { useState } from 'react';
import styles from './Like.module.scss'


export const Like = () => {
    let [isLiked, setIsLiked] = useState(false);

    const like = () => {
        setIsLiked(!isLiked);
    }

    return (
        <svg onClick={like} className={styles.like} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.4769 9.5H20.4812C20.3603 11.1011 19.6622 12.6108 18.5072 13.7424L17.5699 14.6608L11.995 19.3508L6.24596 14.6631L5.43712 13.8195C4.30986 12.6437 3.63411 11.1142 3.51796 9.5H3.52311L3.50322 8.98086C3.50108 8.92503 3.5 8.8689 3.5 8.8125C3.5 6.43077 5.43077 4.5 7.8125 4.5C9.42021 4.5 10.8231 5.37952 11.5652 6.68604L12 7.45146L12.4348 6.68604C13.1769 5.37952 14.5798 4.5 16.1875 4.5C18.5692 4.5 20.5 6.43077 20.5 8.8125C20.5 8.8689 20.4989 8.92503 20.4968 8.98087L20.4769 9.5Z" className={isLiked ? styles.active : styles.default} />
        </svg>
    );
};
