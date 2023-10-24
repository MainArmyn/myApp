import React,{useState} from "react";
import styles from "../styles/MainComponent.module.css";
import arrow from "../assets/icon-4.png";
import Popup from "reactjs-popup";
function MainComponent() {
    const user = "Bubba";
    const activeShops = 3;
    const allShops = 12;
    const activeProducts = 20;
    const contentStyle = { width: 500,height: 200,overflowY: "scroll",borderRadius: 12,boxShadow: "0px 2px 8px 2px rgba(55, 55, 116, 0.15)",padding: 12 };
    const allProducts = 100;
    const arrowStyle = {display: "block"};
    const handlerClick = (e) => {
        for (let items of e.target.parentElement.children) {
            items.classList.remove(styles.activeBtn);
        }
        e.target.classList.add(styles.activeBtn);
    };
    return (
        <div className={styles.container}>
            <Popup trigger={ <button className={styles.popupBtn}>Подсказка(1)</button>} {...{contentStyle,arrowStyle}} position="bottom center">
                <div className={styles.popupContent}>
                <span style={{fontWeight: 600}}>Подсказка:</span>
                <button className={styles.shopsBtn}onClick={() => { window.location = '/stores' }}>
                                <span>Все подсказки</span>
                                <img src={arrow} alt=""/>
                </button>
                </div>
                <p className={styles.tooltip}>
                <span className={styles.text}>Добро пожаловать,{user}!</span><br></br>
                Дорогой предприниматель, Добро пожаловать в мир онлайн-торговли! Здесь идеи становятся витринами, а клики мыши – реальностью. Твой кабинет – твоя мастерская успеха. Создавай уникальные магазины, наполняй их лучшими продуктами, завоевывай сердца клиентов. Твои усилия – кирпичи в фундаменте бизнеса. Мы поддерживаем твои страсти и смелые идеи. За экранами – реальные истории успеха. Создавай незабываемые впечатления. Пусть твой кабинет станет местом, где рождаются уникальные предложения, а каждый заказ – повод для гордости. С нетерпением ждем, как ты преображаешь виртуальные полки в сокровищницы. С наилучшими пожеланиями, команда Botique
                </p>
            </Popup>
            <h1 className={styles.title}>
            Личный кабинет продавца
            </h1>
            <span className={styles.text}>Добро пожаловать,{user}!</span>
            <div className={styles.blockStorage}>
                <div className={styles.statisticBlock}>
                    <div className={styles.statisticSection}>
                        <span>Статистика кабинета:</span>
                        <div className={styles.statisticSectionShops}>
                            <span>Магазинов:</span>
                            <span>{activeShops}/{allShops}</span>
                            <button className={styles.shopsBtn}onClick={() => { window.location = '/stores' }}>
                                <span>Все магазины</span>
                                <img src={arrow} alt=""/>
                            </button>
                        </div>
                        <div className={styles.statisticSectionShops}>
                            <span>Товаров:</span>
                            <span>{activeProducts}/{allProducts}</span>
                            <button className={styles.shopsBtn} onClick={() => {window.location = "/positions"}}>
                                <span>Все товары</span>
                                <img src={arrow} alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.statisticInfo}>
                        <span>Статистика продаж:</span>
                        <div className={styles.statisticBtns}>
                            <button onClick={handlerClick}>Неделя</button>
                            <button onClick={handlerClick}>Месяц</button>
                            <button onClick={handlerClick}>за все время</button>
                        </div>
                        <div className={styles.stats}>
                            <div className={styles.statsItem}>
                                <span>Всего заказов:</span>
                                <span>3 584</span>
                            </div>
                            <div className={styles.statsItem}>
                                <span>Заказов на сумму:</span>
                                <span>1 115</span>
                            </div>
                            <div className={styles.statsItem}>
                                <span>Количество покупателей:</span>
                                <span>1 115</span>
                            </div>
                            <div className={styles.statsItem}>
                                <span>Средний чек:</span>
                                <span>5345</span>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => {window.location = "/orders"}} className={styles.orderBtn}>Перейти на страницу заказов</button>
                </div>
                <div className={styles.btnsBlock}>
                    <button className={styles.btnBlock} onClick={() => { window.location.href = `/store/set-design`;}}>
                       <div></div>
                        <span>Добавить новый магазин</span>
                    </button>
                    <button className={styles.btnBlock} onClick={() => {window.location = "/product/new";}}>
                        <div></div>
                        <span>Добавить новый товар</span>
                    </button>
                    <button className={styles.btnBlock} onClick={() => {window.location = "/create-banner";}}>
                        <div></div>
                        <span>Добавить баннер/акцию</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default MainComponent;