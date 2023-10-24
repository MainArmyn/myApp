import React from "react";
import Videos from "./VideosComponent_v2";
import RequestForm from "./HelpFormComponent_v2";
import Answers from "./AnswersComponent_v2";
import styles from "../styles/HelpComponent_v2.module.css";
function Help() {
    return (
        <div className={styles.help}>
            <h1 className={styles.helpTitle}>
                поддержка
            </h1>
            <Videos/>
            <Answers/>
            <RequestForm/>
        </div>
    )
}
export default Help;