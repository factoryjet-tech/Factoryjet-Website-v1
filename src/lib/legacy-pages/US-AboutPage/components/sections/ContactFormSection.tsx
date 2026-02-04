
import React, { useState, useEffect, useRef } from 'react';
import { Container, Section, Button } from '../ui/UIComponents';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Layout, Palette, Globe, ShoppingCart, 
  Activity, Search, PenTool, HelpCircle, User, Mail, Phone, 
  Building, ShieldCheck, Zap, ArrowRight, Loader2,
  AlertCircle, CheckCircle
} from 'lucide-react';
import { cn } from '../../lib/utils';

// --- TYPES & INTERFACES ---

type FormStep = 1 | 2 | 3 | 4 | 5 | 6; // 6 is Success State

interface FormData {
  services: string[];
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  projectDetails: string;
  consentCommunications: boolean;
  consentMarketing: boolean;
}

interface FormErrors {
  [key: string]: string;
}

// --- CONSTANTS ---

const SERVICE_OPTIONS = [
  { id: 'figma-webflow', title: 'Figma to Webflow', price: 'Starting at $1,999', icon: Layout },
  { id: 'custom-design', title: 'Custom Design & Build', price: 'Starting at $4,999', icon: Palette },
  { id: 'cms-dev', title: 'CMS Development', price: 'Starting at $2,999', icon: Globe },
  { id: 'ecommerce', title: 'E-Commerce', price: 'Starting at $7,999', icon: ShoppingCart },
  { id: 'animations', title: 'Interactions/Animations', price: 'Starting at $999', icon: Activity },
  { id: 'seo', title: 'SEO & AI Visibility', price: 'Starting at $1,499', icon: Search },
  { id: 'maintenance', title: 'Website Maintenance', price: '$99/mo', icon: PenTool },
  { id: 'consultation', title: 'Not Sure / Consultation', price: 'Free Strategy Call', icon: HelpCircle },
];

const STEP_TITLES = [
  "Service Selection",
  "Contact Info",
  "Company Info",
  "Project Details",
  "Review & Submit"
];

// --- COMPONENTS ---

const ProgressBar = ({ currentStep }: { currentStep: FormStep }) => {
  // We don't show progress bar on success step (6)
  if (currentStep === 6) return null;

  const progressPercentage = Math.min((currentStep / 5) * 100, 100);

  return (
    <div className="mb-12 relative w-full px-4 md:px-0">
      {/* Track */}
      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
        <motion.div 
          className="h-full bg-gradient-to-r from-jetBlue to-jetGreen rounded-full shadow-[0_0_12px_rgba(0,82,204,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      
      {/* Steps Dots */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between px-4 md:px-0">
        {[1, 2, 3, 4, 5].map((step) => {
          const isCompleted = step < currentStep;
          const isActive = step === currentStep;
          
          return (
            <div key={step} className="relative flex flex-col items-center group">
              <motion.div 
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-[3px] transition-colors duration-300 z-10",
                  isCompleted || isActive 
                    ? "bg-jetBlue border-jetBlue text-white shadow-lg" 
                    : "bg-white border-slate-200 text-slate-400"
                )}
                initial={false}
                animate={{ scale: isActive ? 1.1 : 1 }}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : step}
              </motion.div>
              
              {/* Desktop Labels */}
              <span className={cn(
                "hidden md:block absolute top-10 text-[11px] font-medium transition-colors duration-300 whitespace-nowrap",
                isActive ? "text-jetBlue" : "text-slate-400"
              )}>
                {STEP_TITLES[step-1]}
              </span>
            </div>
          );
        })}
      </div>
      
      {/* Mobile Step Label */}
      <div className="md:hidden text-center mt-6 text-jetBlue font-semibold text-sm">
        Step {currentStep} of 5: {STEP_TITLES[currentStep-1]}
      </div>
    </div>
  );
};

const InputField = ({ 
  label, 
  name, 
  value, 
  onChange, 
  onBlur, 
  error, 
  type = "text", 
  placeholder, 
  icon: Icon,
  required = true
}: any) => (
  <div className="mb-6 relative">
    <label className="block text-sm font-bold text-navy mb-2">
      {label} {required && <span className="text-jetOrange">*</span>}
    </label>
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={cn(
          "w-full bg-white border-2 rounded-xl py-4 pl-5 pr-12 text-base text-navy placeholder:text-slate-400 outline-none transition-all duration-300",
          error 
            ? "border-red-500 focus:shadow-[0_0_0_4px_rgba(220,38,38,0.1)]" 
            : value && !error 
              ? "border-jetGreen focus:border-jetGreen" 
              : "border-slate-200 focus:border-jetBlue focus:shadow-[0_0_0_4px_rgba(0,82,204,0.1)]"
        )}
      />
      
      {/* Right Icon Status */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        {error ? (
          <AlertCircle className="w-5 h-5 text-red-500" />
        ) : value ? (
          <Check className="w-5 h-5 text-jetGreen" strokeWidth={3} />
        ) : Icon ? (
          <Icon className="w-5 h-5 text-slate-300" />
        ) : null}
      </div>
    </div>
    
    <AnimatePresence>
      {error && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="text-red-500 text-[13px] font-medium mt-2 flex items-center gap-1.5 overflow-hidden"
        >
          <AlertCircle className="w-3.5 h-3.5" /> {error}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// --- MAIN SECTION COMPONENT ---

export default function ContactFormSection() {
  const [step, setStep] = useState<FormStep>(1);
  const [direction, setDirection] = useState(0); // 1 for forward, -1 for back
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    services: [],
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    projectDetails: '',
    consentCommunications: false,
    consentMarketing: false
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Scroll to top of form when step changes
  const formTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step > 1 && formTopRef.current) {
        // Only subtle scroll adjustment if needed on mobile
        const yOffset = -100; 
        const element = formTopRef.current;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
  }, [step]);

  // --- HANDLERS ---

  const handleServiceToggle = (id: string) => {
    setFormData(prev => {
      const exists = prev.services.includes(id);
      let newServices;
      if (exists) {
        newServices = prev.services.filter(s => s !== id);
      } else {
        newServices = [...prev.services, id];
      }
      return { ...prev, services: newServices };
    });

    // Auto-advance logic if picking first service
    // Use current state (closure) to check if we should auto-advance
    if (formData.services.length === 0 && !formData.services.includes(id)) {
      // Adding the first service
      setTimeout(() => {
        setStep(currentStep => {
          if (currentStep === 1) {
            setDirection(1);
            return 2;
          }
          return currentStep;
        });
      }, 800);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      // Phone masking
      if (name === 'phone') {
        const cleaned = value.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
        let formatted = value;
        if (match) {
          formatted = !match[2] ? match[1] : `(${match[1]}) ${match[2]}${match[3] ? `-${match[3]}` : ''}`;
        }
        setFormData(prev => ({ ...prev, [name]: formatted }));
      } else {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    }
    
    // Clear error on type
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (currentStep === 1) {
      if (formData.services.length === 0) {
        isValid = false;
      }
    }

    if (currentStep === 2) {
      if (!formData.fullName.trim() || !/^[a-zA-Z\s]{2,}$/.test(formData.fullName)) {
        newErrors.fullName = "Please enter your full name (at least 2 characters)";
        isValid = false;
      }
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
        isValid = false;
      }
    }

    if (currentStep === 3) {
      if (!formData.phone.trim() || formData.phone.length < 10) {
        newErrors.phone = "Please enter a valid phone number";
        isValid = false;
      }
      if (!formData.companyName.trim()) {
        newErrors.companyName = "Please enter your company name";
        isValid = false;
      }
    }

    if (currentStep === 4) {
      if (formData.projectDetails.length < 20) {
        newErrors.projectDetails = "Please provide at least 20 characters";
        isValid = false;
      }
    }

    if (currentStep === 5) {
      if (!formData.consentCommunications) {
        newErrors.consentCommunications = "Please accept terms to continue";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setDirection(1);
      setStep(prev => (prev + 1) as FormStep);
    }
  };

  const handleBack = () => {
    setDirection(-1);
    setStep(prev => (prev - 1) as FormStep);
  };

  const handleSubmit = async () => {
    if (validateStep(step)) {
      setIsSubmitting(true);
      
      // Simulate API Call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitting(false);
      setStep(6); // Success Step
    }
  };

  // --- RENDER HELPERS ---

  const stepVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0
    })
  };

  return (
    <Section id="contact-form" className="bg-gradient-to-b from-white to-[#F8FAFC] py-20 md:py-[140px]">
      <div ref={formTopRef} className="absolute -top-24" /> {/* Scroll Anchor */}
      
      <Container>
        {/* --- HEADER --- */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-jetOrange font-bold text-[13px] tracking-[0.12em] uppercase mb-3">
              Get Started
            </p>
            <h2 className="text-4xl md:text-[48px] font-bold text-navy mb-4 tracking-tight leading-tight">
              Let's Build Something Extraordinary Together
            </h2>
            <p className="text-[20px] text-slate-600 max-w-[600px] mx-auto">
              Tell us about your project. We'll respond within 2 hours with a custom proposal.
            </p>
          </motion.div>
        </div>

        {/* --- MAIN LAYOUT --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* --- LEFT: FORM CARD --- */}
          <div className="w-full lg:w-[60%]">
            <motion.div 
              className="bg-white rounded-3xl border-2 border-slate-100 shadow-[0_8px_32px_rgba(15,23,42,0.08)] p-6 md:p-12 min-h-[600px] relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* Progress Bar (Hidden on Success) */}
              <ProgressBar currentStep={step} />

              <div className="relative min-h-[400px]">
                <AnimatePresence custom={direction} mode="wait">
                  
                  {/* STEP 1: SERVICES */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      custom={direction}
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-3xl font-bold text-navy mb-8">What service are you interested in?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {SERVICE_OPTIONS.map((service) => {
                          const isSelected = formData.services.includes(service.id);
                          return (
                            <div 
                              key={service.id}
                              onClick={() => handleServiceToggle(service.id)}
                              className={cn(
                                "relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 group",
                                isSelected 
                                  ? "border-jetBlue bg-blue-50/50 shadow-[0_8px_24px_rgba(0,82,204,0.15)]" 
                                  : "border-slate-100 bg-white hover:border-jetBlue hover:-translate-y-1 hover:shadow-lg"
                              )}
                            >
                              {/* Selected Check */}
                              <div className={cn(
                                "absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300",
                                isSelected ? "bg-jetBlue scale-100" : "bg-slate-100 scale-0"
                              )}>
                                <Check className="w-4 h-4 text-white" />
                              </div>

                              <service.icon className={cn(
                                "w-8 h-8 mb-4 transition-colors",
                                isSelected ? "text-jetBlue" : "text-slate-400 group-hover:text-jetBlue"
                              )} />
                              <h4 className="font-bold text-navy text-lg mb-1">{service.title}</h4>
                              <p className="text-jetGreen font-semibold text-sm">{service.price}</p>
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Continue Button (only if something selected) */}
                      {formData.services.length > 0 && (
                        <div className="mt-8 flex justify-end">
                          <Button onClick={handleNext} withArrow>Continue</Button>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* STEP 2: CONTACT INFO */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      custom={direction}
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-3xl font-bold text-navy mb-8">How can we reach you?</h3>
                      <div className="space-y-6">
                        <InputField 
                          label="Full Name" 
                          name="fullName" 
                          value={formData.fullName} 
                          onChange={handleInputChange} 
                          error={errors.fullName}
                          placeholder="John Smith"
                          icon={User}
                        />
                        <InputField 
                          label="Email Address" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleInputChange} 
                          error={errors.email}
                          type="email"
                          placeholder="john@company.com"
                          icon={Mail}
                        />
                      </div>
                      <div className="mt-8 flex justify-between items-center">
                        <button onClick={handleBack} className="text-slate-500 font-medium hover:text-navy transition-colors">Back</button>
                        <Button 
                          onClick={handleNext} 
                          withArrow 
                          disabled={!formData.fullName || !formData.email}
                        >
                          Continue
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: COMPANY INFO */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      custom={direction}
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-3xl font-bold text-navy mb-8">Tell us about your company</h3>
                      <div className="space-y-6">
                        <InputField 
                          label="Phone Number" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleInputChange} 
                          error={errors.phone}
                          placeholder="(555) 123-4567"
                          type="tel"
                          icon={Phone}
                        />
                        <InputField 
                          label="Company Name" 
                          name="companyName" 
                          value={formData.companyName} 
                          onChange={handleInputChange} 
                          error={errors.companyName}
                          placeholder="Your company or startup name"
                          icon={Building}
                        />
                      </div>
                      <div className="mt-8 flex justify-between items-center">
                        <button onClick={handleBack} className="text-slate-500 font-medium hover:text-navy transition-colors">Back</button>
                        <Button 
                          onClick={handleNext} 
                          withArrow 
                          disabled={!formData.phone || !formData.companyName}
                        >
                          Continue
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4: PROJECT DETAILS */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      custom={direction}
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-3xl font-bold text-navy mb-3">Tell us about your project</h3>
                      <p className="text-slate-500 mb-8">The more details you share, the better we can help.</p>
                      
                      <div className="relative">
                         <label className="block text-sm font-bold text-navy mb-2">
                            Project Details / Message <span className="text-jetOrange">*</span>
                         </label>
                         <textarea
                           name="projectDetails"
                           value={formData.projectDetails}
                           onChange={handleInputChange}
                           className={cn(
                             "w-full h-[180px] bg-white border-2 rounded-xl p-5 text-base text-navy placeholder:text-slate-400 outline-none transition-all duration-300 resize-y",
                             errors.projectDetails 
                               ? "border-red-500 focus:shadow-[0_0_0_4px_rgba(220,38,38,0.1)]" 
                               : "border-slate-200 focus:border-jetBlue focus:shadow-[0_0_0_4px_rgba(0,82,204,0.1)]"
                           )}
                           placeholder={"Tell us about:\n• Your project goals\n• Timeline expectations\n• Budget range\n• Any specific requirements"}
                         />
                         <div className="flex justify-end mt-2">
                           <span className={cn("text-xs font-medium", 
                             formData.projectDetails.length < 20 ? "text-slate-400" : 
                             formData.projectDetails.length > 450 ? "text-jetGreen" : "text-slate-500"
                           )}>
                             {formData.projectDetails.length} / 500 characters
                           </span>
                         </div>
                         {errors.projectDetails && <p className="text-red-500 text-sm mt-1">{errors.projectDetails}</p>}
                      </div>

                      <div className="mt-8 flex justify-between items-center">
                        <button onClick={handleBack} className="text-slate-500 font-medium hover:text-navy transition-colors">Back</button>
                        <Button 
                          onClick={handleNext} 
                          withArrow 
                          disabled={formData.projectDetails.length < 20}
                        >
                          Review Details
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 5: REVIEW & SUBMIT */}
                  {step === 5 && (
                    <motion.div
                      key="step5"
                      custom={direction}
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-3xl font-bold text-navy mb-2">Review Your Information</h3>
                      <p className="text-slate-500 mb-8">Please verify your details before submitting.</p>

                      <div className="bg-slate-50 border-2 border-slate-100 rounded-2xl p-6 md:p-8 mb-8 space-y-6">
                        
                        {/* Summary: Services */}
                        <div className="pb-6 border-b border-slate-200">
                           <div className="flex justify-between items-center mb-2">
                             <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Services Interested In</h4>
                             <button onClick={() => setStep(1)} className="text-xs font-bold text-jetBlue hover:underline">Edit</button>
                           </div>
                           <div className="flex flex-wrap gap-2">
                             {formData.services.map(id => {
                               const s = SERVICE_OPTIONS.find(so => so.id === id);
                               return s ? (
                                 <span key={id} className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium text-navy">
                                   <Check className="w-3 h-3 text-jetBlue" /> {s.title}
                                 </span>
                               ) : null;
                             })}
                           </div>
                        </div>

                        {/* Summary: Contact */}
                        <div className="pb-6 border-b border-slate-200">
                           <div className="flex justify-between items-center mb-2">
                             <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Contact Info</h4>
                             <button onClick={() => setStep(2)} className="text-xs font-bold text-jetBlue hover:underline">Edit</button>
                           </div>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-navy">
                              <p><span className="text-slate-400">Name:</span> {formData.fullName}</p>
                              <p><span className="text-slate-400">Email:</span> {formData.email}</p>
                              <p><span className="text-slate-400">Phone:</span> {formData.phone}</p>
                              <p><span className="text-slate-400">Company:</span> {formData.companyName}</p>
                           </div>
                        </div>

                         {/* Summary: Project */}
                        <div>
                           <div className="flex justify-between items-center mb-2">
                             <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Project Details</h4>
                             <button onClick={() => setStep(4)} className="text-xs font-bold text-jetBlue hover:underline">Edit</button>
                           </div>
                           <p className="text-sm text-navy italic bg-white p-4 rounded-lg border border-slate-100">
                             "{formData.projectDetails}"
                           </p>
                        </div>
                      </div>

                      {/* Consent */}
                      <div className="mb-8">
                        <label className="flex items-start gap-3 cursor-pointer group">
                           <input 
                             type="checkbox" 
                             name="consentCommunications"
                             checked={formData.consentCommunications}
                             onChange={handleInputChange}
                             className="mt-1 w-5 h-5 rounded border-2 border-slate-300 text-jetBlue focus:ring-jetBlue cursor-pointer"
                           />
                           <span className="text-sm text-slate-600 leading-relaxed group-hover:text-navy transition-colors">
                             I agree to receive communications from FactoryJet about my project. You can unsubscribe anytime. <span className="text-jetOrange">*</span>
                             {errors.consentCommunications && <span className="block text-red-500 font-medium text-xs mt-1">{errors.consentCommunications}</span>}
                           </span>
                        </label>
                        <label className="flex items-start gap-3 mt-4 cursor-pointer group">
                           <input 
                             type="checkbox" 
                             name="consentMarketing"
                             checked={formData.consentMarketing}
                             onChange={handleInputChange}
                             className="mt-1 w-5 h-5 rounded border-2 border-slate-300 text-jetBlue focus:ring-jetBlue cursor-pointer"
                           />
                           <span className="text-sm text-slate-600 leading-relaxed group-hover:text-navy transition-colors">
                             Send me updates about Webflow tips, case studies, and special offers (optional)
                           </span>
                        </label>
                      </div>

                      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
                        <button onClick={handleBack} className="text-slate-500 font-medium hover:text-navy transition-colors">Back</button>
                        <button 
                          onClick={handleSubmit} 
                          disabled={isSubmitting}
                          className={cn(
                             "w-full md:w-auto py-4 px-8 bg-gradient-to-br from-jetOrange to-[#FF4500] text-white rounded-xl font-bold text-lg shadow-[0_8px_32px_rgba(255,107,53,0.35)] hover:shadow-[0_12px_40px_rgba(255,107,53,0.45)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3",
                             isSubmitting && "opacity-80 cursor-wait"
                          )}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                            </>
                          ) : (
                            <>
                              Submit Project Request <ArrowRight className="w-5 h-5" />
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 6: SUCCESS */}
                  {step === 6 && (
                    <motion.div
                       key="success"
                       initial={{ opacity: 0, scale: 0.9 }}
                       animate={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 0.5 }}
                       className="flex flex-col items-center text-center py-10"
                    >
                       <div className="w-24 h-24 rounded-full bg-jetGreen/10 flex items-center justify-center mb-8 relative">
                          <div className="absolute inset-0 rounded-full bg-jetGreen/20 animate-ping" />
                          <Check className="w-12 h-12 text-jetGreen" strokeWidth={4} />
                       </div>
                       
                       <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4">Thank You!</h3>
                       <p className="text-xl text-slate-600 mb-8 max-w-lg">
                         Your project request has been sent to our team. We've sent a confirmation email to <span className="font-semibold text-navy">{formData.email}</span>
                       </p>

                       <div className="bg-slate-50 rounded-xl p-6 max-w-md w-full mb-10 border border-slate-100">
                          <h4 className="font-bold text-navy mb-4 text-left">What happens next?</h4>
                          <div className="space-y-4">
                             <div className="flex items-start gap-3 text-left">
                                <span className="bg-jetBlue text-white text-[10px] font-bold px-2 py-1 rounded">NOW</span>
                                <span className="text-sm text-slate-600">Confirmation email sent to your inbox.</span>
                             </div>
                             <div className="flex items-start gap-3 text-left">
                                <span className="bg-jetBlue text-white text-[10px] font-bold px-2 py-1 rounded">2 HRS</span>
                                <span className="text-sm text-slate-600">Our team will review & send a custom proposal.</span>
                             </div>
                             <div className="flex items-start gap-3 text-left">
                                <span className="bg-jetBlue text-white text-[10px] font-bold px-2 py-1 rounded">24 HRS</span>
                                <span className="text-sm text-slate-600">Strategy call scheduled (if required).</span>
                             </div>
                          </div>
                       </div>

                       <div className="flex gap-4">
                          <Button onClick={() => window.location.reload()}>Return Home</Button>
                          <Button variant="secondary" onClick={() => document.getElementById('case-studies')?.scrollIntoView()}>View Our Work</Button>
                       </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT: INFO SIDEBAR --- */}
          <div className="w-full lg:w-[40%] hidden lg:block sticky top-[120px]">
            
            {/* Info Card 1: Why Us */}
            <div className="bg-gradient-to-br from-jetBlue to-[#0042A3] rounded-[20px] p-10 text-white shadow-[0_8px_32px_rgba(0,82,204,0.3)] mb-6 relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
               <h3 className="text-2xl font-bold mb-6 relative z-10">Why Choose FactoryJet?</h3>
               <ul className="space-y-4 relative z-10">
                 {[
                   "2-hour response guarantee",
                   "Custom proposal, not templates",
                   "Transparent, fixed pricing",
                   "30-day money-back guarantee",
                   "500+ successful projects"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3">
                     <CheckCircle className="w-5 h-5 text-jetGreen shrink-0" />
                     <span className="font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>

            {/* Info Card 2: Response Time */}
            <div className="bg-white border-2 border-slate-100 rounded-[20px] p-8 mb-6 shadow-sm">
               <Zap className="w-10 h-10 text-jetOrange mb-4" />
               <h4 className="text-lg font-bold text-navy mb-2">Lightning-Fast Response</h4>
               <p className="text-slate-600 text-sm leading-relaxed">
                 Our team reviews every submission personally. You'll hear from us within 2 business hours with a custom proposal tailored to your needs.
               </p>
            </div>

            {/* Info Card 3: Trust Stats */}
            <div className="bg-[#F8FAFC] border-2 border-slate-100 rounded-[20px] p-8 mb-6">
               <h4 className="text-lg font-bold text-navy mb-6 text-center">Trusted by 500+ Businesses</h4>
               <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                     <div className="text-3xl font-extrabold text-jetBlue">500+</div>
                     <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">Projects</div>
                  </div>
                  <div>
                     <div className="text-3xl font-extrabold text-jetBlue">98%</div>
                     <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">Satisfaction</div>
                  </div>
               </div>
            </div>

            {/* Info Card 4: Security */}
            <div className="bg-white border-2 border-slate-100 rounded-[20px] p-6 text-center">
               <ShieldCheck className="w-8 h-8 text-jetGreen mx-auto mb-3" />
               <p className="text-sm font-medium text-slate-600">
                 Your information is secure and never shared.
               </p>
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}
