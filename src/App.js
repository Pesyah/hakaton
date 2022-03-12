import './App.css';
import './Style.css'
import './bootstrap.min.css'
import MainPage from './components/Pages/MainPage.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Registration from './components/Registration/Registration';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import MainPage from './components/pages/MainPage';

function App() {
  return (
    <Router>
      <div className="App">
      <Header></Header>
      <MainPage>
        <Routes>

          <Route path="/Registration">
            <Registration />
          </Route>

          <Route path="/">
            <>123</>
          </Route>

        </Routes>
      </MainPage>
      <Footer></Footer>
      </div>
    </Router>
  );  
};

export default App;