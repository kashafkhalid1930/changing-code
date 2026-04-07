import React, { useState } from 'react';
import './Dashboard.css';
import { 
    PersonalDocumentsPage,
    AcademicInformationPage, 
    AddAcademicInfoPage,
    AdmissionListingPage,
    AdmissionFormPage,
    DashboardHomePage,
    ChangePasswordPage,
    PersonalDetailsTab,
    ResidenceDetailsTab,
    EmergencyContactTab,
    GuardianDetailsTab
} from './DashboardPages.jsx';

/* ───── SVG Icon Helpers ───── */
const Icon = ({ path, fill = "none" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {path}
    </svg>
);

const SearchIcon = () => <Icon path={<><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></>} />;
const LayoutDashboardIcon = () => <Icon path={<><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></>} />;
const FileTextIcon = () => <Icon path={<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></>} />;
const UserIcon = () => <Icon path={<><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></>} />;
const SettingsIcon = () => <Icon path={<><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></>} />;
const LogOutIcon = () => <Icon path={<><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></>} />;
const MapPinIcon = () => <Icon path={<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></>} />;
const PhoneIcon = () => <Icon path={<><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></>} />;
const ShieldIcon = () => <Icon path={<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></>} />;
const CameraIcon = () => <Icon path={<><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></>} />;
const MailIcon = () => <Icon path={<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></>} />;
const CalendarIcon = () => <Icon path={<><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></>} />;
const BookIcon = () => <Icon path={<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></>} />;
const MenuIcon = () => <Icon path={<><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></>} />;
const LockIcon = () => <Icon path={<><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></>} />;
const HomeIcon = () => <Icon path={<><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></>} />;
const GlobeIcon = () => <Icon path={<><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></>} />;
const HeartIcon = () => <Icon path={<><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></>} />;

/* ───── Reusable Address Fields Component ───── */
const AddressFields = ({ prefix = '' }) => (
    <>
        <div className="two-column-grid">
            <div className="field-group">
                <label className="field-label">Pick a Country <span className="required">*</span></label>
                <select className="field-input field-select" id={`${prefix}country`}>
                    <option value="">Select Country</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="india">India</option>
                    <option value="uae">UAE</option>
                    <option value="uk">United Kingdom</option>
                    <option value="usa">United States</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="field-group">
                <label className="field-label">Pick a State <span className="required">*</span></label>
                <select className="field-input field-select" id={`${prefix}state`}>
                    <option value="">Select State</option>
                    <option value="punjab">Punjab</option>
                    <option value="sindh">Sindh</option>
                    <option value="kpk">Khyber Pakhtunkhwa</option>
                    <option value="balochistan">Balochistan</option>
                    <option value="islamabad">Islamabad Capital Territory</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </div>
        <div className="two-column-grid">
            <div className="field-group">
                <label className="field-label">Pick a City <span className="required">*</span></label>
                <select className="field-input field-select" id={`${prefix}city`}>
                    <option value="">Select City</option>
                    <option value="sialkot">Sialkot</option>
                    <option value="lahore">Lahore</option>
                    <option value="islamabad">Islamabad</option>
                    <option value="karachi">Karachi</option>
                    <option value="peshawar">Peshawar</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="field-group">
                <label className="field-label">Zip Code</label>
                <div className="field-input-wrapper">
                    <input type="text" className="field-input" placeholder="e.g. 51310" id={`${prefix}zip`} />
                </div>
            </div>
        </div>
        <div className="field-group">
            <label className="field-label">Address <span className="required">*</span></label>
            <textarea className="field-input field-textarea" placeholder="Enter full address" rows="3" id={`${prefix}address`}></textarea>
        </div>
    </>
);

/* ═══════════════════════════════════════════════
   TAB 1 — Personal Details
   ═══════════════════════════════════════════════ */
/* Profile tabs moved to DashboardPages.jsx */

/* ═══════════════════════════════════════════════
   MAIN DASHBOARD
   ═══════════════════════════════════════════════ */
const Dashboard = ({ setView, user }) => {
    const [activeTab, setActiveTab] = useState('personal');
    const [profileData, setProfileData] = useState(() => {
        const saved = localStorage.getItem('profileData');
        return saved ? JSON.parse(saved) : {
            firstName: '', lastName: '', fatherName: '', username: '', dob: '', religion: '', 
            cellPhone: '', disability: false, gender: '', cnic: '', maritalStatus: '', 
            nationality: '', email: '', profileImage: null,
            residence: {}, emergency: {}, guardian: {}
        };
    });

    React.useEffect(() => {
        localStorage.setItem('profileData', JSON.stringify(profileData));
    }, [profileData]);
    const [currentPage, setCurrentPage] = useState('home');
    const [profileOpen, setProfileOpen] = useState(false);
    const [admissionOpen, setAdmissionOpen] = useState(true);
    const [studentInfo] = useState(user || { id: 'MJ8012002', name: studentInfo?.name || 'Student Applicant' });

    const handleProfileChange = (key, value) => {
        setProfileData(prev => ({ ...prev, [key]: value }));
    };

    const handleLogout = (e) => {
        e.preventDefault();
        setView('landing');
    };

    /* Map each tab value to a label for the breadcrumb */
    const tabLabels = {
        personal: 'PERSONAL DETAILS',
        residence: 'RESIDENCE DETAILS',
        emergency: 'EMERGENCY CONTACT',
        guardian: 'GUARDIAN DETAILS',
    };

    /* Render only the active tab */
    const renderActiveTab = () => {
        switch (activeTab) {
            case 'personal':  return <PersonalDetailsTab profileData={profileData} updateProfile={handleProfileChange} />;
            case 'residence': return <ResidenceDetailsTab profileData={profileData} updateProfile={handleProfileChange} />;
            case 'emergency': return <EmergencyContactTab profileData={profileData} updateProfile={handleProfileChange} />;
            case 'guardian':  return <GuardianDetailsTab profileData={profileData} updateProfile={handleProfileChange} />;
            default:          return <PersonalDetailsTab profileData={profileData} updateProfile={handleProfileChange} />;
        }
    };

    return (
        <div className="dashboard-layout fade-in">
            {/* ── Sidebar ── */}
            <aside className="dashboard-sidebar">
                <div className="sidebar-user-card compact-card">
                    <img src={profileData.profileImage || "/student-avatar.jpg"} alt="Student" className="sidebar-avatar-compact" onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${studentInfo.name}&background=3B5BDB&color=fff`; }} />
                    <div className="sidebar-user-info">
                        <div className="sidebar-user-id-compact">{studentInfo.name}</div>
                        <div className="sidebar-user-role-compact">Student Applicant</div>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    <a className={`sidebar-link ${currentPage === 'home' ? 'active' : ''}`} onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
                        <span className="sidebar-link-icon"><LayoutDashboardIcon /></span>
                        Dashboard
                    </a>
                    <a className={`sidebar-link ${currentPage === 'profile' ? 'active' : ''}`} onClick={() => setCurrentPage('profile')} style={{ cursor: 'pointer' }}>
                        <span className="sidebar-link-icon"><UserIcon /></span>
                        Complete Profile
                    </a>
                    <a className={`sidebar-link dropdown-link ${['personal-docs','academic-info','add-academic'].includes(currentPage) ? 'active' : ''}`} onClick={() => setAdmissionOpen(!admissionOpen)} style={{ cursor: 'pointer' }}>
                        <span className="sidebar-link-icon"><FileTextIcon /></span>
                        <span className="sidebar-text-clamp">Admission Management</span>
                        <span className={`sidebar-link-arrow ${admissionOpen ? 'open' : ''}`}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
                    </a>
                    {admissionOpen && (
                        <div className="sidebar-submenu">
                            <a className={`sidebar-sublink ${currentPage === 'personal-docs' ? 'active' : ''}`} onClick={() => setCurrentPage('personal-docs')} style={{ cursor: 'pointer' }}>Personal Documents</a>
                            <a className={`sidebar-sublink ${currentPage === 'academic-info' || currentPage === 'add-academic' ? 'active' : ''}`} onClick={() => setCurrentPage('academic-info')} style={{ cursor: 'pointer' }}>Academic Information</a>
                            <a className={`sidebar-sublink ${currentPage === 'application-list' ? 'active' : ''}`} onClick={() => setCurrentPage('application-list')} style={{ cursor: 'pointer' }}>Application List</a>
                            <a className={`sidebar-sublink ${currentPage === 'application-form' ? 'active' : ''}`} onClick={() => setCurrentPage('application-form')} style={{ cursor: 'pointer' }}>Application</a>
                        </div>
                    )}
                </nav>
            </aside>

            {/* ── Main Content ── */}
            <main className="dashboard-main">
                {/* Header */}
                <header className="dashboard-header">
                    <div className="header-left" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div className="header-logo-icon" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="../Campus 360 image.png/campus 360 image.png" alt="Campus 360" style={{ height: '36px', objectFit: 'contain' }} />
                        </div>
                        <div className="header-logo-text" style={{ fontWeight: '700', fontSize: '1.25rem', color: '#1e293b', letterSpacing: '-0.5px' }}>
                            Campus 360
                        </div>
                    </div>
                    <div className="header-center">
                        <div className="search-bar">
                            <span style={{ color: '#9ca3af', display: 'flex' }}><SearchIcon /></span>
                            <input type="text" placeholder="Search..." className="search-input" />
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="header-profile" onClick={() => setProfileOpen(!profileOpen)}>
                            <img src={profileData.profileImage || "/student-avatar.jpg"} alt={studentInfo.name} title={studentInfo.name} className="header-avatar" onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${studentInfo.name}&background=3B5BDB&color=fff`; }} />
                            <div className={`dropdown-menu ${profileOpen ? 'show' : ''}`}>
                                <a href="#" className="dropdown-item" onClick={(e) => { e.preventDefault(); setCurrentPage('profile'); setProfileOpen(false); }}><UserIcon /> Profile</a>
                                <div className="dropdown-divider"></div>
                                <a href="#" onClick={handleLogout} className="dropdown-item text-danger"><LogOutIcon /> Logout</a>
                            </div>
                        </div>
                        <button className="dropdown-arrow-btn" style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                    </div>
                </header>

                {/* Content Area */}
                <div className="dashboard-content-wrapper">
                    {currentPage === 'home' && <DashboardHomePage onNavigate={(p) => setCurrentPage(p)} studentInfo={studentInfo} />}
                    {currentPage === 'profile' && (
                        <>
                            <div className="page-header-minimal">
                                <div className="breadcrumb-minimal">DASHBOARD &nbsp;&gt;&nbsp; USER MANAGEMENT &nbsp;&gt;&nbsp; {tabLabels[activeTab]}</div>
                                <h1 className="page-title-minimal">Complete Profile</h1>
                            </div>
                            <div className="step-navigation">
                                <div className={`step-item ${activeTab === 'personal' ? 'active' : ''}`} onClick={() => setActiveTab('personal')}>
                                    <div className="step-icon-wrapper"><UserIcon /></div>
                                    <span className="step-label">Personal Details</span>
                                </div>
                                <div className="step-connector"></div>
                                <div className={`step-item ${activeTab === 'residence' ? 'active' : ''}`} onClick={() => setActiveTab('residence')}>
                                    <div className="step-icon-wrapper"><MapPinIcon /></div>
                                    <span className="step-label">Residence Details</span>
                                </div>
                                <div className="step-connector"></div>
                                <div className={`step-item ${activeTab === 'emergency' ? 'active' : ''}`} onClick={() => setActiveTab('emergency')}>
                                    <div className="step-icon-wrapper"><PhoneIcon /></div>
                                    <span className="step-label">Emergency Contact</span>
                                </div>
                                <div className="step-connector"></div>
                                <div className={`step-item ${activeTab === 'guardian' ? 'active' : ''}`} onClick={() => setActiveTab('guardian')}>
                                    <div className="step-icon-wrapper"><ShieldIcon /></div>
                                    <span className="step-label">Guardian Details</span>
                                </div>
                            </div>
                            {renderActiveTab()}
                        </>
                    )}
                    {currentPage === 'personal-docs' && <PersonalDocumentsPage />}
                    {currentPage === 'academic-info' && <AcademicInformationPage onAddClick={() => setCurrentPage('add-academic')} />}
                    {currentPage === 'add-academic' && <AddAcademicInfoPage onCancel={() => setCurrentPage('academic-info')} />}
                    {currentPage === 'application-list' && (
                        <AdmissionListingPage onCreateNew={() => setCurrentPage('application-form')} />
                    )}
                    {currentPage === 'application-form' && (
                        <AdmissionFormPage onCancel={() => setCurrentPage('application-list')} />
                    )}
                    {currentPage === 'change-password' && <ChangePasswordPage />}
                </div>

                {/* Footer */}
                <footer className="dashboard-footer">
                    <div>2026 &copy; Campus 360. All rights reserved.</div>
                    <div>Developed by Campus 360 Group</div>
                </footer>
            </main>
        </div>
    );
};

export default Dashboard;
