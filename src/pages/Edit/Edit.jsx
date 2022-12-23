import React from 'react'
import './Edit.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';


export default function Edit() {
    const [supplier, setSupplier] = useState([])

    let { supID } = useParams()

    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/suppliers/${supID}`)
            .then(res => {

                setSupplier(res.data)
            })
    }, [])

    function editData(e) {
        e.preventDefault()




        //   let data={companyName,contactName,contactTitle}

        //  setSupplier= [...supplier,data]

        axios.put(`https://northwind.vercel.app/api/suppliers/${supplier.id}`, supplier)
            .then(res => {

                if (res.status == 200) alert("Data Updated!")
                else{
                    alert("something went wrong")
                }

            })


    }

    const handleChange = (e) => {
        console.log(e.target.name);
        setSupplier({ ...supplier, [e.target.name]: e.target.value })
    }
    console.log(supplier);

    return (
        <>

            <div className='main'>
                <form onSubmit={editData}>
                    <div className='div'>
                        <h2>Update Api</h2>
                        <input label="Company Name" name="companyName" placeholder='Company Name' value={supplier.companyName} onChange={e => handleChange(e)} />
                        <input label="Contact Name" name="contactName" placeholder='Contact Name' value={supplier.contactName} onChange={e => handleChange(e)} />
                        <input label="Country" name='contactTitle' placeholder='Contact Title' value={supplier.contactTitle} onChange={e => handleChange(e)} />
                        <div>
                            <div className='button'>
                                <Button type='submit' className='savebtn' variant="contained" color="success">Save</Button>
                                <Link className='add' to={'/'}> <Button className='backbtn' variant="contained" >Go Back</Button></Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}
