import './App.css';
import { Route,Routes } from 'react-router-dom';
import  NavBar  from './components/NavBar'
import  LandingPage  from './components/LandingPage'

import  HomeLinear  from './pages/Linear/HomeLinear'
import  GaussSeidel from './pages/Linear/LinearMethods/GaussSeidel'
import  Jacobi from './pages/Linear/LinearMethods/Jacobi'
import  SOR from './pages/Linear/LinearMethods/SOR'



import  HomeNonLinear from './pages/NonLinear/HomeNonLinear'
import  Bisection from './pages/NonLinear/NonLinearMethods/Bisection'
//import  Bisection2 from './pages/NonLinear/NonLinearMethods/Bisection2' es de prueba na mas
import  FalsePosition from './pages/NonLinear/NonLinearMethods/FalsePosition';
import  FixedPoint from './pages/NonLinear/NonLinearMethods/FixedPoint';
import  Secant from './pages/NonLinear/NonLinearMethods/Secant';
import  MultipleRoots from './pages/NonLinear/NonLinearMethods/MultipleRoots';

import  HomeInterpolation from './pages/Interpolation/HomeInterpolation'






function App() {
  return (
   <>

    <NavBar/>

    <Routes>        
      <Route path="/"  element={<LandingPage/>} />
      <Route path="/linear"  element={<HomeLinear />}/>
      <Route path="/linear/gausseidel"  element={<GaussSeidel />}/>
      <Route path="/linear/jacobi"  element={<Jacobi />}/>
      <Route path="/linear/sor"  element={<SOR />}/>

      <Route path="/non-linear"  element={<HomeNonLinear/>}/>
      <Route path="/non-linear/bisection"  element={<Bisection/>}/>
      <Route path="/non-linear/fixed-point"  element={<FixedPoint/>}/>
      <Route path="/non-linear/false-position"  element={<FalsePosition/>}/>
      <Route path="/non-linear/secant"  element={<Secant/>}/>
      <Route path="/non-linear/multiple-roots"  element={<MultipleRoots/>}/>

      <Route path="/interpolation"  element={<HomeInterpolation />}/>
      <Route path="/interpolation/lagrange"  element={<HomeInterpolation />}/>
      <Route path="/interpolation/newton"  element={<HomeInterpolation />}/>
      <Route path="/interpolation/spline"  element={<HomeInterpolation />}/>
      <Route path="/interpolation/vandermonte"  element={<HomeInterpolation />}/>
    </Routes>
 
    </>
   
  );
}

export default App;



