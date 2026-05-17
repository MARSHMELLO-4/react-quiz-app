import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Signup from './components/Register/Signup'
import Dashboard from './components/Dashboard/Dashboard'
import QuestionCard from './components/cards/QuestionCard'
import Questions from './components/questions/Questions'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/quiz/:time/:id/' element={<Questions/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
