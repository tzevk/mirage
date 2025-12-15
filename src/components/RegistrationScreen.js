import { useState, useRef } from 'react';
import styles from './RegistrationScreen.module.css';
import Image from 'next/image';

const DOMAIN_OPTIONS = [
  'Mechanical Engineering',
  'Civil Engineering',
  'Electrical Engineering',
  'Electronics & Communication',
  'Chemical Engineering',
  'Metallurgical Engineering',
  'Aerospace Engineering',
  'Automobile Engineering',
  'Production Engineering',
  'Industrial Engineering',
  'Instrumentation Engineering',
  'Mining Engineering',
  'Petroleum Engineering',
  'Marine Engineering',
  'Structural Engineering',
  'Other Core Branch'
];

const SKILL_OPTIONS = [
  'AutoCAD', 'SolidWorks', 'CATIA', 'ANSYS', 'MATLAB',
  'Creo/Pro-E', 'Revit', 'STAAD Pro', 'PLC/SCADA',
  'CNC Programming', 'GD&T', '3D Printing',
  'Six Sigma', 'Lean Manufacturing', 'Quality Control',
  'MS Excel', 'Technical Drawing', 'Project Management'
];

export default function RegistrationScreen({ onRegister }) {
  const [step, setStep] = useState(1);
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    specialization: '',
    passingYear: '',
    preferredDomain: '',
    willingToRelocate: '',
    skills: [],
    tools: '',
    resume: null,
    consent: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSkillToggle = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setErrors(prev => ({ ...prev, resume: 'Only PDF files are allowed' }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, resume: 'File size must be under 5MB' }));
        return;
      }
      setFormData(prev => ({ ...prev, resume: file }));
      setErrors(prev => ({ ...prev, resume: '' }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number';
    }
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.specialization.trim()) newErrors.specialization = 'Specialization is required';
    if (!formData.passingYear) newErrors.passingYear = 'Year of passing is required';
    if (!formData.preferredDomain) newErrors.preferredDomain = 'Please select a domain';
    if (!formData.willingToRelocate) newErrors.willingToRelocate = 'Please select an option';
    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.consent) newErrors.consent = 'Please provide consent to continue';
    return newErrors;
  };

  const handleNext = () => {
    const newErrors = validateStep1();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateStep2();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Prepare form data for API (excluding file for now)
      const submitData = {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        city: formData.city,
        specialization: formData.specialization,
        passingYear: formData.passingYear,
        preferredDomain: formData.preferredDomain,
        willingToRelocate: formData.willingToRelocate,
        skills: formData.skills,
        tools: formData.tools,
        hasResume: !!formData.resume,
        resumeName: formData.resume?.name || null,
        consent: formData.consent
      };

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsRegistered(true);
        // Auto-proceed after showing confirmation
        setTimeout(() => {
          onRegister({ ...submitData, userId: data.userId });
        }, 2500);
      } else {
        setErrors({ submit: data.error || 'Registration failed' });
      }
    } catch (error) {
      setErrors({ submit: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Confirmation Screen
  if (isRegistered) {
    return (
      <div className={styles.container}>
        <div className={styles.confirmationContent}>
          <div className={styles.checkmarkCircle}>
            <svg viewBox="0 0 52 52" className={styles.checkmark}>
              <circle className={styles.checkmarkCircleBg} cx="26" cy="26" r="25" fill="none"/>
              <path className={styles.checkmarkCheck} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </div>
          <h1 className={styles.confirmTitle}>You&apos;re Registered!</h1>
          <p className={styles.confirmSubtitle}>Enjoy the fair and discover your industry alignment.</p>
          <p className={styles.confirmNote}>Starting MIRAGE quiz...</p>
        </div>
      </div>
    );
  }

  const currentYear = new Date().getFullYear();
  const yearOptions = [];
  for (let y = currentYear - 2; y <= currentYear + 5; y++) {
    yearOptions.push(y);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image 
            src="/accent.png" 
            alt="MIRAGE Logo" 
            width={140} 
            height={86}
            className={styles.logo}
            priority
          />
        </div>
        <h1 className={styles.title}>MIRAGE</h1>
        <p className={styles.subtitle}>Quick Registration</p>

        {/* Progress Indicator */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: step === 1 ? '50%' : '100%' }}
            />
          </div>
          <div className={styles.progressSteps}>
            <span className={`${styles.progressStep} ${step >= 1 ? styles.active : ''}`}>1</span>
            <span className={`${styles.progressStep} ${step >= 2 ? styles.active : ''}`}>2</span>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {step === 1 && (
            <div className={styles.stepContent}>
              <div className={styles.twoColumns}>
                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="email">Email ID *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
              </div>

              <div className={styles.twoColumns}>
                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="mobile">Mobile Number *</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.mobile ? styles.inputError : ''}`}
                    placeholder="10-digit number"
                  />
                  {errors.mobile && <span className={styles.error}>{errors.mobile}</span>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="city">City / Location *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.city ? styles.inputError : ''}`}
                    placeholder="Current city"
                  />
                  {errors.city && <span className={styles.error}>{errors.city}</span>}
                </div>
              </div>

              <div className={styles.twoColumns}>
                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="specialization">Specialization / Branch *</label>
                  <input
                    type="text"
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.specialization ? styles.inputError : ''}`}
                    placeholder="e.g., Computer Science"
                  />
                  {errors.specialization && <span className={styles.error}>{errors.specialization}</span>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="passingYear">Year of Passing *</label>
                  <select
                    id="passingYear"
                    name="passingYear"
                    value={formData.passingYear}
                    onChange={handleChange}
                    className={`${styles.select} ${errors.passingYear ? styles.inputError : ''}`}
                  >
                    <option value="">Select year</option>
                    {yearOptions.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  {errors.passingYear && <span className={styles.error}>{errors.passingYear}</span>}
                </div>
              </div>

              <div className={styles.twoColumns}>
                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="preferredDomain">Preferred Domain *</label>
                  <select
                    id="preferredDomain"
                    name="preferredDomain"
                    value={formData.preferredDomain}
                    onChange={handleChange}
                    className={`${styles.select} ${errors.preferredDomain ? styles.inputError : ''}`}
                  >
                    <option value="">Select domain</option>
                    {DOMAIN_OPTIONS.map(domain => (
                      <option key={domain} value={domain}>{domain}</option>
                    ))}
                  </select>
                  {errors.preferredDomain && <span className={styles.error}>{errors.preferredDomain}</span>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Willing to Relocate? *</label>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="willingToRelocate"
                        value="yes"
                        checked={formData.willingToRelocate === 'yes'}
                        onChange={handleChange}
                        className={styles.radio}
                      />
                      <span className={styles.radioText}>Yes</span>
                    </label>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="willingToRelocate"
                        value="no"
                        checked={formData.willingToRelocate === 'no'}
                        onChange={handleChange}
                        className={styles.radio}
                      />
                      <span className={styles.radioText}>No</span>
                    </label>
                  </div>
                  {errors.willingToRelocate && <span className={styles.error}>{errors.willingToRelocate}</span>}
                </div>
              </div>

              <button type="button" className={styles.submitButton} onClick={handleNext}>
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div className={styles.stepContent}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Key Skills (Select all that apply)</label>
                <div className={styles.skillsGrid}>
                  {SKILL_OPTIONS.map(skill => (
                    <button
                      key={skill}
                      type="button"
                      className={`${styles.skillTag} ${formData.skills.includes(skill) ? styles.skillSelected : ''}`}
                      onClick={() => handleSkillToggle(skill)}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="tools">Software / Tools Known (Optional)</label>
                <input
                  type="text"
                  id="tools"
                  name="tools"
                  value={formData.tools}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="e.g., VS Code, Figma, SolidWorks"
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Resume Upload (Optional)</label>
                <div 
                  className={styles.fileUpload}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept=".pdf"
                    onChange={handleFileChange}
                    className={styles.fileInput}
                  />
                  <div className={styles.fileUploadContent}>
                    {formData.resume ? (
                      <span className={styles.fileName}>{formData.resume.name}</span>
                    ) : (
                      <>
                        <span className={styles.uploadIcon}>+</span>
                        <span>Click to upload PDF (Max 5MB)</span>
                      </>
                    )}
                  </div>
                </div>
                <p className={styles.optionalNote}>Optional - speeds up shortlisting</p>
                {errors.resume && <span className={styles.error}>{errors.resume}</span>}
              </div>

              <div className={styles.consentGroup}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className={styles.checkbox}
                  />
                  <span className={styles.checkboxText}>
                    I consent to my data being used for recruitment communication.
                  </span>
                </label>
                {errors.consent && <span className={styles.error}>{errors.consent}</span>}
              </div>

              {errors.submit && <div className={styles.submitError}>{errors.submit}</div>}

              <div className={styles.buttonRow}>
                <button type="button" className={styles.backButton} onClick={handleBack}>
                  Back
                </button>
                <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                  {isSubmitting ? 'Registering...' : 'Submit'}
                </button>
              </div>

              <p className={styles.reassurance}>
                We&apos;ll contact shortlisted candidates via email/phone.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
