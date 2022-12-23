import React from 'react'
import { Link } from "react-router-dom";
import './Add.css';
import Button from '@mui/material/Button';
import {useState,useEffect} from 'react'
import axios from 'axios';



export default function Index() {
  const[companyName,setCompanyname]=useState("")
  const[contactName,setContactname]=useState("")
  const[contactTitle,setContactTitle]=useState("")

  function addData(){

    if(companyName.trim()===''|| contactName.trim()===''|| contactTitle.trim()===''){
      alert("Please fill Inputs")
    }
    else{

      let data={companyName,contactName,contactTitle}
      console.warn(data);
  
      axios.post("https://northwind.vercel.app/api/suppliers",data)
      .then(res=> console.log(res))
      alert("Data Created!")

      setCompanyname('');
      setContactname('');
      setContactTitle('');
    }
  
  }

  return (
    <>
    
    <div className='main'>
      <div className='div'>
      <h2>Add New Api</h2>
      <input label="Company Name" placeholder='Company Name' value={companyName} onChange={(e)=>{setCompanyname(e.target.value)}}  />
      <input label="Contact Name" placeholder='Contact Name' value={contactName} onChange={(e)=>{setContactname(e.target.value)}} />
      <input   label="Country" placeholder='Contact Title' value={contactTitle} onChange={(e)=>{setContactTitle(e.target.value)}} />
      <div>
      <div className='button'>
      <Button onClick={addData} className='addbtn' variant="contained" color="success">Add</Button>
      <Link className='add' to={'/'}> <Button className='backbtn' variant="contained" >Go Back</Button></Link>
      </div>
      </div>

      </div>
      </div>
   
    </>
  )
}
