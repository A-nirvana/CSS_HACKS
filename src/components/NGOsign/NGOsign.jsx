import { TextField } from '@mui/material';
import styles from "./NGOsign.module.css";
export function NGSignup(handleSubmit, email, handleEmailChange, password, handlePasswordChange, username, handleUsernameChange,handleTheme,handleCity, handleGoal, handleUID){
    return (
        <div className={styles.NGOsign}>
            <h2>Welcome, <br/>We help you and you help the people</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField className={styles.input} label="Email" variant="standard" value={email} onChange={handleEmailChange}/>
                </div>
                <div>
                    <TextField className={styles.input} label="Organization Name" variant="standard" value={username} onChange={handleUsernameChange} />                </div>
                <div>
                    <label>Which theme does your NGO work on</label>
                    <select onChange={handleTheme}>
                        <option>Food</option>
                        <option>Health</option>
                        <option>Education</option>
                        <option>Environment</option>
                        <option>Rural Development</option>
                        <option>Women Empowerment</option>
                        <option>Child Welfare</option>
                        <option>Others</option>
                    </select>
                </div>
                <div>
                    <label>City</label>
                    <select onChange={handleCity}>
                        <option>Delhi</option>
                        <option>Mumbai</option>
                        <option>Chennai</option>
                        <option>Kolkata</option>
                        <option>Bengaluru</option>
                        <option>Hyderabad</option>
                        <option>Pune</option>
                        <option>Others</option>
                    </select>
                </div>
                <div>
                    <label>What is the main goal of your NGO :</label>
                    <input type="text" onChange={handleGoal} />
                </div>
                <div>
                    <label>UID of Your NGO:</label>
                    <input type="text" onChange={handleUID}/>
                </div>
                <div>
                    <TextField className={styles.input} label="Password" variant="standard" type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <TextField className={styles.input} label="Confirm Password" variant="standard" type="password"/>
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
};

