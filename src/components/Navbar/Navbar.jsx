import styles from './Navbar.module.css'
export default function Navbar() {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <a href="#" id="logo">TheGivingCircle</a>
                </div>
                <ul className={styles.navList}>
                    <li className={styles.navOption}><a href="home">Home</a></li>
                    <li className={styles.navOption}><a href="">Companies</a></li>
                    <li className={styles.navOption}><a href="ngo">NGOs</a></li>
                    <li className={styles.navOption}><a href="">About Us</a></li>
                    <li className={styles.navOption}><a href="">Contact Us</a></li>
                </ul>
                <div className={styles.signIn}>
                    <a href="#">Sign in</a>
                </div>
            </div>
        </>
    )
}