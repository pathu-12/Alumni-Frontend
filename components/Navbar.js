import Link from "next/link";
import { useState } from "react";
import { MenuOutline, CloseOutline } from "react-ionicons"
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    const [isActive, setActive] = useState(false);
    const navbar_toggler = () =>{
        setActive(!isActive);
    }
    return (
        <>
            <div className={`${styles.navbar} ${isActive ? styles.active: ''}`}>
                <div className={styles.navbar_logo}>
                    <Link href="/">alumnite</Link>
                </div>
                <div className={styles.navbar_links}>
                    <ul className={styles.navbar_list}>
                        <li><Link className="navbar_link" href="/">home</Link></li>
                        <li><Link className="navbar_link" href="/events">events</Link></li>
                        <li><Link className="navbar_link" href="/jobs">jobs</Link></li>
                        <li><Link className="navbar_link" href="/">signup</Link></li>
                    </ul>
                </div>
                <div className={styles.mobile_navbar_btn} onClick={navbar_toggler}>
                    <ion-icon name="menu-outline" class={styles.mobile_nav_icon}></ion-icon>
                    <ion-icon name="close-outline" class={styles.mobile_nav_icon}></ion-icon>
                    {/* <MenuOutline color={'#fafafa'} name="menu-outline" height="2rem" width="2rem"/>
                    <CloseOutline color={'#fafafa'} name="close-outline" height="2rem" width="2rem"/> */}
                </div>
            </div>
        </>
    )
}

export default Navbar

