import React,{useState} from "react";
import styles from "../styles/DesignItemComponent_v2.module.css";
function DesignItem({images,handlerTochangeBtn}) {
    const handlerForBtn = (e) => {
            handlerTochangeBtn();
            for (let el of e.target.parentElement.parentElement.children) {
                const btn = [...el.children][3];
                btn.classList.remove(styles.activeBtn);
            }
            e.target.classList.add(styles.activeBtn);
    };
    return (
        <div className={styles.item}>
            {images.map(el => <img src={el} className={styles.designImg} alt=""></img>)}
            <button className={styles.itemBtn} onClick={handlerForBtn}>Выбрать</button>
        </div>
    )
}
export default DesignItem; 