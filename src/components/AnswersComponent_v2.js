import React from "react";
import AnswerComponent from "./AnswerItemComponent_v2";
import styles from "../styles/AnswersComponent_v2.module.css";
import { v4 as uuid } from 'uuid';
function Answers() {
    const data = [
        { question: "Какой функционал доступен в вашем онлайн-сервисе для создания телеграмм-магазинов?", answer: "Наш онлайн-сервис предоставляет широкий набор функций, включая возможность добавления и управления товарами, настройки внешнего вида магазина, просмотра аналитики продаж и рассылки сообщений пользователям." },
        { question: "Как добавить товары в мой телеграмм-магазин с помощью сервиса Botique?", answer: "Мы упростили процесс добавления товаров в ваш телеграмм-магазин. Вы можете легко загрузить изображения, указать название, описание и цену товара, а также настроить другие параметры, чтобы товар был готов к показу и продаже. Все это в удобном личном кабинете!" },
        { question: "Могу ли я настроить внешний вид моего телеграмм-магазина?", answer: "Да, наш сервис позволяет вам настроить внешний вид вашего телеграмм-магазина. Вы можете выбрать тему оформления, настроить цвета, добавить логотип и другие элементы дизайна, чтобы магазин отражал вашу уникальную брендовую идентичность. Также мы предлагаем на выбор несколько готовых шаблонов в личном кабинете!" },
        { question: "Какую аналитику продаж я могу просмотреть с помощью вашего сервиса?", answer: "Наш сервис предоставляет детальную аналитику продаж вашего телеграмм-магазина. Вы сможете просмотреть общую выручку, количество продаж, наиболее популярные товары и другие ключевые метрики, которые помогут вам принимать обоснованные бизнес-решения." },
        { question: "Можно ли с помощью вашего сервиса отправлять рассылки пользователям?", answer: "Да, наш сервис предоставляет возможность отправки рассылок пользователям вашего телеграмм-магазина. Вы сможете создавать и настраивать рассылки, отправлять уведомления о новых товарах, акциях или других важных событиях, чтобы привлечь внимание и удержать ваших клиентов." },
    ];
    return (
        <section className={styles.answers}>
            <h2 className={styles.answersTitle}>часто задаваемые вопросы</h2>
            <div className={styles.answersContainer}>
                {data.map(el => {
                    let key = uuid();
                    return <AnswerComponent question={el.question} answer={el.answer} />
                })}
            </div>
        </section>
    )
}
export default Answers;