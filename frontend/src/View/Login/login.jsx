import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {signIn} from '../../Controller/Redux/authslice';



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

    function submit(e) {
        //dispatch the action when we submit. Passing a payload(forminput) to pass in name and password as an object
        dispatch(signIn(formInput));
    }
    return(
        <div className="loginBG">
            <h1>Login:</h1>
            <input name='name' placeholder='Name' onChange={} value={}></input>
            <input name='password' placeholder='Password' onChange={} value={}></input>
            <button type='submit' onClick={}>Login</button>
        </div>
    )
}