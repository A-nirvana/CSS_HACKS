import styles from "./Businesscard.module.css"
export default function Businesscard(logo,name,moto,city,followers,date){
    return(
        <div className={styles.card}>
            <div className={styles.logos} style={{backgroundImage:`url(${logo})`, backgroundSize:"cover"}}>
                <img src={logo}></img>
            </div>
            <div className={styles.Businessname}>{name}</div>
            <div className={styles.moto}>"{moto}"</div>
            <div className={styles.info}>
                <p><span>City:</span> {city}</p>
                <p><span>Followers:</span> {followers}</p>
                <p><span>Established:</span> {date}</p>
            </div>
        </div>
    )
}