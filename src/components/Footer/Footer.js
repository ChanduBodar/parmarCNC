// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { footerText, footerImages } from '../../Data_Folders/Footerdata'; // Import the data
import tag_1 from './Footer_images/Vector-1.png'
import tag_2 from './Footer_images/Vactor-2.png'
import tag_3 from './Footer_images/Vector-3.png'
import tag_4 from './Footer_images/Vector-4.png'
import { useEffect,useRef } from 'react';

const Footer = () => {
    const footerRef = useRef(null);
    const socialIconsRef = useRef(null);
    const certificatesRef = useRef(null);

    useEffect(() => {
        // Intersection Observer for fade-in animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        // Observe elements for animation
        if (footerRef.current) observer.observe(footerRef.current);
        if (socialIconsRef.current) observer.observe(socialIconsRef.current);
        if (certificatesRef.current) observer.observe(certificatesRef.current);

        return () => {
            if (footerRef.current) observer.unobserve(footerRef.current);
            if (socialIconsRef.current) observer.unobserve(socialIconsRef.current);
            if (certificatesRef.current) observer.unobserve(certificatesRef.current);
        };
    }, []);

    // Social media links data
    const socialLinks = [
        { url: "https://www.instagram.com/parmarcncmachinesindiallp/", icon: tag_1, alt: "Instagram" },
        { url: "https://www.facebook.com/parmarcncmachinesindiallp/", icon: tag_2, alt: "Facebook" },
        { url: "https://www.youtube.com/@PARMARCNCMACHINESINDIALLP", icon: tag_3, alt: "YouTube" },
        { url: "https://www.linkedin.com/in/parmar-cnc-machine-india-94593626a/", icon: tag_4, alt: "LinkedIn" }
    ];

    return (
        <footer className="footer" ref={footerRef}>
            <div className="footer-container">
                <h2 className="footer-title" data-text={footerText.contactTitle}>
                    {footerText.contactTitle}
                </h2>
                
                <div className="footer-main">
                    <div className="footer-address">
                        <p>{footerText.address}</p>
                    </div>
                    
                    <div className="footer-content" ref={certificatesRef}>
                        <div className="certificate-container">
                            <img 
                                className="certificate-img" 
                                src={require(`${footerImages.isoImage}`)} 
                                alt="ISO Certification" 
                            />
                        </div>
                        
                        <div className="footer-middle">
                            <div className="social-links" ref={socialIconsRef}>
                                {socialLinks.map((link, index) => (
                                    <a 
                                        key={index}
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="social-link"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.open(link.url, '_blank', 'noopener,noreferrer');
                                        }}
                                    >
                                        <img src={link.icon} alt={link.alt} />
                                    </a>
                                ))}
                            </div>
                            
                            <div className="contact-info">
                                <p dangerouslySetInnerHTML={{ __html: footerText.phoneNumbers }}></p>
                            </div>
                        </div>
                        
                        <div className="certificate-container">
                            <img 
                                className="certificate-img" 
                                src={require(`${footerImages.certificateImage}`)} 
                                alt="Certificate" 
                            />
                        </div>
                    </div>
                    
                    <div className="company-desc">
                        <p>{footerText.companyDescription}</p>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>
                    {footerText.copyrightText}
                    <br />
                    <span className="developer-text">{footerText.developerText}</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
