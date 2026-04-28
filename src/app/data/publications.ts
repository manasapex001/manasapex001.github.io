// Academic publications and research papers.
// Empty link fields auto-hide their button on the page.

export interface Publication {
  id: string;
  title: string;
  authors: string;          // e.g. "Manas Singh" or "Manas Singh, Co-author"
  venue?: string;           // journal, conference, or "Working paper"
  period: string;           // e.g. "Mar 2022 – Jun 2023" or "2023"
  abstract: string;
  tags: string[];
  paperUrl?: string;        // PDF or DOI
  codeUrl?: string;         // GitHub
  status?: string;          // optional badge text e.g. "Working paper"
}

export const publications: Publication[] = [
  {
    id: 'vietnam-trade-liberalization',
    title: 'Trade Liberalization and Its Impact in Vietnam',
    authors: 'Manas Singh',
    venue: '',
    period: 'Mar 2022 – Jun 2023',
    abstract:
      "In-depth analysis of Vietnam's post-1986 Doi Moi economic reforms using investment data, labor productivity metrics, and sectoral trends. Identifies key growth drivers including private investment, service sector efficiency, and trade liberalization policies.",
    tags: ['Econometrics', 'STATA', 'Trade Policy', 'Panel Data'],
    paperUrl: '',
    codeUrl: '',
  },
  {
    id: 'india-consumer-preferences-inequality',
    title: 'Changing Consumer Preferences and Inequality in India',
    authors: 'Manas Singh',
    venue: '',
    period: '2023',
    abstract:
      'Analysis of NSSO data comparing consumption, affordability, and inequality across rural-urban sectors and income groups. Generates insights to inform targeted policy design and behavioral interventions.',
    tags: ['R', 'NSSO Data', 'Statistical Analysis', 'Policy Research'],
    paperUrl: '',
    codeUrl: '',
  },
];
