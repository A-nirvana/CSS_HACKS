import { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
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
                    <li className={styles.navOption}><Link to="/home#about" onClick={()=>{
                        document.getElementById('about').scrollIntoView();
                    }}>About Us</Link></li>
                    <li className={styles.navOption}><Link to="/home#contact" onClick={()=>{
                        document.getElementById('contact').scrollIntoView();
                    }}>Contact Us</Link></li>
                </ul>
                <div className={styles.signIn}>
                    <Link to="/home#signin" onClick={()=>{
                        setTimeout(() => {}, 1000);
                        document.getElementById('signin').scrollIntoView();
                    }}>Contribute</Link>
                </div>
            </div>
        </>
    )
}