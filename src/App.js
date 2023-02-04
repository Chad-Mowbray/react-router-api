import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import ArticlesList from './components/ArticlesList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ArticleDetail from './components/ArticleDetail';


function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="articles/" element={<ArticlesList />} />
          <Route path="articles/:slug" element={<ArticleDetail />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
