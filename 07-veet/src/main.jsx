import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Contact from './Contact.jsx'
import About from './About.jsx'
import Home from './components/Home/HomeComponets.jsx'
import User from './components/User/User.jsx';
import Github, { githubInfoLoader } from './components/GitHub/Github.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>}/> 
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>  
      <Route path="user/:userid" element={<User />}/> 
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
      />
    </Route>

    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

