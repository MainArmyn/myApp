import React from "react";
import styles from "../styles/AnswerItemComponent_v2.module.css";
class AnswerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.question = props.question;
        this.answer = props.answer;
        
    }

    handlerBtnOpen = (e) => {
        let item = e.target.parentElement.parentElement;
        let btn = e.target.parentElement.nextSibling;
        if (item.classList.contains(styles.itemActive)) {
            item.classList.remove(styles.itemActive);
            btn.classList.remove(styles.itemBtnActive);
        } else {
            for (let el of e.target.parentElement.parentElement.parentElement.children) {
                el.classList.remove(styles.itemActive);
                let Btn = [...el.children][1];
                Btn.classList.remove(styles.itemBtnActive);
            }
            btn.classList.add(styles.itemBtnActive);
            item.classList.add(styles.itemActive);
        }
    }
    handlerBtnClose = (e) => {
        e.stopPropagation();
        let item = e.target.parentElement;
        if (item.classList.contains(styles.itemActive)) {
            item.classList.remove(styles.itemActive);
            e.target.classList.remove(styles.itemBtnActive);
        } else {
            for (let el of e.target.parentElement.parentElement.children) {
                el.classList.remove(styles.itemActive);
                let Btn = [...el.children][1];
                Btn.classList.remove(styles.itemBtnActive);
            }
            item.classList.add(styles.itemActive);
            e.currentTarget.classList.add(styles.itemBtnActive);
        }
    }
    render() {
        return (
            <div className={styles.item}>
                <div className={styles.itemText}>
                    <span onClick={this.handlerBtnOpen}>
                        {this.question}
                    </span>
                    <p onClick={this.handlerBtnOpen}>
                        {this.answer}
                    </p>
                </div>
                <button onClick={this.handlerBtnClose} className={styles.itemBtn}></button>
                
            </div>
        )
    }

}
export default AnswerComponent;