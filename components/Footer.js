import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footer_left}>
                    <img src="https://kjsieit.somaiya.edu.in//assets/kjsieit/images/Logo/Somaiya-white.svg" alt=""/>
                    <div className={styles.footer_college_name}>
                        k j somaiya institute of engineering and it
                    </div>
                    <div className={styles.footer_college_address}>
                        Somaiya Ayurvihar Complex, Eastern Express Highway, Near Everard Nagar, Sion (East), Mumbai - 400 022
                    </div>
                    <div className={styles.footer_college_numbers}>
                        91-22-24061408 / 24061403
                    </div>
                    <div className={styles.footer_college_email}>
                        info.tech@somaiya.edu
                    </div>
                </div>
                <div className={styles.footer_middle}>
                    <Link href="/">home</Link>
                    <Link href="/events">events</Link>
                    <Link href="/jobs">jobs</Link>
                    <Link href="/">signup</Link>
                </div>
                <div className={styles.footer_right}>
                    <div className={styles.follow_us_text}>
                        follow us
                    </div>
                    <div className={styles.social_media_links}>
                        <Link href="/">
                            <img src="https://img.icons8.com/material-rounded/24/ffffff/facebook-f--v2.png"/>
                        </Link>
                        <Link href="/">
                        <img src="https://img.icons8.com/material-outlined/24/ffffff/instagram-new--v1.png"/>
                        </Link>
                        <Link href="/">
                            <img src="https://img.icons8.com/ios-glyphs/24/ffffff/twitter--v1.png"/>
                        </Link>
                        <Link href="/">
                            <img src="https://img.icons8.com/material-rounded/24/ffffff/youtube-play.png"/>
                        </Link>
                        <Link href="/">
                            <img src="https://img.icons8.com/windows/32/ffffff/linkedin-2.png"/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer