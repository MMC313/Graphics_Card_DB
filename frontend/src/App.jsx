import { useState } from 'react'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import './App.css'



export default function App() {

  const baseUrl ='http://localhost:3000/results'
  const options= {
      method: 'GET'
  }

  async function loadInfo(searchInput){  
    let res = await fetch(baseUrl + new URLSearchParams({search:searchInput}),options)
    let data = await res.json()

    console.log(data.documents[0])
    return data.documents[0]
  }

  const [headerQuery,setHeaderQuery] = useState("donkey")


  return(
    <>
      <Header setQuery={setHeaderQuery}/>
      <Content query={headerQuery}/>
    </>
  )
}


 