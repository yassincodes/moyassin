import Home from './Home'
import { Routes, Route } from "react-router-dom"


function App() {
    console.log("message me plz lol")
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    );
}

export default App;