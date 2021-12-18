import React from "react";
import { CommentItem } from "../CommentItem/CommentItem";
import styles from './CommentList.module.scss';


export const CommentList = ({ comments }) => {

    return (
        <div className={styles.comments}>
            {
                comments.map((comment, index) =>
                    <CommentItem comment={comment} key={index} />
                )
            }
        </div>
    )
}

