import React, { useState } from "react";
import styles from "../styles/ProductBaseInfoFormComponent.module.css";
import logo from "../assets/e0a896f3cf32e4c3c622a3cdb4060861.png";
import plusNorm from "../assets/icon add-3.png";
import blueOne from "../assets/icon add-2.png";
import statPlus from "../assets/icon add-3.png";
function ProductBaseInfoFormComponent() {
    const [characteristicsTitle, setCharacteristicsTitle] = useState('');
    const [characteristicsValue, setCharacteristicsValue] = useState('');
    const [plus,setPlus] = useState(plusNorm);
    const [listCharact, setListCharact] = useState([]);
    const [mainImg, setMainImg] = useState(null);//это состояние для главного ищображения и там есть уже проверка пустое ли оно 
    const [InputsState,setInputsState] = useState({name: '',category: '',subcategory: '',description: '',price: '',priceWithSale: ''}); 
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
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Добавление нового товара</h1>
            <form className={styles.form}>
                <div className={styles.formTitle}>
                    Основная информация о товаре
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formColumn}>
                        <div className={styles.formGroup}>
                            <span>Наименование</span>
                            <input type="text" name="name" value={InputsState.name} placeholder="ARENA ARENA ICONS SWIM LOW WAIST SHORT SOLID" onChange={handlerOnChangeInputs}></input>
                        </div>
                        <div className={styles.formGroup}>
                            <span>Категория</span>
                            <input type="text" name="category" value={InputsState.category} placeholder="Категория" onChange={handlerOnChangeInputs}></input>
                        </div>
                        <div className={styles.formGroup}>
                            <span>Подкатегория</span>
                            <input type="text"  name="subcategory" value={InputsState.subcategory} placeholder="Категория" onChange={handlerOnChangeInputs}></input>
                        </div>
                    </div>
                    <div className={styles.formColumn}>
                        <div className={styles.textArea}>
                            <span>Описание товара</span>
                            <textarea name="description" onChange={handlerOnChangeInputs} value={InputsState.description} placeholder="Мужские шорты с заниженной талией, входящие в коллекцию arena Icons, сочетающую стиль уличной одежды с традиционным дизайном арены, идеально подходят для любителей плавания и профессиональных пловцов. Эти плавки-шорты изготовлены из чрезвычайно стойкой к хлору ткани для плавания, которая защищает кожу от солнца, быстро сохнет и очень прочная. Длина боковой стороны 15,5 см. Шорты имеет внутреннюю кулиску для надежной посадки и переднюю подкладку для дополнительного комфорта. Фасон этих шорт выполнен в однотонном цвете с контрастной отделкой и полосками с ретро-логотипом."></textarea>
                        </div>
                    </div>
                    <div className={styles.formColumn}>
                        <div className={styles.formGroup}>
                            <span>Цена без скидки</span>
                            <input type="tel" name="price" value={InputsState.price} placeholder="6000" onChange={handlerOnChangeInputs}></input>
                        </div>
                        <div className={styles.formGroup}>
                            <span>Цена со скидкой(если есть)</span>
                            <input type="tel" name="priceWithSale"  placeholder="3000" value={InputsState.priceWithSale} onChange={handlerOnChangeInputs}></input>
                            <span className={styles.saleText}>Размер скидки - <span>{Number(InputsState.price) >= Number(InputsState.priceWithSale) && InputsState.price !== '' && InputsState.priceWithSale !== '' ? Math.floor(((Number(InputsState.price) - Number(InputsState.priceWithSale))*100)/Number(InputsState.price)):"?"}</span>%</span>
                        </div>
                        <p className={styles.emergancyText}>
                            <span className={styles.emergancy}>Внимание!</span> В данном окне цена устанавливается для всех вариаций! Если вы хотите установить разные цены для каждой вариации, сделайте это в карточке каждой вариации
                        </p>
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formColumn}>
                        <span className={styles.formCharacteristicsTitle}>Основные характеристики товара</span>
                        <div className={styles.formCharacteristics}>
                            <input type="text" placeholder="Выберите характеристику" value={characteristicsTitle} onChange={(e) => setCharacteristicsTitle(e.target.value)} />
                            <input type="text" placeholder="Введите значение" value={characteristicsValue} onChange={(e) => setCharacteristicsValue(e.target.value)}></input>
                            <button type="button" onClick={handlerForCharactiristics} />
                        </div>
                        <div className={styles.formCharacteristicsList}>
                            {listCharact.map((item, idx) => {
                                if (idx % 2 === 0) {
                                    return (
                                        <div className={styles.characterDub}>
                                            <span>{item.title}</span>
                                            <span>{item.value}</span>
                                            <button onClick={() => handlerRemoveCharact(idx)} title="Удалить"></button>
                                        </div>)

                                }
                                return (
                                    <div className={styles.character}>
                                        <span>{item.title}</span>
                                        <span>{item.value}</span>
                                        <button onClick={() => handlerRemoveCharact(idx)} title="Удалить"></button>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div className={styles.formImgs}>
                        <span>Фотографии товара</span>
                        <div className={styles.mainImg}>
                            {mainImg === null ? <label className={styles.emptyBlockImg} htmlFor="MainImgInput">
                                <img src={statPlus} alt="" />
                                <span>Добавить фотографию</span>
                            </label>
                                :
                                <img className={styles.mainImg} src={mainImg} alt="" />
                            }
                            <input type="file" id="MainImgInput" style={{ display: "none" }} />
                            {mainImg === null ? null : <button  title="Удалить"></button>}

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
            </form>
            <div className={styles.variations}>
                <span>Вариативный товар?</span>
                <div>
                    <input type="checkbox"></input>
                    <span>Да</span>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <span>Нет</span>
                </div>
            </div>
        </div>
    )
}
export default ProductBaseInfoFormComponent;