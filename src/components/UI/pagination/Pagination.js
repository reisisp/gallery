import React from 'react';
import styles from './Pagination.module.scss';
import cn from 'classnames';


export const Pagination = ({ active, imgPerPage, imgQuantity, paginate }) => {
    const pageNums = [];

    for (let i = 1; i <= Math.ceil(imgQuantity / imgPerPage); i++) pageNums.push(i);

    return (
        <ul className={styles.pagination}>
            {
                pageNums.map((num, index) =>
                    <li
                        className={num === active
                            ? cn(styles.pagination__elem, styles.active) : styles.pagination__elem}
                        onClick={() => paginate(num)}
                        key={index}>
                        {num}
                    </li>
                )
            }
        </ul >
    );
};
