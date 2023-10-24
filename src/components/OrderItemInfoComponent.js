import React from "react";
import styles from "../styles/OrderItemInfoComponent.module.css";
import logo from "../assets/e0a896f3cf32e4c3c622a3cdb4060861.png";
function OrderItemInfoComponent() {
    return (
        <div className={styles.item}>
            <img src={logo} alt="" className={styles.img}/>
            <div className={styles.info}>
                <span>Худи женский утеплённый оверсайз</span>
                <div className={styles.option}>
                    <span>цвет</span>
                    <span>черный</span>
                </div>
                <div className={styles.option}>
                    <span>цвет</span>
                    <span>черный</span>
                </div>
            </div>
            <div className={styles.count}>
                {`100 шт`}
            </div>
            <div className={styles.price}>
                <span>3000 ₽</span>
                <span>300 ₽</span>
            </div>
            <div className={styles.sale}>
                <span>2700 ₽</span>
            </div>
            <div className={styles.sum}>
                <span>50 141 ₽</span>
            </div>
        </div>
    )
}
export default OrderItemInfoComponent;