import React, { useState, useEffect } from 'react'
import '../../../styles/auth/login/app.css'
import { useTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as LoginActions from '../../../config/store/Actions/user.actions'

const Login = (props) => {
    const theme = useTheme();
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector((state) => state.user.user)

    function handleLogin(e) {
        dispatch(LoginActions.add_user(true))
    }

    useEffect(() => {
        if (user) {
            history.push('/dashboard')
        }
    }, [user])


    return (
        <div className="login-container">

            <div className="deform">
                <div className="hedin">
                    <h1>Login</h1>
                    <p>Hello! Log in with your email.</p>
                </div>
                <form action={'JavaScript:void(0)'}>
                    <div className="form-field">
                        <label style={{ color: theme.palette.text.primary }}>Email Address</label>
                        <input required type="email" style={{ color: theme.palette.text.secondary }} placeholder="Email" />
                    </div>
                    <div className="form-field">
                        <label style={{ color: theme.palette.text.primary }}>Password</label>
                        <input required type="password" style={{ color: theme.palette.text.secondary }} placeholder="Password" />
                    </div>
                    <div className="form-field btn-login" onClick={(e) => { handleLogin(e) }}>
                        {/* <input type="submit" value="Log in" /> */}
                        <Button className={'submitBtn'} variant="contained" color="secondary" disableElevation>
                            Log in
                    </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login