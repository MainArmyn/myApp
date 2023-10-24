import React,{useState,useRef} from "react";
import styles from "../styles/NewBannerComponent_v2.module.css";
import boy from "../assets/Frame 793.png";
import BannerForm from "./BannerFormComponent_v2";
import Action from "./ActionComponent_v2";
import truck from '../assets/886baea286b0b52fa9b27f45c771bab1.png';
import { Fragment } from "react";
function NewBanner() {
    const [statusForBanner,setStatusBanner] = useState();
    const bannerRef = useRef(null);
    const actionRef = useRef(null);
    const [statusAction,setAction] = useState();
    const handlerForBtnBanner = () => {
        setStatusBanner(true);
        setAction(false);
       setTimeout(() => {
        if (bannerRef.current) {
            bannerRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }      
       },200)
    };
    const handlerForAction = () => {
        setAction(true);
        setStatusBanner(false);
        setTimeout(() => {
            if (actionRef.current) {
                actionRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }      
           },200)
    };
    return(
        <Fragment>
        <div className={styles.container}>
            <h1 className={styles.title}>Новый баннер/акция</h1>
            <span className={styles.text}>Что вы хотите добавить:</span>
            <div className={styles.chooseContainer}>
                <div className={styles.chooseItem}>
                    <img src={boy} alt="boy"></img>
                    <span>Баннер</span>
                    <p>(Выберите, если у вас есть готовый баннер)</p>
                    <button onClick={handlerForBtnBanner}>Создать баннер</button>
                </div>
                <div className={styles.chooseItem}>
                    <img src={truck} alt="truck"></img>
                    <span>Акцию</span>
                    <p>(Выберите, если у вас нет готового баннера. Суть акции можно будет прописать текстом и, при желании, добавить иконку)</p>
                    <button onClick={handlerForAction}>Создать акцию</button>
                </div>
            </div>
        </div>
        {statusForBanner && <div ref={bannerRef}><BannerForm/></div>}
        {statusAction && <div ref={actionRef}><Action/></div>}
        </Fragment>
    )
}
export default NewBanner;