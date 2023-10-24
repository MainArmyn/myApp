import React from "react";
import styles from "../styles/HeaderComponent_v2.module.css";
import logo from "../assets/svg_vector_1.png";
import Profile from "../assets/61.png";
import Dropdown from "./DropDownComponent_v2";
function Header() {
    let options = ["qwdwqd","2dqwqwd","3qwdqwd"];
    const handlerForProfile = () => {
        console.log('клик на кнопку профиля')
    }
    const handlerForMenu = (e) => {
        e.preventDefault();
        console.log("вы выбрали раздел:" + e.target.textContent);
    }
    return (
        <header className={styles.header}>
            <div className={styles.headerRow}>
                <img className={styles.headerRowLogo} src={logo} alt="logo"></img>
                <div className={styles.headerRowInfo}>
                    <span>Мой магазин:</span>
                    <Dropdown options={options}/>
                    <button className={styles.headerProfile} onClick={handlerForProfile}>
                        <img src={Profile} alt=""></img>
                        <span>Профиль</span>
                    </button>
                </div>
            </div>
            <div className={styles.headerRow}>
                <ul>
                    <li><a href="#" onClick={handlerForMenu}>Главная</a></li>
                    <li><a href="#"onClick={handlerForMenu}>Товары и услуги</a></li>
                    <li><a href="#"onClick={handlerForMenu}>Баннеры и акции</a></li>
                    <li><a href="#"onClick={handlerForMenu}>Заказы</a></li>
                    <li><a href="#"onClick={handlerForMenu}>Поддержка</a></li>
                </ul>
            </div>
        </header>
    )
}
export default Header;