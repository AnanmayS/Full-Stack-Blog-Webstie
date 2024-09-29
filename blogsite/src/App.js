import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import NavBar from './NavBar';
import AboutPage from './pages/about';
import ArticlePage from './pages/article';
import ArticleListPage from './pages/articlesList';
import NotFoundPage from './pages/notFound';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticleListPage />} />
        <Route path="/articles/:articleId" element={<ArticlePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/create-account' element={<CreateAccountPage />} />
        <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
