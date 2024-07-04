import Notes from "./pages/Jail"
import Home from './Home'
import { Routes, Route } from "react-router-dom"


function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/jail" element={<Notes />} />
        </Routes>
    );
}

export default App;