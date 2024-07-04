import Jail from "./pages/Jail"
import Home from './Home'
import { Routes, Route } from "react-router-dom"


function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/jail" element={<Jail />} />
        </Routes>
    );
}

export default App;