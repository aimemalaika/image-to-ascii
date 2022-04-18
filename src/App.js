import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fontsource/lato';
import './css/style.css';
import VideoFeed from './components/videoFeed';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<VideoFeed />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
