import React from "react";
import styles from "./HowThisWork.module.css";


const ItemHowThisWork = ({items}) => {
    return (
    <div className={styles.howThisWorkItems}>
        <img src={items.logo} className={styles.howThisWorkImg} alt="Icon" />
        <div className={styles.howThisWorkContent}>
            <p className={styles.howThisWorkText}>
                {items.title}
            </p>
        </div>
    </div>
    );
}

export default ItemHowThisWork;