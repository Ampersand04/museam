import './vars.scss';
import './index.scss';
import {
    Routes,
    Route,
    // useNavigate
} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Exposition } from './pages/Exposition/Exposition';
import { Feedback } from './pages/Feedback/Feedback';
import { Test } from './pages/Test/Test';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/exposition" element={<Exposition />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </>
    );
}

export default App;
