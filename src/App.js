import './App.css';
import * as React from 'react';
import { Link, useNavigate,Outlet } from "react-router-dom";

import Button from '@mui/material/Button';




export default function App() {


return (
      <>
      <nav>
        <div className='navbar'>
        <h2 className='h2'>API TABLE</h2>
     
        <Link className='addpage' to={'add'}><Button className='addpagebtn' variant="contained" >Add</Button></Link>

        
        </div>

      </nav>


      <Outlet/>

    </>
  );
}
