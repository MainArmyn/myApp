import React from "react";
import styles from "../styles/ShopListItemComponent_v2.module.css";
import copy from "../assets/icon-copy.png";
function ShopItem({shop}) {
    const handlerForDeleteBtn = () => {
        console.log("function handlerForDeleteBtn");
    };
    const handlerForLookBtn = () => {
        console.log("function handlerForLookBtn");
    };
    return (
        <div className={styles.shop}>
            <div className={styles.shopRow}>
                <img src={shop.qr} alt="qr"></img>
                <div className={styles.shopInfo}>
                    <span>{shop.name}</span>
                    <span>Статус: {shop.status}</span>
                    <a href={shop.href}>
                        <span className={styles.shopInfoHref}>Ссылка на мой магазин</span>
                        <img className={styles.shopInfoImg}src={copy} alt=""></img>
                    </a>
                </div>
            </div>
            <div className={styles.shopRow}>
                <button onClick={handlerForLookBtn} className={styles.shopLook}>
                    Посмотреть
                </button>
                <button onClick={handlerForDeleteBtn} className={styles.shopDelete}>
                    Удалить
                </button>
            </div>
        </div>
    )
}
export default ShopItem;