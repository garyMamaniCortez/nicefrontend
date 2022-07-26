import React, { Component } from 'react'
import AddUserForm from '../../components/AddUserForm/AddUserForm'
import './UserForm.css'

export default class UserForm extends Component {
  render() {
    return (
        <div className="Login-background">
            <div className="align-middle  addproduct-form-container">
                <AddUserForm ></AddUserForm>
            </div>
        </div>
    )
  }
}
