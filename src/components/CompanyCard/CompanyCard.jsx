import styles from "./CompanyCard.module.css";
export default function CompanyCard({data}) {
    console.log(data)
  return (
    <div className={styles.card}>
      <div className={styles.row1}>
        <div className={styles.logoContainer}>
          <img src={data.logo} alt="" />
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.h1}>
            {data.name} <span className={styles.span}>Follow</span>
          </h1>
          <h5 className={styles.h5}>
            {data.desc}
          </h5>
          <h5 className={styles.h5}>
            {data.address}
          </h5>
        </div>
      </div>
      <div className={styles.row2}>
        <ul className={styles.ul}>
          <li>{data.reviews} Reviews</li>
          <li>{data.followers} Followers</li>
          <li>{data.donations} Dontaions</li>
          {/* <li>TBD</li> */}
        </ul>
      </div>
    </div>
  );
}
