export interface Computer {
  id: number;
  serialNumber: string;
  computerName: string;
  status: ComputerStatus;
  client: string;
  progress: number;
  lastUpdate: string;
}

export type ComputerStatus = 'pending' | 'in_progress' | 'completed' | 'repair';

export enum SettingsPages {
  'display' = 'DisplayTab',
  'computers_table' = 'ComputerTableTab',
  'dashboard' = 'DashboardTab',
}
