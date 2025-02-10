import { useState, useCallback } from 'react';
import { Computer } from '../types';

export const useComputers = (initialData: Computer[]) => {
  const [computers, setComputers] = useState<Computer[]>(initialData);
  const [filteredComputers, setFilteredComputers] = useState<Computer[]>(initialData);

  const searchComputers = useCallback((searchTerm: string) => {
    const filtered = computers.filter(computer => 
      Object.values(computer).some(value => 
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredComputers(filtered);
  }, [computers]);

  return { computers, filteredComputers, searchComputers, setComputers };
};