import { useState } from 'react'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import './App.css'
import { useEffect } from 'react'



export default function App() {
  
  console.log("App rerender")

  const [headerQuery,setHeaderQuery] = useState("")

  return(
    <>
      <Header setQuery={setHeaderQuery}/>
      <Content headerQuery={headerQuery}/>
    </>
  )
}


 