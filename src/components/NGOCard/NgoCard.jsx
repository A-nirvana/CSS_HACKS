import styles from "./NgoCard.module.css";
export default function NgoCard({data}) {
  return (
    <div className={styles.card}>
      <div className={styles.row1}>
        <div className={styles.logoContainer}>
          <img src={data.logo} alt="" />
        </div>
        <div className={styles.TitleContainer}>
          <h1>{data.name}</h1>
          <h5>{data.moto}</h5>
          {/* <h3>Type: Trust, Socity, Sector8</h3> */}
          <p>{data.address}</p>
        </div>
      </div>
      <div className={styles.row2}>
        <ul className={styles.ul}>
            <li>{data.followers}</li>
            <li>{data.volunteers}</li>
            <li>{data.drills}</li>
            <li>TBD</li>
        </ul>
        <p className={styles.p1}>Type: {data.type}</p>
        <p className={styles.p2}>
          {data.desc}
        </p>
        <p>

        </p>
      </div>
    </div>
  );
}
