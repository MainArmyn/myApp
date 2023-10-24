import React from "react";
import styles from "../styles/FooterComponent_v2.module.css";
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerRow}>
                <span>Botique</span>
                <span>2023 © Все права защищены</span>
            </div>
            <div className={styles.footerRow}>
                <a href="https://admin.thebotique.ru/privacy-policy-agreement">Пользовательское соглашение</a>
                <a href="https://admin.thebotique.ru/privacy-policy">Политика обработки персональных данных</a>
            </div>
        </footer>
    )
}
export default Footer;