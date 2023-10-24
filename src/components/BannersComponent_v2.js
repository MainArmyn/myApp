import React,{useState} from "react";
import styles from "../styles/BannersComponent_v2.module.css";
import BannerItemComponent from "./BannerItemComponent_v2";
import plus from "../assets/icon add-3.png";
import blueOne from "../assets/icon add-2.png";
function BannersComponent({banners}) {
    let test = ["1","2","3","4","5"];
    const [plusImage,setPlusImage] = useState(plus);
    const handlerForPlus = () => {
        setPlusImage(blueOne);
    };
    const handlerForPlusBack = () => {
        setPlusImage(plus);
    };
    const handlerForAdd = () => {
        console.log("function handlerForAdd");
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Список баннеров/акций</h1>
            <div className={styles.banners}>
                {test.map(el => <BannerItemComponent/>)}
                <div onClick={handlerForAdd} className={styles.addBanner} onMouseEnter={handlerForPlus} onMouseLeave={handlerForPlusBack}>
                    <img src={plusImage} alt=""></img>
                    <span>Добавить новую баннер/акцию</span>
                </div>
            </div>
        </div>
    )
}
export default BannersComponent;