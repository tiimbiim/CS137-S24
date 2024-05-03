import styles from "@/styles/discover.module.css"
import MainNavbar from "@/comps/MainNavbar";
import SideBar from "@/comps/SideBar";
import Footer from "@/comps/Footer";
import Slider from "react-slick";
import Image from "next/image";
import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {

    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

};
const discover = () => {
    const [activeTab, setActiveTab] = useState('quizzes');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return ( 
        <div>
            <MainNavbar />
            <div className={styles.main}>
                <h1 className={styles.headerStyle}>Discover</h1>
                <div className={styles.tabs}>
                    <button onClick={() => handleTabClick('quizzes')} className={activeTab === 'quizzes' ? 'active' : ''}>Quizzes</button>
                    <button onClick={() => handleTabClick('flashcards')} className={activeTab === 'flashcards' ? 'active' : ''}>Flashcards</button>
                </div>
                <h1 className={styles.section}>Most Popular</h1>
                {activeTab === 'quizzes' && (
                    <div className={styles.container}>
                        <div className={styles.slider}>
                            <Slider {...settings} >
                                <div className={styles.style}>
                                    <Image src="/SUB12E.png" width={500} height={400}/>
                                </div>
                                <div>
                                    <h3 className={styles.style}>BBBB</h3>
                                </div>
                                <div>
                                    <h3 className={styles.style}>CCCCCCCCCC</h3>
                                </div>
                                <div>
                                    <h3 className={styles.style}>DDDDDDDDD</h3>
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
                )}
                <h1 className={styles.section2}>Local</h1>
                {activeTab === 'quizzes' && (
                    <div className={styles.container2}>
                        <div className={styles.slider}>
                            <Slider {...settings} >
                                <div className={styles.style}>
                                    <Image src="/SUB12E.png" width={500} height={400}/>
                                </div>
                                <div>
                                    <h3 className={styles.style}>BBBB</h3>
                                </div>
                                <div>
                                    <h3 className={styles.style}>CCCCCCCCCC</h3>
                                </div>
                                <div>
                                    <h3 className={styles.style}>DDDDDDDDD</h3>
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
                )}

                <h1 className={styles.section}>Most Popular</h1>
                    {activeTab === 'flashcards' && (
                        <div className={styles.container}>
                            <div className={styles.slider}>
                                <Slider {...settings} >
                                    <div className={styles.style}>
                                        <Image src="/SUB12E.png" width={500} height={400}/>
                                    </div>
                                    <div>
                                        <h3 className={styles.style}>bbbb</h3>
                                    </div>
                                    <div>
                                        <h3 className={styles.style}>cccc</h3>
                                    </div>
                                    <div>
                                        <h3 className={styles.style}>dddd</h3>
                                    </div>
                                    <div>
                                        <h3 className={styles.style}>eeee</h3>
                                    </div>
                                    <div>
                                        <h3 className={styles.style}>ffff</h3>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    )}
                    <h1 className={styles.section2}>Local</h1>
                    {activeTab === 'flashcards' && (
                        <div className={styles.container2}>
                            <div className={styles.slider}>
                                <Slider {...settings} >
                                    <div className={styles.style}>
                                        <Image src="/SUB12E.png" width={500} height={400}/>
                                    </div>
                                    <div>
                                        <h3 className={styles.style}>bbbb</h3>
                                    </div>
                                    <div>
                                        <h3 className={styles.style}>cccc</h3>
                                    </div>
                                    <div>
                                        <h3 className={styles.style}>dddd</h3>
                                    </div>
                                    <div>
                                        <h3 className={styles.style}>eeee</h3>
                                    </div>
                                    <div>
                                        <h3 className={styles.style}>ffff</h3>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    )}
                </div>

            <SideBar/>
            <Footer />
            
        </div>
    );
}
 
export default discover;