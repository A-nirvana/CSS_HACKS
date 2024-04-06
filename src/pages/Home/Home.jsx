import { TextField } from '@mui/material';
import styles from './Home.module.css'
import Businesscard from '../../components/Businesscard/Businesscard'
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
                <div className={styles.joinUs} id='signin'>
                    <a href="/auth">Join as a Corporate</a><a href="/ngoauth">Join as an NGO</a><a href="/ngo">Contribute as an individual</a>
                </div>
            </div>
            <div className={styles.bulletinBoard}>
                <div className={styles.bulletinImage}></div>
                <div className={styles.bulletins}>
                    <div className={styles.bullet}><span>96</span><br />Multinational Corporations</div>
                    <div className={styles.bullet}><span>263</span><br />Verified NGOs</div>
                    <div className={styles.bullet}><span>154</span><br />Successful CSR projects</div>
                    <div className={styles.bullet}><span>86</span><br />Upcoming projects</div>
                </div>
            </div>
            <h3 className={styles.verifiedNGOs}>Verified NGOs</h3>
            <div className={styles.Businesscard}>
                
                <a href="/ngo">
                    {Businesscard("/NGO logo.jpg", "Robin Hood Army","Save the Hungry Citizen","Delhi","2154+","26 January, 2013")}
                </a>
                <a href="/ngo">
                    {Businesscard("/NGO logo.jpg", "Project Humanity","Save the Hungry Citizen","Jorhat, Assam","1846+","26 January, 2019")}
                </a>
                <a href="/ngo">
                    {Businesscard("/NGO logo.jpg", "Child Rights and You","Save the Hungry Citizen","Guwahati","1295+","26 January, 2013")}
                </a>
                <div className={styles.viewmore}><a href="/ngo">View more</a></div>
                {Businesscard("/NGO logo.jpg", "Robin Hood Army","Save the Hungry Citizen","Tezpur","826+","26 January, 2013")}
            </div>
            <h3 className={styles.topMNCs}>Top MNCs</h3>
            <div className={styles.Businesscard}>
                
                <a href="/companies">
                    {Businesscard("/NGO logo.jpg", "Robin Hood Army","Save the Hungry Citizen","Delhi","2154+","26 January, 2013")}
                </a>
                <a href="/companies">
                    {Businesscard("/NGO logo.jpg", "Project Humanity","Save the Hungry Citizen","Mumbai","1846+","26 January, 2013")}
                </a>
                <a href="/companies">
                    {Businesscard("/NGO logo.jpg", "Child Rights and You","Save the Hungry Citizen","Guwahati","1295+","26 January, 2013")}
                </a>
                <div className={styles.viewmore}><a href="/companies">View more</a></div>
                {Businesscard("/NGO logo.jpg", "Robin Hood Army","Save the Hungry Citizen","Tezpur","826+","26 January, 2013")}
            </div>

            <div className={styles.aboutus} id='about'>
                <h2>ABOUT US</h2>
                <p>Established in Silchar 2024, The Giving Circle is a dedicated platform that facilitates connections between Multinational corporations (MNCs)
                     and non-governmental organizations (NGOs) to foster impactful corporate social responsibility (CSR) initiatives. This platform enables MNCs
                     to easily identify and collaborate with NGOs aligned with their CSR goals, streamlining the process of contributing to meaningful social
                     causes and maximising positive social impact.</p>
                <button className={styles.readmore}>READ MORE</button>
                <div className={styles.aboutimage}></div>
            </div>

            <h2 className={styles.contactHeader} id='contact'>CONTACT US</h2>
            <div className={styles.contactus}>
                <div className={styles.writetous}>
                    <h3>Write To Us</h3>
                    <p>If you have any queries, just send us a message and someone from our team will reach out to you.</p>
                </div>
                <div className={styles.mail}>
                    <div className={styles.twoInputs}>
                        <TextField className={styles.input} label="Name*" variant="standard" />
                        <TextField className={styles.input} label="Email*" variant="standard" />
                    </div>
                    <div className={styles.twoInputs}>
                        <TextField className={styles.input} label="Phone Number*" variant="standard" />
                        <TextField className={styles.input} label="Location" variant="standard" />
                    </div>
                    <div className={styles.twoInputslong}>
                        <TextField className={styles.input} label="Subject*" variant="standard" />
                        <TextField className={styles.input} label="Message*" variant="standard" />
                    </div>
                    <button className={styles.submitmail}>Submit</button>
                </div>
            </div>
            <div className={styles.getintouchHeadline}><h3>Get in Touch</h3></div>
            <div className={styles.getintouch}>
                <div className={styles.getintouchdiv}>
                    <div className={styles.contactIcon1}></div>
                    <h6>ADDRESS</h6>
                    <p>Aryabhatta Hostel <br />NIT Silchar, Silchar <br />Assam, 788010</p>
                </div>
                <div className={styles.getintouchdiv}>
                    <div className={styles.contactIcon2}></div>
                    <h6>EMAIL</h6>
                    <p>thegivingcircle@gmail.com</p>
                </div>
                <div className={styles.getintouchdiv}>
                    <div className={styles.contactIcon3}></div>
                    <h6>PHONE NUMBER</h6>
                    <p>+91 9854216235</p>
                </div>
            </div>
        </>
    )
}