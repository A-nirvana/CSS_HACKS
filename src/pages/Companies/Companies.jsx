import { useState } from 'react'
import {company} from './data'
import { CompanyCard } from '../../components';
import styles from './Companies.module.css'
export default function Companies() {
    const [search, setSearch] = useState('');
    return (
        <div className={styles.main}>
            <div className={styles.headingContainer}>
                <h1>
                    Discover The Top Donating Companies
                </h1>
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Enter Name of Company'/>
            </div>
            <div className={styles.CompanyCardContainer}>
                <h1>List of Top Donating Companies of India</h1>
                {company.filter((company) => {
                    return search.toLowerCase() === '' ? company : company.name.toLowerCase().includes(search.toLowerCase());
                }).map((company) => (
                    <CompanyCard key={company.id} data={company} />
                ))}
            </div>  
        </div>
    )
}