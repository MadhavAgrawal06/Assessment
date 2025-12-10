import React from 'react';
import './Page4.css';
import hawkFavicon from './favicon.jpeg'; 
import cloudLogo from './cloud.png'; 
import cubeLogo from './cube.png'; 
import { ShieldCheck, Lock } from 'lucide-react';

const Page4 = () => {
  return (
    <div className="page4-container">
      {/* Background Glows */}
      <div className="glow-blob top-blob"></div>
      <div className="glow-blob bottom-blob"></div>

      {/* --- NAVBAR --- */}
      <nav className="p4-navbar">
        <div className="p4-logo-section">
          <div className="logo-box">
            <img src={hawkFavicon} alt="HawkStack" className="hawk-logo-img"/>
            <span className="hawk-text">HAWKSTACK</span>
          </div>
          <div className="logo-box">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Red_Hat_logo.svg/1200px-Red_Hat_logo.svg.png" alt="Red Hat" className="redhat-full-logo"/>
          <span className="red-text"> Red Hat</span></div>
        </div>

        <div className="p4-links-section">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">HawkStack's Approach</a>
          <a href="#" className="nav-link">Red Hat Services</a>
          <a href="#" className="nav-link">RHCSA Certification</a>
        </div>

        <div className="p4-btn-section">
          <button className="btn-contact">Contact</button>
          <button className="btn-talk">Talk to Learning Team</button>
        </div>
      </nav>

      {/* --- HERO CONTENT --- */}
      <div className="p4-hero-content">
        
        {/* Left Side: Text */}
        <div className="p4-text-section">
          <div className="p4-badge">
            <ShieldCheck size={14} style={{marginRight:'8px'}}/> Red Hat Certified Training
          </div>
          <h1 className="p4-title">
            RHCSA Certification &<br />
            <span className="p4-gradient-text">Enterprise Cloud Solutions</span>
          </h1>
          <p className="p4-description">
            Master Red Hat Enterprise Linux and accelerate your career with 
            industry-recognized certifications and hands-on cloud training.
          </p>
          <div className="p4-action-buttons">
            <button className="btn-enroll">Enroll for RHCSA / Training</button>
            <button className="btn-courses">View Courses</button>
          </div>
          <div className="p4-stats-row">
            <div className="p4-stat"><h3>99.9%</h3><p>Uptime SLA</p></div>
            <div className="p4-stat"><h3>500K+</h3><p>Threats Blocked</p></div>
            <div className="p4-stat"><h3>24/7</h3><p>Monitoring</p></div>
          </div>
        </div>

        {/* Right Side: IMAGES */}
        <div className="p4-image-section">
          
          {/* CONTAINER FOR BOTH WRAPPERS */}
          <div className="p4-image-row">
             
             {/* CONTAINER 1: Cloud Lock (Left) */}
             <div className="cloud-wrapper">
                <img 
                    src={cloudLogo} 
                    alt="Secure Cloud" 
                    className="p4-cloud-img" 
                />
             </div>

             {/* CONTAINER 2: 3D Cubes (Right) */}
             <div className="cube-wrapper">
                <img 
                    src={cubeLogo} 
                    alt="3D Cloud Cubes" 
                    className="p4-cube-img" 
                />
             </div>

          </div>
          
          {/* Overlays */}
          <div className="p4-overlay security-card">
            <div className="icon-green-box"><Lock size={16} /></div>
            <div>
              <div className="ov-label">Security Status</div>
              <div className="ov-value">All Systems Protected</div>
            </div>
          </div>

          <div className="p4-overlay badge-card">
            <ShieldCheck size={36} color="#dc2626" />
            <div className="badge-text-group">
                <span className="b-title">RHCSA</span>
                <span className="b-sub">( EX200 )</span>
                <span className="b-brand">Red Hat Certified</span>
            </div>
          </div>

          <div className="p4-overlay stats-card">
            <div className="mini-stat"><span className="ms-val blue">10M+</span><span className="ms-label">Events/Day</span></div>
            <div className="ms-divider"></div>
            <div className="mini-stat"><span className="ms-val red">50ms</span><span className="ms-label">Response</span></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page4;