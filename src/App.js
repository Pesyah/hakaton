import './App.css';
import './Style.css'
import './bootstrap.min.css'
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/pages/MainPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Registration from './components/Registration/Registration';

function App() {
  fetch('http://localhost:5000/sayHello')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
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



    
