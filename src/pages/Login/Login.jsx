import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './Login.css'

export default class Login extends Component {
  render() {
    return (
        <div className="Login-background">
            <div className="align-middle  addproduct-form-container">
                <LoginForm ></LoginForm>
            </div>
        </div>
    )
  }
}
