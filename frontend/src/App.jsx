import { useState } from 'react'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import './App.css'
import { useEffect } from 'react'



export default function App() {
  

  const baseUrl ='http://localhost:3000/results?'
  const options= {
      method: 'GET'
  }

  const [headerQuery,setHeaderQuery] = useState("")
  const [gpuData,setGpuData] = useState("")

  async function loadInfo(searchInput){  
    let res = await fetch(baseUrl + new URLSearchParams({search:searchInput}),options)
    let data = await res.json()
    // let res = await fetch(baseUrl,options)
    // let data = await res.json()
    setGpuData(data.documents[0])
   
    // return data.documents[0]
  }

  async function loadSpecs(){
    // let apiData = await loadInfo(headerQuery)
    // setGpuData(apiData)
  }

  useEffect(()=>{
    loadInfo(headerQuery)
  },[headerQuery])

  console.log("App rerender")

  return(
    <>
      <Header setQuery={setHeaderQuery}/>
      <Content data={gpuData}/>
    </>
  )
}


 