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

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
        <Routes>
          <Route path="/Registration" element={<Registration/>}>
          </Route>
          <Route path="/" element={<MainPage/>}>
          </Route>
        </Routes>
        <Footer cursesHref='' cursesText='Курсы' aboutProjectHref='/' aboutProjectText='О проекте' newsHref='' newsText='Новости'/>
      </div>
    </Router>
  );  
};
export default App;



    
