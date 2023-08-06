import React, { useEffect, useState } from 'react';
// import './App.css';
import {useNavigate} from 'react-router-dom';




function App() {
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
    <div className="app">
      <form className="contact-form" method="POST">
        <h2>Contact Us</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={userData.name} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={userData.email}  required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" value={userData.phone}  required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea name="message"  required />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default App;