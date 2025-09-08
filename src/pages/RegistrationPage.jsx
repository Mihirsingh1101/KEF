import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, School, ChevronDown, X } from 'lucide-react';

// --- 1. IMPORT FIREBASE & FIRESTORE FUNCTIONS ---
import { db } from '../firebase'; // Import your configured db instance
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const RegistrationModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', institution: '', event: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // --- 2. UPDATED handleSubmit TO WRITE TO FIRESTORE ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.institution || !formData.event) {
        setSubmitMessage('Please fill out all fields.');
        return;
    }
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // --- Create a reference to the 'registrations' collection ---
      const registrationsCollectionRef = collection(db, "registrations");
      
      // --- Add a new document with the form data ---
      await addDoc(registrationsCollectionRef, {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        institution: formData.institution,
        event: formData.event,
        registeredAt: serverTimestamp() // Add a server-side timestamp
      });
      
      setSubmitMessage("Registration successful! We're excited to see you.");
      // Use the alert or a more integrated success message
      // alert('Thank you for registering for KEF 2025!'); 

      // Close the modal after a short delay to show the success message
      setTimeout(() => onClose(), 2000);

    } catch (error) {
      console.error("Error writing document: ", error);
      setSubmitMessage('Something went wrong. Please check your details and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // (Animation variants and JSX for the form are the same)
  const overlayVariants = { visible: { opacity: 1, transition: { duration: 0.3 } }, hidden: { opacity: 0, transition: { duration: 0.3 } } };
  const modalVariants = { visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 400, damping: 30 } }, hidden: { y: "50px", opacity: 0, transition: { duration: 0.3 } } };

  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" variants={overlayVariants} initial="hidden" animate="visible" exit="hidden" onClick={onClose}>
        <motion.div className="fixed inset-0 w-full h-full bg-gradient-to-br from-rose-950 via-amber-800 to-orange-900 z-0 opacity-80"></motion.div>
        <motion.div className="relative w-full max-w-lg p-8 space-y-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/40" variants={modalVariants} onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"><X size={24} /></button>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl blur opacity-60"></div>
            <div className="relative z-10 text-center"><h1 className="text-4xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-orange-300 to-white">Register for KEF 2025</h1><p className="text-orange-200">Join the Celebration of Culture & Innovation</p></div>
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                 {/* Input fields are the same */}
                 <div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-200/70" size={20} /><input type="text" name="fullName" value={formData.fullName} placeholder="Full Name" onChange={handleInputChange} required className="w-full pl-12 pr-4 py-3 bg-white/5 text-white rounded-lg border-2 border-transparent focus:outline-none focus:border-amber-500 focus:ring-0 transition-colors" /></div>
                 <div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-200/70" size={20} /><input type="email" name="email" value={formData.email} placeholder="Email Address" onChange={handleInputChange} required className="w-full pl-12 pr-4 py-3 bg-white/5 text-white rounded-lg border-2 border-transparent focus:outline-none focus:border-amber-500 focus:ring-0 transition-colors" /></div>
                 <div className="relative"><Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-200/70" size={20} /><input type="tel" name="phone" value={formData.phone} placeholder="Phone Number" onChange={handleInputChange} required className="w-full pl-12 pr-4 py-3 bg-white/5 text-white rounded-lg border-2 border-transparent focus:outline-none focus:border-amber-500 focus:ring-0 transition-colors" /></div>
                 <div className="relative"><School className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-200/70" size={20} /><input type="text" name="institution" value={formData.institution} placeholder="College / Institution" onChange={handleInputChange} required className="w-full pl-12 pr-4 py-3 bg-white/5 text-white rounded-lg border-2 border-transparent focus:outline-none focus:border-amber-500 focus:ring-0 transition-colors" /></div>
                 <div className="relative">
                    <select name="event" value={formData.event} onChange={handleInputChange} required className="w-full appearance-none pl-4 pr-10 py-3 bg-white/5 text-white rounded-lg border-2 border-transparent focus:outline-none focus:border-amber-500 focus:ring-0 transition-colors">
                        <option value="" disabled className="bg-gray-900 text-gray-400">Select Event Category</option>
                        <option value="Cultural" className="bg-gray-900">Cultural</option>
                        <option value="Entrepreneurship" className="bg-gray-900">Entrepreneurship</option>
                        <option value="Workshops" className="bg-gray-900">Workshops</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-200 pointer-events-none" size={20} />
                 </div>
                 <motion.button type="submit" disabled={isSubmitting} className="w-full py-3 text-lg font-bold text-white rounded-lg bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 shadow-lg shadow-amber-500/40 disabled:opacity-60 disabled:cursor-not-allowed" whileHover={{ scale: isSubmitting ? 1 : 1.05, boxShadow: isSubmitting ? "none" : "0px 0px 20px rgba(245, 158, 11, 0.6)" }} whileTap={{ scale: isSubmitting ? 1 : 0.95 }} transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
                    {isSubmitting ? 'Registering...' : 'Register Now'}
                </motion.button>
                {submitMessage && <p className={`text-center text-sm font-semibold ${submitMessage.includes('successful') ? 'text-green-400' : 'text-red-400'}`}>{submitMessage}</p>}
            </form>
        </motion.div>
    </motion.div>
  );
};

export default RegistrationModal;