import React, { useState } from 'react';
import styles from "../styles/ProductsComponent_v2.module.css";
import sort from "../assets/sort.png";
import ProductItem from './ProductListComponent_v2';
function Products({products}) {
    const handlerToAddProduct = () => {
        console.log("функция handlerToAddProduct");
    };
    const hadnlerAddTop = () => {
        console.log("function handlerAddTop");
    };
    return (
        <div className={styles.products}>
            <h1 className={styles.productsTitle}>заполнение магазина</h1>
            <div className={styles.productsContainer}>
                <button onClick={hadnlerAddTop} className={styles.productsAdd}>
                    <span>+</span>
                    <span>добавить новый товар</span>
                </button>
                <div className={styles.productsInfo}>
                    <div>
                        <span>Статус</span>
                        <img src={sort} alt=""/>
                    </div>
                    <div>
                        <span>Фото</span>
                    </div>
                    <div>
                        <span>Наименование</span>
                        <img src={sort} alt=""/>
                    </div>
                    <div>
                        <span>Цена до скидки</span>
                        <img src={sort} alt=""/>
                    </div>
                    <div>
                        <span>Цена со скидкой</span>
                        <img src={sort} alt=""/>
                    </div>
                    <div>
                        <span>Категория</span>
                        <img src={sort} alt=""/>
                    </div>
                    <div>
                        <span>Подкатегория</span>
                        <img src={sort} alt=""/>
                    </div>
                </div>
                <div className={styles.productsStorage}>
                    {products.length === 0 ? 
                    <div className={styles.emptyMessage}>
                        <span>Вы пока не добавили ни один товар</span>
                        <button onClick={handlerToAddProduct}>Добавить товары</button>
                    </div>:
                    products.map(item => <ProductItem item={item}/>)
                    }
                </div>
            </div>
        </div>
    )
}
Products.defaultProps = {
   products: []
  }
export default Products;