import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState("")
    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [matchPasswordsError, setMatchPasswordsError] = useState("")

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length<2 && e.target.value !== ""){
            setFirstNameError("First Name must be at least 2 characters")
        }
        else{
            setFirstNameError("")
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length<2 && e.target.value !== ""){
            setLastNameError("Last Name must be at least 2 characters")
        }
        else{
            setLastNameError("")
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length<5 && e.target.value !== ""){
            setEmailError("Email must be at least 5 characters")
        }
        else{
            setEmailError("")
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length<8 && e.target.value !== ""){
            setPasswordError("Password must be at least 8 characters")
        }
        else{
            setPasswordError("")
        }
        if(e.target.value !== confirmPassword){
            setMatchPasswordsError("Passwords must match")
        }
        else{
            setMatchPasswordsError("")
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if(e.target.value !== password){
            setMatchPasswordsError("Passwords must match")
        }
        else{
            setMatchPasswordsError("")
        }
    }



    return(
        <form>
            <div>
                <label>First Name: </label>
                <input onChange={ (e)=> handleFirstName(e)}></input>
                {
                    firstNameError ?
                    <p>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input onChange={ (e)=>handleLastName(e)}></input>
                {
                    lastNameError ?
                    <p>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input onChange={ (e)=>handleEmail(e)}></input>
                {
                    emailError ?
                    <p>{emailError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e)=>handlePassword(e)}></input>
                {
                    passwordError ?
                    <p>{passwordError}</p>:
                    ''
                }
                {
                    matchPasswordsError ?
                    <p>{matchPasswordsError}</p>:
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e)=>handleConfirmPassword(e)}></input>
            </div>
            <div>
                <p>Your Form Data</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </form>
    )
}

export default Form