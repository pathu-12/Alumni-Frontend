import React from "react";
import Carousel from "nuka-carousel";
import styles from "../styles/Slider.module.css";
import {IoArrowBack} from "react-ionicons";
const Slider = () => {
    return (
        <>
            <Carousel
                wrapAround={true}
                defaultControlsConfig={{
                    pagingDotsStyle: {
                       "marginRight": "0.5rem",
                       fill: "#ffffff"
                    }
                }}
            >
                <img src="/images/slide1.jpg" className={styles.carausel_image} />
                <img src="/images/slide2.jpg" className={styles.carausel_image} />
                <img src="/images/slide3.jpg" className={styles.carausel_image} />
            </Carousel>
        </>
    )
}

export default Slider