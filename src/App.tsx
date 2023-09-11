import {Routes, Route} from 'react-router-dom'
import Main_Home from './pages/homePage/Main_Home'
import { Main_Donate } from './pages/donate/Main_Donate'

const App = () => {
  return (
    <div>
   <Routes>
    <Route path="/" element={<Main_Home/>}/>
    <Route path="donate" element={<Main_Donate/>}/>
   </Routes>
    </div>
  )

  }
export default App