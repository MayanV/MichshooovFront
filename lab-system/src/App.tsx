import React from 'react';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './components/dashboard/Dashboard';
import { ComputersTable } from './components/computers/ComputersTable';
import { useDarkMode } from './hooks/useDarkMode';
import { useComputers } from './hooks/useComputers';

const App: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { computers, filteredComputers, searchComputers } = useComputers([]);

  return (
    <div dir="rtl" className={isDarkMode ? 'dark' : ''}>
      <Layout isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode}>
        <Dashboard />
        <ComputersTable 
          computers={filteredComputers}
          onSearch={searchComputers}
        />
      </Layout>
    </div>
  );
};

export default App;
