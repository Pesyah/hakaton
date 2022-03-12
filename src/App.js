import './App.css';
import './Style.css'
import './bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Registration from './components/Registration/Registration';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import MainPage from './components/Pages/MainPage.jsx';

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
        <Footer/>
      </div>
    </Router>
  );  
};

export default App;