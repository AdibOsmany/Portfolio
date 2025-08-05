
import Home from './components/home.tsx';
import About from './components/about.tsx';
import { Routes, Link, Route } from 'react-router-dom';
import WorkExperience from './components/workExperience.tsx';
import VantaBackground from './components/background.tsx';

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <header className="flex flex-col md:flex-row items-center justify-between p-4 shadow-md bg-white z-10">
        <Link to="/" className="flex items-center space-x-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden" id="navInitial">
            <img
              src="/media/initial.svg"
              alt="inititals"
              className="absolute left-[1px] top-[-2px] w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold text-gray-800 hidden sm:block">Adib Osmany</h1>
        </Link>

        <nav className="flex gap-6 mt-4 md:mt-0">
          <Link to="/about" className="text-gray-700 hover:text-purple-600 transition">
            About
          </Link>
          <Link to="/work-experience" className="text-gray-700 hover:text-purple-600 transition">
            Work Experience
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-purple-600 transition">
            Projects
          </Link>
        </nav>
      </header>

      {/* Content Area */}
      <VantaBackground />

      <main className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
