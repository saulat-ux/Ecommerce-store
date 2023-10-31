import React, { useState } from 'react'
import styles from './auth.module.scss'
import loginImg from "../../assets/login.png"
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("")

    const submitUser = () => {

    }
  return (
        <section className={`container ${styles.auth}`}>
            <div className={styles.img}>
                <img src={loginImg} alt="login" width={600} />
            </div>
            <Card>
                <div className={styles.form}>
                    <h2>Login</h2>
                    <form onSubmit={submitUser}>
         
                    <input type="text"
                        placeholder='Email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value) }
                    />

                    <input type="password"
                    placeholder='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit' className='--btn --btn-primary --btn-block'>Login</button>
                                   
                    </form>
                    <span className={styles.register}>
                        <p>Don't have an Account?</p>
                         <Link to="/register">Register</Link>  </span>
                    <br />
                    <span>
                        <h4> Test Account</h4>
                    <p>User: testuser</p>
                    <p>Password: test@1234</p>
                    </span>
                </div>

            </Card>

        </section>
    );
}

export default Login
