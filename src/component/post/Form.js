import React, {useEffect, useState} from 'react';
import styles from "./PostForm.module.css";

const Form = ({title = '', body = '', onChangeInput}) => {
    return (
        <>
            <div className={styles.formGroup}>
                <input type="text"
                       placeholder="Write a post title here..."
                       onChange={(e) => onChangeInput(e, 'title')}
                       value={title}
                />
            </div>
            <div className={styles.formGroup}>
                <textarea placeholder="Write a post here..."
                          onChange={(e) => onChangeInput(e, 'body')}
                          value={body}
                />
            </div>
        </>
    )
}
export default Form;
