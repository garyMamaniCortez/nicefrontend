import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './AddUserForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Services/Users/UserDTO'
import { UserDTO } from '../../Services/Users/UserDTO';

const LoginForm = () => {
	const api = 'https://localhost:7293/api/Auth/';

    const { register,formState:{ errors }, handleSubmit }=useForm();
    let navigate = useNavigate();

    let user = new UserDTO();

	const onSubmit = (doc) => {
		user.Username = doc.email;
		user.Password = doc.password;
		let url = api+'register';
		axios.post(url,user)
			.then(response =>{
				if(response.status === 200){
                    alert('User '+user.Username+' created')
					navigate('/home', {state:{name:doc.email}});
				}else
					alert("Error")
			});
	}

    const patterns = {
        emailPattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/i,
        passwordPattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[!"#$%&/()=?¡¿'"}+´[~^`{}*])(?!.*[\t\n])([A-Za-z\d]|[^ ]){8,39}$/i
    }

  	return (
    	<div className="container-fluid d-flex justify-content-center">
            <div className='container-login d-flex justify-content-center'>
                <form onSubmit={ handleSubmit(onSubmit)} className="d-flex justify-content-center">
                    <div className="row">
                        <div className='col-12 text-center d-flex justify-content-center align-self-center'>
                            <img className='login-img' src = 'https://media.trustradius.com/product-logos/ZN/rY/BG7QHQ3HW363-180x180.PNG'/>
                        </div>
                        <div className='col-12 d-flex justify-content-center'> 
                            <div className='row'>
                                <div className='col-12 login-labels'>
                                    <label for="email" class="form-label">Username</label>
                                    <input type="text" class="form-control input-text mx-auto"
                                            placeholder="garymamani@nice.com" 
                                            {...register("email",{ 
                                                required:true,
                                                minLength:10,
                                                pattern:patterns.emailPattern
                                             })}/>{errors.email && 
											 	<div className='alerts'>Email is required</div>}
                                </div>
                                <div className='col-12 login-labels'>
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" class="form-control input-text mx-auto" placeholder="••••••••"
                                            {...register("password",{ 
                                                required:true,
                                                minLength:8,
                                                pattern:patterns.passwordPattern
                                            })}/>{errors.password && 
											<div className='alerts'>Password is required</div>}
                                </div>
                            </div>
                        </div>

                        <div className='col-12 text-center'>
                            <div className="boton">
                                <button className="btn btn-primary btn-form-admin" type="submit" onClick={()=>{
                                    errors.email?.type === 'required' &&
                                    errors.password?.type === 'required' &&
                                    alert("All fields are required")
                                    }}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  	)
}

export default LoginForm