import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Btn } from "../UI/btn/Btn";
import { CustomInput } from "../UI/input/CustomInput";
import { CustomTextArea } from "../UI/textarea/CustomTextArea";
import styles from './CommentForm.module.scss';


export const CommentForm = ({ add }) => {
    const [comment, setComment] = useState({ name: '', body: '' });

    const addComment = (e) => {
        e.preventDefault();
        const newComment = {
            ...comment, id: uuidv4(), date: new Date().toLocaleDateString()
        }
        add(newComment);
        setComment({ name: '', body: '' });
    }

    return (
        <form className={styles.form}>
            <CustomInput
                type="text"
                placeholder="Введите имя"
                onChange={e => setComment({ ...comment, name: e.target.value })}
                value={comment.name} />
            <CustomTextArea
                placeholder="Написать комментарий"
                rows="3"
                onChange={e => setComment({ ...comment, body: e.target.value })}
                value={comment.body} />
            <div className={styles.form__btn}>
                <Btn onClick={addComment}>Отправить</Btn>
            </div>
        </form>
    )
}

