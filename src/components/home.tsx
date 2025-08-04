import headShot from '../assets/headShot.webp';
import githubIcon from '../assets/github-icon.svg';
import linkedinIcon from '../assets/linkedin-app-icon.svg';
import emailIcon from '../assets/purple-mail-icon.svg';
import { Link } from 'react-router-dom';
import VantaBackground from './background.tsx';
function Home() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-10 px-6 py-12">
            {/* Circular Cropped Image */}
            <VantaBackground />
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden relative shadow-md">
                <img
                    src={headShot}
                    alt="Adib's profile picture"
                    className=" w-56 h-48 object-cover"
                />
            </div>

            {/* Name + Role + Contact Icons */}
            <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold text-blue-900">Adib</h1>
                <h1 className="text-4xl font-bold text-purple-700">Osmany</h1>
                <h3 className="text-lg text-gray-600 mt-2">Software Engineer</h3>

                {/* Contact Links */}
                <div className="flex justify-center md:justify-start gap-4 mt-4">
                    <Link
                        to="https://github.com/AdibOsmany?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
                    </Link>
                    <Link
                        to="https://www.linkedin.com/in/adib-osmany/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform"
                    >
                        <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                    </Link>
                    <Link
                        to="mailto:adibosmany8@gmail.com"
                        className="hover:scale-110 transition-transform"
                    >
                        <img src={emailIcon} alt="Email" className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Home;
