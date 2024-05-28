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
import  Newton from './pages/NonLinear/NonLinearMethods/Newton'

import  HomeInterpolation from './pages/Interpolation/HomeInterpolation'
import  Lagrange from './pages/Interpolation/InterpolationMethods/Lagrange'
import  NewtonInt from './pages/Interpolation/InterpolationMethods/NewtonInt'
import  Spline from './pages/Interpolation/InterpolationMethods/Spline'
import  Vandermonde from './pages/Interpolation/InterpolationMethods/Vandermonde' 




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

      <Route path="/non_linear"  element={<HomeNonLinear/>}/>
      <Route path="/non_linear/bisection"  element={<Bisection/>}/>
      <Route path="/non_linear/fixed_point"  element={<FixedPoint/>}/>
      <Route path="/non_linear/false_position"  element={<FalsePosition/>}/>
      <Route path="/non_linear/secant"  element={<Secant/>}/>
      <Route path="/non_linear/multiple_roots"  element={<MultipleRoots/>}/>
      <Route path="/non_linear/newton" element={<Newton/>}/>

      <Route path="/interpolation"  element={<HomeInterpolation />}/>
      <Route path="/interpolation/lagrange"  element={<Lagrange />}/>
      <Route path="/interpolation/newtonint"  element={<NewtonInt />}/>
      <Route path="/interpolation/spline"  element={<Spline />}/>
      <Route path="/interpolation/vandermonte"  element={<Vandermonde />}/>
    </Routes>
 
    </>
   
  );
}

export default App;



