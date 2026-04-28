// Internships and personal data-science projects.
// Empty link fields auto-hide their button on the page.

export type ProjectKind = 'internship' | 'project';

export interface Project {
  id: string;
  title: string;
  kind: ProjectKind;
  organization?: string;     // e.g. "Aga Analytics"
  period: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  paperUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'aga-analytics-internship',
    title: 'Market Research & Data Analysis',
    kind: 'internship',
    organization: 'Aga Analytics',
    period: 'Jun – Aug 2022',
    description:
      'Built custom Python web-scraping scripts that cut data-collection time by 30%. Analysed over 5,000 data points to surface market trends and shipped Power BI dashboards for interactive visualisation.',
    tags: ['Python', 'Web Scraping', 'Power BI', 'Data Analysis'],
    githubUrl: '',
    demoUrl: '',
  },
  {
    id: 'credit-card-fraud-detection',
    title: 'Credit Card Fraud Detection',
    kind: 'project',
    period: '2024',
    description:
      'Anomaly-detection pipeline using autoencoders in Keras. Trains on legitimate transactions and flags reconstruction errors as candidate fraud, evaluated against a labelled benchmark dataset.',
    tags: ['Python', 'Keras', 'Autoencoders', 'Anomaly Detection'],
    githubUrl: 'https://github.com/manasapex001/Credit-Card-Fraud-Detection',
  },
  {
    id: 'heart-disease-prediction',
    title: 'Heart Disease Prediction using ML',
    kind: 'project',
    period: '2024',
    description:
      'Classification pipeline on the heart-disease patient dataset with full preprocessing, exploratory analysis, and a comparison of KNN, decision-tree, and other classical algorithms.',
    tags: ['Python', 'KNN', 'Decision Tree', 'Classification'],
    githubUrl: 'https://github.com/manasapex001/Heart-Disease-Prediction-using-ML',
  },
  {
    id: 'ecommerce-power-bi',
    title: 'E-Commerce Data Analysis Dashboard',
    kind: 'project',
    period: '2023',
    description:
      'Power BI analytics dashboard exploring e-commerce dynamics — sales channels, customer segments, basket composition, and seasonality — with interactive drill-downs.',
    tags: ['Power BI', 'Data Visualization', 'E-commerce'],
    githubUrl: 'https://github.com/manasapex001/E-Commerce-Data-Analysis',
  },
  {
    id: 'stock-revenue-dashboard',
    title: 'Historical Stock & Revenue Dashboard',
    kind: 'project',
    period: '2023',
    description:
      'Python dashboard analysing historical stock-price and revenue data side by side. Surfaces correlations between operating performance and market valuation across multiple companies.',
    tags: ['Python', 'Plotly', 'Web Scraping', 'Financial Analysis'],
    githubUrl:
      'https://github.com/manasapex001/Analyzing-Historical-Stock-Revenue-Data-and-Building-a-Dashboard',
  },
  {
    id: 'online-retail-kmeans',
    title: 'Online Retail K-Means Clustering',
    kind: 'project',
    period: '2023',
    description:
      'Customer segmentation using RFM (Recency, Frequency, Monetary) features and k-means clustering, so the business can target marketing campaigns by behavioural segment.',
    tags: ['Python', 'K-Means', 'RFM', 'Segmentation'],
    githubUrl: 'https://github.com/manasapex001/Online-Retail-K-Means-Clustering',
  },
];
