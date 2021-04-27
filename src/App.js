import "./App.css";

//Components
import Section from "./components/Section";

//Import datas
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <img className="logo" src="logo-netflix.png" alt="logo-netflix" />
      {data.map((elem, index) => {
        return <Section key={index} element={elem} />;
      })}
    </div>
  );
}

export default App;
