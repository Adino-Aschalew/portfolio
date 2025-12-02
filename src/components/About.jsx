import resumePDF from "../assets/Adino's_Resume.pdf";
import { FaCode, FaPaintBrush, FaMobile, FaServer,FaPenNib  } from 'react-icons/fa';

const About = () => {
  const skills = [
    { icon: <FaCode className="skill-icon" />, name: 'Web Development', description: 'Building modern, responsive websites with clean and efficient code.' },
    { icon: <FaPaintBrush className="skill-icon" />, name: 'UI/UX Design', description: 'Creating beautiful and intuitive user interfaces that enhance user experience.' },
    { icon: <FaMobile className="skill-icon" />, name: 'Responsive Design', description: 'Ensuring your website looks great on all devices and screen sizes.' },
    { icon: <FaServer className="skill-icon" />, name: 'Backend Development', description: 'Building robust server-side applications and APIs.' },
    { icon: <FaPenNib className="skill-icon" />, name: 'As Designer', description: 'Design a visually creative and stuning Poster, Logo, Banner and the same as you want.' },

  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">  
        <div className="about-content">
          <div className="section-header">
            <h2>About <span>Me</span></h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">Get to know more about me and my skills</p>
          </div>
          
          <div className="about-text">
            <h3>I'm a <span className="highlight">Full Stack Developer</span> based in Bahir Dar, Ethiopia</h3>
            <p>
              Passionate about creating beautiful, functional, and user-centered digital experiences. 
              With a strong foundation in both front-end and back-end development, I bring ideas to life through clean, efficient code and thoughtful design.
            </p>
            
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-icon">{skill.icon}</div>
                  <div>
                    <h4>{skill.name}</h4>
                    <p>{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="cta-button">
              <a href={resumePDF}>
            
              Download CV </a></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;