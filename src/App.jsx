import './App.css'
import Navbar from "../src/components/navbar/Navbar"
import Sidebar from './components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from './page/home/Home'
import Kl from './page/j/Kl'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Sidebar/>
      <Routes>
        <Route path='/students/:id' />
        
        
        

      </Routes>
    </div>
  )
}


export default App
