import { useState } from "react";
import validate from "./validation";

const Form = () => {

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

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input 
                type="text" 
                id="email" 
                name="email" 
                value={userData.email} 
                onChange={handleChange}
            
            />
            <br />
            <small>{errors.email}</small>
            <br />
            <label htmlFor="password">Password: </label>
            <input 
                type="text" 
                id="password" 
                name="password" 
                value={userData.password}
                onChange={handleChange}
            />
            <br />
            <small>{errors.password}</small>
            <br />
            <button>Submit</button>
        </form>
    )
}

export default Form;