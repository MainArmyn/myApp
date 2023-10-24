import React,{useState} from "react";
import styles from "../styles/DesignComponent_v2.module.css";
import DesignItem from "./DesignItemComponent_v2";
import clothe1 from "../assets/одежда1.png";
import clothe2 from "../assets/одежда2.png";
import clothe3 from "../assets/одежда3.png";
import ani1 from "../assets/ani1.png";
import ani2 from "../assets/ani2.png";
import ani3 from "../assets/ani3.png";
import flow1 from "../assets/цветы1.png";
import flow2 from "../assets/цветы2.png";
import flow3 from "../assets/цветы3.png";
import balet1 from "../assets/balet1.png";
import balet2 from "../assets/balet2.png";
import balet3 from "../assets/balet3.png";

function Design() {
    let data = [{name: "clothe",images: [clothe1,clothe2,clothe3]},{name: "balet",images: [balet1,balet2,balet3]},{name: "flowers",images: [flow1,flow2,flow3]},{name: "animals",images: [ani1,ani2,ani3]}];
    const [btnStatus,setBtnStatus] = useState(styles.nextButton);
    const handlerForDesign = () => {    
        setBtnStatus(styles.activeBtn);
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Оформление магазина</h1>
            <span className={styles.text}>Выберите любой понравившийся вам шаблон оформления магазина <span>исходя из вашей специфики работы</span></span>
            <div className={styles.designContainer}>
                <ul className={styles.designContainerMenu}>
                    <li>Продажа товаров</li>
                    <li>Предоставление услуг</li>
                    <li>Бронирование билетов</li>
                </ul>
                <div className={styles.design}>
                    {data.map(item => <DesignItem images={item.images} handlerTochangeBtn={handlerForDesign}/>)}
                </div>
            </div>
            <button className={btnStatus}>Далее</button>
            <div className={styles.info}>
                <p>
                Хотите индивидуальный дизайн? Можем предоставить вам услугу по разработке дизайна, разработанного специально под ваш магазин. Оставьте заявку и мы расскажем подробнее
                </p>
                <button>Узнать подробнее</button>
            </div>
        </div>
    )
}
export default Design;