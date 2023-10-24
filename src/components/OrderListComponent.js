import React, { useState, useEffect } from "react";
import styles from "../styles/OrderListComponent.module.css";
import sort from "../assets/sort.png";
import OrderItemComponent from "./OrderItemComponent";
import {v4 as uuid} from "uuid";
function OrderListComponent({ orders }) {
    const countsForOrders = [2, 10, 20, 50];//это для сколько на странице отображать
    const testOrders = [1,2,3,,4,5,6,7,8,9,10,12,13,14,15];//это просто массив для теста отображения заказов прсосто использую его длину
    const handlerForDate = (e) => {
        for (let date of e.currentTarget.parentElement.children) {
            date.classList.remove(styles.activeDay);
        }
        e.currentTarget.classList.add(styles.activeDay);
        console.log("function handlerFordate");
    };
    const [activePage, setActivePage] = useState(10);//здесь хранится актвиное количество для отображения

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Информация по заказам</h1>
            <div className={styles.info}>
                <div className={styles.days}>
                    <button onClick={handlerForDate}>7 дней</button>
                    <button onClick={handlerForDate}>14 дней</button>
                    <button onClick={handlerForDate}>1 месяц</button>
                    <button onClick={handlerForDate}>3 месяца</button>
                </div>
                <div className={styles.numbers}>
                    <div className={styles.numbersItem}>
                        <span>Количество заказов</span>
                        <span>{orders.count}</span>
                    </div>
                    <div className={styles.numbersItem}>
                        <span>Заказов на сумму</span>
                        <span>{`${orders.sum} ₽`}</span>
                    </div>
                    <div className={styles.numbersItem}>
                        <span>Средний чек</span>
                        <span>{`${orders.check} ₽`}</span>
                    </div>
                    <div className={styles.numbersItem}>
                        <span>Покупателей</span>
                        <span>{`${orders.buyers} ₽`}</span>
                    </div>
                </div>
            </div>
            <div className={styles.ordersContainer}>
                <div className={styles.countOnPage}>
                    <span>Заказов на странице:</span>
                    <ul>
                        {countsForOrders.map(el => <li key={uuid()} className={activePage === el ? styles.activePage : null} onClick={() => setActivePage(el)}>{el}</li>)}
                    </ul>
                </div>
                <div className={styles.storage}>
                    <div className={styles.ordersInfo}>
                        <div>
                            <span>Дата и время заказа</span>
                            <img src={sort} alt="" />
                        </div>
                        <div>
                            <span>Номер заказа</span>
                            <img src={sort} alt="" />
                        </div>
                        <div>
                            <span>Вид доставки</span>
                            <img src={sort} alt="" />
                        </div>
                        <div>
                            <span>Статус</span>
                            <img src={sort} alt="" />
                        </div>
                        <div>
                            <span>Товары/услуги</span>
                            <img src={sort} alt="" />
                        </div>
                        <div>
                            <span>Сумма заказа</span>
                            <img src={sort} alt="" />
                        </div>
                    </div>
                    {testOrders.map((el, idx) => {
                        if (idx === Number(activePage) || idx >= Number(activePage)) {
                            return;
                        }
                        return <OrderItemComponent key={uuid()}/>;

                    })}
                </div>
                <div className={styles.pages}>
                    <span>Страница:</span>
                    <ul>
                        {testOrders.map((item,indx) => {
                            if (indx === Number(testOrders.length/Number(activePage)) || indx >= Number(testOrders.length/Number(activePage)))  {
                                return;
                            }
                            return <li>{indx+1}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
OrderListComponent.defaultProps = {
    orders: { count: 1152000, buyers: 100000, check: 3000, sum: 2000000 }
};
export default OrderListComponent;