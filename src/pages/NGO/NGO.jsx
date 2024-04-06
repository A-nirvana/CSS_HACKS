import { useState } from 'react'
import { NgoCard } from '../../components'
import styles from './NGO.module.css'
import {ngo} from './data'
import { useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../config'

export default function NGO() {
    const [search, setSearch] = useState('');

    const [ngos, setNgos] = useState([]);

    const init = async () => {
        const response = await axios.get(`${BASE_URL}/ngo/`, {})
        setNgos(ngo.concat(response.data.Ngos))
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.headingContainer}>
                <h1>Discover the Top NGO</h1>
                <input onChange={(e) => setSearch(e.target.value)} type="text" name="" id="" placeholder='Enter the Area'/>
                {/* <button>Search</button> */}
            </div>
            <div className={styles.ngoCardContainer}>
                {ngos.filter((ngo) => {
                    return search.toLowerCase() === '' ? ngo : ngo.address.toLowerCase().includes(search.toLowerCase());
                }).map((ngo) => (
                    <NgoCard key={ngo.id} data={ngo} />
                ))}
            </div>
        </div>
    )
}