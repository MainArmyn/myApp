import React,{useState,useRef} from "react";
import styles from '../styles/BannerFormComponent_v2.module.css';
import InputMask from 'react-input-mask';
import arrow from '../assets/Vector.png';
import plus from '../assets/icon add-3.png';
function BannerForm() {
    const inputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    // console.log(inputRef);
    const file = inputRef.current.files[0];
    console.log(file);
    setSelectedImage(URL.createObjectURL(file));
  };
 
    
  const handlerForStatus = (e) => {
    for (let el of e.currentTarget.parentElement.children) {
        el.classList.remove(styles.activeBtn);
    }
    e.currentTarget.classList.add(styles.activeBtn);
  };
 
    return (
        <form className={styles.container}>
             <a href="#" className={styles.backBtn}>
                <img src={arrow} alt=""/>
                <span>Вернуться ко всем баннерам/акциям</span>
            </a>
            <h1 className={styles.title}>Данные баннера</h1>
            <div className={styles.formInfo}>
                    <div>
                        <label className={styles.chooseImg} htmlFor="fileInput">
                            {selectedImage === null ?  <div ref={inputRef} className={styles.emptyInput}>
                                <img src={plus} alt=""></img>
                                <span>Добавить новый баннер</span>
                            </div>:
                            <img className={styles.choosenImg} src={selectedImage} alt="Изображение" />}
                        </label>
                        <input type="file"  ref={inputRef} id="fileInput" onChange={handleImageChange} style={{display: "none"}}/>
                    </div>
                <div className={styles.formContent}>
                    <div className={styles.formInputs}>
                        <div className={styles.formColumn}>
                            <div className={styles.formGroup}>
                                <span>Название баннера/акции</span>
                                <input type="text" placeholder="Бесплатная доставка"></input>
                            </div>
                            <div className={styles.formGroup}>
                                <span>Приоритет</span>
                                <input type="text" placeholder="1"></input>
                            </div>
                        </div>
                        <div className={styles.formColumn}>
                            <div className={styles.formGroup}>
                                <span>Дата начала</span>
                                <InputMask
                                    mask="99/99/9999"
                                    placeholder="16/09/2023"
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <span>Дата окончания</span>
                                <InputMask
                                    mask="99/99/9999"
                                    placeholder="16/09/2023"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.formStatus}>
                        <span>Статус баннера:</span>
                        <div className={styles.btnStatus}>
                            <button onClick={handlerForStatus} type="button">Активен</button>
                            <button onClick={handlerForStatus} type="button">Неактивен</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.saveBtns}>
                <button onClick={handlerForStatus} type="button">Сохранить</button>
                <button onClick={handlerForStatus} type="button">Удалить</button>
            </div>
        </form>
    )
}
export default BannerForm;