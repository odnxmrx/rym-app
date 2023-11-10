import { useState, useEffect } from "react";
import validate from "./validation";
import style from './Form.module.css'

const Form = (props) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value
        }))

    }

        //validaciones, aplicarlas cuando haya cambio en el estado:
        useEffect(() => {
            if (userData.email !== '' || userData.password !== '') {
                //invoca la fn 'validation', pasando el estado 'userData', la info. que el user cargue
                setErrors(validate(userData)); //retornaría un {}
            }
        }, [userData])


    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }

    return (
        <div>
            <h4>Login to continue:</h4>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="" className={style.email}>Email:
                    <input
                        id="email"
                        type="email"
                        name='email'
                        htmlFor=""
                        value={userData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </label>

                <label htmlFor="" className={style.password}>Password:
                    <input
                        id='password'
                        type="password"
                        name='password'
                        value={userData.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </label>
                <button type='submit' className={style.loginBtn}>Submit</button>
            </form>
            {errors.email && <small>*{errors.email}</small>}<br />
            {errors.password && <small>*{errors.password}</small>}
        </div>
    )
}

export default Form;