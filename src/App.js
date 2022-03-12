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

function App() {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );  
};

export default App;