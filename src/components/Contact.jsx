import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (name) => setFocused(name);
  const handleBlur = () => setFocused('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending
    alert(`Thanks ${formData.name}! Your message has been sent (simulated).`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section container hidden">
      <h2 className="section-title text-gradient">Get In Touch</h2>
      
      <div className="contact-content">
        <div className="contact-info fade-in" style={{ animationDelay: '0.2s' }}>
          <h3>Let's build something awesome together.</h3>
          <p>
            Whether you have a question, a project proposal, or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">✉</span>
              <a href="mailto:hello@example.com">hello@example.com</a>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </div>

        <form className="contact-form glass fade-in" style={{ animationDelay: '0.4s' }} onSubmit={handleSubmit}>
          <div className={`input-group ${focused === 'name' || formData.name ? 'active' : ''}`}>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={handleBlur}
              required 
            />
            <span className="input-highlight"></span>
          </div>

          <div className={`input-group ${focused === 'email' || formData.email ? 'active' : ''}`}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              required 
            />
            <span className="input-highlight"></span>
          </div>

          <div className={`input-group ${focused === 'message' || formData.message ? 'active' : ''}`}>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
              required 
            ></textarea>
            <span className="input-highlight"></span>
          </div>

          <button type="submit" className="btn btn-primary submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
