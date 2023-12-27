import './App.css';

function App() {

  function handleClick() {
    alert("yo");
  }

  return (
    <div className="top" onClick={handleClick}>
      CV - Mike Lee
    </div>
  );
}

export default App;
