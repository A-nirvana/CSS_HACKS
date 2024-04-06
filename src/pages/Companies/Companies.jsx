import { useState, useEffect} from 'react'
import {company} from './data'
import { CompanyCard } from '../../components';
import styles from './Companies.module.css'
import axios from 'axios'
import { BASE_URL } from '../../config'

export default function Companies() {
    const [search, setSearch] = useState('');

    const [companies, setCompanies] = useState([]);

    const init = async () => {
        const response = await axios.get(`${BASE_URL}/business/`, {})
        setCompanies(company.concat(response.data.businesses))
    }

    useEffect(() => {
        init();
    }, []);

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
                {companies.filter((company) => {
                    return search.toLowerCase() === '' ? company : company.name.toLowerCase().includes(search.toLowerCase());
                }).map((company) => (
                    <CompanyCard key={company.id} data={company} />
                ))}
            </div>  
        </div>
    )
}