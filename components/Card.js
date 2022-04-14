import styles from "../styles/Card.module.css";

const Card = (props) => {
    return (
        <>
            <div className={styles.card} style={{backgroundColor: props.color}}>
                <div className={styles.name}>
                    {props.name}
                </div>
                <div className={styles.value}>
                    {props.value}
                </div>
            </div>
        </>
    )
}

export default Card