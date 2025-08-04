import headShot from '../assets/headShot.webp'
import githubIcon from '../assets/github-icon.svg'
import linkedinIcon from '../assets/linkedin-app-icon.svg'
import emailIcon from '../assets/purple-mail-icon.svg'
import { Link } from 'react-router-dom';
function Home() {
    return (
        <main className="landing">
            <div className="homeDiv">
                <img src={headShot} alt="Adib's profile picture" className="profile-picture" />
                <div className="home-greeting">
                    <h1 id="first_name">Adib</h1>
                    <h1 id="last_name">Osmany</h1>
                    <h3 id="role">Software Engineer</h3>
                    <div className="home-contact">
                        <Link to="https://github.com/AdibOsmany?tab=repositories" target="_blank"><img
                            src={githubIcon} alt="github-icon" className="github" /></Link>
                        <Link to="https://www.linkedin.com/in/adib-osmany/" target="_blank"><img
                            src={linkedinIcon} alt="Linkedin-icon" className="linkedin" /></Link>
                        <Link to="mailto:adibosmany8@gmail.com"><img src={emailIcon} alt="email-icon"
                            className="email" /></Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
