import React from "react";
import styles from "../styles/PhoneComponent_v2.module.css";
import logg from "../assets/botq.svg";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import flower from "../assets/e54b33452d3cdb7a8dce1cc9b9c6f444.jpeg";
import dostavka from "../assets/dostavka.png";
function Phone({name,description,logo}) {
    return (
        <div className={styles.container}>
            <div className={styles.shop}>
                <div className={styles.banners}>
                    <div className={styles.banner}>
                        <img src={dostavka} alt=""/>
                        <p>Бесплатная доставка от 2000 ₽</p>
                     <div className={styles.number5}>
                                    5
                        </div>
                    </div>
                    <div className={styles.banner}>
                        <img src={dostavka} alt=""/>
                        <p>Бесплатная доставка от 2000 ₽</p>
                    </div>
                </div>
                <div className={styles.shopInfo}>
                <Popup trigger={<div className={styles.number3}>
                                    3
                    </div>} position="left center">
                            <div>Пролистайте страницу ниже для добавления товаров</div>
                        </Popup>
                    <Popup trigger={  <div className={styles.number1}>
                                    1
                    </div>} position="top center">
                        <div>Для заполнения данного поля перейдите в раздел “Баннеры и акции”</div>
                    </Popup>
                  
                    <Popup trigger={ <div className={styles.number2}>
                                    2
                    </div>} position="bottom center">
                        <div>Заполните данные вашего магазина в полях слева</div>
                    </Popup>
                    <Popup trigger={ <div className={styles.number4}>
                                    4
                    </div>} position="right center">
                        <div>Категории и подкатегории добавляются при добавлении товара</div>
                    </Popup>
                   
                    <img src={logo === undefined ? logg:logo} alt=""/>
                    <div className={styles.textContainer}>
                        <span>{name === "" ? "Название":name}</span>
                        <p>{description === "" ? "Описание":description}</p>
                    </div>
                </div>
                <div className={styles.categories}>
                    <span>Букеты</span>
                    <span>Отдельный цветы</span>
                    <span>Комплект</span>
                </div>
                <div className={styles.products}>
                    <div className={styles.product}>
                        <img src={flower} alt=""/>
                        <span>15 000 &#8381;</span>
                        <p>Букет живых цветов из 51 розы - нежный микс 40см.</p>
                    </div>
                    <div className={styles.product}>
                        <img src={flower} alt=""/>
                        <span>5000 &#8381;</span>
                        <p>Букет живых цветов из 51 розы - нежный микс 40см.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Phone;