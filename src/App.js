
import { useEffect } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import RouteConfig from './RouteConfig/RouteConfig';
import { useLocation } from 'react-router-dom';
import { fetchCategroies } from './Component/Category/categorySlice';
import { useDispatch } from 'react-redux';
function App() {
  const {pathname}=useLocation();
  const dispatch=useDispatch();
  useEffect(()=>{
    window.scrollTo(0, 0)
  dispatch(fetchCategroies());

  },[pathname])
  return (
    <div className="App">
      <RouteConfig></RouteConfig>
    </div>
  );
}

export default App;
