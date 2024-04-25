import { useState } from 'react'
import './login.css'
import { logEvent } from 'firebase/analytics'

const Login = () => {


    const [loading, setloading] = useState(true)

    const [avatar, setAvatar] = useState({
        file: null,
        url: null
    })

    const handlePhoto = (e) => {

        if (!e.target) return

        setAvatar({
            file: e.target.files[0],
            url: URL.createObjectURL(e.target.files[0])
        })
    }

    return (
        <div className='screen'>
            <div className="login">
                <h1>Welocome back</h1>
                <div className="container-login">
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Password' />
                    <button disabled={loading}>Login</button>
                </div>
            </div>

            <div className="register">
                <h1>Create an Acount</h1>
                <div className="container-register">
                    <div className="file">
                        <img src={avatar.file !== null ? avatar.url : "./avatar.png"} alt="" />
                        <label htmlFor="file">Upload an avatar</label>
                        <input type="file" id='file' style={{ "display": "none" }} onChange={handlePhoto} />
                    </div>

                    <input type="text" placeholder='Username' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Password' />
                    <button disabled={loading}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Login
