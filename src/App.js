import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Layout from './Components/Layouts/Layout';
import SignIn from './Components/Pages/SignIn';
import Contact from './Components/Pages/Contact';
import LearnHooks from './Components/Modules/LearnHooks';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index path='/Home' element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/LearnHooks' element={<LearnHooks/>} />


        <Route path='/SignIn' element={<SignIn/>} />

          </Route>
      </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
