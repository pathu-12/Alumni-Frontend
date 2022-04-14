import Footer from "../components/Footer";
import Jobcard from "../components/Jobcard";
import Navbar from "../components/Navbar";
import styles from "../styles/Jobs.module.css";
import axios from "axios";
import { useEffect, useState } from "react";


const jobs = () => {
    const [jobsdata, setJobsdata] = useState([]);
    const [dataget, setDataget] = useState(false);
    const fetch_jobs = async () => {
        try {
            const jobs_api = await axios.get("http://localhost:8000/hirings");
            const data = await jobs_api.data;
            setJobsdata(data.hirings);
            setDataget(!dataget);
        }
        catch (err) {
            console.log(err.messege);
        }
    }
    useEffect(() => {
        fetch_jobs();
    }, []);

    return (
        <>
            <Navbar />
            <div className={styles.hero_image}></div>
            {
                dataget ? (
                    <div className={styles.jobs_container}>
                        {
                            jobsdata.map((ele) => {
                                return <Jobcard company={ele.company} title={ele.title} location={ele.location} description={ele.description} />
                            })
                        }
                    </div>
                ):(
                    <div className={styles.no_jobs_div}>
                        no job postings avaliable
                    </div>
                )
            }
            <Footer />
        </>
    )
}

export default jobs