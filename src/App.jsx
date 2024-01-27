import './App.css'
import Home from '../src/components/Home/Home'
import Blog from '../src/components/Blog/Blog'
import { Routes,Route } from 'react-router-dom'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/blog' element={<Blog/>} />
    </Routes>
  )
}

export default App
