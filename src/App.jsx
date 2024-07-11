import Independence from "./pages/Independence";
import Destiny from "./pages/Destiny"
import Reflections from "./pages/Reflections";
import Decision from "./pages/Decision";
import Feelings from "./pages/Feelings";
import Home from './Home'
import Front from './Front'
import { Routes, Route } from "react-router-dom"


function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Front />} />
            {
                // <Route exact path="/" element={<Home />} />
                // <Route path="/independence" element={<Independence />} />
                // <Route path="/destiny" element={<Destiny />} />
                // <Route path="/reflections" element={<Reflections />} />
                // <Route path="/decision" element={<Decision />} />
                // <Route path="/feelings" element={<Feelings />} />
            }

        </Routes>
    );
}

export default App;