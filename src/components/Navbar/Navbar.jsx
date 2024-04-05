import { useState } from 'react'
import styles from './Navbar.module.css'
export default function Navbar() {

    //Navbar color chagne logic
    const [isTop, setIsTop] = useState(true);
    window.addEventListener('scroll', () => {
        setIsTop(window.scrollY <= 300 ? true : false)
    })
    const style = {
        backgroundColor: 'white',
        backdropFilter: 'blur(0px)' 
    }

    return (
        <>
            <div id='nav' style={isTop ? {} : style} className={styles.navbar}>
                <div className={styles.logo}>
                    <a href="#" id="logo">TheGivingCircle</a>
                </div>
                <ul className={styles.navList}>
                    <li className={styles.navOption}><a href="home">Home</a></li>
                    <li className={styles.navOption}><a href="companies">Companies</a></li>
                    <li className={styles.navOption}><a href="ngo">NGOs</a></li>
                    <li className={styles.navOption}><a href="about">About Us</a></li>
                    <li className={styles.navOption}><a href="contact">Contact Us</a></li>
                </ul>
                <div className={styles.signIn}>
                    <a href="#signin">Contribute</a>
                </div>
            </div>
        </>
    )
}