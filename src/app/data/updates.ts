// Currently active research and recent news.

export interface Update {
  id: string;
  title: string;
  status: string;            // e.g. "In progress", "Submitted", "Recently completed"
  description: string;
  period?: string;
  tags: string[];
  paperUrl?: string;
  codeUrl?: string;
}

export const updates: Update[] = [
  {
    id: 'asymmetric-deposit-rate-pass-through',
    title:
      'Asymmetric Deposit Rate Pass-Through in U.S. Banks: Evidence from Panel Data on the 2022–2025 Rate Cycle',
    status: 'In progress',
    description:
      'Empirical investigation of how U.S. commercial banks adjust deposit rates asymmetrically during periods of rising versus falling federal funds rates, using bank-level panel data spanning the 2022–2025 monetary tightening and easing cycle.',
    period: '2025 – present',
    tags: ['Panel Data', 'Banking', 'Monetary Policy', 'Econometrics'],
    paperUrl: '',
    codeUrl: '',
  },
];
