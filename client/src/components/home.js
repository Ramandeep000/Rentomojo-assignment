import React from 'react'
import  { useEffect, useState } from 'react';
// import './App.css';
import {useNavigate} from 'react-router-dom';
import rentomojo  from './rentomojo1.jpg';



const Home = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   message: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData); // Replace with your logic for handling form submission
  // };

 
  const [userData, setuserData] = useState({});
  const history = useNavigate();
  const userContact = async ()=>{
    try {
     const res = await fetch('/getdata',{
      method:"GET",
      headers:{
       
        "content-Type":"application/json"
      },
     
     });
     const data = await res.json();
     console.log(data);
     setuserData(data);
     if(!res.status===200){
      const error = new Error(res.error);
      throw error;
     }
    } catch(err){
        console.log(err);
        history('/login');
    }
  }

  useEffect(()=>{
    userContact();
   },[])
  return (
    <div  style={{marginLeft: '470px'}}>
    
      <p className='pt-5'>WELCOME</p>
      <h1> {userData.name}</h1>
      <img src={rentomojo} alt="hello"  />
      <br/>

      <input type="text" />
      <button style={{ width:"130px"}}> post </button>
    </div>
  )
}

export default Home
