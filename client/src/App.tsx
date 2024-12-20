import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Background from './components/Background'
import Foreground from './components/Foreground'
import AddCard from './components/AddCard'
import EditCard from './components/EditCard'

function App() {
 

  return (
    <>
      <Background/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Foreground/>}/>
          <Route path='add-card' element={<AddCard/>}/>
          <Route path='edit-card/:id' element={<EditCard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
