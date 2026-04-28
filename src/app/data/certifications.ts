// Certifications, courses, and achievements.
//
// To add a new entry: copy any object below, edit the fields, and save.
// Empty strings ('') for verifyUrl, credentialId, or certificateFile cause
// those buttons to auto-hide on the page — fill them in as you have the data.
//
// certificateFile points to a PDF in public/certificates/ — drop the file
// there and reference it as '/certificates/your-file.pdf' (with the leading slash).

export type CertCategory = 'certification' | 'achievement';

export interface Certification {
  id: string;
  title: string;
  provider: string;       // e.g. "DeepLearning.AI", "IBM", "Yale University"
  via?: string;           // e.g. "Coursera" — the platform that delivered the course
  year: number;
  date: string;           // human-friendly, e.g. "Nov 2024" or "2024"
  hours?: string;         // e.g. "24h" — leave empty if unknown
  skills: string[];
  credentialId?: string;  // shown as monospace tag if present
  verifyUrl?: string;     // Coursera/Credly/IBM verify page — opens in new tab
  certificateFile?: string; // path to self-hosted PDF, e.g. '/certificates/foo.pdf'
  category: CertCategory;
  pinned?: boolean;       // optional: future use for highlighting
}

export const certifications: Certification[] = [
  // ───────── Certifications ─────────

  {
    id: 'ibm-data-analyst-pc',
    title: 'IBM Data Analyst Professional Certificate',
    provider: 'IBM',
    via: 'Coursera',
    year: 2025,
    date: 'Oct 2025',
    hours: '',
    skills: [
      'Python',
      'SQL',
      'Excel',
      'Power BI / Cognos',
      'Pandas',
      'Data Visualization',
    ],
    credentialId: '9VNS2XX4TX91',
    verifyUrl: 'https://coursera.org/verify/professional-cert/9VNS2XX4TX91',
    certificateFile: '/certificates/ibm-data-analyst-professional.pdf',
    category: 'certification',
    pinned: true,
  },
  {
    id: 'neural-networks-deep-learning',
    title: 'Neural Networks and Deep Learning',
    provider: 'DeepLearning.AI',
    via: 'Coursera',
    year: 2025,
    date: 'Jul 2025',
    hours: '',
    skills: ['Neural Networks', 'Deep Learning', 'Backpropagation', 'TensorFlow'],
    credentialId: '6WNL4L4SJ978',
    verifyUrl: 'https://coursera.org/verify/6WNL4L4SJ978',
    certificateFile: '/certificates/neural-networks-and-deep-learning.pdf',
    category: 'certification',
    pinned: true,
  },
  {
    id: 'data-analysis-with-python',
    title: 'Data Analysis with Python',
    provider: 'IBM',
    via: 'Coursera',
    year: 2025,
    date: 'Jul 2025',
    hours: '',
    skills: ['Python', 'Pandas', 'NumPy', 'Data Wrangling'],
    credentialId: 'ZVJ7KRLUYD3P',
    verifyUrl: 'https://coursera.org/verify/ZVJ7KRLUYD3P',
    certificateFile: '/certificates/data-analysis-with-python.pdf',
    category: 'certification',
  },
  {
    id: 'excel-basics-for-data-analysis',
    title: 'Excel Basics for Data Analysis',
    provider: 'IBM',
    via: 'Coursera',
    year: 2025,
    date: 'Jun 2025',
    hours: '',
    skills: ['Excel', 'Data Analysis', 'Spreadsheets'],
    credentialId: 'CEQ09NUBGGO3',
    verifyUrl: 'https://coursera.org/verify/CEQ09NUBGGO3',
    certificateFile: '/certificates/excel-basics-for-data-analysis.pdf',
    category: 'certification',
  },
  {
    id: 'kaggle-google-ai-agents',
    title: '5-Day AI Agents Intensive Course with Google',
    provider: 'Kaggle',
    via: 'Google',
    year: 2025,
    date: '2025',                 // TODO: confirm exact month
    hours: '',
    skills: ['AI Agents', 'LLMs', 'Tool Use', 'Agentic Systems'],
    credentialId: '',
    verifyUrl: '',                // TODO: paste Kaggle badge URL if you have one
    certificateFile: '',          // no PDF was supplied for this badge
    category: 'certification',
  },
  {
    id: '100-days-of-code-python',
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    provider: 'Udemy',
    via: 'Dr. Angela Yu',
    year: 2022,
    date: 'Aug 2022',
    hours: '64h',
    skills: ['Python', 'Web Scraping', 'Tkinter', 'Flask', 'Automation'],
    credentialId: 'UC-56c9377f-aef9-4812-8bab-4cfc59caed61',
    verifyUrl: 'https://ude.my/UC-56c9377f-aef9-4812-8bab-4cfc59caed61',
    certificateFile: '/certificates/100-days-of-code-python-bootcamp.pdf',
    category: 'certification',
  },

  // ───────── Achievements ─────────

  {
    id: 'finlatics-program',
    title: 'Market Research Experience Program',
    provider: 'Finlatics',
    year: 2025,
    date: '2025',
    skills: ['Market Research', 'Financial Markets', 'Business Strategy'],
    category: 'achievement',
  },
  {
    id: 'bsc-economics-distinction',
    title: 'B.Sc. Economics with Distinction',
    provider: 'Gokhale Institute of Politics and Economics, Pune',
    year: 2023,
    date: '2023',
    skills: ['Economics', '8.15/10 CGPA'],
    category: 'achievement',
  },
];

// ── Derived helpers (used by the page; you can ignore these) ──────────────────

export function groupByYear<T extends Certification>(items: T[]): Record<number, T[]> {
  const out: Record<number, T[]> = {};
  for (const item of items) (out[item.year] ||= []).push(item);
  return out;
}

export function uniqueProviders(items: Certification[]): string[] {
  const set = new Set<string>();
  for (const c of items) set.add(c.provider);
  return Array.from(set).sort();
}

export function totalHours(items: Certification[]): number {
  let total = 0;
  for (const c of items) {
    const m = (c.hours ?? '').match(/(\d+)/);
    if (m) total += parseInt(m[1], 10);
  }
  return total;
}
