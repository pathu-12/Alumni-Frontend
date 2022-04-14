import React from "react";
import styles from "../styles/Heading.module.css";

const Heading = (props) => {
    return (
        <>
            <div className={styles.heading}>
                <div className={styles.heading_text}>
                    <span>{props.heading.split(" ")[0]}</span>{props.heading.split(" ")[1]}
                </div>
                <div className={styles.heading_dash}></div>
            </div>
        </>
    )
}

export default Heading