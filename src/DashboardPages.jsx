import React, { useState, useRef } from 'react';
import DobInput from './components/DobInput';

/* ── Icons ── */
const Icon = ({ path, fill = "none", size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{path}</svg>
);
const UploadIcon = () => <Icon path={<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></>} />;
const FileIcon = () => <Icon path={<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>} />;
const PlusIcon = () => <Icon path={<><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>} />;
const SearchIcon = () => <Icon path={<><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>} />;
const TrashIcon = () => <Icon path={<><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></>} size={16} />;
const XIcon = () => <Icon path={<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>} size={16} />;
const InfoIcon = () => <Icon path={<><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></>} size={16} />;
const CheckIcon = () => <Icon path={<><polyline points="20 6 9 17 4 12"/></>} size={18} />;
const AlertCircleIcon = () => <Icon path={<><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>} size={18} />;
const ArrowRightIcon = () => <Icon path={<><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>} size={18} />;
const BellIcon = () => <Icon path={<><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></>} size={20} />;
const ClipboardIcon = () => <Icon path={<><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></>} size={20} />;
const UserIcon = ({ size = 20 }) => <Icon path={<><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>} size={size} />;
const BookIcon = ({ size = 20 }) => <Icon path={<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></>} size={size} />;
const CameraIcon = ({ size = 20 }) => <Icon path={<><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></>} size={size} />;
const PhoneIcon = ({ size = 20 }) => <Icon path={<><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></>} size={size} />;
const MailIcon = ({ size = 20 }) => <Icon path={<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>} size={size} />;
const CalendarIcon = ({ size = 20 }) => <Icon path={<><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>} size={size} />;
const HomeIcon = ({ size = 20 }) => <Icon path={<><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>} size={size} />;
const MapPinIcon = ({ size = 20 }) => <Icon path={<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>} size={size} />;
const ShieldIcon = ({ size = 20 }) => <Icon path={<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>} size={size} />;
const SparklesIcon = ({ size = 20 }) => <Icon path={<><path d="M12 3l1.912 5.813 6.088.087-4.873 3.687 1.812 5.913-4.939-3.587-4.939 3.587 1.812-5.913-4.873-3.687 6.088-.087z"/><path d="M5 3l.637 1.938 2.03.029-1.624 1.229.605 1.971-1.648-1.196-1.648 1.196.605-1.971-1.624-1.229 2.03-.029z"/><path d="M19 3l.637 1.938 2.03.029-1.624 1.229.605 1.971-1.648-1.196-1.648 1.196.605-1.971-1.624-1.229 2.03-.029z"/></>} size={size} />;

/* ── Reusable Address Fields Component ── */
const AddressFields = ({ prefix = '', data = {}, onChange }) => (
    <>
        <div className="two-column-grid">
            <div className="field-group">
                <label className="field-label">Pick a Country <span className="required">*</span></label>
                <select 
                    className="field-input field-select" 
                    value={data[prefix + 'country'] || ''} 
                    onChange={(e) => onChange(prefix + 'country', e.target.value)}
                >
                    <option value="">Select Country</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="uae">UAE</option>
                    <option value="uk">United Kingdom</option>
                    <option value="usa">United States</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="field-group">
                <label className="field-label">Pick a State <span className="required">*</span></label>
                <select 
                    className="field-input field-select" 
                    value={data[prefix + 'state'] || ''} 
                    onChange={(e) => onChange(prefix + 'state', e.target.value)}
                >
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
                <select 
                    className="field-input field-select" 
                    value={data[prefix + 'city'] || ''} 
                    onChange={(e) => onChange(prefix + 'city', e.target.value)}
                >
                    <option value="">Select City</option>
                    <option value="sialkot">Sialkot</option>
                    <option value="lahore">Lahore</option>
                    <option value="gujranwala">Gujranwala</option>
                    <option value="daska">Daska</option>
                    <option value="islamabad">Islamabad</option>
                    <option value="karachi">Karachi</option>
                    <option value="peshawar">Peshawar</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="field-group">
                <label className="field-label">Zip Code</label>
                <div className="field-input-wrapper">
                    <input 
                        type="text" 
                        className="field-input" 
                        placeholder="e.g. 513100" 
                        value={data[prefix + 'zip'] || ''} 
                        onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '');
                            if (val.length <= 6) {
                                onChange(prefix + 'zip', val);
                            }
                        }}
                    />
                </div>
            </div>
        </div>
        <div className="field-group">
            <label className="field-label">Address <span className="required">*</span></label>
            <textarea 
                className="field-input field-textarea" 
                placeholder="Enter full address" 
                rows="3" 
                value={data[prefix + 'address'] || ''} 
                onChange={(e) => onChange(prefix + 'address', e.target.value)}
            ></textarea>
        </div>
    </>
);

/* ═══════════════════════════════════════════════
   PROFILE TABS
   ═══════════════════════════════════════════════ */

export const PersonalDetailsTab = ({ profileData, updateProfile }) => {
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 1048576) return alert("File size must be ≤ 1 MB");
            const reader = new FileReader();
            reader.onloadend = () => updateProfile('profileImage', reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleUpdate = () => {
        alert("Personal details submitted successfully!");
    };

    const handleCNICChange = (e) => {
        const val = e.target.value.replace(/\D/g, '');
        if (val.length <= 13) {
            updateProfile('cnic', val);
        }
    };

    const handlePhoneChange = (e) => {
        const val = e.target.value.replace(/\D/g, '');
        if (val.length <= 11) {
            updateProfile('cellPhone', val);
        }
    };

    return (
        <div className="form-card fade-in">
            <div className="profile-upload-section">
                <div className="profile-upload-wrapper" title="Upload Photo" onClick={() => fileInputRef.current?.click()}>
                    <img 
                        src={profileData.profileImage || "/placeholder-avatar.png"} 
                        alt="Upload" 
                        className="profile-upload-avatar" 
                        onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=User&background=f3f4f6&color=9ca3af"; }} 
                    />
                    <div className="profile-upload-icon"><CameraIcon /></div>
                    <input type="file" ref={fileInputRef} style={{ display: 'none' }} accept="image/*" onChange={handleImageChange} />
                </div>
            </div>

            <div className="two-column-grid">
                <div className="column">
                    <div className="field-group">
                        <label className="field-label">First Name</label>
                        <div className="field-input-wrapper">
                            <div className="field-icon"><UserIcon /></div>
                            <input 
                                type="text" 
                                className="field-input with-icon" 
                                placeholder="First Name" 
                                value={profileData.firstName || ''} 
                                onChange={(e) => updateProfile('firstName', e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="field-group">
                        <label className="field-label">Father Name <span className="required">*</span></label>
                        <div className="field-input-wrapper">
                            <input 
                                type="text" 
                                className="field-input" 
                                placeholder="Father Name" 
                                required 
                                value={profileData.fatherName || ''} 
                                onChange={(e) => updateProfile('fatherName', e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="field-group">
                        <label className="field-label">Username</label>
                        <div className="field-input-wrapper">
                            <div className="field-icon"><MailIcon /></div>
                            <input 
                                type="email" 
                                className="field-input with-icon" 
                                placeholder="email@format.com" 
                                value={profileData.username || ''} 
                                onChange={(e) => updateProfile('username', e.target.value)} 
                            />
                        </div>
                    </div>
                    <DobInput 
                        value={profileData.dob}
                        onChange={(date) => updateProfile('dob', date)}
                        required={false}
                    />
                    <div className="field-group">
                        <label className="field-label">Religion</label>
                        <select 
                            className="field-input field-select" 
                            value={profileData.religion || ''} 
                            onChange={(e) => updateProfile('religion', e.target.value)}
                        >
                            <option value="">Select Religion</option>
                            <option value="islam">Islam</option>
                            <option value="christianity">Christianity</option>
                            <option value="hinduism">Hinduism</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="field-group">
                        <label className="field-label">Cell Phone</label>
                        <div className="field-input-wrapper">
                            <div className="field-icon"><PhoneIcon /></div>
                            <input 
                                type="text" 
                                className="field-input with-icon" 
                                placeholder="03000000000" 
                                value={profileData.cellPhone || ''} 
                                onChange={handlePhoneChange} 
                            />
                        </div>
                    </div>
                    <div className="field-group">
                        <label className="field-label">Any Disability</label>
                        <div className="toggle-switch-wrapper">
                            <span className="toggle-label">No</span>
                            <label className="toggle-switch">
                                <input 
                                    type="checkbox" 
                                    className="toggle-input"
                                    checked={profileData.disability || false} 
                                    onChange={(e) => updateProfile('disability', e.target.checked)} 
                                />
                                <span className="toggle-slider"></span>
                            </label>
                            <span className="toggle-label" style={{ color: profileData.disability ? '#3B5BDB' : '#4b5563' }}>Yes</span>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="field-group">
                        <label className="field-label">Last Name</label>
                        <div className="field-input-wrapper">
                            <input 
                                type="text" 
                                className="field-input" 
                                placeholder="Last Name" 
                                value={profileData.lastName || ''} 
                                onChange={(e) => updateProfile('lastName', e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="field-group">
                        <label className="field-label">Gender</label>
                        <select 
                            className="field-input field-select" 
                            value={profileData.gender || ''} 
                            onChange={(e) => updateProfile('gender', e.target.value)}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="field-group">
                        <label className="field-label">CNIC</label>
                        <div className="field-input-wrapper">
                            <input 
                                type="text" 
                                className="field-input" 
                                placeholder="1234512345671" 
                                value={profileData.cnic || ''} 
                                onChange={handleCNICChange} 
                            />
                        </div>
                    </div>
                    <div className="field-group">
                        <label className="field-label">Marital Status</label>
                        <select 
                            className="field-input field-select" 
                            value={profileData.maritalStatus || ''} 
                            onChange={(e) => updateProfile('maritalStatus', e.target.value)}
                        >
                            <option value="">Select Status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                        </select>
                    </div>
                    <div className="field-group">
                        <label className="field-label">Nationality</label>
                        <select 
                            className="field-input field-select" 
                            value={profileData.nationality || ''} 
                            onChange={(e) => updateProfile('nationality', e.target.value)}
                        >
                            <option value="">Select Nationality</option>
                            <option value="pakistani">Pakistani</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="field-group">
                        <label className="field-label">Email</label>
                        <div className="field-input-wrapper">
                            <div className="field-icon"><MailIcon /></div>
                            <input 
                                type="email" 
                                className="field-input with-icon" 
                                placeholder="email@format.com" 
                                value={profileData.email || ''} 
                                onChange={(e) => updateProfile('email', e.target.value)} 
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-actions">
                <button className="btn-update" onClick={handleUpdate}>Submit Details</button>
            </div>
        </div>
    );
};

export const ResidenceDetailsTab = ({ profileData, updateProfile }) => {
    const residenceData = profileData.residence || {};
    const sameAsPermanent = residenceData.sameAsPermanent || false;

    const handleAddressChange = (key, val) => {
        updateProfile('residence', { ...residenceData, [key]: val });
    };

    const handleToggleSame = (e) => {
        const checked = e.target.checked;
        updateProfile('residence', { ...residenceData, sameAsPermanent: checked });
    };

    return (
        <div className="tab-content-area fade-in">
            <div className="form-card">
                <div className="section-header">
                    <div className="section-header-icon"><HomeIcon /></div>
                    <h2 className="section-title">Permanent Address</h2>
                </div>
                <AddressFields prefix="perm-" data={residenceData} onChange={handleAddressChange} />
            </div>

            <div className="form-card">
                <div className="section-header">
                    <div className="section-header-icon"><MapPinIcon /></div>
                    <h2 className="section-title">Temporary Address</h2>
                </div>
                <div className="toggle-row">
                    <span className="toggle-row-label">Same as permanent address?</span>
                    <div className="toggle-switch-wrapper compact">
                        <span className="toggle-label">No</span>
                        <label className="toggle-switch">
                            <input 
                                type="checkbox" 
                                className="toggle-input"
                                checked={sameAsPermanent} 
                                onChange={handleToggleSame} 
                            />
                            <span className="toggle-slider"></span>
                        </label>
                        <span className="toggle-label" style={{ color: sameAsPermanent ? '#3B5BDB' : '#4b5563' }}>Yes</span>
                    </div>
                </div>

                {!sameAsPermanent && <AddressFields prefix="temp-" data={residenceData} onChange={handleAddressChange} />}
                {sameAsPermanent && (
                    <div className="same-address-notice"><MapPinIcon /><span>Address synced from permanent.</span></div>
                )}
            </div>

            <div className="form-actions">
                <button className="btn-update" onClick={() => alert("Residence details submitted successfully!")}>Submit Details</button>
            </div>
        </div>
    );
};

export const EmergencyContactTab = ({ profileData, updateProfile }) => {
    const emergencyData = profileData.emergency || {};
    const sameAsApplicant = emergencyData.sameAsApplicant || false;

    const handleFieldChange = (key, val) => {
        updateProfile('emergency', { ...emergencyData, [key]: val });
    };

    return (
        <div className="tab-content-area fade-in">
            <div className="form-card">
                <div className="section-header"><div className="section-header-icon"><UserIcon /></div><h2 className="section-title">Personal Detail</h2></div>
                <div className="two-column-grid">
                    <div className="field-group">
                        <label className="field-label">Name <span className="required">*</span></label>
                        <div className="field-input-wrapper">
                            <div className="field-icon"><UserIcon /></div>
                            <input 
                                type="text" 
                                className="field-input with-icon" 
                                placeholder="Full Name" 
                                value={emergencyData.name || ''} 
                                onChange={(e) => handleFieldChange('name', e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="field-group">
                        <label className="field-label">Relation <span className="required">*</span></label>
                        <select 
                            className="field-input field-select" 
                            value={emergencyData.relation || ''} 
                            onChange={(e) => handleFieldChange('relation', e.target.value)}
                        >
                            <option value="">Select Relation</option>
                            <option value="father">Father</option>
                            <option value="mother">Mother</option>
                            <option value="brother">Brother</option>
                            <option value="sister">Sister</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-card">
                <div className="section-header"><div className="section-header-icon"><PhoneIcon /></div><h2 className="section-title">Contact Detail</h2></div>
                <div className="two-column-grid">
                    <div className="field-group">
                        <label className="field-label">Phone <span className="required">*</span></label>
                        <div className="field-input-wrapper">
                            <div className="field-icon"><PhoneIcon /></div>
                            <input 
                                type="tel" 
                                className="field-input with-icon" 
                                placeholder="03001234567" 
                                value={emergencyData.phone || ''} 
                                onChange={(e) => {
                                    const val = e.target.value.replace(/\D/g, '');
                                    if (val.length <= 11) handleFieldChange('phone', val);
                                }} 
                            />
                        </div>
                    </div>
                    <div className="field-group">
                        <label className="field-label">Email</label>
                        <div className="field-input-wrapper">
                            <div className="field-icon"><MailIcon /></div>
                            <input 
                                type="email" 
                                className="field-input with-icon" 
                                placeholder="email@format.com" 
                                value={emergencyData.email || ''} 
                                onChange={(e) => handleFieldChange('email', e.target.value)} 
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-card">
                <div className="section-header"><div className="section-header-icon"><MapPinIcon /></div><h2 className="section-title">Address</h2></div>
                <div className="toggle-row">
                    <span className="toggle-row-label">Same as applicant permanent address?</span>
                    <div className="toggle-switch-wrapper compact">
                        <span className="toggle-label">No</span>
                        <label className="toggle-switch">
                            <input 
                                type="checkbox" 
                                className="toggle-input"
                                checked={sameAsApplicant} 
                                onChange={(e) => handleFieldChange('sameAsApplicant', e.target.checked)} 
                            />
                            <span className="toggle-slider"></span>
                        </label>
                        <span className="toggle-label" style={{ color: sameAsApplicant ? '#3B5BDB' : '#4b5563' }}>Yes</span>
                    </div>
                </div>
                {!sameAsApplicant && <AddressFields prefix="emerg-" data={emergencyData} onChange={handleFieldChange} />}
            </div>
            <div className="form-actions"><button className="btn-save" onClick={() => alert("Emergency contact submitted successfully!")}>Submit Details</button></div>
        </div>
    );
};

export const GuardianDetailsTab = ({ profileData, updateProfile }) => {
    const guardianData = profileData.guardian || {};

    const handleFieldChange = (key, val) => {
        updateProfile('guardian', { ...guardianData, [key]: val });
    };

    const handleCNICChange = (e) => {
        const val = e.target.value.replace(/\D/g, '');
        if (val.length <= 13) {
            handleFieldChange('cnic', val);
        }
    };

    return (
        <div className="tab-content-area fade-in">
            <div className="form-card">
                <div className="section-header"><div className="section-header-icon"><ShieldIcon /></div><h2 className="section-title">Guardian Information</h2></div>
                <div className="two-column-grid">
                    <div className="field-group">
                        <label className="field-label">Guardian Name <span className="required">*</span></label>
                        <div className="field-input-wrapper">
                            <div className="field-icon"><UserIcon /></div>
                            <input 
                                type="text" 
                                className="field-input with-icon" 
                                placeholder="Full Name" 
                                value={guardianData.name || ''} 
                                onChange={(e) => handleFieldChange('name', e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="field-group">
                        <label className="field-label">Relation <span className="required">*</span></label>
                        <select 
                            className="field-input field-select" 
                            value={guardianData.relation || ''} 
                            onChange={(e) => handleFieldChange('relation', e.target.value)}
                        >
                            <option value="">Select Relation</option>
                            <option value="father">Father</option>
                            <option value="mother">Mother</option>
                        </select>
                    </div>
                </div>
                <div className="two-column-grid">
                    <div className="field-group">
                        <label className="field-label">CNIC <span className="required">*</span></label>
                        <input 
                            type="text" 
                            className="field-input" 
                            placeholder="0000000000000" 
                            value={guardianData.cnic || ''} 
                            onChange={handleCNICChange} 
                        />
                    </div>
                    <div className="field-group">
                        <label className="field-label">Monthly Income</label>
                        <input 
                            type="text" 
                            className="field-input" 
                            placeholder="e.g. 50000" 
                            value={guardianData.income || ''} 
                            onChange={(e) => {
                                const val = e.target.value.replace(/\D/g, '');
                                if (val.length <= 6) handleFieldChange('income', val);
                            }} 
                        />
                    </div>
                </div>
            </div>
            <div className="form-actions"><button className="btn-save" onClick={() => alert("Guardian details submitted successfully!")}>Submit Details</button></div>
        </div>
    );
};

/* ═══════════════════════════════════════════════
   PAGE: Personal Documents
   ═══════════════════════════════════════════════ */
export const PersonalDocumentsPage = ({ documents = [], setDocuments }) => {
    const [dragActive, setDragActive] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleDrag = (e) => { e.preventDefault(); e.stopPropagation(); setDragActive(e.type === 'dragenter' || e.type === 'dragover'); };
    const handleDrop = (e) => { e.preventDefault(); setDragActive(false); if (e.dataTransfer.files[0]) setSelectedFile(e.dataTransfer.files[0]); };
    const handleFile = (e) => { if (e.target.files[0]) setSelectedFile(e.target.files[0]); };

    const handleSave = () => {
        if (!selectedFile) return;
        const title = document.getElementById('doc-title')?.value || 'Untitled';
        const type = document.getElementById('doc-type')?.value || 'Other';
        const desc = document.getElementById('doc-desc')?.value || '';
        if (documents.length >= 4) return alert('Maximum 4 documents allowed.');
        if (selectedFile.size > 1048576) return alert('File size must be ≤ 1 MB.');
        
        setDocuments([...documents, { title, type, desc, status: 'Pending', fileName: selectedFile.name }]);
        alert("Document uploaded and saved successfully!");
        setSelectedFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleRemove = (i) => setDocuments(documents.filter((_, idx) => idx !== i));

    return (
        <div className="page-container fade-in">
            <div className="page-header-minimal">
                <div className="breadcrumb-minimal">DASHBOARD &gt; ADMISSION MANAGEMENT &gt; PERSONAL DOCUMENTS</div>
                <h1 className="page-title-minimal">Personal Documents</h1>
            </div>

            {/* Instructions */}
            <div className="info-banner">
                <InfoIcon />
                <div>
                    <strong>Instructions:</strong>
                    <ul className="info-list">
                        <li>Attach front and back side of each document</li>
                        <li>Maximum 4 documents allowed</li>
                        <li>Each file size must be ≤ 1 MB</li>
                    </ul>
                </div>
            </div>

            {/* Upload Form */}
            <div className="form-card">
                <div className="section-header">
                    <div className="section-header-icon"><FileIcon /></div>
                    <h2 className="section-title">Upload Document</h2>
                </div>

                <div className="two-column-grid">
                    <div className="field-group">
                        <label className="field-label">Document Title <span className="required">*</span></label>
                        <select className="field-input field-select" id="doc-title">
                            <option value="">Select Title</option>
                            <option value="CNIC Front">CNIC Front</option>
                            <option value="CNIC Back">CNIC Back</option>
                            <option value="Passport">Passport</option>
                            <option value="Domicile">Domicile</option>
                            <option value="Photograph">Photograph</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="field-group">
                        <label className="field-label">Document Type <span className="required">*</span></label>
                        <select className="field-input field-select" id="doc-type">
                            <option value="">Select Type</option>
                            <option value="Identity">Identity</option>
                            <option value="Educational">Educational</option>
                            <option value="Financial">Financial</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="field-group">
                    <label className="field-label">Description</label>
                    <textarea className="field-input field-textarea" id="doc-desc" placeholder="Brief description of the document" rows="2"></textarea>
                </div>

                <div className="field-group">
                    <label className="field-label">File Upload</label>
                    <div className={`file-drop-zone ${dragActive ? 'drag-active' : ''} ${selectedFile ? 'has-file' : ''}`}
                        onDragEnter={handleDrag} onDragOver={handleDrag} onDragLeave={handleDrag} onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}>
                        <input type="file" ref={fileInputRef} onChange={handleFile} style={{ display: 'none' }} accept=".pdf,.jpg,.jpeg,.png" />
                        {selectedFile ? (
                            <div className="file-selected">
                                <FileIcon />
                                <span>{selectedFile.name}</span>
                                <button className="file-remove-btn" onClick={(e) => { e.stopPropagation(); setSelectedFile(null); }}><XIcon /></button>
                            </div>
                        ) : (
                            <div className="file-drop-content">
                                <UploadIcon />
                                <p><strong>Click to upload</strong> or drag and drop</p>
                                <span className="file-hint">PDF, JPG, PNG (max 1 MB)</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="form-actions">
                    <button className="btn-verify" onClick={() => { setSelectedFile(null); }}>Cancel</button>
                    <button className="btn-save" onClick={handleSave}>Save</button>
                </div>
            </div>

            {/* Documents Table */}
            <div className="form-card">
                <div className="section-header">
                    <div className="section-header-icon"><FileIcon /></div>
                    <h2 className="section-title">Uploaded Documents ({documents.length}/4)</h2>
                </div>
                <div className="data-table-wrapper">
                    <table className="data-table">
                        <thead>
                            <tr><th>Title</th><th>Type</th><th>Description</th><th>Status</th><th>Action</th></tr>
                        </thead>
                        <tbody>
                            {documents.length === 0 ? (
                                <tr><td colSpan="5" className="empty-row">No record found</td></tr>
                            ) : documents.map((doc, i) => (
                                <tr key={i}>
                                    <td>{doc.title}</td><td>{doc.type}</td><td>{doc.desc || '—'}</td>
                                    <td><span className="status-badge pending">{doc.status}</span></td>
                                    <td><button className="action-btn danger" onClick={() => handleRemove(i)}><TrashIcon /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

/* ═══════════════════════════════════════════════
   PAGE: Academic Information (List)
   ═══════════════════════════════════════════════ */
export const AcademicInformationPage = ({ records = [], onAddClick }) => {
    const [search, setSearch] = useState('');

    return (
        <div className="page-container fade-in">
            <div className="page-header-minimal">
                <div className="breadcrumb-minimal">DASHBOARD &gt; ADMISSION MANAGEMENT &gt; ACADEMIC INFORMATION</div>
                <h1 className="page-title-minimal">Academic Information</h1>
            </div>

            <div className="form-card">
                <div className="table-toolbar">
                    <div className="search-bar table-search">
                        <span style={{ color: '#9ca3af', display: 'flex' }}><SearchIcon /></span>
                        <input type="text" placeholder="Search records..." className="search-input" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <button className="btn-add" onClick={onAddClick}><PlusIcon /> <span>ADD</span></button>
                </div>

                <div className="data-table-wrapper">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Sr#</th><th>Issuing Authority</th><th>Institute</th><th>Qualification</th>
                                <th>Marks/CGPA</th><th>Obtained</th><th>Total</th>
                                <th>Start Year</th><th>End Year</th><th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.length === 0 ? (
                                <tr><td colSpan="10" className="empty-row">No record found</td></tr>
                            ) : records.map((r, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td><td>{r.authority}</td><td>{r.institute}</td><td>{r.qualification}</td>
                                    <td>{r.gradingSystem}</td><td>{r.obtained}</td><td>{r.total}</td>
                                    <td>{r.startYear}</td><td>{r.endYear}</td>
                                    <td><span className="status-badge pending">Pending</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {records.length > 0 && (
                    <div className="table-pagination">
                        <span className="pagination-info">Showing 1 to {records.length} of {records.length} entries</span>
                        <div className="pagination-controls">
                            <button className="pagination-btn" disabled>Previous</button>
                            <button className="pagination-btn active">1</button>
                            <button className="pagination-btn" disabled>Next</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

/* ═══════════════════════════════════════════════
   PAGE: Add Academic Information (Form)
   ═══════════════════════════════════════════════ */
export const AddAcademicInfoPage = ({ onCancel, onSave }) => {
    const [gradingSystem, setGradingSystem] = useState('marks');
    const [uploadedDocs, setUploadedDocs] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const fileRef = useRef(null);

    const handleDrag = (e) => { e.preventDefault(); e.stopPropagation(); setDragActive(e.type === 'dragenter' || e.type === 'dragover'); };
    const handleDrop = (e) => { e.preventDefault(); setDragActive(false); if (e.dataTransfer.files[0]) setSelectedFile(e.dataTransfer.files[0]); };

    const handleFinalSave = () => {
        const record = {
            authority: document.getElementById('acad-authority')?.value || '',
            institute: document.getElementById('acad-institute')?.value || '',
            qualification: document.getElementById('acad-qualification')?.value || '',
            gradingSystem: gradingSystem === 'marks' ? 'Marks' : 'CGPA',
            obtained: document.getElementById('acad-obtained')?.value || '',
            total: document.getElementById('acad-total')?.value || '',
            startYear: document.getElementById('acad-start-year')?.value || '',
            endYear: document.getElementById('acad-end-year')?.value || '',
            status: 'Pending'
        };

        if (!record.authority || !record.qualification || !record.institute || !record.startYear || !record.endYear || !record.obtained || !record.total) {
            return alert("Please fill in all required fields.");
        }

        if (onSave) onSave(record);
    };

    const handleAddDoc = () => {
        if (!selectedFile) return;
        const title = document.getElementById('acad-doc-title')?.value || 'Untitled';
        if (uploadedDocs.length >= 4) return alert('Maximum 4 documents allowed.');
        if (selectedFile.size > 1048576) return alert('File size must be ≤ 1 MB.');
        setUploadedDocs([...uploadedDocs, { title, fileName: selectedFile.name }]);
        setSelectedFile(null);
        if (fileRef.current) fileRef.current.value = '';
    };

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

    return (
        <div className="page-container fade-in">
            <div className="page-header-minimal">
                <div className="breadcrumb-minimal">DASHBOARD &gt; ACADEMIC INFORMATION &gt; ADD NEW</div>
                <h1 className="page-title-minimal">Add Academic Information</h1>
            </div>

            {/* Academic Form */}
            <div className="form-card">
                <div className="section-header">
                    <div className="section-header-icon"><FileIcon /></div>
                    <h2 className="section-title">Academic Details</h2>
                </div>

                <div className="two-column-grid">
                    <div className="field-group">
                        <label className="field-label">Issuing Authority (Board/University) <span className="required">*</span></label>
                        <select className="field-input field-select" id="acad-authority">
                            <option value="">Select Authority</option>
                            <option value="bise-gujranwala">BISE Gujranwala</option>
                            <option value="bise-lahore">BISE Lahore</option>
                            <option value="punjab-university">Punjab University</option>
                            <option value="university-of-gujrat">University of Gujrat</option>
                            <option value="university-of-sialkot">University of Sialkot</option>
                            <option value="hec">HEC</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="field-group">
                        <label className="field-label">Qualification Level <span className="required">*</span></label>
                        <select className="field-input field-select">
                            <option value="">Select Level</option>
                            <option value="matric">Matric / O-Level</option>
                            <option value="inter">Intermediate / A-Level</option>
                            <option value="bachelors">Bachelors</option>
                            <option value="masters">Masters</option>
                            <option value="phd">PhD</option>
                        </select>
                    </div>
                </div>

                <div className="two-column-grid">
                    <div className="field-group">
                        <label className="field-label">Qualification Category</label>
                        <select className="field-input field-select">
                            <option value="">Select Category</option>
                            <option value="science">Science</option>
                            <option value="arts">Arts</option>
                            <option value="commerce">Commerce</option>
                            <option value="computer-science">Computer Science</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="field-group">
                        <label className="field-label">Qualification <span className="required">*</span></label>
                        <input type="text" className="field-input" placeholder="e.g. BSc Computer Science" id="acad-qualification" />
                    </div>
                </div>

                <div className="two-column-grid">
                    <div className="field-group">
                        <label className="field-label">Roll No.</label>
                        <input 
                            type="text" 
                            className="field-input" 
                            placeholder="Enter Roll No." 
                            maxLength="9"
                            onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, '').slice(0, 9); }}
                        />
                    </div>
                    <div className="field-group">
                        <label className="field-label">Registration / Enrollment No.</label>
                        <input 
                            type="text" 
                            className="field-input" 
                            placeholder="Enter Registration No." 
                            maxLength="9"
                            onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, '').slice(0, 9); }}
                        />
                    </div>
                </div>

                <div className="field-group">
                    <label className="field-label">Institute <span className="required">*</span></label>
                    <input type="text" className="field-input" placeholder="Enter Institute Name" id="acad-institute" />
                </div>

                <div className="two-column-grid">
                    <div className="field-group">
                        <label className="field-label">Start Year <span className="required">*</span></label>
                        <select className="field-input field-select" id="acad-start-year">
                            <option value="">Select Year</option>
                            {years.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                    </div>
                    <div className="field-group">
                        <label className="field-label">End Year <span className="required">*</span></label>
                        <select className="field-input field-select" id="acad-end-year">
                            <option value="">Select Year</option>
                            {years.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                    </div>
                </div>

                {/* Grading System */}
                <div className="field-group">
                    <label className="field-label">Grading System <span className="required">*</span></label>
                    <div className="radio-group">
                        <label className={`radio-card ${gradingSystem === 'marks' ? 'selected' : ''}`}>
                            <input type="radio" name="grading" value="marks" checked={gradingSystem === 'marks'} onChange={() => setGradingSystem('marks')} />
                            <span>Marks</span>
                        </label>
                        <label className={`radio-card ${gradingSystem === 'cgpa' ? 'selected' : ''}`}>
                            <input type="radio" name="grading" value="cgpa" checked={gradingSystem === 'cgpa'} onChange={() => setGradingSystem('cgpa')} />
                            <span>CGPA</span>
                        </label>
                    </div>
                </div>

                <div className="two-column-grid">
                    <div className="field-group">
                        <label className="field-label">{gradingSystem === 'marks' ? 'Obtained Marks' : 'Obtained CGPA'} <span className="required">*</span></label>
                        <input 
                            type="text" 
                            className="field-input" 
                            placeholder={gradingSystem === 'marks' ? 'e.g. 950' : 'e.g. 3.5'} 
                            maxLength="5"
                            id="acad-obtained"
                            onInput={(e) => {
                                const allowedChars = gradingSystem === 'marks' ? /\D/g : /[^\d.]/g;
                                e.target.value = e.target.value.replace(allowedChars, '').slice(0, 5);
                            }}
                        />
                    </div>
                    <div className="field-group">
                        <label className="field-label">{gradingSystem === 'marks' ? 'Total Marks' : 'Total CGPA'} <span className="required">*</span></label>
                        <input 
                            type="text" 
                            className="field-input" 
                            placeholder={gradingSystem === 'marks' ? 'e.g. 1100' : 'e.g. 4.0'} 
                            maxLength="5"
                            id="acad-total"
                            onInput={(e) => {
                                const allowedChars = gradingSystem === 'marks' ? /\D/g : /[^\d.]/g;
                                e.target.value = e.target.value.replace(allowedChars, '').slice(0, 5);
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Document Upload */}
            <div className="form-card">
                <div className="section-header">
                    <div className="section-header-icon"><UploadIcon /></div>
                    <h2 className="section-title">Document Upload</h2>
                </div>

                <div className="info-banner compact">
                    <InfoIcon />
                    <span>Max 4 documents, each ≤ 1 MB. Accepted: PDF, JPG, PNG</span>
                </div>

                <div className="field-group">
                    <label className="field-label">Document Title</label>
                    <select className="field-input field-select" id="acad-doc-title" style={{ maxWidth: '50%' }}>
                        <option value="">Select Title</option>
                        <option value="Marksheet">Marksheet</option>
                        <option value="Certificate">Certificate</option>
                        <option value="Transcript">Transcript</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className={`file-drop-zone ${dragActive ? 'drag-active' : ''} ${selectedFile ? 'has-file' : ''}`}
                    onDragEnter={handleDrag} onDragOver={handleDrag} onDragLeave={handleDrag} onDrop={handleDrop}
                    onClick={() => fileRef.current?.click()}>
                    <input type="file" ref={fileRef} onChange={(e) => { if (e.target.files[0]) setSelectedFile(e.target.files[0]); }} style={{ display: 'none' }} accept=".pdf,.jpg,.jpeg,.png" />
                    {selectedFile ? (
                        <div className="file-selected">
                            <FileIcon /><span>{selectedFile.name}</span>
                            <button className="file-remove-btn" onClick={(e) => { e.stopPropagation(); setSelectedFile(null); }}><XIcon /></button>
                        </div>
                    ) : (
                        <div className="file-drop-content"><UploadIcon /><p><strong>Click to upload</strong> or drag and drop</p><span className="file-hint">PDF, JPG, PNG (max 1 MB)</span></div>
                    )}
                </div>

                <div style={{ marginTop: '12px' }}>
                    <button className="btn-add small" onClick={handleAddDoc}><PlusIcon /> ADD</button>
                </div>

                {/* Uploaded docs table */}
                <div className="data-table-wrapper" style={{ marginTop: '16px' }}>
                    <table className="data-table">
                        <thead><tr><th>Title</th><th>File Name</th><th>Action</th></tr></thead>
                        <tbody>
                            {uploadedDocs.length === 0 ? (
                                <tr><td colSpan="3" className="empty-row">No record found</td></tr>
                            ) : uploadedDocs.map((d, i) => (
                                <tr key={i}><td>{d.title}</td><td>{d.fileName}</td>
                                    <td><button className="action-btn danger" onClick={() => setUploadedDocs(uploadedDocs.filter((_, idx) => idx !== i))}><TrashIcon /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="form-actions">
                <button className="btn-verify" onClick={onCancel}>Cancel</button>
                <button className="btn-save" onClick={handleFinalSave}>Save</button>
            </div>
        </div>
    );
};
/* ═══════════════════════════════════════════════
   PAGE: Admission Listing
   ═══════════════════════════════════════════════ */
export const AdmissionListingPage = ({ applications = [], profileData = {}, academicRecords = [], documents = [], onCreateNew }) => {
    const [viewApp, setViewApp] = useState(null);
    
    const isPersonalComplete = Boolean(profileData.firstName && profileData.fatherName && profileData.cnic);
    const isResidenceComplete = Boolean(profileData.residence && (profileData.residence['perm-address'] || profileData.residence.address || profileData.residence.sameAsPermanent));
    const isEmergencyComplete = Boolean(profileData.emergency && profileData.emergency.name && profileData.emergency.phone);
    const isGuardianComplete = Boolean(profileData.guardian && profileData.guardian.name && profileData.guardian.relation);
    const isDocsComplete = documents && documents.length > 0;
    
    const hasSSC = academicRecords && academicRecords.some(r => r.qualification && (r.qualification.toLowerCase().includes('ssc') || r.qualification.toLowerCase().includes('matric') || r.qualification.toLowerCase().includes('10') || r.qualification.toLowerCase().includes('o level')));
    const hasHSSC = academicRecords && academicRecords.some(r => r.qualification && (r.qualification.toLowerCase().includes('hssc') || r.qualification.toLowerCase().includes('fsc') || r.qualification.toLowerCase().includes('inter') || r.qualification.toLowerCase().includes('ics') || r.qualification.toLowerCase().includes('a level')));

    const checklistItems = [
        { label: 'Personal Details', status: isPersonalComplete ? 'completed' : 'pending' },
        { label: 'Residence Details', status: isResidenceComplete ? 'completed' : 'pending' },
        { label: 'Emergency Contact', status: isEmergencyComplete ? 'completed' : 'pending' },
        { label: 'Guardian Details', status: isGuardianComplete ? 'completed' : 'pending' },
        { label: 'Personal Documents', status: isDocsComplete ? 'completed' : 'pending' },
        { label: 'SSC / Matric / O-Level', status: hasSSC ? 'completed' : 'pending' },
        { label: 'HSSC / Inter / A-Level', status: hasHSSC ? 'completed' : 'pending' },
    ];
    
    const completionPercentage = Math.round((checklistItems.filter(i => i.status === 'completed').length / checklistItems.length) * 100);

    return (
        <div className="page-container fade-in">
            <div className="page-header-minimal">
                <div className="breadcrumb-minimal">DASHBOARD &gt; ADMISSION MANAGEMENT &gt; APPLICATIONS</div>
                <h1 className="page-title-minimal">Admission Management</h1>
            </div>

            {/* Checklist Section */}
            <div className="form-card" style={{ padding: '0', overflow: 'hidden' }}>
                <div style={{ background: 'linear-gradient(90deg, #1e293b 0%, #334155 100%)', padding: '20px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.15)', padding: '8px', borderRadius: '8px' }}>
                            <CheckIcon size={24} color="#fff" />
                        </div>
                        <div>
                            <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '600' }}>Profile Completion</h2>
                            <p style={{ margin: '4px 0 0', opacity: 0.8, fontSize: '0.85rem' }}>Complete all sections off your profile to proceed smoothly</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{completionPercentage}%</span>
                        <div style={{ width: '120px', height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px', marginTop: '6px', overflow: 'hidden' }}>
                            <div style={{ width: `${completionPercentage}%`, height: '100%', background: '#10b981', transition: 'width 0.5s ease-out' }}></div>
                        </div>
                    </div>
                </div>
                
                <div style={{ padding: '25px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px' }}>
                    {checklistItems.map((item, i) => (
                        <div key={i} style={{ 
                            display: 'flex', alignItems: 'center', padding: '16px', borderRadius: '12px',
                            background: item.status === 'completed' ? '#f0fdf4' : '#f8fafc',
                            border: `1px solid ${item.status === 'completed' ? '#bbf7d0' : '#e2e8f0'}`,
                            boxShadow: item.status === 'completed' ? '0 4px 6px -1px rgba(22, 163, 74, 0.05)' : 'none',
                            transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'default'
                        }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)' }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}>
                            <div style={{ 
                                marginRight: '15px', color: item.status === 'completed' ? '#16a34a' : '#94a3b8', 
                                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                                width: '38px', height: '38px', borderRadius: '50%', 
                                background: item.status === 'completed' ? '#dcfce7' : '#f1f5f9' 
                            }}>
                                {item.status === 'completed' ? <CheckIcon size={20} /> : <AlertCircleIcon size={20} />}
                            </div>
                            <div style={{ flex: 1 }}>
                                <span style={{ display: 'block', fontWeight: '600', color: '#1e293b', fontSize: '0.95rem', marginBottom: '2px' }}>{item.label}</span>
                                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: item.status === 'completed' ? '#16a34a' : '#64748b', letterSpacing: '0.5px' }}>
                                    {item.status === 'completed' ? 'VERIFIED' : 'PENDING'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Applications Table */}
            <div className="form-card">
                <div className="table-toolbar">
                    <h2 className="section-title" style={{ margin: 0 }}>My Applications</h2>
                    <button className="btn-add" onClick={onCreateNew}>
                        <PlusIcon /> <span>Create New Application</span>
                    </button>
                </div>
                <div className="data-table-wrapper">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Sr#</th>
                                <th>App No</th>
                                <th>App Type</th>
                                <th>Submission Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="empty-row">No application found. Click "Create New Application" to start.</td>
                                </tr>
                            ) : applications.map((app, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{app.appNo}</td>
                                    <td>{app.appType}</td>
                                    <td>{app.date}</td>
                                    <td><span className="status-badge success">{app.status}</span></td>
                                    <td><button className="btn-verify compact" onClick={() => setViewApp(app)}>View</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Application Detail View Modal */}
            {viewApp && (
                <div className="modal-overlay" style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(15, 23, 42, 0.5)' }}>
                    <div className="modal-content glass-modal fade-up" style={{ maxWidth: '600px', width: '90%', padding: '0', overflow: 'hidden', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.4)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                        <div style={{ background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', padding: '25px 30px', color: 'white', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div>
                                <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px' }}><ClipboardIcon color="#cbd5e1" /> Application Detail</h3>
                                <p style={{ margin: '5px 0 0', opacity: 0.8, fontSize: '0.95rem' }}>{viewApp.appNo}</p>
                            </div>
                            <button className="close-btn" style={{ color: 'rgba(255,255,255,0.7)', background: 'transparent', border: 'none', cursor: 'pointer', padding: '5px' }} onClick={() => setViewApp(null)}><XIcon size={24} /></button>
                        </div>
                        
                        <div style={{ padding: '30px', background: 'var(--white)' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #e2e8f0' }}>
                                <div>
                                    <span style={{ display: 'block', color: '#64748b', fontSize: '0.85rem', marginBottom: '5px' }}>Application Type</span>
                                    <span style={{ fontWeight: '600', color: '#1e293b' }}>{viewApp.appType}</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', color: '#64748b', fontSize: '0.85rem', marginBottom: '5px' }}>Submission Date</span>
                                    <span style={{ fontWeight: '600', color: '#1e293b' }}>{viewApp.date}</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', color: '#64748b', fontSize: '0.85rem', marginBottom: '5px' }}>Status</span>
                                    <span style={{ display: 'inline-block', background: '#dcfce7', color: '#16a34a', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>{viewApp.status}</span>
                                </div>
                            </div>

                            <h4 style={{ margin: '0 0 15px 0', color: '#1e293b', fontSize: '1.1rem' }}>Program Preferences</h4>
                            
                            {viewApp.preferences && viewApp.preferences.length > 0 ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {viewApp.preferences.map((pref, idx) => (
                                        <div key={idx} style={{ padding: '15px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                                <div style={{ background: '#3B5BDB', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.9rem', flexShrink: 0 }}>
                                                    {pref.sr}
                                                </div>
                                                <div>
                                                    <div style={{ fontWeight: '600', color: '#1e293b', marginBottom: '2px' }}>{pref.program}</div>
                                                    <div style={{ color: '#64748b', fontSize: '0.85rem' }}>{pref.department}</div>
                                                </div>
                                            </div>
                                            <span style={{ background: '#fef3c7', color: '#d97706', padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                                {pref.preference}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p style={{ color: '#64748b', fontSize: '0.95rem' }}>No preferences recorded.</p>
                            )}
                        </div>
                        
                        <div style={{ padding: '20px 30px', background: '#f8fafc', display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid #e2e8f0' }}>
                            <button className="btn-save" onClick={() => setViewApp(null)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

/* ═══════════════════════════════════════════════
   PAGE: New Application (Tabs)
   ═══════════════════════════════════════════════ */
export const AdmissionFormPage = ({ onCancel, onSubmitApplication }) => {
    const [activeTab, setActiveTab] = useState('detail');
    const [appType, setAppType] = useState('Regular');
    const [preferences, setPreferences] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [pendingPref, setPendingPref] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const [formData, setFormData] = useState({
        program: '',
        preference: ''
    });

    const handleAddClick = () => {
        if (!formData.program || !formData.preference) return;
        setPendingPref({
            program: formData.program,
            preference: formData.preference,
            department: 'Faculty of Computing & Information Technology'
        });
        setShowModal(true);
    };

    const handleSubmitApplication = () => {
        const newApp = {
            appNo: "APP-2026-" + Math.floor(1000 + Math.random() * 9000),
            appType: appType,
            date: new Date().toLocaleDateString('en-GB'),
            status: 'Submitted',
            preferences: preferences
        };
        if (onSubmitApplication) onSubmitApplication(newApp);
        setShowSuccessModal(true);
    };

    const confirmPreference = () => {
        setPreferences([...preferences, { ...pendingPref, sr: preferences.length + 1 }]);
        setShowModal(false);
        setFormData({ program: '', preference: '' });
        
        // Show success toast
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const removePreference = (idx) => {
        const newPrefs = preferences.filter((_, i) => i !== idx).map((p, i) => ({ ...p, sr: i + 1 }));
        setPreferences(newPrefs);
    };

    return (
        <div className="page-container fade-in">
            <div className="page-header-minimal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <div className="breadcrumb-minimal">DASHBOARD &gt; ADMISSION &gt; NEW APPLICATION</div>
                    <h1 className="page-title-minimal">Create Application</h1>
                </div>
                <button className="btn-verify" onClick={onCancel} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ArrowRightIcon /> Back to List
                </button>
            </div>

            {/* Internal Tabs */}
            <div style={{ display: 'flex', background: '#f8fafc', padding: '6px', borderRadius: '12px', width: 'fit-content', gap: '8px', marginBottom: '25px', border: '1px solid #e2e8f0', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)' }}>
                <button 
                    style={{ 
                        flex: 1, padding: '12px 24px', borderRadius: '8px', border: 'none', fontSize: '0.95rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', 
                        background: activeTab === 'detail' ? '#ffffff' : 'transparent', 
                        color: activeTab === 'detail' ? '#3B5BDB' : '#64748b', 
                        boxShadow: activeTab === 'detail' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)' : 'none' 
                    }}
                    onClick={() => setActiveTab('detail')}
                >
                    Application Detail
                </button>
                <button 
                    style={{ 
                        flex: 1, padding: '12px 24px', borderRadius: '8px', border: 'none', fontSize: '0.95rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', 
                        background: activeTab === 'preferences' ? '#ffffff' : 'transparent', 
                        color: activeTab === 'preferences' ? '#3B5BDB' : '#64748b', 
                        boxShadow: activeTab === 'preferences' ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)' : 'none' 
                    }}
                    onClick={() => setActiveTab('preferences')}
                >
                    Program Preferences
                </button>
            </div>

            {/* Tab: Detail */}
            {activeTab === 'detail' && (
                <div className="form-card fade-in">
                    <div className="two-column-grid">
                        <div className="field-group">
                            <label className="field-label">Application Number</label>
                            <input type="text" className="field-input" value="APP-2026-0043" readOnly style={{ background: '#f8fafc', color: '#64748b' }} />
                        </div>
                        <div className="field-group">
                            <label className="field-label">Admission Type <span className="required">*</span></label>
                            <select className="field-input field-select" value={appType} onChange={(e) => setAppType(e.target.value)}>
                                <option value="Regular">Regular</option>
                                <option value="Lateral">Lateral (Semester 5)</option>
                                <option value="Migration">Migration</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}

            {/* Tab: Preferences */}
            {activeTab === 'preferences' && (
                <div className="form-card fade-in">
                    <div className="two-column-grid">
                        <div className="field-group">
                            <label className="field-label">Pick a Program <span className="required">*</span></label>
                            <select 
                                className="field-input field-select" 
                                value={formData.program}
                                onChange={(e) => setFormData({...formData, program: e.target.value})}
                            >
                                <option value="">Select Program</option>
                                <option value="BS Computer Science">BS Computer Science</option>
                                <option value="BS Software Engineering">BS Software Engineering</option>
                                <option value="BS Information Technology">BS Information Technology</option>
                                <option value="BS Data Science">BS Data Science</option>
                                <option value="BS Artificial Intelligence">BS Artificial Intelligence</option>
                                <option value="BS Cyber Security">BS Cyber Security</option>
                                <option value="BS Business Administration">BS Business Administration</option>
                                <option value="BS Media Studies">BS Media Studies</option>
                                <option value="BS Psychology">BS Psychology</option>
                                <option value="BS English">BS English</option>
                            </select>
                        </div>
                        <div className="field-group">
                            <label className="field-label">Pick a Preference <span className="required">*</span></label>
                            <select 
                                className="field-input field-select"
                                value={formData.preference}
                                onChange={(e) => setFormData({...formData, preference: e.target.value})}
                            >
                                <option value="">Select Preference</option>
                                <option value="1st Preference">1st Preference</option>
                                <option value="2nd Preference">2nd Preference</option>
                                <option value="3rd Preference">3rd Preference</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ marginBottom: '25px', display: 'flex', gap: '12px' }}>
                        <button 
                            className="btn-add" 
                            disabled={!formData.program || !formData.preference}
                            onClick={handleAddClick}
                        >
                            <PlusIcon /> <span>ADD</span>
                        </button>
                        <button 
                            className="btn-ai-recommend"
                            onClick={() => alert("AI Recommendation feature is coming soon!")}
                            title="Get AI-powered degree suggestions based on your profile"
                        >
                            <SparklesIcon size={16} /> <span>AI Degree Recommendation</span>
                        </button>
                    </div>

                    <div className="data-table-wrapper">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Sr#</th>
                                    <th>Department</th>
                                    <th>Program</th>
                                    <th>Preference</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {preferences.length === 0 ? (
                                    <tr><td colSpan="5" className="empty-row">No preference added.</td></tr>
                                ) : preferences.map((p, i) => (
                                    <tr key={i}>
                                        <td>{p.sr}</td>
                                        <td>{p.department}</td>
                                        <td>{p.program}</td>
                                        <td><span className="pref-badge">{p.preference}</span></td>
                                        <td><button className="action-btn danger" onClick={() => removePreference(i)}><TrashIcon /></button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            <div className="form-actions" style={{ marginTop: '30px' }}>
                <button className="btn-verify" onClick={onCancel}>Cancel</button>
                {activeTab === 'detail' ? (
                    <button className="btn-update" onClick={() => alert("Application details updated successfully!")}>Update Detail</button>
                ) : (
                    <button 
                        className="btn-save" 
                        disabled={preferences.length === 0}
                        onClick={handleSubmitApplication}
                    >
                        Submit Application
                    </button>
                )}
            </div>

            {/* Success Toast */}
            {showToast && (
                <div className="toast success fade-in-up">
                    <CheckIcon />
                    <span>Program preference added successfully!</span>
                </div>
            )}

            {/* Success Submission Modal */}
            {showSuccessModal && (
                <div className="modal-overlay">
                    <div className="modal-content glass-modal fade-up" style={{ textAlign: 'center', padding: '40px' }}>
                        <div className="success-icon-large fade-in">
                            <CheckIcon size={48} />
                        </div>
                        <h2 style={{ color: '#1e293b', marginBottom: '10px' }}>Application Submitted!</h2>
                        <p style={{ color: '#64748b', marginBottom: '30px' }}>Your admission application has been successfully submitted for processing. You can track your status in the application list.</p>
                        <button className="btn-primary" onClick={onCancel} style={{ width: '100%' }}>View My Applications</button>
                    </div>
                </div>
            )}

            {/* Preference Confirmation Modal */}
            {showModal && (
                <div className="modal-overlay" style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(15, 23, 42, 0.4)' }}>
                    <div className="modal-content glass-modal fade-up" style={{ maxWidth: '420px', padding: '0', overflow: 'hidden', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.4)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                        <div style={{ background: 'linear-gradient(135deg, #3B5BDB 0%, #2563EB 100%)', padding: '25px 20px', textAlign: 'center', color: 'white', position: 'relative' }}>
                            <button className="close-btn" style={{ position: 'absolute', top: '15px', right: '15px', color: 'rgba(255,255,255,0.7)', background: 'transparent', border: 'none', cursor: 'pointer' }} onClick={() => setShowModal(false)}><XIcon /></button>
                            <div style={{ background: 'rgba(255,255,255,0.2)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', backdropFilter: 'blur(4px)' }}>
                                <CheckIcon size={32} />
                            </div>
                            <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '600' }}>Confirm Selection</h3>
                            <p style={{ margin: '8px 0 0', opacity: 0.9, fontSize: '0.9rem' }}>Please review your program preference</p>
                        </div>
                        <div style={{ padding: '25px 30px', background: 'var(--white)' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px', borderBottom: '1px dashed #e2e8f0' }}>
                                    <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Department</span>
                                    <span style={{ fontWeight: '600', color: '#1e293b', textAlign: 'right', maxWidth: '60%' }}>{pendingPref?.department}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px', borderBottom: '1px dashed #e2e8f0' }}>
                                    <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Selected Program</span>
                                    <span style={{ fontWeight: '700', color: '#3B5BDB', textAlign: 'right', maxWidth: '60%' }}>{pendingPref?.program}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Preference Order</span>
                                    <span style={{ background: '#fef3c7', color: '#d97706', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>{pendingPref?.preference}</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '20px 30px 30px', background: 'var(--white)', display: 'flex', gap: '15px' }}>
                            <button style={{ flex: 1, padding: '12px', background: '#f1f5f9', color: '#64748b', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s' }} onClick={() => setShowModal(false)} onMouseOver={(e) => {e.currentTarget.style.background = '#e2e8f0'; e.currentTarget.style.color = '#1e293b';}} onMouseOut={(e) => {e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#64748b';}}>Cancel</button>
                            <button style={{ flex: 1, padding: '12px', background: '#3B5BDB', color: '#ffffff', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(59, 91, 219, 0.3)' }} onClick={confirmPreference} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>Confirm & Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

/* ═══════════════════════════════════════════════
   PAGE: Change Password
   ═══════════════════════════════════════════════ */
export const ChangePasswordPage = () => {
    return (
        <div className="page-container fade-in">
            <div className="page-header-minimal">
                <div className="breadcrumb-minimal">DASHBOARD &gt; SETTINGS &gt; RESET PASSWORD</div>
                <h1 className="page-title-minimal">Reset to your password</h1>
            </div>

            <div className="form-card" style={{ maxWidth: '500px' }}>
                <div className="section-header">
                    <div className="section-header-icon"><LockIcon /></div>
                    <h2 className="section-title">Update Your Password</h2>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px' }}>
                    Choose a strong password with at least 8 characters, including letters, numbers, and symbols.
                </p>

                <div className="field-group">
                    <label className="field-label">Current Password <span className="required">*</span></label>
                    <input type="password" placeholder="••••••••" className="field-input" />
                </div>
                <div className="field-group">
                    <label className="field-label">New Password <span className="required">*</span></label>
                    <input type="password" placeholder="••••••••" className="field-input" />
                </div>
                <div className="field-group">
                    <label className="field-label">Confirm New Password <span className="required">*</span></label>
                    <input type="password" placeholder="••••••••" className="field-input" />
                </div>

                <div className="form-actions" style={{ marginTop: '20px' }}>
                    <button className="btn-save" onClick={() => alert("Password updated successfully!")}>Update Password</button>
                </div>
            </div>
        </div>
    );
};

/* ═══════════════════════════════════════════════
   PAGE: Student Dashboard (Home)
   ═══════════════════════════════════════════════ */
export const DashboardHomePage = ({ onNavigate, studentName }) => {
    const stats = [
        { label: 'Registration Status', value: 'Verified Student', icon: <CheckIcon />, color: '#10b981', bg: '#f0fdf4' },
        { label: 'Profile Completion', value: '75%', icon: <UserIcon size={20} />, color: '#3b82f6', bg: '#eff6ff', progress: 75 },
        { label: 'Active Applications', value: '01', icon: <ClipboardIcon />, color: '#f59e0b', bg: '#fffbeb' },
        { label: 'Documents Uploaded', value: '02 / 04', icon: <FileIcon />, color: '#8b5cf6', bg: '#f5f3ff' },
    ];

    const notifications = [
        { title: 'Welcome to Campus 360!', time: '2 mins ago', type: 'info' },
        { title: 'Complete your profile to start applications.', time: '1 hour ago', type: 'alert' },
    ];

    return (
        <div className="home-dashboard fade-in">
            {/* Welcome Banner */}
            <div className="welcome-banner fade-up">
                <div className="welcome-text">
                    <h1>Welcome, <span className="highlight-text-welcome">{studentName || 'Student'}</span> 👋</h1>
                    <p>Track your student portal status and upcoming admission activities from this personalized dashboard.</p>
                </div>
                <div className="welcome-action">
                    <button className="btn-add" onClick={() => onNavigate('profile')}>
                        <PlusIcon /> <span>Apply Now</span>
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                {stats.map((stat, i) => (
                    <div key={i} className="stat-card fade-up" style={{ animationDelay: `${0.1 * (i + 1)}s` }}>
                        <div className="stat-header">
                            <div className="stat-icon-wrapper" style={{ backgroundColor: stat.bg, color: stat.color }}>
                                {stat.icon}
                            </div>
                            <div className="stat-info">
                                <span className="stat-label">{stat.label}</span>
                                <h3 className="stat-value">{stat.value}</h3>
                            </div>
                        </div>
                        {stat.progress !== undefined && (
                            <div className="stat-progress-container">
                                <div className="stat-progress-bar" style={{ width: `${stat.progress}%`, backgroundColor: stat.color }}></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="home-content-bottom">
                {/* Recent Activity / Notifications */}
                <div className="home-section activity-section fade-up" style={{ animationDelay: '0.4s' }}>
                    <div className="section-header">
                        <div className="section-header-icon"><BellIcon /></div>
                        <h2 className="section-title">Latest Notifications</h2>
                    </div>
                    <div className="notification-list">
                        {notifications.map((notif, i) => (
                            <div key={i} className="notification-item">
                                <div className={`notif-dot ${notif.type}`}></div>
                                <div className="notif-content">
                                    <span className="notif-title">{notif.title}</span>
                                    <span className="notif-time">{notif.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions / Getting Started */}
                <div className="home-section quick-links-section fade-up" style={{ animationDelay: '0.5s' }}>
                    <div className="section-header">
                        <div className="section-header-icon"><ArrowRightIcon /></div>
                        <h2 className="section-title">Quick Actions</h2>
                    </div>
                    <div className="quick-links-grid">
                        <button className="quick-link-btn" onClick={() => onNavigate('profile')}>
                            <div className="quick-link-icon"><UserIcon size={20} /></div>
                            <span>Complete Profile</span>
                        </button>
                        <button className="quick-link-btn" onClick={() => onNavigate('application-list')}>
                            <div className="quick-link-icon"><FileIcon /></div>
                            <span>My Applications</span>
                        </button>
                        <button className="quick-link-btn" onClick={() => onNavigate('academic-info')}>
                            <div className="quick-link-icon"><BookIcon size={20}/></div>
                            <span>Academic Information</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
