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
import Admin from './components/pages/Admin';
import NewCouse from './components/pages/NewCouse';

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      dispatch(auth())
    }
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
          <Route path="/NewCouse" element={<NewCouse/>}>
          </Route>
          <Route path="/admin" element={<Admin></Admin>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );  
};
export default App;



    
