import React from "react";
import styles from "../styles/BannerItemComponent_v2.module.css";
function BannerItemComponent({textOrImage,name,status,start,end}) {
    const handlerLook = () => {
        console.log("function handlerLook");
    };
    const handlerDelete = () => {
        console.log("function handlerDelete");
    };
    return (
        <div className={styles.item}>
            <div className={styles.imgOrText}>
                <span>{textOrImage}</span>
            </div>
            <div className={styles.info}>
                <h5 className={styles.title}>{name}</h5>
                <span>{`Статус: ${status}`}</span>
                <span>{`Начало: ${start}`}</span>
                <span>{`Завершние: ${end}`}</span>
                <div className={styles.btns}>
                    <button className={styles.look} onClick={handlerLook}>
                        Посмотреть
                    </button>
                    <button className={styles.delete} onClick={handlerDelete}>
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    )
}
BannerItemComponent.defaultProps = {
    imgOrText: "text",
    name: "Name",
    status: "Active",
    start: "16 сентября 2023",
    end: "20 сентября 2023"
}
export default BannerItemComponent;