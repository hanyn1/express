import React from 'react'
import axios from 'axios';
import { useState } from 'react';
export default function () {
    const [mess,setMess]=useState('')
    const getInfo=()=>{
        axios.get('http://localhost:4000/info')
        .then((res)=>{
            console.log(res.data)
            setMess(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
        <h1>Our times</h1>
       
        <button onClick={getInfo}>Click to see</button>
        {mess && <h1>{mess}</h1>}
    </div>
  )
}
