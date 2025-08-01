import { Routes, Route } from 'react-router-dom'
import './App.css'
import Forms from "./components/Forms"
import Room from './pages/Room'

const App = () => {
  
  return (
      <div className='container'>
        <Routes>
          <Route path = "/" element = {<Forms/>}/>
          <Route path="/:roomId" element = {<Room/>}/>
        </Routes>
       </div>
    
  )
}
export default App