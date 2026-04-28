// Articles and technical writeups.

export interface Writing {
  id: string;
  title: string;
  date: string;             // e.g. "2023" or "Sep 2023"
  excerpt: string;
  tags: string[];
  readUrl?: string;         // article URL or PDF
  codeUrl?: string;         // GitHub repo
}

export const writings: Writing[] = [
  {
    id: 'forecasting-natural-gas',
    title: 'Forecasting the Price of Natural Gas',
    date: '2023',
    excerpt:
      'Time-series forecasting of natural gas prices (1990–2023) using ARIMA, SARIMA, LSTM, RNN, and VAR models. Analysis of correlations with crude oil and gasoline prices to improve predictive accuracy.',
    tags: ['Python', 'ARIMA', 'LSTM', 'RNN', 'VAR', 'Time Series'],
    readUrl: '',
    codeUrl: 'https://github.com/manasapex001/Forecasting-The-Price-Of-Natural-Gas',
  },
  {
    id: 'growth-drivers-india-brics',
    title: 'Growth Drivers and Catch-up Effects in India',
    date: '2023',
    excerpt:
      'Panel data analysis using Penn World Tables (1950–2019) to estimate Barro-type conditional convergence models for BRICS economies. Identifies convergence trends and key growth drivers like investment and trade openness, with focus on India.',
    tags: ['STATA', 'Panel Data', 'Barro Regression', 'BRICS'],
    readUrl: '',
    codeUrl: '',
  },
];
