import styles from './Home.module.css'
export default function Home() {
    return (
        <>
            <div className={styles.homeImage}></div>
            <div className={styles.headline}>
                <p className={styles.p1}>Over 1000 happy children</p>
                <div className={`${styles.image3} ${styles.images}`}></div>
            </div>
            <div className={styles.headline}>
                <div className={`${styles.image4} ${styles.images}`}></div>
                <p className={styles.p2}>Provided education to 800+ underpriviledged childen</p>
            </div>
            <div className={styles.headline}>
                <p className={styles.p3}>Education and literacy programmes targeting underprivileged girls and women</p>
                <div className={`${styles.image5} ${styles.images}`}></div>
            </div>
            <div className={styles.finalHeadline}>
                Join us and contribute  to the betterment of the society
                <div className={styles.joinUs}>
                    <a href="#">Join as a Corporate</a><a href="#">Join as an NGO</a><a href="#">Contribute as an individual</a>
                </div>
            </div>
            {/* <div className={styles.joinUs}>
                <a href="#">Join as a Corporate</a><a href="#">Join as an NGO</a><a href="#">Contribute as an individual</a>
            </div> */}
            <div className={styles.bulletinBoard}>
                <div className={styles.bulletinImage}></div>
                <div className={styles.bulletins}>
                    <div className={styles.bullet}><span>96</span><br />Multinational Companies</div>
                    <div className={styles.bullet}><span>263</span><br />Verified NGOs</div>
                    <div className={styles.bullet}><span>154</span><br />Successful CSR projects</div>
                    <div className={styles.bullet}><span>86</span><br />Upcoming projects</div>
                </div>
            </div>
        </>
    )
}