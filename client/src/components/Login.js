import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [userInput, setUserInput] = useState({
    username: '',
    password: ''
  })

  //Need to redirect after user submits !!!!!!!!!!!!!
  let history = useHistory()

  console.log(userInput)

  const handleChange = (e) => {
    setUserInput({...userInput, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axiosWithAuth().post('/api/login', userInput)
    .then(res => {
      window.localStorage.setItem('token', res.data.payload)
      history.push('/profile')
    })
    .catch(err => {
      console.log(err)
    })
  }


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>username</label>
        <input name='username' onChange={handleChange} value={userInput.username}/>

        <label htmlFor='password'>password</label>
        <input name='password' onChange={handleChange} value={userInput.password}/>

        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default Login;
