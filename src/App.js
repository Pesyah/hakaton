import './App.css';

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

    </div>
  );
}

export default App;
