'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, CheckCircle, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import { trackModalOpen, trackModalClose, trackFormSubmit, trackFormSuccess, trackFormError } from '../utils/gtm';
import { useRouter } from 'next/navigation';
import { submitLead } from '../utils/submitLead';

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  city: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  selectedDate: string;
  selectedTime: string;
}

const TIME_SLOTS = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
];

// Helper to get initial month - returns null on server, Date on client
const getInitialMonth = () => {
  if (typeof window === 'undefined') return null;
  return new Date();
};

const ScheduleCallModal: React.FC<ScheduleCallModalProps> = ({
  isOpen,
  onClose,
  city,
}) => {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    selectedDate: '',
    selectedTime: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Initialize date on client side only to prevent hydration mismatch
  React.useEffect(() => {
    setCurrentMonth(new Date());
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      trackModalOpen('schedule_call', city);
    }
  }, [isOpen, city]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getDaysInMonth = (date: Date | null) => {
    if (!date) return { daysInMonth: 0, firstDayOfMonth: 0 };
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    return { daysInMonth, firstDayOfMonth };
  };

  const { daysInMonth, firstDayOfMonth } = getDaysInMonth(currentMonth);

  const isDateSelectable = (day: number) => {
    if (!currentMonth) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayOfWeek = date.getDay();
    return date >= today && dayOfWeek !== 0; // Not Sunday and not past
  };

  const formatDate = (day: number) => {
    if (!currentMonth) return '';
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date.toISOString().split('T')[0];
  };

  const handleDateSelect = (day: number) => {
    if (isDateSelectable(day)) {
      setFormData((prev) => ({ ...prev, selectedDate: formatDate(day) }));
    }
  };

  const handleTimeSelect = (time: string) => {
    setFormData((prev) => ({ ...prev, selectedTime: time }));
  };

  const handleNext = () => {
    if (formData.selectedDate && formData.selectedTime) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    trackFormSubmit('schedule_call_form', {
      date: formData.selectedDate,
      time: formData.selectedTime,
      city: city,
    });

    try {
      // Durable, server-first capture — never blocks on the browser Firestore SDK.
      const { docId } = await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        service: 'Call booking',
        message: `Requested call: ${formData.selectedDate} at ${formData.selectedTime} (${city})`,
        region: 'in',
        source: 'schedule_call_modal',
        collection: 'location_leads',
      });

      trackFormSuccess('schedule_call_form');

      // Conversion fires on /thank-you (single source of truth). No PII in URL.
      onClose();
      router.push(
        `/thank-you?source=schedule_call&service=call_booking&lid=${encodeURIComponent(docId)}`
      );
      return;
    } catch (err) {
      console.error('Error submitting form:', err);
      const errorMessage = 'Something went wrong. Please try again.';
      trackFormError('schedule_call_form', errorMessage);
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    trackModalClose('schedule_call');
    onClose();
    setTimeout(() => {
      setStep(1);
      setIsSuccess(false);
      setError(null);
      setFormData({
        name: '',
        phone: '',
        email: '',
        selectedDate: '',
        selectedTime: '',
      });
    }, 300);
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-jet-blue to-blue-600 px-6 py-5 text-white">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                <div>
                  <h3 className="text-xl font-bold">Schedule a Call</h3>
                  <p className="text-blue-100 text-sm">30-minute strategy session</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Call Scheduled!
                  </h4>
                  <p className="text-slate-600 mb-2">
                    Your call is booked for:
                  </p>
                  <p className="text-lg font-semibold text-jet-blue mb-6">
                    {new Date(formData.selectedDate).toLocaleDateString('en-IN', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })} at {formData.selectedTime}
                  </p>
                  <p className="text-slate-500 text-sm mb-6">
                    You'll receive a confirmation email and calendar invite shortly.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-6 py-2 bg-jet-blue text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              ) : step === 1 ? (
                <div className="space-y-6">
                  {/* Calendar */}
                  <div>
                    {currentMonth && (
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        disabled={currentMonth.getMonth() === new Date().getMonth() && currentMonth.getFullYear() === new Date().getFullYear()}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <h4 className="font-semibold text-slate-900">
                        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                      </h4>
                      <button
                        onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    )}

                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {dayNames.map((day) => (
                        <div key={day} className="text-center text-xs font-medium text-slate-500 py-2">
                          {day}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                        <div key={`empty-${i}`} />
                      ))}
                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const isSelectable = isDateSelectable(day);
                        const isSelected = formData.selectedDate === formatDate(day);
                        return (
                          <button
                            key={day}
                            onClick={() => handleDateSelect(day)}
                            disabled={!isSelectable}
                            className={`
                              py-2 rounded-lg text-sm font-medium transition-all
                              ${isSelected
                                ? 'bg-jet-blue text-white'
                                : isSelectable
                                  ? 'hover:bg-blue-50 text-slate-900'
                                  : 'text-slate-300 cursor-not-allowed'
                              }
                            `}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Slots */}
                  {formData.selectedDate && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Select Time
                      </h4>
                      <div className="grid grid-cols-4 gap-2">
                        {TIME_SLOTS.map((time) => (
                          <button
                            key={time}
                            onClick={() => handleTimeSelect(time)}
                            className={`
                              py-2 px-3 rounded-lg text-sm font-medium transition-all border
                              ${formData.selectedTime === time
                                ? 'bg-jet-blue text-white border-jet-blue'
                                : 'border-slate-200 hover:border-jet-blue text-slate-700'
                              }
                            `}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <button
                    onClick={handleNext}
                    disabled={!formData.selectedDate || !formData.selectedTime}
                    className="w-full bg-jet-blue hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-1 text-sm text-slate-600 hover:text-jet-blue transition-colors mb-4"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back to calendar
                  </button>

                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-4">
                    <p className="text-sm text-blue-800">
                      <strong>Selected:</strong> {new Date(formData.selectedDate).toLocaleDateString('en-IN', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                      })} at {formData.selectedTime}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-jet-blue focus:border-jet-blue outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-jet-blue focus:border-jet-blue outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-jet-blue focus:border-jet-blue outline-none transition-all"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-jet-orange hover:bg-orange-600 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Booking...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5" />
                        Confirm Booking
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    Free 30-minute consultation. No obligation.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScheduleCallModal;
