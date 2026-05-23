import './About.css';

const About = () => {
  const skills = [
    { name: 'React', level: '90%' },
    { name: 'JavaScript (ES6+)', level: '85%' },
    { name: 'CSS / SCSS', level: '80%' },
    { name: 'Node.js', level: '70%' },
    { name: 'Figma / UI Design', level: '75%' },
  ];

  return (
    <section id="about" className="section container hidden">
      <h2 className="section-title text-gradient">About Me</h2>
      
      <div className="about-content">
        <div className="about-text glass">
          <p>
            Hello! I'm Faiz, a passionate developer who enjoys creating things that live on the internet. 
            My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about how things work under the hood!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a huge corporation. 
            My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
          <p>
            I also recently launched a course that covers everything you need to build a web app with React and Node.js.
          </p>
        </div>
        
        <div className="about-skills">
          <h3 className="skills-title">Technical Skills</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card glass" style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
