import { Route, Routes } from 'react-router-dom'
import Footer from './Component/FooterPage/Footer';
import HomePage from './Pages/HomePage';
import LoginNavbarPage from './Pages/LoginNavbarPage';


function App() {
 

  return (
    <>
    <Routes >
      <Route path="/" element={<HomePage/> }/>
      <Route path='/Login' element={<LoginNavbarPage/> }/>
    </Routes>
    
  <Footer />
   
      
    </>
  )
}

export default App
