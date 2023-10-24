import React,{useState} from "react";
import styles from "../styles/InfoShopComponent_v2.module.css";
import Phone from "./PhoneComponent_v2";
import CustomFileInput from "./CustomInputComponent_v2";
import passLogo from "../assets/Flower.png";
function InfoShop() {
    const [nameValue,setName] = useState("");
    const [textValue,setText] = useState("");
    const handlerForCustomBtns = (e) => {
        for (let btn of e.target.parentElement.children) {
            btn.classList.remove(styles.activeBtn);
        }
        e.target.classList.add(styles.activeBtn);
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.containerTitle}>Заполнение магазина</h1>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <div className={styles.formColumn}>
                        <div className={styles.formGroup}>
                            <div className={styles.formGroupTitle}>
                                <div className={styles.number}>
                                    1
                                </div>
                                <span>Название магазина</span>
                            </div>
                            <input type="text" value={nameValue} onChange={(e) => setName(e.target.value)} placeholder="Название магазина"></input>
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.formGroupTitle}>
                                <div className={styles.number}>
                                    2
                                </div>
                                <span>Описание магазина</span>
                            </div>
                            <textarea value={textValue} onChange={(e) => { setText(e.target.value)}} placeholder="Краткое описание вашего магазина, деятельности, особенностей, контактов, уникальных предложений и тд."></textarea>
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.formGroupTitle}>
                                <div className={styles.number}>
                                    3
                                </div>
                                <span>Логотип</span>
                            </div>
                            <div className={styles.logoInfo}>
                                <img src={passLogo} alt=""/>
                                <p>Обратите внимание: рекомендуемое соотношение сторон для логотипа 1:1</p>
                            </div>
                            <CustomFileInput/>
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.formGroupTitle}>
                                <span>Статус магазина</span>
                            </div>
                            <div className={styles.statusBtns}>
                                <button type="button" onClick={handlerForCustomBtns} className={styles.statusBtn}>Активен</button>
                                <button type="button"  onClick={handlerForCustomBtns} className={styles.statusBtn}>Неактивен</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.formColumn}>
                        <div className={styles.formGroup}>
                            <div className={styles.formGroupTitle}>
                                    <span>Токен бота</span>
                            </div>
                            <input type="text" placeholder="Токен бота"></input>
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.formGroupTitle}>
                                    <span>Username бота</span>
                            </div>
                            <input type="text" placeholder="Username бота"></input>
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.formGroupTitle}>
                                    <span>Название бота</span>
                            </div>
                            <input type="text" placeholder="Название бота"></input>
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.formGroupTitle}>
                                    <span>Способо доставки товара</span>
                            </div>
                            <div className={styles.statusBtns}>
                                <button type="button" onClick={handlerForCustomBtns} className={styles.statusBtn}>Самовызов</button>
                                <button type="button"  onClick={handlerForCustomBtns} className={styles.statusBtn}>Доставка</button>
                            </div>
                            <input type="text" placeholder="Адресс для самовывоза"></input>
                        </div>
                    </div>
                </form>
                <div className={styles.phoneContainer}>
                    <Phone name={nameValue} description={textValue} logo={passLogo}/>
                    <a className={styles.goTo} href="#">Перейти к выбору оформления магазина</a>
                </div>
            </div>
            <button className={styles.saveBtn}>Сохранить все изменения</button>
        </div>
    )
}
export default InfoShop;