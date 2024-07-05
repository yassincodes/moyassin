import Independence from "./pages/Independence";
import Destiny from "./pages/Destiny"
import Home from './Home'
import { Routes, Route } from "react-router-dom"

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/independence" element={<Independence />} />
            <Route path="/destiny" element={<Destiny />} />
        </Routes>
    );
}

export default App;