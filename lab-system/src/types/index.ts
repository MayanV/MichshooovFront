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

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill?: boolean;
  }[];
}
