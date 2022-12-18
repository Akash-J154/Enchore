import axios from 'axios'
import React, { useEffect } from 'react'

const Adios = () => {
  const form =new FormData()
  form.append('category','Lecture')
  form.append('point','100')
  form.append('cert_feild','{}')
  
  
  useEffect(()=>{
    (async()=>{
      await axios.post('',form,{
        headers:{
          "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        }
      }

        
      )
    })()
  })
  return (
    <div>Adios</div>
  )
}

export default Adios