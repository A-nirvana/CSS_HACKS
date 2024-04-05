import { useState } from 'react'
import { NgoCard } from '../../components'
import styles from './NGO.module.css'
import {ngo} from './data'

export default function NGO() {
    const [search, setSearch] = useState('');


    return (
        <div className={styles.main}>
            <div className={styles.headingContainer}>
                <input onChange={(e) => setSearch(e.target.value)} type="text" name="" id="" placeholder='Enter the Area'/>
                {/* <button>Search</button> */}
            </div>
            <div className={styles.ngoCardContainer}>
                {ngo.filter((ngo) => {
                    return search.toLowerCase() === '' ? ngo : ngo.address.toLowerCase().includes(search.toLowerCase());
                }).map((ngo) => (
                    <NgoCard key={ngo.id} data={ngo} />
                ))}
            </div>
        </div>
    )
}