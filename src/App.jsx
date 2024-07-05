import Jail from "./pages/Jail"
import Destiny from "./pages/Destiniy"
import Home from './Home'
import { Routes, Route } from "react-router-dom"


function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/jail" element={<Jail />} />
            <Route path="/destiny" element={<Destiny />} />
        </Routes>
    );
}

export default App;