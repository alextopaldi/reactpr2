import { Routes, Route } from "react-router-dom";
import { Navigation } from "./Components/Navigation";
import { CharacterPage } from "./Pages/CharacterPage";
import { MainPage } from "./Pages/MainPage";


function App() {
  return (
  <div>
    <Navigation/>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/characters" element= {<CharacterPage/>}/>
    </Routes>
  </div>
  )
}

export default App;
