import { Language } from '../types';

export const languages: Language[] = [
  // West Africa
  {
    id: 'hausa',
    name: 'Hausa',
    nameFr: 'Haoussa',
    countries: ['Nigeria', 'Niger', 'Ghana'],
    flags: ['🇳🇬', '🇳🇪', '🇬🇭'],
    region: 'west',
    speakers: '80M+ learners'
  },
  {
    id: 'yoruba',
    name: 'Yoruba',
    nameFr: 'Yoruba',
    countries: ['Nigeria', 'Benin'],
    flags: ['🇳🇬', '🇧🇯'],
    region: 'west',
    speakers: '50M+ learners'
  },
  {
    id: 'igbo',
    name: 'Igbo',
    nameFr: 'Igbo',
    countries: ['Nigeria'],
    flags: ['🇳🇬'],
    region: 'west',
    speakers: '45M+ learners'
  },
  {
    id: 'moore',
    name: 'Mòoré',
    nameFr: 'Mòoré',
    countries: ['Burkina Faso'],
    flags: ['🇧🇫'],
    region: 'west',
    speakers: '7M+ learners'
  },
  {
    id: 'twi',
    name: 'Twi (Akan)',
    nameFr: 'Twi (Akan)',
    countries: ['Ghana'],
    flags: ['🇬🇭'],
    region: 'west',
    speakers: '20M+ learners'
  },
  {
    id: 'wolof',
    name: 'Wolof',
    nameFr: 'Wolof',
    countries: ['Senegal', 'Gambia'],
    flags: ['🇸🇳', '🇬🇲'],
    region: 'west',
    speakers: '12M+ learners'
  },
  
  // East Africa
  {
    id: 'swahili',
    name: 'Swahili',
    nameFr: 'Swahili',
    countries: ['Tanzania', 'Kenya', 'Uganda', 'DRC'],
    flags: ['🇹🇿', '🇰🇪', '🇺🇬', '🇨🇩'],
    region: 'east',
    speakers: '200M+ learners'
  },
  {
    id: 'somali',
    name: 'Somali',
    nameFr: 'Somali',
    countries: ['Somalia', 'Ethiopia', 'Kenya'],
    flags: ['🇸🇴', '🇪🇹', '🇰🇪'],
    region: 'east',
    speakers: '20M+ learners'
  },
  {
    id: 'amharic',
    name: 'Amharic',
    nameFr: 'Amharique',
    countries: ['Ethiopia'],
    flags: ['🇪🇹'],
    region: 'east',
    speakers: '60M+ learners'
  },
  
  // Central Africa
  {
    id: 'lingala',
    name: 'Lingala',
    nameFr: 'Lingala',
    countries: ['DRC', 'Republic of Congo'],
    flags: ['🇨🇩', '🇨🇬'],
    region: 'central',
    speakers: '15M+ learners'
  },
  
  // North Africa
  {
    id: 'arabic',
    name: 'Arabic (North African)',
    nameFr: 'Arabe (Afrique du Nord)',
    countries: ['Egypt', 'Morocco', 'Algeria', 'Tunisia'],
    flags: ['🇪🇬', '🇲🇦', '🇩🇿', '🇹🇳'],
    region: 'north',
    speakers: '300M+ learners'
  },
  {
    id: 'berber',
    name: 'Berber (Tamazight)',
    nameFr: 'Berbère (Tamazight)',
    countries: ['Morocco', 'Algeria'],
    flags: ['🇲🇦', '🇩🇿'],
    region: 'north',
    speakers: '30M+ learners'
  },
  
  // Southern Africa
  {
    id: 'zulu',
    name: 'Zulu',
    nameFr: 'Zoulou',
    countries: ['South Africa'],
    flags: ['🇿🇦'],
    region: 'southern',
    speakers: '27M+ learners'
  },
  {
    id: 'shona',
    name: 'Shona',
    nameFr: 'Shona',
    countries: ['Zimbabwe'],
    flags: ['🇿🇼'],
    region: 'southern',
    speakers: '15M+ learners'
  },
  {
    id: 'chichewa',
    name: 'Chichewa (Nyanja)',
    nameFr: 'Chichewa (Nyanja)',
    countries: ['Malawi', 'Zambia', 'Mozambique'],
    flags: ['🇲🇼', '🇿🇲', '🇲🇿'],
    region: 'southern',
    speakers: '20M+ learners'
  }
];

export const getLanguagesByRegion = (region: Language['region']) => {
  return languages.filter(lang => lang.region === region);
};

export const getLanguageById = (id: string) => {
  return languages.find(lang => lang.id === id);
};
