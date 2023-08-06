import React, { useEffect ,useState} from 'react';
// import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const About = () => {
  const [userData, setuserData] = useState({});
  const history = useNavigate();
  const callAboutPage= async ()=>{
    try {
     const res = await fetch('/about',{
      method:"GET",
      headers:{
        Accept:"application/json",
        "content-Type":"application/json"
      },
      credentials:"include"
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
      callAboutPage();
  },[]);






  return (
    <div>
      <form method="GET">
        <div>

          <div>
            <img src="" alt="" />
          </div>
          <div>
            <div>
              <h5>{userData.name}</h5>
              <h6>Web Developer</h6>
              <p>RAKINGS: <span>1/10</span></p>
            </div>
          </div>
           

           <label> Name  </label>
           <p> {userData.name}</p>
        </div>




      </form>
    </div>

  )
}

export default About;
