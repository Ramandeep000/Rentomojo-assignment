import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './signup.css';

function App() {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, phone, work,password,cpassword } =formData;
    const res = await fetch("/register" , {
      method:"POST",
      headers:{
           "content-Type" : "application/json",
      },
      body : JSON.stringify({
        name, email, phone, work,password,cpassword
      })
    });

    const data = await res.json();
    if(data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
    else {
      window.alert("Registration Successfull");
      console.log("Registration Successfull");
      history("/Login");
    }

    console.log(formData); // You can replace this with your desired logic for form submission
  };

  return (
    <div className="app">
      <form className="signup-form" method = "POST">
        <h2>Sign Up</h2>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="phone">phone Number</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label htmlFor="work">work</label>
        <input type="text" name="work" value={formData.work} onChange={handleChange} required />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <label htmlFor="cpassword">Confirm Password</label>
        <input
          type="password"
          name="cpassword"
          value={formData.cpassword}
          onChange={handleChange}
          required
        />

        <button type="submit" onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
