import { TextField } from '@mui/material';
import styles from './Sign.module.css';
export function Signup(handleSubmit, email, handleEmailChange, password, handlePasswordChange, username, handleUsernameChange){
    return (
        <div className={styles.signUp}>
            <h2>Let's Contribute</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <TextField className={styles.input} label="Email" variant="standard" value={email} onChange={handleEmailChange}/>
                </div>
                <div>
                    <TextField className={styles.input} label="Business Name" variant="standard" type='password'/>
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
                    <TextField className={styles.input} label="Confirm Password" variant="standard" type='password' />
                    
                </div>
                <button type="submit" className={styles.submitButton}>Sign Up</button>
            </form>
        </div>
    )
};

export function Signin(handleSubmit, email, handleEmailChange, password, handlePasswordChange){
    return (
        <div className={styles.signIn}>
            <h2 className={styles.heading}>Back to Contributing</h2>
            <form onSubmit={handleSubmit} className={styles.signInForm}>
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