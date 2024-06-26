import { TextField } from '@mui/material';
import styles from './Sign.module.css';
import axios from 'axios';
import {BASE_URL} from '../../config.js'
import { setCookie} from '../../pages/cookie/index.js';

export function Signup(email, handleEmailChange, password, handlePasswordChange, username, handleUsernameChange, city, handleCity, goal, handleGoal, logo, handleLogo){

    return (
        <div className={styles.signUp}>
            <h2>Let's Contribute</h2>
            <form onSubmit={(e)=>{
                if(password.length<8){
                    alert("Password should be atleast 8 characters long")
                    return
                }
                if(username==='' || email==='' || password===''){
                    alert("All fields are required")
                    return
                }
                e.preventDefault()
                axios.post(`${BASE_URL}/business/signup`,{
                    name : username,
                    email,
                    password,
                    desc : goal,
                    address : city,
                    logo
                }).then((response)=>{
                    setCookie('Authorization',"Bearer "+response.data.token,30)
                    alert(response.data.message)
                })
            }}>
                <div>
                <TextField className={styles.input} label="Email" variant="standard" value={email} onChange={handleEmailChange}/>
                </div>
                <div>
                    <TextField className={styles.input} label="Business Name" variant="standard" onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Which Setor would you like to donate to</label>
                    <select>
                        <option>Food</option>
                        <option>Health</option>
                        <option>Education</option>
                        <option>Environment</option>
                        <option>Rural Development</option>
                        <option>Others</option>
                    </select>
                </div>
                <div>
                    <TextField className={styles.input} label="Set Password" variant="standard" type='password' value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <TextField className={styles.input} label="Confirm Password" variant="standard" type='password'  />
                </div>
                <div>
                    <TextField className={styles.input} label="City" variant="standard" type='text' onChange={handleCity}/>
                </div>
                <div>
                    <TextField className={styles.input} label="Goal" variant="standard" type='text' onChange={handleGoal} />
                </div>
                <div>
                    <TextField className={styles.input} label="Link to your Logo" variant="standard" type='text' onChange={handleLogo} />
                </div>
                <button type="submit" className={styles.submitButton}>Sign Up</button>
            </form>
        </div>
    )
};

export function Signin(email, handleEmailChange, password, handlePasswordChange, type){
    return (
        <div className={styles.signIn}>
            <h2 className={styles.heading}>Back to Contributing</h2>
            <form onSubmit={(e)=>{
                e.preventDefault()
                axios.post(`${BASE_URL}/${type}/login`,{
                    email : email,
                    password : password
                },{
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((response)=>{
                        if(response.data.token){
                            setCookie('Authorization',"Bearer "+response.data.token,30)
                            alert(response.data.message)
                        }
                        else {
                            alert("Wrong password or business name")
                        }
                })
            }} className={styles.signInForm}>
                <div className={styles.email}>
                    {/* <label>Email:</label> */}
                    <TextField className={styles.input} label="Email" variant="standard" value={email} onChange={handleEmailChange}/>
                </div>
                <div className={styles.password}>
                    {/* <label>Password:</label> */}
                    <TextField className={styles.input} label="Password" variant="standard" type='password' value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit" className={styles.submitButton}>Sign In</button>
            </form>
        </div>
    )
}