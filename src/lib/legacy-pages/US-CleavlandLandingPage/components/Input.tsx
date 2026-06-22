import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-medium text-navy ml-1">{label}</label>}
      <input
        className={`w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-navy placeholder:text-slate-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 ${error ? 'border-red-500 focus:ring-red-200' : ''} ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500 ml-1">{error}</span>}
    </div>
  );
};

export const TextArea: React.FC<TextAreaProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-medium text-navy ml-1">{label}</label>}
      <textarea
        className={`w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-navy placeholder:text-slate-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 min-h-[120px] resize-y ${error ? 'border-red-500 focus:ring-red-200' : ''} ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500 ml-1">{error}</span>}
    </div>
  );
};