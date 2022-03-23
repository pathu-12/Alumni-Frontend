import styles from "../styles/Jobcard.module.css";

const Jobcard = (props) => {
    return (
        <>
            <div className={styles.job_card}>
                <div className={styles.job_company_name}>
                    {props.company}
                </div>
                <div className={styles.job_location_descripton}>
                    <div className={styles.job_title}>
                        <span>title</span>{props.title}
                    </div>
                    <div className={styles.job_location}>
                        <span>location</span>{props.location}
                    </div>
                </div>
                <div className={styles.job_description}>
                    {props.description}
                </div>
            </div>
        </>
    );
}

export default Jobcard;
