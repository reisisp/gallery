import React, { useState } from "react";
import { GalleryEl } from "../GalleryEl/GalleryEl";
import { Pagination } from "../UI/pagination/Pagination";
import { LightBox } from "../LightBox/LightBox";
import { v4 as uuidv4 } from 'uuid';
import styles from './Gallery.module.scss';


export const Gallery = () => {
    const imgPath = (imgName) => require(`../../assets/photo/${imgName}.jpg`);
    const images = [
        { id: uuidv4(), path: imgPath(1), comments: [] },
        { id: uuidv4(), path: imgPath(2), comments: [] },
        { id: uuidv4(), path: imgPath(3), comments: [] },
        { id: uuidv4(), path: imgPath(4), comments: [] },
        { id: uuidv4(), path: imgPath(5), comments: [] },
        { id: uuidv4(), path: imgPath(6), comments: [] },
        { id: uuidv4(), path: imgPath(7), comments: [] },
        { id: uuidv4(), path: imgPath(8), comments: [] },
        { id: uuidv4(), path: imgPath(9), comments: [] },
        { id: uuidv4(), path: imgPath(10), comments: [] },
        { id: uuidv4(), path: imgPath(11), comments: [] },
        { id: uuidv4(), path: imgPath(12), comments: [] },
        { id: uuidv4(), path: imgPath(13), comments: [] },
        { id: uuidv4(), path: imgPath(14), comments: [] },
        { id: uuidv4(), path: imgPath(15), comments: [] },
        { id: uuidv4(), path: imgPath(16), comments: [] },
        { id: uuidv4(), path: imgPath(17), comments: [] },
        { id: uuidv4(), path: imgPath(18), comments: [] },
        { id: uuidv4(), path: imgPath(19), comments: [] },
        { id: uuidv4(), path: imgPath(20), comments: [] },
        { id: uuidv4(), path: imgPath(21), comments: [] },
        { id: uuidv4(), path: imgPath(22), comments: [] },
        { id: uuidv4(), path: imgPath(23), comments: [] }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [imgPerPage] = useState(8);

    const lastPage = currentPage * imgPerPage;
    const firstPage = lastPage - imgPerPage;
    const current = images.slice(firstPage, lastPage);

    const [active, setActive] = useState(false);
    const [activeImg, setActiveImg] = useState('');
    const [comments, setComments] = useState([]);

    const openImg = () => {
        setActive(!active);
    }

    const setBoxImg = (e) => {
        let find = current.find(el => el.id === e.currentTarget.id);
        setActiveImg(find.path);
        setComments(find.comments);
    }

    const paginate = page => setCurrentPage(page);

    return (
        <div className={styles.container}>
            <h1 className={styles.galery__heading}>Галерея</h1>
            <div className={styles.galery}>
                {current.map((image, index) =>
                    <div onClick={setBoxImg} id={image.id} key={index}>
                        <GalleryEl open={openImg} img={image.path} />
                    </div>
                )}
            </div >
            <LightBox visible={active} img={activeImg} comments={comments} />
            <Pagination paginate={paginate} active={currentPage} imgPerPage={imgPerPage} imgQuantity={images.length} />
        </div>
    )
}

