import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section container hidden">
      <div className="hero-content">
        <p className="greeting fade-in" style={{ animationDelay: '0.2s' }}>Hello, my name is</p>
        <h1 className="name fade-in text-gradient" style={{ animationDelay: '0.4s' }}>
          Faiz Fakhri.
        </h1>
        <h2 className="title fade-in" style={{ animationDelay: '0.6s' }}>
          I build interactive experiences.
        </h2>
        <p className="description fade-in" style={{ animationDelay: '0.8s' }}>
          I'm a frontend developer specializing in building (and occasionally designing) exceptional, modern, and highly interactive digital experiences.
        </p>
        <div className="cta-buttons fade-in" style={{ animationDelay: '1s' }}>
          <a href="#projects" className="btn btn-primary">Check out my work!</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
      
      <div className="hero-graphic fade-in" style={{ animationDelay: '1.2s' }}>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3 glass"></div>
      </div>
    </section>
  );
};

export default Hero;
