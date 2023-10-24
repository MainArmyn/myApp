import React,{useState,useRef} from "react";
import styles from '../styles/ActionComponent_v2.module.css';
import arrow from '../assets/Vector.png';
import InputMask from 'react-input-mask';
import banner from '../assets/image 20.png';
import plus from '../assets/icon add-3.png';
function Action() {
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
        <div className={styles.container}>
            <a href="#" className={styles.backBtn}>
                <img src={arrow} alt=""/>
                <span>Вернуться ко всем баннерам/акциям</span>
            </a>
            <h1 className={styles.title}>Данные акции</h1>
            <form className={styles.formContainer}>
                <div className={styles.formColumn}>
                    <div className={styles.formContent}>
                        <div>
                            <label className={styles.chooseImg} htmlFor="fileInput">
                                {selectedImage === null ? <div className={styles.emptyInput}>
                                    <img src={plus} alt=""></img>
                                    <span>Добавить новое изображение</span>
                                </div> :
                                    <img className={styles.choosenImg} src={selectedImage} alt="Изображение" />}
                            </label>
                            <input type="file" ref={inputRef} id="fileInput" onChange={handleImageChange} style={{ display: "none" }} />
                        </div>
                        <div className={styles.formGroup}>
                            <span>Текст акции (отображается на баннере)</span>
                            <input type="text" placeholder="Бесплатная доставка от 2000 ₽" style={{width: "389px"}}></input>
                        </div>
                    </div>
                    <div className={styles.formContent}>
                        <div className={styles.example}>
                            <div className={styles.number1}>1</div>
                            <div className={styles.number2}>2</div>
                        <img src={banner} alt="" className={styles.exampleImg}/>
                        </div>
                        <div className={styles.formGroup}>
                            <span>Пример отображения в <br></br>приложении:</span>
                            <div className={styles.numbers}>
                                <div className={styles.number}>
                                    1
                                </div>
                                <span>Загруженная иконка</span>
                            </div>
                            <div className={styles.numbers}>
                                <div className={styles.number}>
                                    2
                                </div>
                                <span>Текст акции</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.formColumn}>
                    <div className={styles.inputs}>
                        <div className={styles.inputsColumn}>
                            <div className={styles.formGroup}>
                                <span>Название акции</span>
                                <input type="text" placeholder="Бесплатная доставка"></input>
                            </div>
                            <div className={styles.formGroup}>
                                <span>Приоритет</span>
                                <input type="text" placeholder="1"></input>
                            </div>
                        </div>
                        <div className={styles.inputsColumn}>
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
                    <div className={styles.actionStatus}>
                            <span>Статус акции:</span>
                            <div className={styles.statusBtns}>
                                <button onClick={handlerForStatus} type="button">Активна</button>
                                <button onClick={handlerForStatus} type="button">Неактивна</button>
                            </div>
                        </div>
                </div>
            </form>
            <div className={styles.saveBtns}>
                <button onClick={handlerForStatus} type="button">Сохранить</button>
                <button onClick={handlerForStatus} type="button">Удалить</button>
            </div>
        </div>
    )
}
export default Action;