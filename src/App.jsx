import Independence from "./pages/Independence";
import Destiny from "./pages/Destiny"
import Reflections from "./pages/Reflections";
import Home from './Home'
import { Routes, Route } from "react-router-dom"


function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/independence" element={<Independence />} />
            <Route path="/destiny" element={<Destiny />} />
            <Route path="reflections" element={<Reflections />} />
        </Routes>
    );
}

export default App;