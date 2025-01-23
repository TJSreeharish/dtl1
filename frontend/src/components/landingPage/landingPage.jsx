import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n'; 
import "./landingPage.css";
import doctorImage from "../../images/doctor-placeholder.jpg";
import Apollo from "../../images/Apollologo.jpg";
import fortis from "../../images/fortis.jpg";
import govt from "../../images/govt.jpg";
import aiims from "../../images/aiims.jpg";
import narayana from "../../images/narayana.jpg";
import digital from "../../images/digitalhealth.jpg";
import analytics from "../../images/analytics.jpg";
import appointment from "../../images/appointment.jpg";
import role from "../../images/role.jpg";
import sumedh from "../../images/sumedh.jpg";
import muzam from "../../images/muz2.jpg";
import varun from "../../images/var.jpg";
import developer from "../../images/developer.jpeg"




const LandingPage = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'en');

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    console.log("Selected Language:", selectedLanguage);
    i18n.changeLanguage(selectedLanguage); 
    setLanguage(selectedLanguage); 
  };
  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <div className="logo">
            <h1>{t('CliniNSync')}</h1>
          </div>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            fontFamily: '"Poppins", Arial, sans-serif' 
          }}>
            <label 
              htmlFor="language-select" 
              style={{ 
                fontSize: '16px', 
                fontWeight: '600', 
                color: '#2c3e50' 
              }}
            >
              {t('select_language')}:
            </label>
            <select
              id="language-select"
              onChange={handleLanguageChange}
              value={language}
              style={{
                width: '250px',
                padding: '8px 15px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                backgroundColor: '#fdfdfd',
                color: '#2c3e50',
                outline: 'none',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                fontFamily: '"Poppins", Arial, sans-serif',
              }}
              onMouseOver={(e) => e.target.style.borderColor = '#0078d4'}
              onFocus={(e) => {
                e.target.style.borderColor = '#0078d4';
                e.target.style.boxShadow = '0 0 8px rgba(0, 120, 212, 0.3)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#ccc';
                e.target.style.boxShadow = 'none';
              }}
            >
              <option value="en">English</option>
              <option value="kn">Kannada</option>
            </select>
          </div>

        <nav>
          <ul>
            <li><a href="#trusted-clinics">{t("Our clinics")}</a></li>
            <li><a href="#features">{t('Features')}</a></li>
            <li><a href="#team">{t('About Us')}</a></li>
            <li><a href="#contact" className="btn btn-primary">{t('Contact Us')}</a></li>
          </ul>
        </nav>
      </div>
    </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h2>{t('Optimize Your Healthcare Journey')}</h2>
            <p className="tagline">
              {t('Revolutionizing patient care with real-time health management software for clinics and hospitals.')}
            </p>
            <p>{t('Improve efficiency, enhance patient experience, and streamline operations effortlessly.')}</p>
            <div className="hero-buttons">
              <a href="/login" className="login">{t('Login')}</a>
              <a href="/register" className="register">{t('Register')}</a>
            </div>
          </div>
          <div className="hero-image">
            <img src={doctorImage} alt="Doctor" />
            <div className="info-boxes">
              <div>{t('Digital Health Record Access')}</div>
              <div>{t('Seamless Patient Tracking')}</div>
              <div>{t('Role Based Access')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clinics Section */}
     
      <section id="trusted-clinics" className="trusted-clinics">
        <div className="container">
          <h2>{t('Our Trusted Clinics & Hospitals')}</h2>
          <p>
            {t('We collaborate with trusted clinics and hospitals offering specialties across pediatrics, dermatology, ENT, psychiatry, and more.')}
          </p>
          <div className="logos">
            <img src={Apollo} alt="Clinic Logo" />
            <img src={fortis} alt="Clinic Logo" />
            <img src={govt} alt="Clinic Logo" />
            <img src={aiims} alt="Clinic Logo" />
            <img src={narayana} alt="Clinic Logo" />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <div className="container">
          <h2>{t('What We Have Achieved')}</h2>
          <div className="achievement-grid">
            <div className="achievement-card">
              <i className="fa-solid fa-user-md"></i>
              <h3>200+</h3>
              <p>{t('Doctors who trust us')}</p>
            </div>
            <div className="achievement-card">
              <i className="fa-solid fa-clock"></i>
              <h3>1M+</h3>
              <p>{t('People Using')}</p>
            </div>
            <div className="achievement-card">
              <i className="fa-solid fa-calendar-check"></i>
              <h3>50%</h3>
              <p>{t('Reduction in Wrong Treatment')}</p>
            </div>
            <div className="achievement-card">
              <i className="fa-solid fa-users"></i>
              <h3>50,000+</h3>
              <p>{t('Satisfied patients')}</p>
            </div>
            <div className="achievement-card">
              <i className="fa-solid fa-chart-line"></i>
              <h3>20%</h3>
              <p>{t('Increased efficiency')}</p>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" style={{ padding: "60px 20px", backgroundColor: "#f9f9f9" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "10px" }}>{t('Our Features')}</h2>
          <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "40px" }}>
            {t('Streamlining Patient Management with Advanced Tools')}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
            {/* Feature 1 */}
            <div style={{ background: "#fff", border: "1px solid #ddd", borderRadius: "8px", padding: "20px", width: "300px", textAlign: "left", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
              <div style={{ textAlign: "center", marginBottom: "15px" }}>
                <img src={digital} alt="Digital Health Record" style={{ width: "50px", height: "50px" }} />
              </div>
              <h3 style={{ fontSize: "1.2rem", color: "#333", marginBottom: "10px" }}>{t('Digital Health Record Storage')}</h3>
              <p style={{ fontSize: "0.9rem", color: "#666" }}>
                {t('Securely store, access, and manage patient records with cloud-enabled solutions, ensuring data safety and accessibility.')}
              </p>
            </div>
            {/* Feature 2 */}
            <div style={{ background: "#fff", border: "1px solid #ddd", borderRadius: "8px", padding: "20px", width: "300px", textAlign: "left", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
              <div style={{ textAlign: "center", marginBottom: "15px" }}>
                <img src={role} alt="Role-Based Access" style={{ width: "50px", height: "50px" }} />
              </div>
              <h3 style={{ fontSize: "1.2rem", color: "#333", marginBottom: "10px" }}>{t('Role-Based Access with 24x7 Service')}</h3>
              <p style={{ fontSize: "0.9rem", color: "#666" }}>
                {t('Provide healthcare staff with secure, role-based access controls, supported by 24x7 availability.')}
              </p>
            </div>
            {/* Feature 3 */}
            <div style={{ background: "#fff", border: "1px solid #ddd", borderRadius: "8px", padding: "20px", width: "300px", textAlign: "left", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
              <div style={{ textAlign: "center", marginBottom: "15px" }}>
                <img src={appointment} alt="Appointment Booking" style={{ width: "50px", height: "50px" }} />
              </div>
              <h3 style={{ fontSize: "1.2rem", color: "#333", marginBottom: "10px" }}>{t('Effortless Appointment Booking')}</h3>
              <p style={{ fontSize: "0.9rem", color: "#666" }}>
                {t('Simplify scheduling with a seamless, patient-friendly appointment booking system.')}
              </p>
            </div>
            {/* Feature 4 */}
            <div style={{ background: "#fff", border: "1px solid #ddd", borderRadius: "8px", padding: "20px", width: "300px", textAlign: "left", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
              <div style={{ textAlign: "center", marginBottom: "15px" }}>
                <img src={analytics} alt="Analytics" style={{ width: "50px", height: "50px" }} />
              </div>
              <h3 style={{ fontSize: "1.2rem", color: "#333", marginBottom: "10px" }}>{t('Advanced Analytics and Reports')}</h3>
              <p style={{ fontSize: "0.9rem", color: "#666" }}>
                {t('Gain actionable insights into patient trends and clinic performance with real-time analytics.')}
              </p>
            </div>
          </div>

          {/* Learn More Button */}
          <div style={{ marginTop: "40px" }}>
            <a href="#learn-more" className="btn btn-secondary">{t('Learn More')}</a>
          </div>
        </div>
      </section>


      {/* Team Section */}
      {/* Team Section */}
      <section id="team">
        <div className="team-container">
          <h2>{t('Meet Our Team')}</h2>
          <div className="team">
            <div className="team-member">
              <img src={developer} alt="Team Member 1" />
              <h3>{t('Sumedh Udupa U')}</h3>
              <p>{t('Developer')}</p>
              <p>1RV23CS252</p>
            </div>
            <div className="team-member">
              <img src={developer} alt="Team Member 3" />
              <h3>{t('Pratham M Mallya')}</h3>
              <p>{t('Developer')}</p>
              <p>1RV23AI073</p>
            </div>
            <div className="team-member">
              <img src={developer} alt="Team Member 2" />
              <h3>{t('Syed Muzammil Hussaini')}</h3>
              <p>{t('Developer')}</p>
              <p>1RV23CS263</p>
            </div>
            <div className="team-member">
              <img src={developer} alt="Team Member 3" />
              <h3>{t('Sreeharish TJ')}</h3>
              <p>{t('Developer')}</p>
              <p>1RV23AI104</p>
            </div>
            <div className="team-member">
              <img src={developer} alt="Team Member 3" />
              <h3>{t('Jay Sinha')}</h3>
              <p>{t('Developer')}</p>
              <p>1RV23CD021</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
  <div className="contact-container">
    <h2>{t('Contact Us')}</h2>
    <p>{t('If you have any questions, feel free to reach out to us.')}</p>
    <form 
      className="format" 
      onSubmit={(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        
        const mailtoLink = `mailto:sumedhudupau15@gmail.com?subject=New Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
      }}
    >
      <input 
        type="text" 
        name="name" 
        style={{borderRadius: '0px', margin: '0px'}}
        placeholder={t('Your Name')} 
        required 
      />
      <input 
        type="email" 
        name="email" 
        placeholder={t('Your Email')} 
        required 
      />
      <textarea 
        name="message" 
        placeholder={t('Your Message')} 
        required
      ></textarea>
      <button type="submit" className="btn btn-primary">
        {t('Send Message')}
      </button>
    </form>
  </div>
</section>

    </div>
  );
};

export default LandingPage;
