import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleError, handleSuccess } from '../utils';
import {ToastContainer} from 'react-toastify'

const Home = () => {
  const [loggedInUser, setLoggesdInUser] = useState('')
  const [product, setProduct] = useState('')
  const navigate = useNavigate();
  useEffect(()=>{
    setLoggesdInUser(localStorage.getItem('loggedInUser'))
  },[])
  const handleLogout =(e)=>{
    localStorage.removeItem('token')
    localStorage.removeItem('loggedInUser')
    handleSuccess('User Logged Out successfully')
    setTimeout(()=>{
      navigate('/login');
    },1000)
  }

  const fetchProducts = async()=>{
    try {
      const url = 'http://localhost:8080/products'
      const headers = {
        headers: {
          'Authorization' : localStorage.getItem('token')
        }
      }
      const response = await fetch(url,headers)
      const result = await response.json()
      
      setProduct(result)
    } catch (error) {
      handleError(error)
    }
  }
  useEffect(()=>{
    fetchProducts()
  },[])
  return (
    <div>
     <h1>{loggedInUser}</h1>
     <button onClick={handleLogout}>Logout</button>
     <div>
      {
        product && product?.map((item, index) =>(
          <ul key={index}>
            <h3>{item.name}:{item.msg}</h3>
          </ul>
        ))
      }
     </div>
     <ToastContainer/>
    </div>
  )
}

export default Home
