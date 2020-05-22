export interface Task {
  title: string;
  price: number;
  currency: string;
  time: number;
  timeUnit: string; // 'hours', 'minutes'
  cost:  number;
  vatRate: number;
  description?: string;
  address?: any;
};
