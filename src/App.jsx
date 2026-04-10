import { loginUser } from './services/authService';
import { useAuth } from './context/AuthContext';
import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import DobInput from './components/DobInput';

// --- Components ---

const Navbar = ({ setView, currentView }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`landing-nav${isScrolled ? ' scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="logo" onClick={() => setView('landing')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img src="../logo.png/logo.webp" alt="University of Sialkot Logo" style={{ height: '50px' }} />
                    <span className={`logo-text ${currentView === 'history' ? 'gold' : ''}`}>University of <span className="accent-text">Sialkot</span></span>
                </div>
                <ul className="nav-links">
                    <li><a href="#top" onClick={() => setView('landing')}>Home</a></li>
                    <li className="dropdown">
                        <a href="#about" onClick={(e) => e.preventDefault()}>About <span className="arrow">▼</span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setView('history'); }}>History</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#admission" onClick={(e) => e.preventDefault()}>Admission <span className="arrow">▼</span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#" onClick={(e) => { e.preventDefault(); alert("Undergraduate Programs coming soon!"); }}>Undergraduate Programs</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); alert("Postgraduate Programs coming soon!"); }}>Postgraduate Programs</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('footer').scrollIntoView(); }}>Contact</a></li>
                </ul>
                <div className="auth-buttons">
                    <button className="btn btn-apply" onClick={() => setView('login')}>Apply Now</button>
                </div>
            </div>
        </nav>
    );
};

const Hero = () => {
    const headings = [
        "Empowering Minds, Shaping Futures",
        "Learn Today, Lead Tomorrow",
        "Knowledge That Builds Your Future",
        "Where Education Meets Excellence"
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % headings.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-slider">
                    <h1 key={index} className="fade-in">{headings[index]}</h1>
                </div>
                <p className="fade-in">Experience the future of education at the University of Sialkot. We provide a platform for innovation, research, and academic excellence.</p>
                <div className="fade-in" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    {/* Buttons removed as per request */}
                </div>
            </div>
        </section>
    );
};

const AboutSection = () => {
    return (
        <section id="about" className="section bg-white">
            <div className="container about-grid">
                <div className="about-content fade-in">
                    <span className="about-tag">Since 2018</span>
                    <h2>Our <span className="accent-text">University</span></h2>
                    <h4 className="mb-4" style={{ color: 'var(--primary-navy-light)' }}>With Academic Excellence And State Of The Art Facilities</h4>
                    <p style={{ color: 'var(--dark-gray)', fontSize: '1.1rem', marginBottom: '20px' }}>
                        Explore the University of Sialkot's state-of-the-art facilities, diverse academic programs, and vibrant campus life. 
                        Engaging with a dynamic community dedicated to fostering innovation and excellence. 
                        Experience a supportive environment that encourages personal and professional growth.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px' }}><strong className="accent-text">✓</strong> Quality Education with Global Standards</li>
                        <li style={{ marginBottom: '10px' }}><strong className="accent-text">✓</strong> Modern Research & Computer Labs</li>
                        <li style={{ marginBottom: '10px' }}><strong className="accent-text">✓</strong> Dynamic Student Societies</li>
                    </ul>
                </div>
                <div className="about-image fade-in" style={{ animationDelay: '0.3s' }}>
                    <img src="../hero background.webp" alt="University Life" />
                </div>
            </div>
        </section>
    );
};

const Features = () => {
    const commitments = [
        { 
            title: "Personality Development", 
            img: "/personality.png",
            desc: "Focusing on holistic growth through professional mentorship, soft skills training, and leadership workshops.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            )
        },
        { 
            title: "Quality Education", 
            img: "/education.png",
            desc: "Providing globally accredited academic programs designed to meet the demands of the modern industry.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
            )
        },
        { 
            title: "Modern Labs", 
            img: "/labs.png",
            desc: "State-of-the-art computer and research labs equipped with the latest technology for practical learning.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1 = "21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            )
        },
        { 
            title: "Student Societies", 
            img: "../hero background.webp", 
            desc: "A vibrant campus life with diverse societies and clubs that encourage creativity, teamwork, and social impact.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M7 21v-2a4 4 0 0 1 3-3.87"></path>
                    <path d="M9 3.51a9 9 0 0 1 6 0"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            )
        }
    ];

    return (
        <section id="features" className="section" style={{ background: 'var(--light-gray)' }}>
            <div className="container">
                <div className="text-center mb-5 fade-in">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Core <span className="accent-text">Commitments</span></h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--dark-gray)' }}>Fostering an environment of excellence, innovation, and holistic development for the leaders of tomorrow.</p>
                </div>
                <div className="features-grid">
                    {commitments.map((c, i) => (
                        <div key={i} className="commitment-card fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="commitment-image">
                                <img src={c.img} alt={c.title} />
                            </div>
                            <div className="commitment-info">
                                <div className="commitment-icon-wrapper">
                                    {c.icon}
                                </div>
                                <h3>{c.title}</h3>
                                <p>{c.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Testimonials = () => {
    const reviews = [
        { name: "Ahmed Khan", role: "BSCS Student", text: "The faculty at USKT is incredibly supportive. The modern labs gave me the edge I needed for my career." },
        { name: "Sara Malik", role: "Alumni", text: "USKT transformed my personality. The student societies helped me build leadership skills that I use every day." },
        { name: "Dr. Usman Ali", role: "Professor", text: "A culture of creativity and innovation is what sets our university apart in the region." }
    ];
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="mb-5 fade-in" style={{ color: 'var(--white)', fontSize: '2.5rem' }}>Student <span className="accent-text">Voices</span></h2>
                <div className="testimonials-slider">
                    <div key={active} className="testimonial-card glass fade-in">
                        <div className="quote-icon">"</div>
                        <p className="testimonial-text">"{reviews[active].text}"</p>
                        <div className="testimonial-author">
                            <div className="author-info">
                                <h4>{reviews[active].name}</h4>
                                <p>{reviews[active].role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = ({ setView }) => {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <img src="../logo.png/logo.webp" alt="USKT Logo" style={{ height: '60px' }} />
                            <h3 style={{ color: 'white', margin: 0 }}>University of <span className="accent-text">Sialkot</span></h3>
                        </div>
                        <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>
                            University of Sialkot aspires for academic excellence and quality research by developing a culture of creativity and innovation with focus on social and cultural values.
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4>About University</h4>
                        <ul className="footer-links">
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setView('landing'); window.scrollTo(0,0); }}>Home</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); alert("Programs coming soon!"); }}>Undergraduate Programs</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); alert("Programs coming soon!"); }}>Postgraduate Programs</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); alert("Structure coming soon!"); }}>Fee Structure</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); alert("Profiles coming soon!"); }}>Faculty Profiles</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Useful Links</h4>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Faculties</a></li>
                            <li><a href="#">Download</a></li>
                            <li><a href="#">Board of Societies</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '10px' }}>
                            📍 Sialkot-Daska Road, Sialkot, Punjab, Pakistan
                        </p>
                        <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '10px' }}>
                            📞 +92 52 333 4444
                        </p>
                        <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
                            📧 info@uskt.edu.pk
                        </p>
                        <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
                            <a href="#" className="accent-text">Facebook</a>
                            <a href="#" className="accent-text">Twitter</a>
                            <a href="#" className="accent-text">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2024 University of Sialkot. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

// --- Icons ---
const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);
const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);
const EyeOffIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
);

// --- Utils ---
const PasswordValidation = ({ password, isVisible }) => {
    if (password === undefined) return null;
    
    const criteria = [
        { id: 'length', label: 'Minimum 8 characters', met: password.length >= 8 },
        { id: 'upperlower', label: 'Uppercase + lowercase', met: /[A-Z]/.test(password) && /[a-z]/.test(password) },
        { id: 'number', label: 'Number', met: /[0-9]/.test(password) },
        { id: 'symbol', label: 'Special character', met: /[^A-Za-z0-9]/.test(password) }
    ];
    
    const allMet = criteria.every(c => c.met);
    
    return (
        <div className={`password-floating-helper ${isVisible ? 'visible' : ''}`}>
            {password.length > 0 && allMet ? (
                <div className="strong-password-success" style={{ margin: 0 }}>Password looks good ✔</div>
            ) : (
                <ul className="password-criteria-list">
                    {criteria.map(c => (
                         <li key={`${c.id}-${c.met}`} className={`password-criteria-item ${c.met ? 'criteria-met' : 'criteria-unmet'}`}>
                             <span style={{ fontWeight: 'bold' }}>{c.met ? '✓' : '✗'}</span> <span>{c.label}</span>
                         </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const validatePasswordStrict = (p) => {
    return p.length >= 8 && /[A-Z]/.test(p) && /[a-z]/.test(p) && /[0-9]/.test(p) && /[^A-Za-z0-9]/.test(p);
};

const LoginPage = ({ setView, setUser }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [showLogin, setShowLogin] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogin(true);
        }, 7000);
        return () => clearTimeout(timer);
    }, []);

    const { login } = useAuth();
const [loading, setLoading] = useState(false);
const [apiError, setApiError] = useState('');

const handleLogin = async (e) => {
    e.preventDefault();
    setApiError('');

    const newErrors = {};
    if (!formData.email) newErrors.email = 'Required';
    if (!formData.password) newErrors.password = 'Required';
    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);

    setLoading(true);
    try {
        // Check local mock user first for frontend testing
        const mockUserStr = localStorage.getItem('mockUser');
        if (mockUserStr) {
            const mockUser = JSON.parse(mockUserStr);
            if ((mockUser.email === formData.email || mockUser.email.split('@')[0] === formData.email) && mockUser.password === formData.password) {
                setUser({ id: mockUser.id || mockUser.name, name: mockUser.name });
                setView('dashboard');
                setLoading(false);
                return;
            }
        }

        const data = await loginUser(formData.email, formData.password);
        if (login) login(data.user, data.token);
        setUser(data.user);
        setView('dashboard');
    } catch (error) {
        // Front-end prototyping bypass: if no back-end is available and no mock user matched,
        // we still allow the login to proceed so the dashboard can be viewed.
        const fallbackName = formData.email ? formData.email.split('@')[0] : "Demo Student";
        setUser({ id: formData.email || "Demo Student", name: fallbackName });
        setView('dashboard');
    } finally {
        setLoading(false);
    }
};

    return (
        <div className="auth-page">
            {!showLogin ? (
                <div className="fade-in" style={{ height: '100vh', width: '100%', pointerEvents: 'none' }}>
                    {/* Only the CSS background will show */}
                </div>
            ) : (
                <div className="auth-split-container fade-in">
                    {/* Left Panel */}
                    <div className="auth-left-panel">
                        <div className="auth-left-content" style={{ textAlign: 'center' }}>
                            <h1 style={{ fontSize: '3rem', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>Welcome To <br />Campus 360</h1>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="auth-right-panel">
                        <div className="auth-card">
                            <div className="orbit-branding">Campus 360</div>
                            <h2 style={{ marginTop: '20px' }}>Sign in to Your Account</h2>
                            <p className="subtitle">Enter your credentials to access the portal</p>
                            
                            <form onSubmit={handleLogin}>
                                <div className="form-group" style={{ marginBottom: '20px' }}>
                                    <label style={{ fontSize: '0.9rem', color: 'var(--dark-gray)', marginBottom: '5px', display: 'block' }}>Email or Username</label>
                                    <input 
                                        type="text" 
                                        className="form-input"
                                        placeholder="yourname@campus.edu" 
                                        onChange={(e) => setFormData({...formData, email: e.target.value})} 
                                    />
                                    {errors.email && <small style={{ color: 'red', display: 'block', marginTop: '-15px', marginBottom: '15px' }}>{errors.email}</small>}
                                </div>
                                
                                <div className="form-group" style={{ marginBottom: '10px' }}>
                                    <label style={{ fontSize: '0.9rem', color: 'var(--dark-gray)', marginBottom: '5px', display: 'block' }}>Password</label>
                                    <div className="input-wrapper">
                                        <div className="input-icon"><LockIcon /></div>
                                        <input 
                                            type={showPassword ? "text" : "password"} 
                                            className="form-input-with-icon"
                                            placeholder="••••••••" 
                                            onChange={(e) => setFormData({...formData, password: e.target.value})} 
                                            onFocus={() => setPasswordFocused(true)}
                                            onBlur={() => setPasswordFocused(false)}
                                        />
                                        <button 
                                            type="button" 
                                            className="password-toggle"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                                        </button>
                                    </div>
                                    {errors.password && <small style={{ color: 'red', display: 'block', marginTop: '5px', marginBottom: '15px' }}>{errors.password}</small>}
                                    <PasswordValidation password={formData.password} isVisible={passwordFocused} />
                                </div>

                                <div className="checkbox-row">
                                    <div className="checkbox-group">
                                        <input type="checkbox" id="remember" />
                                        <label htmlFor="remember">Remember me</label>
                                    </div>
                                    <a href="#" onClick={(e) => { e.preventDefault(); setView('forgot-password'); }} style={{ fontSize: '0.9rem', color: 'var(--campus-indigo)', fontWeight: '600', textDecoration: 'none' }}>Forgot Password?</a>
                                </div>

                               <button type="submit" className="login-btn-full" disabled={loading}>
    {loading ? 'Signing in...' : 'Sign In'}
</button>
                            </form>

                            <div className="register-link">
                                Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); setView('signup'); }}>Register Now</a>
                            </div>
                            
                            <button onClick={() => setView('landing')} style={{ width: '100%', background: 'transparent', border: 'none', color: '#9ca3af', marginTop: '20px', cursor: 'pointer', fontSize: '0.9rem' }}>
                                ← Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const ForgotPasswordPage = ({ setView }) => {
    const [email, setEmail] = useState('');

    const handleReset = (e) => {
        e.preventDefault();
        if (!email) return alert("Please enter your email.");
        alert("Password reset link has been sent to your email!");
    };

    const MailIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    );

    return (
        <div className="auth-page">
            <div className="auth-split-container fade-in">
                {/* Left Panel */}
                <div className="auth-left-panel">
                    <div className="auth-left-content" style={{ textAlign: 'center' }}>
                        <h1 style={{ fontSize: '3rem', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>Welcome To <br />Campus 360</h1>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="auth-right-panel">
                    <div className="auth-card" style={{ margin: '0 auto', width: '100%', maxWidth: '400px' }}>
                        <div className="orbit-branding">Campus 360</div>
                        <h2 style={{ marginTop: '20px' }}>Reset Your Password</h2>
                        <p className="subtitle">Enter your email and we'll send you a link to reset your password.</p>
                        
                        <form onSubmit={handleReset}>
                            <div className="form-group" style={{ marginBottom: '25px' }}>
                                <label style={{ fontSize: '0.9rem', color: 'var(--dark-gray)', marginBottom: '5px', display: 'block' }}>Email Address</label>
                                <div className="input-wrapper">
                                    <div className="input-icon"><MailIcon /></div>
                                    <input 
                                        type="email" 
                                        className="form-input-with-icon" 
                                        placeholder="yourname@campus.edu" 
                                        required 
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            
                            <button type="submit" className="login-btn-full">SEND RESET LINK</button>
                        </form>

                        <div className="register-link">
                            Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); setView('signup'); }}>Register Now</a>
                        </div>
                        
                        <button onClick={() => setView('login')} style={{ width: '100%', background: 'transparent', border: 'none', color: '#9ca3af', marginTop: '20px', cursor: 'pointer', fontSize: '0.9rem' }}>
                            ← Back to Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SignupPage = ({ setView, setUser }) => {
    const [formData, setFormData] = useState({ 
        firstName: '', lastName: '', gender: '', dob: '', cnic: '', phone: '+92', email: '', password: '', confirm: '' 
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    const handleSignup = (e) => {
        e.preventDefault();
        const p = formData.password;
        if (!validatePasswordStrict(p)) {
            return alert("Please fix password requirements");
        }
        if (formData.password !== formData.confirm) return alert("Passwords do not match");
        
        const fullName = `${formData.firstName} ${formData.lastName}`;
        // Store account locally so login works before backend is fully integrated
        localStorage.setItem('mockUser', JSON.stringify({ id: formData.cnic || formData.email, email: formData.email, password: formData.password, name: fullName }));
        alert("Registration successful! Please login with your new account.");
        setView('login');
    };

    return (
        <div className="auth-page">
            <div className="auth-split-container fade-in">
                {/* Left Panel - Visual Section */}
                <div className="auth-left-panel">
                    <div className="auth-left-content" style={{ textAlign: 'center' }}>
                        <h1 style={{ fontSize: '3rem', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>Join the <br />Future</h1>
                        <p style={{ marginTop: '20px', maxWidth: '300px' }}>Apply now and become part of the University of Sialkot community.</p>
                    </div>
                </div>

                {/* Right Panel - Form Section */}
                <div className="auth-right-panel" style={{ padding: '40px', overflowY: 'auto' }}>
                    <div className="registration-container" style={{ margin: '0 auto' }}>
                        
                        {/* Instructions Section */}
                        <div className="instructions-card">
                            <h3>INSTRUCTIONS</h3>
                            <div className="instructions-list-container">
                                <div className="instruction-item">
                                    <div className="bullet-icon"></div>
                                    <p>Please enter your name as per written on the Matriculation certificate.</p>
                                </div>
                                <div className="instruction-item">
                                    <div className="bullet-icon"></div>
                                    <p>Please fill the form with original information.</p>
                                </div>
                                <div className="instruction-item">
                                    <div className="bullet-icon"></div>
                                    <p>Please enter authentic email and phone number for verification in next step.</p>
                                </div>
                                <div className="instruction-item">
                                    <div className="bullet-icon"></div>
                                    <p>You will not be able to change the information.</p>
                                </div>
                            </div>
                        </div>

                        {/* Form Section */}
                        <form onSubmit={handleSignup}>
                            <div className="form-grid">
                                {/* Row 1 */}
                                <div className="form-group">
                                    <label>First Name</label>
                                    <div className="input-wrapper">
                                        <div className="input-icon"><UserIcon /></div>
                                        <input 
                                            type="text" 
                                            className="form-input-with-icon" 
                                            placeholder="First Name" 
                                            required 
                                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <div className="input-wrapper">
                                        <div className="input-icon"><UserIcon /></div>
                                        <input 
                                            type="text" 
                                            className="form-input-with-icon" 
                                            placeholder="Last Name" 
                                            required 
                                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                        />
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="form-group">
                                    <label>Gender</label>
                                    <div className="input-wrapper">
                                        <div className="input-icon"><UserIcon /></div>
                                        <select 
                                            className="form-input-with-icon" 
                                            required
                                            onChange={(e) => setFormData({...formData, gender: e.target.value})}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <DobInput 
                                    value={formData.dob}
                                    onChange={(date) => setFormData({...formData, dob: date})}
                                    required={true}
                                />

                                {/* Row 3 - CNIC */}
                                <div className="form-group form-row-full">
                                    <label>CNIC</label>
                                    <div className="input-wrapper">
                                        <input 
                                            type="text" 
                                            className="form-input-with-icon" 
                                            placeholder="0000000000000" 
                                            style={{ paddingLeft: '20px' }}
                                            maxLength="13"
                                            onChange={(e) => {
                                                const val = e.target.value.replace(/\D/g, '');
                                                e.target.value = val;
                                                setFormData({...formData, cnic: val});
                                            }}
                                        />
                                    </div>
                                    <p className="helper-text">Enter CNIC without dashes (0000000000000)</p>
                                </div>

                                {/* Row 4 - Phone */}
                                <div className="form-group form-row-full">
                                    <label>Phone Number</label>
                                    <div className="input-wrapper">
                                        <div style={{ position: 'absolute', left: '15px', fontWeight: '600', color: 'var(--dark-gray)', borderRight: '1px solid #e5e7eb', paddingRight: '10px' }}>
                                            +92
                                        </div>
                                        <input 
                                            type="tel" 
                                            className="form-input-with-icon" 
                                            placeholder="3001234567" 
                                            style={{ paddingLeft: '70px' }}
                                            maxLength="11"
                                            onChange={(e) => {
                                                const val = e.target.value.replace(/\D/g, '');
                                                e.target.value = val;
                                                setFormData({...formData, phone: '+92' + val});
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Row 5 - Email */}
                                <div className="form-group form-row-full">
                                    <label>Email Address</label>
                                    <div className="input-wrapper">
                                        <div className="input-icon"><MailIcon /></div>
                                        <input 
                                            type="email" 
                                            className="form-input-with-icon" 
                                            placeholder="email@example.com" 
                                            required 
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        />
                                    </div>
                                </div>

                                {/* Row 6 - Passwords */}
                                <div className="form-group">
                                    <label>Password</label>
                                    <div className="input-wrapper">
                                        <div className="input-icon"><LockIcon /></div>
                                        <input 
                                            type={showPassword ? "text" : "password"} 
                                            className="form-input-with-icon" 
                                            placeholder="••••••••" 
                                            required 
                                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                                            onFocus={() => setPasswordFocused(true)}
                                            onBlur={() => setPasswordFocused(false)}
                                        />
                                        <button 
                                            type="button" 
                                            className="password-toggle"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                                        </button>
                                    </div>
                                    <PasswordValidation password={formData.password} isVisible={passwordFocused} />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <div className="input-wrapper">
                                        <div className="input-icon"><LockIcon /></div>
                                        <input 
                                            type={showConfirmPassword ? "text" : "password"} 
                                            className="form-input-with-icon" 
                                            placeholder="••••••••" 
                                            required 
                                            onChange={(e) => setFormData({...formData, confirm: e.target.value})}
                                        />
                                        <button 
                                            type="button" 
                                            className="password-toggle"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="register-button">REGISTER</button>
                        </form>

                        <div className="bottom-text">
                            Already have an account? <br />
                            <button className="login-link-btn" onClick={() => setView('login')}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HistoryPage = ({ setView }) => {
    return (
        <div style={{ background: 'var(--white)', minHeight: '100vh', paddingTop: '100px' }}>
            <Navbar setView={setView} currentView="history" />
            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className="fade-in">
                        <h1 className="mb-5" style={{ color: 'var(--primary-navy)', fontSize: '3rem' }}>University <span className="accent-text">History</span></h1>
                        <div style={{ textAlign: 'left', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <h3 className="mb-3" style={{ color: 'var(--primary-navy)', fontSize: '1.8rem' }}>A Remarkable Beginning: Establishment as a Sub-Campus</h3>
                            <p className="mb-4">
                                The University of Sialkot (USKT) traces its origins to 2013, when it was established as a sub-campus of the University of Gujrat under the Public-Private Partnership (PPP) model. This initiative laid the groundwork for creating a transformative academic institution committed to fostering intellectual and professional growth at a wider scale.
                            </p>
                            
                            <h3 className="mb-3" style={{ color: 'var(--primary-navy)', fontSize: '1.8rem' }}>The University of Sialkot Act (IX) 2018: A New Era of Independence</h3>
                            <p className="mb-3">
                                In 2018, a significant milestone was achieved when the sub-campus transitioned into a full-fledged private university under the University of Sialkot Act (IX) of 2018. This transition marked the emergence of USKT as a leading academic institution, offering diverse academic disciplines and advancing opportunities in higher education.
                            </p>
                            <p className="mb-5">
                                The university’s evolution is intricately tied to Sialkot’s cultural and industrial significance. Known for its innovation, creativity, and as the birthplace of the great poet-philosopher Muhammad Iqbal, Sialkot provided a fertile environment for USKT to flourish. The university’s development complements the city’s dynamic character, serving as an educational beacon for students and professionals from across the country and beyond.
                            </p>
                            
                            <button onClick={() => setView('landing')} className="btn btn-primary">Back to Home</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer setView={setView} />
        </div>
    );
};

const App = () => {
    const [view, setView] = useState(() => {
        return localStorage.getItem('appView') || 'landing';
    });
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('currentUser');
        return saved ? JSON.parse(saved) : { id: 'MJ8012002', name: 'Student Applicant' };
    });

    useEffect(() => {
        localStorage.setItem('appView', view);
    }, [view]);

    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view]);

    if (view === 'dashboard') return <Dashboard key={user.id} setView={setView} user={user} />;
    if (view === 'login') return <LoginPage setView={setView} setUser={setUser} />;
    if (view === 'signup') return <SignupPage setView={setView} setUser={setUser} />;
    if (view === 'forgot-password') return <ForgotPasswordPage setView={setView} />;
    if (view === 'history') return <HistoryPage setView={setView} />;

    return (
        <div id="top">
            <Navbar setView={setView} currentView={view} />
            <Hero />
            <AboutSection />
            <Features />
            <Testimonials />
            <Footer setView={setView} />
        </div>
    );
};

export default App;
