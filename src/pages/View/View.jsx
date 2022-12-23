import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import Button from '@mui/material/Button';
import './View.css';

import { useParams,useNavigate } from 'react-router-dom';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Index() {
    const[supplier,setSupplier]=useState([])
    let {supID}=useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`https://northwind.vercel.app/api/suppliers/${supID}`)
            .then(res => setSupplier(res.data))
    },[])

    
    
  
      return (
        <>
      
       
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Company Name</StyledTableCell>
                

                <StyledTableCell align="right">Contact Name</StyledTableCell>
                <StyledTableCell align="right">Contact Title</StyledTableCell>
                <StyledTableCell align="right">Country</StyledTableCell>
                <StyledTableCell align="right">Phone</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                <StyledTableRow key={supplier.id}>
                  <StyledTableCell component="th" scope="row">{supplier.companyName}</StyledTableCell>
                  <StyledTableCell align="right">{supplier.contactName}</StyledTableCell>
                  <StyledTableCell align="right">{supplier.contactTitle}</StyledTableCell>
                  <StyledTableCell align="right">{supplier.address?.country}</StyledTableCell>
                  <StyledTableCell align="right">{supplier.address?.phone}</StyledTableCell>
                
                </StyledTableRow>
                
              }
            </TableBody>
          </Table>
        </TableContainer>
        <Button className='back' variant="text" onClick={()=> navigate(-1)}>Back</Button>
        </>
      )
    }
    
  

