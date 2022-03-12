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
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
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
        <Footer/>
      </div>
    </Router>
  );  
};
export default App;



    
