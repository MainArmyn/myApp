import React,{useState} from "react";
import styles from "../styles/VariationsFormComponent.module.css";
function VariationsFormComponent() {
    const [list1,setList1] = useState([]);
    const [list2,setList2] = useState([]);
    const [charact1,setCharact1] = useState('');
    const [charact2,setCharact2] = useState('');
    const [charact1Title,setCharact1Title] = useState('');
    const [charact2Title,setCharact2Title] = useState('');
    const handlerSubmitForCharact1 = (e) => {
        if (charact1 === '') {return}
        const newArr = list1.slice();
        newArr.push(charact1);
        setList1(newArr);
    };
    const handlerSubmitForCharact2 = (e) => {
        if (charact2 === '') {return}
        const newArr = list2.slice();
        newArr.push(charact2);
        setList2(newArr);
    };
    const handlerRemoveCharact1 = (idx) => {
        const newArr = list1.slice();
        delete newArr[idx]
        setList1(newArr);
    };
    const handlerRemoveCharact2 = (idx) => {
        const newArr = list2.slice();
        delete newArr[idx]
        setList2(newArr);
    };
    return (
        <form className={styles.form}>
            <div className={styles.formTitle}>
                Добавление вариаций
            </div>
            <div className={styles.formRow}>
                <div className={styles.formColumn}>
                    <span>Характеристика 1</span>
                    <input type="text" placeholder="Цвет" value={charact1Title} onChange={(e) => setCharact1Title(e.target.value)}></input>
                    <div className={styles.inputContainer}>
                        <input type="text" placeholder="Введите значение" value={charact1} onChange={(e) => setCharact1(e.target.value)}></input>
                        <button onClick={handlerSubmitForCharact1} type="button"></button>
                    </div>
                    <div className={styles.list}>
                        {list1.map((el,idx) => <div className={styles.listItem}>
                            <input type="checkbox"></input>
                            <span>{el}</span>
                            <button onClick={() => handlerRemoveCharact1(idx)}></button>
                        </div>)}
                    </div>
                </div>
                <div className={styles.formColumn}>
                    <span>Характеристика 1</span>
                    <input type="text" placeholder="Цвет" value={charact2Title} onChange={(e) => setCharact2Title(e.target.value)}></input>
                    <div className={styles.inputContainer}>
                        <input type="text" placeholder="Введите значение" value={charact2} onChange={(e) => setCharact2(e.target.value)}></input>
                        <button onClick={handlerSubmitForCharact2} type="button"></button>
                    </div>
                    <div className={styles.list}>
                        
                            {list2.map((el,idx) => <div className={styles.listItem}>
                                <input type="checkbox"></input>
                                <span>{el}</span>
                                <button onClick={() => handlerRemoveCharact2(idx)}></button>
                            </div>)}
                        
                    </div>
                </div>
                <div className={styles.formColumn}>
                    <p>Для каждого товара вы можете выбрать максимум 2 вариативные характеристики. Для этого выберите значения в полях “Характеристика1” и “Характеристика2”, а затем введите значения вариаций.
                        Чтобы добавить вариации выберите значение из одного столбца и несколько значений из другого, после чего нажмите кнопку “Создать вариации”.

                        Для каждого товара вы можете выбрать максимум 2 вариативные характеристики. Для этого выберите значения в полях “Характеристика1” и “Характеристика2”, а затем введите значения вариаций.
                    </p>
                    <button className={styles.createBtn}>Создать магазин</button>
                </div>
            </div>
        </form>
    )
}
export default VariationsFormComponent;