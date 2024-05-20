import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import './App.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

function App() {
  return (
        <html>
        <body>
          <Theme>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/posts/:id" element={<PostPage />} /> */}
              </Routes>
            </Router>
          </Theme>
        </body>
      </html>
  
  );
}

export default App;
