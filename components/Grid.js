import Card from "./Card";
import style from "../styles/Grid.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Grid = () => {
    const [alumnis, setAlumnis] = useState(0);
    const [events, setEvents] = useState(0);
    const [jobs, setJobs] = useState(0);
    const get_total_alumnis = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/alumnis");
            setAlumnis(data.alumnis.length);
        }
        catch (err) {
            console.log(err);
        }
    }
    const get_total_events = async () => {
        try {

            const { data } = await axios.get("http://localhost:8000/events");
            setEvents(data.events.length);
        }
        catch (err) {
            console.log(err);
        }
    }
    const get_total_jobs = async () => {
        try{

            const { data } = await axios.get("http://localhost:8000/hirings");
            setJobs(data.hirings.length);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        get_total_alumnis();
        get_total_events();
        get_total_jobs();
    }, [])
    return (
        <>
            <div className={style.dashboard_name}>
                Alumni Portal Dashboard
            </div>
            <div className={style.grid}>
                <Card name="total alumnis" value={alumnis} color="#0652DD" />
                <Card name="total events" value={events} color="#A3CB38" />
                <Card name="total jobs" value={jobs} color="#EA2027" />
            </div>
        </>
    )
}

export default Grid