import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Signup from './components/Register/Signup'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
