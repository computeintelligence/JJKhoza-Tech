export type ProjectCategory =
  | 'health'
  | 'civic'
  | 'commerce'
  | 'systems'
  | 'identity'
  | 'communication';

export interface Project {
  id: string;
  number: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  categoryLabel: string;
  videoId: string;
}

export const projects: Project[] = [
  {
    id: 'meddevice-hub',
    number: '01',
    title: 'JJK MedDevice Hub',
    summary:
      'An integration platform for IoMT medical devices, presented as a module of JJK MedSuiteOS.',
    category: 'health',
    categoryLabel: 'Health systems',
    videoId: 'uKN4QBRpwJA',
  },
  {
    id: 'political-party-management',
    number: '02',
    title: 'Political Party Management System',
    summary:
      'A civic and organizational system named for political party management.',
    category: 'civic',
    categoryLabel: 'Civic systems',
    videoId: 'aWtbBTkqrzI',
  },
  {
    id: 'behaviouros',
    number: '03',
    title: 'JJK BehaviourOS',
    summary:
      'An enterprise behavioural performance, human resource, and systems engineering concept.',
    category: 'systems',
    categoryLabel: 'People systems',
    videoId: 'esEblIfnDoA',
  },
  {
    id: 'clix',
    number: '04',
    title: 'JJK CLIX',
    summary: 'Community Leadership Innovation Exchange.',
    category: 'civic',
    categoryLabel: 'Civic systems',
    videoId: 'PS76mFs5IW4',
  },
  {
    id: 'cdex-exchange',
    number: '05',
    title: 'JJK CDEX',
    summary: 'Community Digital Economy Exchange.',
    category: 'commerce',
    categoryLabel: 'Digital economy',
    videoId: 'v5z29hoIEkw',
  },
  {
    id: 'nexus',
    number: '06',
    title: 'JJK Nexus Communication Suite',
    summary: 'A communications suite within the public JJ Khoza Tech catalogue.',
    category: 'communication',
    categoryLabel: 'Communication',
    videoId: 'mtXA1FIfxvk',
  },
  {
    id: 'burgers-grill',
    number: '07',
    title: 'JJK Burgers & Grill Cloud Kitchen',
    summary:
      'An AI-native digital trading and eCommerce platform presented for a cloud kitchen.',
    category: 'commerce',
    categoryLabel: 'Digital economy',
    videoId: 'tW7U3HdsVkc',
  },
  {
    id: 'digital-medical-practitioner',
    number: '08',
    title: 'JJK Digital Medical Practitioner',
    summary:
      'A clinical assistant presented as AI Dr J, developed by JJK Khoza Tech.',
    category: 'health',
    categoryLabel: 'Health systems',
    videoId: '3NObKS7y7E0',
  },
  {
    id: 'jabula-pos',
    number: '09',
    title: 'Jabula POS',
    summary:
      'An AI-native point-of-sale product with ERP, CRM, and customer loyalty functions.',
    category: 'commerce',
    categoryLabel: 'Digital economy',
    videoId: 'blclyLw2pzU',
  },
  {
    id: 'medsuiteos',
    number: '10',
    title: 'JJK MedSuiteOS + MedInstantPay',
    summary:
      'An AI-native medical practice management system paired with MedInstantPay.',
    category: 'health',
    categoryLabel: 'Health systems',
    videoId: 'X2Pd1UX_F0M',
  },
  {
    id: 'digital-pa',
    number: '11',
    title: 'JJK Digital PA',
    summary: 'An AI-native digital personal assistant application.',
    category: 'systems',
    categoryLabel: 'Intelligent systems',
    videoId: 'TqmPQs7zI4A',
  },
  {
    id: 'gtx',
    number: '12',
    title: 'JJK GTX',
    summary:
      'Global Trust Exchange, presented as an African digital cryptographic identity verification concept.',
    category: 'identity',
    categoryLabel: 'Trust & identity',
    videoId: 'Xbjl-JZeuqU',
  },
  {
    id: 'jabula-pay',
    number: '13',
    title: 'Jabula Pay',
    summary:
      'A payment gateway that integrates with Jabula POS and other point-of-sale systems.',
    category: 'commerce',
    categoryLabel: 'Digital economy',
    videoId: 'nx_sTxudWGA',
  },
  {
    id: 'cdex-platform',
    number: '14',
    title: 'JJK-CDEX / Efficient Exchange',
    summary:
      'A second public presentation of the Community Digital Economy Exchange platform.',
    category: 'commerce',
    categoryLabel: 'Digital economy',
    videoId: 'FdFy4abupMA',
  },
  {
    id: 'civiclink',
    number: '15',
    title: 'JJK CivicLink',
    summary: 'A civic application developed by JJK Khoza Tech.',
    category: 'civic',
    categoryLabel: 'Civic systems',
    videoId: '2EVEKgIUp6g',
  },
];

export const projectCategories = [
  { id: 'all', label: 'All signals' },
  { id: 'health', label: 'Health systems' },
  { id: 'civic', label: 'Civic systems' },
  { id: 'commerce', label: 'Digital economy' },
  { id: 'systems', label: 'Intelligent systems' },
  { id: 'identity', label: 'Trust & identity' },
  { id: 'communication', label: 'Communication' },
] as const;