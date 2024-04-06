import React, { useState } from 'react';
import {Signin, NGSignup } from '../../components';
import styles from './NGAuth.module.css'
import { setCookie } from '../cookie';
import axios from 'axios';
import { BASE_URL } from '../../config';
import {useNavigate} from "react-router-dom";

export default function NGAuth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isNewUser, setIsNewUser] = useState(false);
    const [sector, setSector] = useState('');
    const [city, setCity] = useState('');
    const [goal, setGoal] = useState('');
    const [UID, setUID] = useState('');
    const [logo, setLogo] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleSector = (e) => {
        setSector(e.target.value);
    }
    const handleCity = (e) =>{
        setCity(e.target.value)
    }

    const handleGoal = (e) => {
        setGoal(e.target.value);
    }

    const handleUID = (e) => {  
        setUID(e.target.value);
    }

    const handleLogo = (e) => {
        setLogo(e.target.value);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const response = await axios.post(`${BASE_URL}/ngo/signup`,{
            name : username,
            email,
            password,
            type : sector,
            address : city,
            desc : goal,
            uid : UID,
            logo : logo
        })

        setCookie("Authorization","Bearer "+response.data.token,30);
        alert(response.data.message)
        navigate('/companies');
    }

    return (
        <div className={styles.form}>
            {isNewUser ? NGSignup(handleSubmit,email, handleEmailChange, password, handlePasswordChange, username, handleUsernameChange,handleSector, handleCity, handleGoal, handleUID,handleLogo) : Signin(email, handleEmailChange, password, handlePasswordChange,"ngo")}
            {isNewUser? <p>Already have an account? <a onClick={()=>{setIsNewUser(false);}}>Signin</a></p> :
            <p className={styles.noAccount}>Don't have an account? <a onClick={()=>{
                setIsNewUser(true);
            }}>Signup</a></p>
        }
        </div>
    );
};

