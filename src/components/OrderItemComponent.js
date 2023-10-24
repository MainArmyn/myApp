import React from "react";
import styles from "../styles/OrderItemComponent.module.css";
function OrderItemComponent({order}) {
    return (
        <div className={styles.item}>
            <div>{order.date}</div>
            <div>{order.number}</div>
            <div>{order.shipping}</div>
            <div>{order.status}</div>
            <div>{`${order.countOfProduct} товаров`}</div>
            <div>{`${order.sum} ₽`}</div>
            <button>Перейти</button>
        </div>
    )
}
OrderItemComponent.defaultProps = {
    order: {date: "23.07.2023 16:40:01",number: "#f94664e4-9527-4746-815b-da4fa2e04887",shipping: "Самовывоз",status: "ожидает подтверждения",countOfProduct: 5,sum: 1000}
};
export default OrderItemComponent;