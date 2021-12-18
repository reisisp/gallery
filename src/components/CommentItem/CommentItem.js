import React from "react";
import styles from './CommentItem.module.scss';


export const CommentItem = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.comment}>
                <h1 className={styles.comment__name}>{props.comment.name}</h1>
                <p className={styles.comment__body}>{props.comment.body}</p>
                <p className={styles.comment__date}>{props.comment.date}</p>
            </div>
        </div >
    )
}

