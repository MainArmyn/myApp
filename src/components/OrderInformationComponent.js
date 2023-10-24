import React from "react";
import styles from "../styles/OrderInformationComponent.module.css";
import card from "../assets/icon.png";
import place from "../assets/icon-2.png";
import OrderItemInfoComponent from "./OrderItemInfoComponent";
import time from "../assets/icon-3.png";
function OrderInformationComponent({ order }) {
    const basicStatus = ["ожидает подтверждения", "подтвержден", "ожидает оплаты", "оплачен", "ожидает доставки", "доставлен"];
    const getStatusClass = (index, targetStatus) => {
        if (index === targetStatus) {
            return styles.itemNoramlStatus;
        } else if (index < targetStatus) {
            return styles.itemActiveStatus;
        } else {
            return styles.itemNonActive;
        }
    }
    const targetStatusIndex = basicStatus.indexOf(order.status);
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Информация по заказу
            </h1>
            <div className={styles.info}>
                Заказ № {order.id}
            </div>
            <div className={styles.info}>
                от <span> {order.date}</span> <span>({order.status})</span>
            </div>
            <div className={styles.orderStorage}>
                <div className={styles.orderDescription}>
                    <div className={styles.orderPayment}>
                        <div className={styles.orderPaymentTitle}>
                            <img src={card} alt="" />
                            <span>Способ оплаты</span>
                        </div>
                        <div className={styles.orderPaymentInfo}>
                            <span>{order.paymentWay}</span>
                            <span>{order.sum} ₽</span>
                            <span>({order.paymentStatus === true ? "оплачен" : "не оплачен"})</span>
                        </div>
                    </div>
                    <div className={styles.orderShipping}>
                        <div className={styles.orderShippingTitle}>
                            <img src={place} alt="" />
                            <span>Способ получения</span>
                        </div>
                        <div className={styles.orderShippingText}>
                            <div className={styles.orderShippingTextColumn}>
                                <div className={styles.orderShippingBlock}>
                                    <span>Получатель:</span>
                                    <p>{order.human}</p>
                                </div>
                                <div className={styles.orderShippingBlock}>
                                    <span>Дата доставки:</span>
                                    <p>{order.shippingDate}</p>
                                </div>
                            </div>
                            <div className={styles.orderShippingTextColumn}>
                                <div className={styles.orderShippingBlock}>
                                    <span>Адрес доставки:</span>
                                    <p>{order.orderShippingPlace}</p>
                                </div>
                                <div className={styles.orderShippingBlock}>
                                    <span>Комментарий к заказу:</span>
                                    <p>{order.orderComment === "" ? "(нет)" : order.orderComment}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.orderStatus}>
                    <div className={styles.orderPaymentTitle}>
                        <img src={time} alt="" />
                        <span>Статус заказа</span>
                    </div>
                    <div className={styles.orderStatusInfo}>
                        {basicStatus.map((item, index) => (
                            <div
                                key={index}
                                className={getStatusClass(index, targetStatusIndex)}>
                                <span>{item}</span>
                                <div className={styles.point}></div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className={styles.ordersItems}>
                <div className={styles.cost}>
                    <div className={styles.costItem}>
                        <span>Сумма заказа</span>
                        <span>{order.sum}₽</span>
                    </div>
                    <div className={styles.costItem}>
                        <span>Стоимость доставки</span>
                        <span>{order.shipCost}₽</span>
                    </div>
                    <div className={styles.costItem}>
                        <span>Стоимость товаров</span>
                        <span>{order.sum}₽</span>
                    </div>
                </div>
                <div className={styles.tableContainer}>
                <div className={styles.table}>
                    <div>
                    Наименование
                    </div>
                    <div>
                    Количество
                    </div>
                    <div>
                    Цена за шт.
                    </div>
                    <div>
                    Скидка
                    </div>
                    <div>
                    Итого:
                    </div>
                </div>
                <OrderItemInfoComponent/>
                <OrderItemInfoComponent/>
                <OrderItemInfoComponent/>
                </div>
            </div>

        </div>
    )
}
OrderInformationComponent.defaultProps = {
    order: { date: "23.07.2023 16:40:01", id: "ufijefwiejf8234872482374987943", status: "ожидает оплаты", paymentWay: "картой", sum: "2000", paymentStatus: false, human: "Ольга Петровна 89873001132", shippingDate: "12.09.2023", orderShippingPlace: "ул НовоСадовая 23", orderComment: "хочу много всего", shipCost: 1000 }
};
export default OrderInformationComponent;