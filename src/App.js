import './App.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import { GrTrash } from 'react-icons/gr';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';



export default function App() {
  const[array,setArray]=useState([])
  axios.get('https://northwind.vercel.app/api/suppliers')
  .then(res=> console.log(res.data))
 


useEffect(()=>{
  getUsers();
},[])

  

  function getUsers(){
    axios.get('https://northwind.vercel.app/api/suppliers')
    .then(res=> setArray(res.data))

  }

 function deleteAPI(id){
  axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`)
   .then(result=> console.warn(result))
   getUsers()
 }



return (
      <>
      <nav>
        <div className='navbar'>
        <h2 className='h2'>API TABLE</h2>
     
      <Button className='addpagebtn' variant="contained" >
        <Link className='addpage' to={'add'}>Add</Link>
        </Button>
        </div>

      </nav>
   <TableContainer component={Paper}>
      <Table className='table' sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell>Id</TableCell>
            
            <TableCell>Company Name</TableCell>
            <TableCell align="right">Contact Name</TableCell>
            <TableCell align="right">Contact Title</TableCell>
            <TableCell align="right">Setting</TableCell>

          
          </TableRow>
        </TableHead>
        <TableBody>
          {array.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">{user.id}</TableCell>

              <TableCell component="th" scope="row">{user.companyName}</TableCell>
              <TableCell align="right">{user.contactName}</TableCell>
              <TableCell align="right">{user.contactTitle}</TableCell>
              <TableCell className='trash' component="th" scope="row"><button onClick={()=>deleteAPI(user.id)} ><GrTrash/></button></TableCell>

           </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
