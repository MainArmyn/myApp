import React,{useState} from "react";
import styles from "../styles/ProductListComponent_v2.module.css";
import status from "../assets/status.svg";
function ProductItem({item}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const handlerEditproducts = () => {
        console.log("функция handlerEditproducts");
    }
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        console.log("вы выбрали статус " + option);
    };
    return (
        <div className={styles.product}>
        <div className={styles.dropdown}>
            <button className={styles.dropdownToggle} onClick={toggleDropdown}>
                {selectedOption ? selectedOption : 'Продается'}
                <img src={status} alt=''/>
            </button>
            {isOpen && (
                <ul className={styles.dropdownMenu}>
                    {["Продается","Не продается"].map((option, index) => (
                        <li key={index} onClick={(e) => {
                            e.stopPropagation();
                            selectOption(option)}}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
        <div className={styles.productImg}>
            {item.photos.length === 0 ? <div className={styles.productEmptyImg}>
                нет фото
            </div>:
                <div className={styles.productsImgContainer}>
                    <img src={item.photos[0]} className={styles.productActualImage} alt=''></img>
                    {item.photos.length === 1 ? null:  <span>{`+ ${item.photos.length - 1} фото`}</span>}
                </div>
            }
        </div>
        <div className={styles.productName}>
            <span>{item.name}</span>
        </div>
        <div className={styles.productPrice}>
            <span>{item.price + " "}&#8381;</span>
        </div>
        <div className={styles.productSalePrice}>
            <span>{item.salePrice + " "}&#8381;</span>
        </div>
        <div className={styles.productCategory}>
            {item.category}
        </div>
        <div className={styles.productSubCategory}>
            {item.category}
        </div>
        <button className={styles.productCorrect} onClick={handlerEditproducts}>
        </button>
    </div>
    )
}
export default ProductItem;