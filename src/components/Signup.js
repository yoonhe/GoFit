import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'
//const POST_URL = 'http://localhost:7777'

const Signup = () => {
    let [values, setValues] =useState({});

    const handleInputTextChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    const handleSignup = () => {
        console.log('gathering values', values)
        //axios.post(POST_URL, values).then(res => redirect = true)
        setValues({redirect: true})
    }
    if(values.redirect) {
        return <Redirect to ='/'/>
    }
    return (
        <div>
            <h3> Signup </h3>
            <div> Email : <input name = "email" onChange = {handleInputTextChange}/> </div>
            <div>Password : <input type = "password" name = "password" onChange = {handleInputTextChange}/> </div>
            <div>Password : <input type = "password" placeholder = "check" name = "passwordChecker" onChange = {handleInputTextChange}/> </div>
            <div> Username : <input name = "username" onChange = {handleInputTextChange}/> </div>
            <div>Height : <input name = "height" onChange = {handleInputTextChange}/> </div>
            <div>Weight : <input name = "weight" onChange = {handleInputTextChange}/> </div>
            
            <button onClick = {handleSignup}>OK</button>
            <Link to="/">
                <button>Cancel</button>
            </Link>
        </div>
    )
}

export default Signup;