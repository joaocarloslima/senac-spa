import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Details from './pages/Details/Details'
import Home from './pages/Home/Home'
import { Register } from './pages/Register/Register'


function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Register />} />
        <Route path='/movie/:id' element={<Details />} />
      </Routes>

    </Router>
  )
}

export default App
