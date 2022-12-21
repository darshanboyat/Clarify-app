import "./App.css";
import React from 'react'
import Loading from "./Components/Loading/Spinner";
import Router from "./Router"

function App() {
  const [load, setLoad] = React.useState(true);

  window.onload = (event) => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  };

  return (
    <>
      {load ? (
        <>
        <Loading />
        </>
      ) : (
        <div className="App">
            <Router/>
        </div>
      )}
    </>
  );
}

export default App;
