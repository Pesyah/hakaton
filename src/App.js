import './App.css';
import './Style.css'
import './bootstrap.min.css'
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';

function App() {
  fetch('http://localhost:5000/sayHello')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
};

export default App;