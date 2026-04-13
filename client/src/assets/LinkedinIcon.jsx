import React from 'react';

export default function LinkedinIcon({ size = 24, className = '', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96ZM2.8 9.8h4.36V21H2.8V9.8Zm7.1 0h4.18v1.53h0.06c0.58-1.1 2-2.25 4.12-2.25 4.41 0 5.22 2.9 5.22 6.68V21h-4.35v-4.63c0-1.1-0.02-2.52-1.54-2.52-1.54 0-1.77 1.2-1.77 2.44V21H9.9V9.8Z" />
    </svg>
  );
}
