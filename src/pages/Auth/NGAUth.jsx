import React, { useState } from 'react';
import {Signin, NGSignup } from '../../components';
import styles from './NGAuth.module.css'
export default function NGAuth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isNewUser, setIsNewUser] = useState(false);
    const [theme, setTheme] = useState('');
    const [city, setCity] = useState('');
    const [goal, setGoal] = useState('');
    const [UID, setUID] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleTheme = (e) => {
        setTheme(e.target.value);
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

    //Code to handle form submission
    const handleSubmit = (e) => {
        
    };

    return (
        <div className={styles.form}>
            {isNewUser ? NGSignup(handleSubmit, email, handleEmailChange, password, handlePasswordChange, username, handleUsernameChange,handleTheme, handleCity, handleGoal, handleUID) : Signin(handleSubmit, email, handleEmailChange, password, handlePasswordChange)}
            {isNewUser? <p>Already have an account? <a onClick={()=>{setIsNewUser(false);}}>Signin</a></p> :
            <p className={styles.noAccount}>Don't have an account? <a onClick={()=>{
                setIsNewUser(true);
            }}>Signup</a></p>
        }
        </div>
    );
};

