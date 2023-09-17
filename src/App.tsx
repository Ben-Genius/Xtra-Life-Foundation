import {Routes, Route} from 'react-router-dom'
import Main_Home from './pages/homePage/Main_Home'
import { Main_Donate } from './pages/donate/Main_Donate'
import { Header } from './components/Header'
import Footer from './components/Footer'
import { xtraFooter } from './data/data'
import OurStory from './pages/aboutUs/OurStory/ourStory'
import Team from './pages/aboutUs/Team/team'
import Advisory from './pages/aboutUs/AdvisoryBoard/advisory'
const App = () => {
  return (
    <div>
          <Header/>

   <Routes>
    <Route path="/" element={<Main_Home/>}/>
    <Route path="donate" element={<Main_Donate/>}/>
    <Route path="about" element={<OurStory/>}/>
    <Route path="team" element={<Team/>}/>
    <Route path="advisory-board" element={<Advisory/>}/>

   </Routes>
   <Footer xtraFooter={xtraFooter}/>

    </div>
  )

  }
export default App