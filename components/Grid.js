import Card from "./Card";
import style from "../styles/Grid.module.css";

const Grid = () => {
    return (
        <>
            <div className={style.dashboard_name}>
                Alumni Portal Dashboard
            </div>
            <div className={style.grid}>
                <Card name="total alumnis" value={100} color="#0652DD"/>
                <Card name="total events" value={100} color="#A3CB38"/>
                <Card name="total jobs" value={100} color="#EA2027"/>
            </div>
        </>
    )
}

export default Grid