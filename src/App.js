import React, { useEffect, useState } from 'react'
import "./App.css"

function App() {

  //hook for getting API
  const [data, userData] = useState([]);

  // hook for running the API

  useEffect(() => {
    //now getting the API
    
    fetch("https://api.escuelajs.co/api/v1/products").then((response) => response.json()).then((data) => {
      userData(data);

    })
  }, [])
  return (
    <>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th colSpan={3}>Category</th>
        
        </tr>
        {
          data.map((info) => (
            <tr>
              <td>{info.id}</td>
              <td>{info.title}</td>
              <td>{info.price}</td>
              <td>{info.description}</td>
              <td>{info.category.id}</td>
              <td>{info.category.name}</td>
              <td><img src={info.category.image} width={"500px"}/></td>
      

            </tr>
          ))}
      </table>
    </>

  )
}

export default App