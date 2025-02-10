import React from 'react';
import { ComputerStatus } from '../../types';

interface StatusBadgeProps {
  status: ComputerStatus;
}

const statusConfig: Record<ComputerStatus, { text: string; className: string }> = {
  completed: { text: 'הותקן', className: 'bg-green-100 text-green-800' },
  'in_progress': { text: 'בתהליך התקנה', className: 'bg-blue-100 text-blue-800' },
  pending: { text: 'ממתין להתקנה', className: 'bg-yellow-100 text-yellow-800' },
  repair: { text: 'בתיקון', className: 'bg-red-100 text-red-800' }
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const { text, className } = statusConfig[status];
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${className}`}>
      {text}
    </span>
  );
};