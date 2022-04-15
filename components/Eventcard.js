import styles from "../styles/Eventcard.module.css";
import Link from "next/link";

const Eventcard = (props) => {
    const [date, time] = props.schedule.slice(0, -1).split("T");
    const [year, month, day] = date.split("-");
    const months_arr = {
        1: "jan",
        2: "feb",
        3: "mar",
        4: "apr",
        5: "may",
        6: "jun",
        7: "jul",
        8: "aug",
        9: "sup",
        10: "oct",
        11: "nov",
        12: "dec"
    }
    return (
        <>
            <div className={styles.event}>
                <div className={styles.event_left}>
                    <img src={`http://localhost:8000${props.event_image}`}/>
                    <div className={styles.event_times}>
                        <div className={styles.event_month}>
                            {months_arr[month.replace(/^0+/, '')]}
                        </div>
                        <div className={styles.event_day}>
                            {day}
                        </div>
                    </div>
                </div>
                <div className={styles.event_right}>
                    <div className={styles.event_name}>
                        {props.name}
                    </div>
                    <div className={styles.event_date_time}>
                        <div className={styles.event_date}>
                            <span>Date</span> {`${day}-${month}-${year}`}
                        </div>
                        <div className={styles.event_timing}>
                            <span>Time</span> {time}
                        </div>
                    </div>
                    <div className={styles.event_description}>
                        {props.description}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eventcard