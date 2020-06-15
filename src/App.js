import React from "react";
//import ReactDOM from "react-dom"
import './App.css';
import Counter from "./Reducer";


function App() {

  const [theme, setTheme] = React.useState("blue");

  const onClickHandler = () => setTheme(theme === "blue" ? "red" : "blue" );

  return (

    <div>
      <Text theme={theme}/>
      <button onClick = {onClickHandler}>Change Color</button>


      <Counter/>


    </div>
  );
}

function Text({theme}) {
  return (
    <h1 style={{color: `${theme}`}}>{theme}</h1>
  )
}

export default App;

