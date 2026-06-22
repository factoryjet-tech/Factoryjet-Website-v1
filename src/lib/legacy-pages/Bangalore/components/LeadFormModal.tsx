
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import MultiStepForm from './MultiStepForm';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-jet-navy/40 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl z-10"
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 md:-right-12 text-white hover:text-jet-orange transition-colors p-2"
            >
              <X size={32} />
            </button>
            <MultiStepForm variant="modal" onSuccess={() => {
              // Optionally close modal after success with delay
              setTimeout(onClose, 5000);
            }} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadFormModal;
