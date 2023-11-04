import {Routes, Route} from 'react-router-dom'
import Main_Home from './pages/homePage/Main_Home'
// import { Main_Donate } from './pages/donate/Main_Donate'
import { Header } from './components/Header'
import Footer from './components/Footer'
import { xtraFooter } from './data/data'
// import ProjectOne from './pages/projects/ProjectOne'
// import Team from './pages/aboutUs/Team/Team'
import Events from './pages/event/Events'
import React, {Suspense} from 'react'

const OurStory = React.lazy(() => import ("./pages/aboutUs/OurStory/OurStory"))
const Team = React.lazy(() => import ("./pages/aboutUs/Team/Team"))
const AdvisoryBoard = React.lazy(() => import ("./pages/aboutUs/AdvisoryBoard/Advisory"))
const Project = React.lazy(() => import ("./pages/projects/ProjectOne"))
const ContactUs = React.lazy(() => import ("./pages/contactUs/ContactUs"))


const App = () => {
  return (
    <div>
          <Header/> 

   <Routes>
    <Route path="/" element={<Main_Home/>}/>
    {/* <Route path="donate" element={<Main_Donate/>}/> */}
    <Route path="about" element={<Suspense fallback =" 'Loading" > <OurStory/></Suspense>}/>
    <Route path="team" element={<Suspense fallback =" 'Loading" ><Team/></Suspense>}/>
    <Route path="advisory-board" element={<Suspense fallback =" 'Loading" > <AdvisoryBoard/> </Suspense>}/>
    <Route path ="events" element={<Events/>}/>
    <Route path="contact-us" element={<Suspense fallback =" 'Loading" > <ContactUs/> </Suspense>} />
    <Route path="project" element={<Suspense fallback =" 'Loading" > <Project/> </Suspense>} />

   </Routes>
   <Footer xtraFooter={xtraFooter}/>

    </div>
  )

  }
export default App