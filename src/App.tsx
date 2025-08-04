
import './App.css';
import Home from './components/home.tsx';
import About from './components/about.tsx';
import headShot from './assets/initial.svg'
import { Routes, Link, Route } from 'react-router-dom';


function App() {
  return (
    <div className="relative flex justify-center items-center h-64 w-64 overflow-hidden perspective-1000">
      <header className='App-header'>
        <h1 className='App-title'>
          <Link className="App-title" to='/'>
            <img src={headShot} alt="Adib's profile picture" className="nav-picture" />
          </Link>
        </h1>
        <div className='headerLink'>
          <Link className='showlink' to='/about'>
            About
          </Link>
          <Link className='showlink' to='/work-experience'>
            Work Experience
          </Link>
          <Link className='showlink' to='/projects'>
            Projects
          </Link>
        </div>
      </header>
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
