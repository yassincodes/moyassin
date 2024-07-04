import Notes from './Notes'
import Home from './home/Home'
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