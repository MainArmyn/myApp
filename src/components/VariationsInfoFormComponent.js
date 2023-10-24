
import extraStyles from "../styles/VariationsInfoFormComponent.module.css";
import React, { useState } from "react";
import styles from "../styles/ProductBaseInfoFormComponent.module.css";
import logo from "../assets/e0a896f3cf32e4c3c622a3cdb4060861.png";
import plusNorm from "../assets/icon add-3.png";
import blueOne from "../assets/icon add-2.png";
function VariationsInfoFormComponent() {
    const [characteristicsTitle, setCharacteristicsTitle] = useState('');
    const [characteristicsValue, setCharacteristicsValue] = useState('');
    const [plus,setPlus] = useState(plusNorm);
    const [listCharact, setListCharact] = useState([]);
    const [mainImg, setMainImg] = useState(null);//это состояние для главного ищображения и там есть уже проверка пустое ли оно 
    const [InputsState, setInputsState] = useState({ name: '', category: '', subcategory: '', description: '', price: '', priceWithSale: '', status: '' });
    const handlerForCharactiristics = () => {
        let item = { title: characteristicsTitle, value: characteristicsValue };
        if (item.value === '' || item.title === '') { return }
        let newArr = listCharact.slice();
        newArr.push(item);
        setListCharact(newArr);
    };
    const handlerRemoveCharact = (idx) => {
        let newArr = listCharact.slice();
        delete newArr[idx];
        setListCharact(newArr);
    };
    const handlerOnChangeInputs = (e) => {
        let name = e.target.name;
        let type = e.target.type;
        setInputsState(prevForm =>
        ({
            ...prevForm, /// здесь мы берем все предыдущие значения form и меняем только нужное нам 
            [name]: type === "checkbox" ? e.target.checked : e.target.value
        }))
    };
    const handlerForPlusChange = () => {
        setPlus(blueOne);
    };
    const handlerForPlusBack = () => {
        setPlus(plusNorm);
    };
    const handlerForVariations = (e) => {
        for (let el of e.currentTarget.parentElement.children) {
            el.classList.remove(extraStyles.acriveVar);
        }
        e.currentTarget.classList.add(extraStyles.acriveVar);
    };
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.formTitle}>
                    Информация по вариациям
                </div>
                <div className={extraStyles.variations}>
                {[1,2,4,5,6,7,8,9,9,7,7,7,7,7,7,].map(() => {
                    return (
                        <div className={extraStyles.variation} onClick={handlerForVariations}>
                            <span>Заголовок</span>
                            <span>Длинное название характеристики</span>
                            <button title="Удалить"></button>
                        </div>

                    )
                })}
            </div>
                <div className={styles.formRow}>
                    <div className={styles.formColumn}>
                        <div className={styles.formGroup}>
                            <span>Наименование</span>
                            <input type="text" name="name" value={InputsState.name} placeholder="ARENA ARENA ICONS SWIM LOW WAIST SHORT SOLID" onChange={handlerOnChangeInputs}></input>
                        </div>
                        <div className={styles.formGroup}>
                            <span>Код товара</span>
                            <input type="text" name="category" value={InputsState.category} placeholder="Категория" onChange={handlerOnChangeInputs}></input>
                        </div>
                        <div className={styles.formGroup}>
                            <span>Количество на складе</span>
                            <input type="text" name="subcategory" value={InputsState.subcategory} placeholder="Категория" onChange={handlerOnChangeInputs}></input>
                        </div>
                    </div>
                    <div className={styles.formColumn}>
                        <div className={styles.textArea}>
                            <span>Описание товара</span>
                            <textarea name="description" onChange={handlerOnChangeInputs} value={InputsState.description} placeholder="Мужские шорты с заниженной талией, входящие в коллекцию arena Icons, сочетающую стиль уличной одежды с традиционным дизайном арены, идеально подходят для любителей плавания и профессиональных пловцов. Эти плавки-шорты изготовлены из чрезвычайно стойкой к хлору ткани для плавания, которая защищает кожу от солнца, быстро сохнет и очень прочная. Длина боковой стороны 15,5 см. Шорты имеет внутреннюю кулиску для надежной посадки и переднюю подкладку для дополнительного комфорта. Фасон этих шорт выполнен в однотонном цвете с контрастной отделкой и полосками с ретро-логотипом."></textarea>
                        </div>
                    </div>
                    <div className={extraStyles.formImgs}>
                        <span>Фотографии товара</span>
                        <div className={styles.mainImg}>
                            {mainImg === null ? <label className={styles.emptyBlockImg} htmlFor="MainImgInput">
                                <img src={plus} alt="" />
                                <span>Добавить фотографию</span>
                            </label>
                                :
                                <img className={styles.mainImg} src={mainImg} alt="" />
                            }
                            <input type="file" id="MainImgInput" style={{ display: "none" }} />
                            {mainImg === null ? null : <button title="Удалить"></button>}

                        </div>
                        <div className={styles.otherImgs}>
                            {[1, 2, 3].map(el =>
                                <div className={styles.smallImg}>
                                    <img src={logo} alt="" />
                                    <button title="Удалить"></button>
                                </div>)}
                            <label className={styles.addImg} htmlFor="fileInput" onMouseEnter={handlerForPlusChange} onMouseLeave={handlerForPlusBack}>
                                <img src={plus} alt="" />
                            </label>
                            <input type="file" id="fileInput" style={{ display: "none" }} />
                        </div>
                    </div>

                </div>
                <div className={styles.formRow}>
                    <div className={styles.formColumn}>

                    </div>
                </div>
                <div className={extraStyles.prices}>
                    <div className={styles.formGroup}>
                        <span>Цена без скидки</span>
                        <input type="tel" name="price" value={InputsState.price} placeholder="6000" onChange={handlerOnChangeInputs}></input>
                    </div>
                    <div className={styles.formGroup}>
                        <span>Цена со скидкой(если есть)</span>
                        <input type="tel" name="priceWithSale" placeholder="3000" value={InputsState.priceWithSale} onChange={handlerOnChangeInputs}></input>
                    </div>
                    <span className={styles.saleText} style={{ marginBottom: "-10px" }}>Размер скидки - <span>{Number(InputsState.price) >= Number(InputsState.priceWithSale) && InputsState.price !== '' && InputsState.priceWithSale !== '' ? Math.floor(((Number(InputsState.price) - Number(InputsState.priceWithSale)) * 100) / Number(InputsState.price)) : "?"}</span>%</span>
                </div>
                <div className={extraStyles.prices}>
                    <div className={styles.formGroup}>
                        <span>Статус товара</span>
                        <input type="text" name="status" value={InputsState.status} placeholder="Опубликован/Черновик" onChange={handlerOnChangeInputs}></input>
                    </div>
                </div>
            </form>
            <div className={extraStyles.mainBtns}>
                <button>Удалить товар</button>
                <button>Сохранить в черновик</button>
                <button>Начать продавать</button>
            </div>
        </div>
    )
}
export default VariationsInfoFormComponent;