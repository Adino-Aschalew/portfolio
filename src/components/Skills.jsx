import React, { useEffect, useRef } from 'react';
import '../index.css';

const Skills = () => {
  const skillRefs = useRef([]);
  const observer = useRef(null);

  useEffect(() => {
    // Create intersection observer to animate skills when they come into view
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all skill items
    const currentSkillRefs = skillRefs.current;
    currentSkillRefs.forEach(ref => {
      if (ref) observer.current.observe(ref);
    });

    return () => {
      // Cleanup observer
      currentSkillRefs.forEach(ref => {
        if (ref) observer.current.unobserve(ref);
      });
    };
  }, []);

  // Function to determine skill level based on percentage
  const getSkillLevel = (level) => {
    if (level >= 80) return 'high';
    if (level >= 60) return 'medium';
    return 'low';
  };

  const skills = {
    'Frontend Development': [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'React', level: 85 },
    ],
    'Backend & Database': [
      { name: 'Node.js', level: 82 },
      { name: 'MySQL', level: 70 }
    ],
    'Tools & Other': [
      { name: 'Git & GitHub', level: 88 },
      { name: 'VS Code', level: 92 },
      { name: 'UI/UX Principles', level: 80 },
    ],
  };

  return (
    <section id="skills" className="section">
      <div className="skills-container">
        <h1>My <span>Skills</span></h1>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skills], catIndex) => (
            <div key={catIndex} className="skill-category">
              <h3>{category}</h3>
              {skills.map((skill, skillIndex) => {
                const level = getSkillLevel(skill.level);
                return (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                    ref={el => skillRefs.current[`${catIndex}-${skillIndex}`] = el}
                  >
                    <div className="skill-header">
                      <span className="skill-name">
                        {skill.name}
                      </span>
                      <span className={`skill-percent ${skill.level >= 90 ? 'skill-percent-high' : ''}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="progress-container">
                      <div 
                        className="progress-bar"
                        data-percent={`${skill.level}%`}
                        data-level={level}
                        style={{ '--progress': `${skill.level}%` }}
                      >
                        <span className="progress-percent">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
