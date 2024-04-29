import styles from "@/styles/mainPage.module.css"
import MainNavbar from "@/comps/MainNavbar";
import SideBar from "@/comps/SideBar";
import Footer from "@/comps/Footer";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {

    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

};
const mainPage = () => {
    return ( 
        <div>
            <MainNavbar />
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.slider}>
                        <Slider {...settings} >
                            <div>
                                <h3 className={styles.style}>AAAAAAAAAAAAAAAAAAA</h3>
                                </div>
                            <div>
                                <h3 className={styles.style}>BBBB</h3>
                            </div>
                            <div>
                                <h3 className={styles.style}>CCCCCCCCCC</h3>
                            </div>
                            <div>
                                <h3 className={styles.style}>DDDDDDDDDDDDDDDDDDDDD</h3>
                            </div>
                            <div>
                                <h3 className={styles.style}>EEEEEEEEEEEEEEE</h3>
                            </div>
                            <div>
                                <h3 className={styles.style}>FFFFFFFFFFFFF</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <SideBar/>
            <Footer />
            
        </div>


     );
}
 
export default mainPage;