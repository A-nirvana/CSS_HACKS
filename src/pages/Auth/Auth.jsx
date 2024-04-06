import React, { useState } from 'react';
import { Signin, Signup } from '../../components';
import styles from './Auth.module.css';


export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isNewUser, setIsNewUser] = useState(false);
    const [city, setCity] = useState('');
    const [goal, setGoal] = useState('');
    const [logo, setLogo] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleCity = (e) =>{
        setCity(e.target.value)
    }

    const handleGoal = (e) => {
        setGoal(e.target.value);
    }

    const handleLogo = (e) => {
        setLogo(e.target.value);
    }

     return (
        <div className={styles.main}>
            <div className={styles.signIn} style={isNewUser?{"height":"21rem","width":"19rem"}:{}}>
                {isNewUser ? Signup(email, handleEmailChange, password, handlePasswordChange, username, handleUsernameChange,city,handleCity,goal,handleGoal,logo,handleLogo) : Signin(email, handleEmailChange, password, handlePasswordChange,"business")}
                {isNewUser? <p className={styles.haveAccount}>Already have an account? <a onClick={()=>{setIsNewUser(false);}}>Signin</a></p> :
                <p className={styles.noAccount}>Don't have an account? <a onClick={()=>{
                    setIsNewUser(true);
                }}>Signup</a></p>
            }
            </div>
        </div>
        
    );
}
