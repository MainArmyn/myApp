import React,{useState} from "react";
import styles from "../styles/ShopsComponent_v2.module.css";
import ShopItem from "./ShopListItemComponent_v2";
import plus from "../assets/icon add.png";
import blueOne from "../assets/icon add-2.png";
function ShopList({shops}) {
    const [plusImage,setPlusImage] = useState(plus);
    const handlerForPlus = () => {
        setPlusImage(blueOne);
    };
    const handlerForPlusBack = () => {
        setPlusImage(plus);
    };
    const handlerForAddShop = () => {
        console.log("function  handlerForAddShop");
    };
    return (
        <div className={styles.shops}>
            <h1 className={styles.shopsTitle}>все ваши магазины</h1>
            <div className={styles.shopsStorage}>
                {shops.length === 0 ? null:
                    shops.map(shop => <ShopItem shop={shop}/>)
                }
                <button onClick={handlerForAddShop} className={styles.shopAdd} onMouseLeave={handlerForPlusBack} onMouseEnter={handlerForPlus}>
                    <img src={plusImage} alt="plus"></img>
                    <span>Добавить новый магазин</span>
                </button>
            </div>
        </div>
    )
}
ShopList.defaultProps = {
    shops: []
   }
export default ShopList;