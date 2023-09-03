
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './views/home.jsx'
import Proyects from './views/Proyects'
import { HStack, Heading } from '@chakra-ui/react'



function App() {
 
  return (
    <>
<Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/proyects' element={<Proyects/>} />
      </Routes>
      
    </>
  )
}

export default App
