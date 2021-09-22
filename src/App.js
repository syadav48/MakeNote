import Form from './Form';
import MakeNote from './MakeNote'
const { useState } = require("react");
const { default: GoogleLogin, GoogleLogout } = require("react-google-login");

const clientId = '394944104005-05887aid5ea0knd6ojpo2gjndm0qii3j.apps.googleusercontent.com'
function App(){
    const [showLoginButton, setShowLoginButton] = useState(true)
    const [showLogoutButton, setShowLogoutButton] = useState(false)
    const [showMakeNote, setShowMakeNote] = useState(false)
    const [showForm, setShowForm] = useState(true)

    
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj)
        setShowLoginButton(false)
        setShowLogoutButton(true)
        setShowMakeNote(true)
        setShowForm(false)
    }

    const onLoginFailure = (res) => {
        console.log('Login Failed')
    }

    const onSignoutSuccess = () => {
        alert('you have been logged out successfully')
        console.clear()
        setShowLoginButton(true)
        setShowLogoutButton(false)
        setShowMakeNote(false)
        setShowForm(true)
    }


    return(
        <div className='container'>
            <div> 
            {showForm ? <Form /> : null}
            </div>
            <div className='google-login'>
            {showLoginButton ? 
            <GoogleLogin 
            clientId={clientId}
            buttonText='Sign-in'
            onSuccess={onLoginSuccess} 
            onFailure={onLoginFailure} 
            cookiePolicy={'single_host_origin'}
            isSignedIn={true} />    
            : null } 
            </div>
            <div className='make-note'>
             {showMakeNote ? 
             <MakeNote />
            : null }
            </div>
            <div className='google-logout'>
            {showLogoutButton ? 
            <GoogleLogout 
            clientId={clientId}
            buttonText='Sign-out'
            onLogoutSuccess={onSignoutSuccess} /> 
            : null}
            </div>
        </div>
    )
}

export default App;

