
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';


function Home() {
    return (
        <>



            <div className="p6">

                <section className="flex flex-col md:flex-row items-center justify-center flex-grow gap-16 px-10 py-12 h-100%">

                    <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden relative border-4 border-blue-600/10 ring-4 ring-[#c0c0c0] shadow-xl">
                        <img
                            src="/media/headShot.webp"
                            alt="Adib's profile picture"
                            className="w-72 h-64 object-cover"
                        />
                    </div>

                    <div className="text-center md:text-left flex flex-col items-center md:items-start">
                        <h1 className="text-5xl font-extrabold text-purple-100">Adib</h1>
                        <h1 className="text-5xl font-extrabold text-purple-100">Osmany</h1>
                        <TypeAnimation
                            sequence={[
                                'Full-Stack Developer', 1000,
                                'Software Engineer', 1000,
                                'Mobile Developer', 1000,
                                'Problem Solver', 1000,
                                'Your Next Employee', 1300
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-xl text-gray-200 mt-4"
                            repeat={Infinity}
                        />



                        <div className="flex justify-center md:justify-start gap-6 mt-3">
                            <Link
                                to="https://github.com/AdibOsmany?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform"
                            >
                                <img src="/media/github-icon.svg" alt="GitHub" className="w-8 h-8" />
                            </Link>
                            <Link
                                to="https://www.linkedin.com/in/adib-osmany/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform"
                            >
                                <img src="/media/linkedin-app-icon.svg" alt="LinkedIn" className="w-8 h-8" />
                            </Link>
                            <Link
                                to="mailto:adibosmany8@gmail.com"
                                className="hover:scale-110 transition-transform"
                            >
                                <img src="/media/purple-mail-icon.svg" alt="Email" className="w-8 h-8" />
                            </Link>
                        </div>
                    </div>
                </section>

                <nav className="w-full flex justify-center gap-10 pb-4 text-lg font-medium text-slate-100">
                    <Link to="/about" className="hover:text-cyan-300 transition">
                        About
                    </Link>
                    <Link to="/work-experience" className="hover:text-cyan-300 transition">
                        Work Experience
                    </Link>
                    <Link to="/projects" className="hover:text-cyan-300 transition">
                        Projects
                    </Link>
                </nav>

                <footer className="w-full h-full text-center pt-4 text-sm text-slate-300">
                    Contact me at{' '}
                    <a
                        href="mailto:adibosmany8@gmail.com"
                        className="underline hover:text-white"
                    >
                        adibosmany8@gmail.com
                    </a>
                </footer>

            </div>


        </>
    );
}

export default Home;
