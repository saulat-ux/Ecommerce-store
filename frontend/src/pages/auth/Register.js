import React, { useState } from 'react'
import styles from './auth.module.scss'
import loginImg from "../../assets/login.png"
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';

const initialState = {
    name: "",
    email: "",
    password: "",
    cPassword:"",
}

const Register = () => {
   const [formData , setFormData] = useState(initialState)
   const { name, email, password, cPassword} = formData;

   const handleInputChange= (e) => {
    const {name, value} = e.target
    setFormData({ ...formData, [name]: value})
   }

    const submitUser = () => {

    }
  return (
        <section className={`container ${styles.auth}`}>
           
            <Card>
                <div className={styles.form}>
                    <h2>Register</h2>
                    <form onSubmit={submitUser}>

                    <input type="text"
                        placeholder='Name'
                        required
                        value={name}
                        name={name}

                        onChange={handleInputChange}
                    />
         
                    <input type="text"
                        placeholder='Email'
                        required
                        value={email}
                        name={email}

                        onChange={handleInputChange}
                    />

                    <input type="password"
                    placeholder='password'
                    required
                    value={password}
                    name={password}

                    onChange={handleInputChange} />

                        <input type="text"
                        placeholder='Confirm Password'
                        required
                        value={cPassword}
                        name={cPassword}

                        onChange={handleInputChange}
                    />
                    <button type='submit' className='--btn --btn-primary --btn-block'>Register</button>
                                   
                    </form>
                    <span className={styles.register}>
                        <p>Already have an Account? </p>
                         <Link to="/Login">Login</Link>  </span>
                    <br />
                    <span>
                    <h4> Test Account</h4>

                    <p>User: testuser</p>
                    <p>Password: test@1234</p>
                    </span>
                </div>

            </Card>
            <div className={styles.img}>
                <img src={loginImg} alt="login" width={600} />
            </div>

        </section>
    );
}

export default Register
