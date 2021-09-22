import React from 'react'

function Form() {
    return (
        <div className='form-container'>
            <div className='login-container'>
            <form action='#'>
                <h3>Login Form</h3>
                <input 
                type='email'
                placeholder='email or phone'
                 />
                <input 
                type='email'
                placeholder='password'
                 />
                <a href="https://google.com">Forgot your password?</a>
                <button onClick={() => null}>LOGIN</button>
                <span>or login with</span>
            </form>
            </div>
        </div>
    )
}

export default Form;