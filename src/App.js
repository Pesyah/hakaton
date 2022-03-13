import './App.css';
import './Style.css'
import './bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Registration from './components/pages/Registration';
import Header from './components/organisms/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/pages/MainPage';
import Login from './components/pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './actions/user';
import Admin from './components/pages/Admin';
import NewCouse from './components/pages/NewCouse';
import Lessons from './components/pages/Lessons';
import { user, lections} from './actions/user';
import Lection from './components/pages/lections/Lection';

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      dispatch(auth())
    }
  }, [])

  let lecs = []
  
  if (isAuth) {
    dispatch(user("test@mail.ru"))
    const openTests = JSON.parse(localStorage.getItem('openTests'))
    dispatch(lections(openTests))
    console.log(JSON.parse(localStorage.getItem('openLec')))
    if (JSON.parse(localStorage.getItem('openLec')) == null) {
      lecs = []
    }
    else {
      lecs = JSON.parse(localStorage.getItem('openLec'))
    }
    
  }
  
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
          
          {( () => {
            if (isAuth) {
              return <>
          <Route path="/NewCouse" element={<NewCouse/>}>
          </Route>
          <Route path="/admin" element={<Admin></Admin>}>
          </Route>
          <Route path="/lections" element={<Lessons/>}>
          </Route>
          { lecs.map((lec) => {
                return(
                  <Route path={`/lec_${lec._id}`} element={<Lection 
                    name={lec.name}
                    main={lec.lection}
                    test={lec.test}
                    ></Lection>}>
                    </Route>
                )
            })}
              </>
            }
          })()}
        </Routes>
      </div>
    </Router>
  );  
};
export default App;



    
