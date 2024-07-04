import Notes from "./Notes"
import Home from './Home'
import { Routes, Route } from "react-router-dom"


function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Notes" element={<Notes />} />

        </Routes>
    );
}

export default App;