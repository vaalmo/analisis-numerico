import './App.css';
import { Route,Routes } from 'react-router-dom';
import  NavBar  from './components/NavBar'
import  LandingPage  from './components/LandingPage'

import  HomeLinear  from './pages/Linear/HomeLinear'

import  HomeNonLinear from './pages/NonLinear/HomeNonLinear'
import  Bisection from './pages/NonLinear/NonLinearMethods/Bisection'


import  HomeInterpolation from './pages/Interpolation/HomeInterpolation'




function App() {
  return (
   <>

    <NavBar/>

    <Routes>        
      <Route path="/"  element={<LandingPage/>} />
      <Route path="/linear"  element={<HomeLinear />}/>
      <Route path="/non-linear"  element={<HomeNonLinear/>}/>
      <Route path="/non-linear/bisection"  element={<Bisection/>}/>
      <Route path="/non-linear/fixed-point"  element={<Bisection/>}/>
      <Route path="/non-linear/false-position"  element={<Bisection/>}/>
      <Route path="/non-linear/secant"  element={<Bisection/>}/>
      <Route path="/non-linear/multiple-roots"  element={<Bisection/>}/>
      <Route path="/interpolation"  element={<HomeInterpolation />}/>
    </Routes>
 
    </>
   
  );
}

export default App;



