import React from "react";
import { useState } from "react/cjs/react.development";
import { CommentList } from "../CommentList/CommentList";
import { CommentForm } from "../CommentForm/CommentForm";
import { Like } from "../UI/icons/Like";
import styles from './Comment.module.scss';


export const Comment = ({ data }) => {
    const [comments, setComments] = useState(data)

    const addComment = (comment) => {
        setComments([...comments, comment]);
    }

    return (
        <div className={styles.container}>
            <div className={styles.like}>
                <Like />
            </div>
            <CommentList comments={comments} />
            <CommentForm add={addComment} />
        </div >
    )
}

