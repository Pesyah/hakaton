import './App.css';
import './Style.css'
import './bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Registration from './components/pages/Registration';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/pages/MainPage';
import Login from './components/pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './actions/user';

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])
  return (
    <Router>
      <div className="App">
      <Header/>
        <Routes>
          {( () => {
            if (!isAuth) {
              return <>
              <Route path="/Registration" element={<Registration/>}>
              </Route>
              <Route path="/login" element={<Login/>}>
              </Route>
              </>
            }
          })()}
          
          <Route path="/" element={<MainPage/>}>
          </Route>
        </Routes>
        <Footer cursesHref='' cursesText='Курсы' aboutProjectHref='/' aboutProjectText='О проекте' newsHref='' newsText='Новости'/>
      </div>
    </Router>
  );  
};
export default App;



    
