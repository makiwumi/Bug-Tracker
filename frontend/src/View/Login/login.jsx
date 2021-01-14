import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {signIn} from '../../Controller/Redux/authslice';
import './login.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    const dispatch = useDispatch();

    const [formInput,setFormInput]  = useState({
        name:"",
        password:""
    })

    function inputChanged(e){
        setFormInput({
            //sets the input as the previous one
            ...formInput,
            [e.target.name]:e.target.value
        })
    }

    function submit(_e) {
        //dispatch the action when we submit. Passing a payload(forminput) to pass in name and password as an object
        dispatch(signIn(formInput));
    }

    return(
        <div className="loginBG">
            <form className='login-panel'>
                <h1>Login:</h1>
                <input name='name' placeholder='Name' onChange={inputChanged} value={formInput.name}></input>
                <input name='password' type='Password' onChange={inputChanged} value={formInput.password}></input>
                <button type='submit' onClick={submit}>Login</button>
            </form>
            
        </div>
    )
}