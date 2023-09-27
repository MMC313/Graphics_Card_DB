import { useState } from 'react'
import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import './App.css'
import { StyledEngineProvider } from '@mui/material/styles';



export default function App() {
  
  console.log("App rerender")

  const [headerQuery,setHeaderQuery] = useState("")

  return(
    <>
      <StyledEngineProvider injectFirst>
        <div className='app'>
          <Header setQuery={setHeaderQuery}/>
          <Content headerQuery={headerQuery}/>
          <Footer/>
        </div>
      </StyledEngineProvider>
    </>
  )
}


 