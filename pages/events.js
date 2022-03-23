import Eventcard from "../components/Eventcard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Events.module.css";
import {useEffect, useState} from "react";
import axios from "axios";


const events = () => {
    const [eventsdata, setEventsdata] = useState([]);
    const fetch_events = async ()=>{
        const events_api = await axios.get("http://localhost:8000/events");
        const data = await events_api.data;
        setEventsdata(data.events);
    }
    useEffect(()=>{
        fetch_events();
    },[]);

    return (
        <>
            <Navbar/>
            <div className={styles.hero_image}></div>
            <div className={styles.events}>
                {
                    eventsdata.map((ele)=>{
                        return <Eventcard name={ele.name} schedule={ele.schedule} description={ele.description} event_image={ele.event_image}/>
                    })
                }
            </div>
            <Footer/>
        </>
    )
}

export default events