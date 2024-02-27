import { useState } from 'react' ;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from './components/Landingpage/Land';
import AuthForm from './components/Logup/logsig';
import AdminForm from './components/Admin/adminlog';
import StaffForm from './components/Staff/Stafflog';
import ContactForm from './components/Contact/Contact';
import Sidebar from './components/Dashboard/Dash';
import Profile from './components/Profile/Profile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path = '/login' element = {<AuthForm/>}/> 
         <Route path = '/' element = {<Landingpage/>}/> 
         <Route path = '/adminlog' element = {<AdminForm/>}></Route>
         <Route path = '/stafflog' element = {<StaffForm/>}></Route>
         <Route path = '/contact' element  = {<ContactForm/>}></Route>
         <Route path = '/sidebar' element = {<Sidebar/>}></Route>
         <Route path = '/profile' element = {<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
