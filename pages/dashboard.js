import Navbar from "../components/Navbar";
import Grid from "../components/Grid";
import Jobscard from "../components/Jobscard";
import Eventscard from "../components/Eventscard";
import styles from "../styles/Dashboard.module.css";
import Createevent from "../components/Createevent";
import Createjobs from "../components/Createjobs";
import Footer from "../components/Footer";
import Createalumni from "../components/Createalumni";

const Dashboard = () => {
    return (
        <>
            <Navbar/>
            <div className="dashboard">
                <Grid/>
                <div className={styles.section}>
                    <div className={styles.section_name}>
                        jobs
                    </div>
                    <Jobscard/>
                    <Createjobs/>
                </div>
                <div className={styles.section}>
                    <div className={styles.section_name}>
                        Events
                    </div>
                    <Eventscard/>
                    <Createevent/>
                </div>
                <div className={styles.section}>
                    <div className={styles.section_name}>
                        Alumnis
                    </div>
                    <Createalumni/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Dashboard