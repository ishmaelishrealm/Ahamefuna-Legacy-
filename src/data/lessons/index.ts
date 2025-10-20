import { swahiliStages } from './swahili-structured';
import { igboLessons } from './igbo';
import { hausaLessons } from './hausa';
import { yorubaLessons } from './yoruba';
import { zuluLessons } from './zulu';
import { mooreLessons } from './moore';
import { lingalaLessons } from './lingala';
import { somaliLessons } from './somali';
import { arabicLessons } from './arabic';
import { berberLessons } from './berber';
import { shonaLessons } from './shona';
import { chichewaLessons } from './chichewa';
import { wolofLessons } from './wolof';
import { twiLessons } from './twi';
import { amharicLessons } from './amharic';
import { Stage, Lesson, AfricanLanguage, Exercise } from '../types';

// Language-specific greetings data
const languageData: Record<string, { hello: string; goodbye: string; thanks: string; yes: string; no: string; please: string; sorry: string; water: string; food: string; house: string }> = {
  hausa: { hello: 'Sannu', goodbye: 'Sai an jima', thanks: 'Na gode', yes: 'Ee', no: 'A\'a', please: 'Don Allah', sorry: 'Yi hakuri', water: 'Ruwa', food: 'Abinci', house: 'Gida' },
  yoruba: { hello: 'Bawo ni', goodbye: 'O dabo', thanks: 'E se', yes: 'Beeni', no: 'Rara', please: 'Jowo', sorry: 'Ma binu', water: 'Omi', food: 'Ounjẹ', house: 'Ile' },
  zulu: { hello: 'Sawubona', goodbye: 'Hamba kahle', thanks: 'Ngiyabonga', yes: 'Yebo', no: 'Cha', please: 'Ngiyacela', sorry: 'Uxolo', water: 'Amanzi', food: 'Ukudla', house: 'Indlu' },
  amharic: { hello: 'Selam', goodbye: 'Dehna hun', thanks: 'Ameseginalehu', yes: 'Awo', no: 'Ay', please: 'Ebakeh', sorry: 'Aznallo', water: 'Wuha', food: 'Migib', house: 'Bet' },
  igbo: { hello: 'Ndewo', goodbye: 'Ka ọ dị', thanks: 'Daalụ', yes: 'Ee', no: 'Mba', please: 'Biko', sorry: 'Ndo', water: 'Mmiri', food: 'Nri', house: 'Ụlọ' },
  arabic: { hello: 'Marhaba', goodbye: 'Ma\'a salama', thanks: 'Shukran', yes: 'Na\'am', no: 'La', please: 'Min fadlak', sorry: 'Aasif', water: 'Maa', food: 'Ta\'aam', house: 'Bayt' },
  shona: { hello: 'Mhoro', goodbye: 'Chisarai zvakanaka', thanks: 'Ndatenda', yes: 'Hongu', no: 'Kwete', please: 'Ndapota', sorry: 'Ndine urombo', water: 'Mvura', food: 'Chikafu', house: 'Imba' },
  somali: { hello: 'Salaan', goodbye: 'Nabadgelyo', thanks: 'Mahadsanid', yes: 'Haa', no: 'Maya', please: 'Fadlan', sorry: 'Waan ka xumahay', water: 'Biyo', food: 'Cunto', house: 'Guri' },
  berber: { hello: 'Azul', goodbye: 'Ar tufat', thanks: 'Tanemmirt', yes: 'Ih', no: 'Uhu', please: 'Ssusm iyi', sorry: 'Smhith iyi', water: 'Aman', food: 'Tiremt', house: 'Taddart' },
  moore: { hello: 'Ne y\'ibéogo', goodbye: 'Fo wakat', thanks: 'Barka', yes: 'Ɛɛn', no: 'Ayi', please: 'M paase', sorry: 'M gʋlsɛ', water: 'Koom', food: 'Zoom', house: 'Zaka' },
  lingala: { hello: 'Mbote', goodbye: 'Kende malamu', thanks: 'Melesi', yes: 'Ee', no: 'Te', please: 'Nasengi yo', sorry: 'Bolimbisi', water: 'Mayi', food: 'Bilei', house: 'Ndako' },
  twi: { hello: 'Akwaaba', goodbye: 'Nante yie', thanks: 'Medaase', yes: 'Aane', no: 'Daabi', please: 'Mepa wo kyɛw', sorry: 'Kafra', water: 'Nsuo', food: 'Aduane', house: 'Fie' },
  chichewa: { hello: 'Moni', goodbye: 'Pitani bwino', thanks: 'Zikomo', yes: 'Inde', no: 'Ayi', please: 'Chonde', sorry: 'Pepani', water: 'Madzi', food: 'Chakudya', house: 'Nyumba' },
  wolof: { hello: 'Salaam aleekum', goodbye: 'Mangi dem', thanks: 'Jërejëf', yes: 'Waaw', no: 'Déedéet', please: 'Baal ma', sorry: 'Baal ma', water: 'Ndox', food: 'Lekk', house: 'Kër' }
};

// Create 10 exercises per lesson with proper target language content
const createLessonExercises = (languageCode: string, languageName: string, lessonNum: number, data: typeof languageData[string]): Exercise[] => {
  const exercises: Exercise[] = [];
  
  // Exercise 1: What does X mean?
  exercises.push({
    id: `${languageCode}-${lessonNum}-1`,
    type: 'multiple-choice',
    question: `What does "${data.hello}" mean?`,
    questionFr: `Que signifie "${data.hello}"?`,
    correctAnswer: 'Hello',
    options: ['Hello', 'Goodbye', 'Thank you', 'Yes']
  });

  // Exercise 2: How do you say X?
  exercises.push({
    id: `${languageCode}-${lessonNum}-2`,
    type: 'multiple-choice',
    question: `How do you say "Thank you" in ${languageName}?`,
    questionFr: `Comment dit-on "Merci" en ${languageName}?`,
    correctAnswer: data.thanks,
    options: [data.thanks, data.hello, data.goodbye, data.please]
  });

  // Exercise 3: Translate to English
  exercises.push({
    id: `${languageCode}-${lessonNum}-3`,
    type: 'type-answer',
    question: `Write this in English: "${data.thanks}"`,
    questionFr: `Écrivez ceci en anglais: "${data.thanks}"`,
    correctAnswer: 'Thank you',
    hint: 'Think about expressions of gratitude',
    hintFr: 'Pensez aux expressions de gratitude'
  });

  // Exercise 4: What does X mean?
  exercises.push({
    id: `${languageCode}-${lessonNum}-4`,
    type: 'multiple-choice',
    question: `What does "${data.goodbye}" mean?`,
    questionFr: `Que signifie "${data.goodbye}"?`,
    correctAnswer: 'Goodbye',
    options: ['Goodbye', 'Hello', 'Please', 'Sorry']
  });

  // Exercise 5: How do you say X?
  exercises.push({
    id: `${languageCode}-${lessonNum}-5`,
    type: 'multiple-choice',
    question: `How do you say "Yes" in ${languageName}?`,
    questionFr: `Comment dit-on "Oui" en ${languageName}?`,
    correctAnswer: data.yes,
    options: [data.yes, data.no, data.hello, data.thanks]
  });

  // Exercise 6: Translate to English
  exercises.push({
    id: `${languageCode}-${lessonNum}-6`,
    type: 'type-answer',
    question: `Write this in English: "${data.goodbye}"`,
    questionFr: `Écrivez ceci en anglais: "${data.goodbye}"`,
    correctAnswer: 'Goodbye',
    hint: 'This is a farewell expression',
    hintFr: 'C\'est une expression d\'au revoir'
  });

  // Exercise 7: What does X mean?
  exercises.push({
    id: `${languageCode}-${lessonNum}-7`,
    type: 'multiple-choice',
    question: `What does "${data.water}" mean?`,
    questionFr: `Que signifie "${data.water}"?`,
    correctAnswer: 'Water',
    options: ['Water', 'Food', 'House', 'Thank you']
  });

  // Exercise 8: How do you say X?
  exercises.push({
    id: `${languageCode}-${lessonNum}-8`,
    type: 'multiple-choice',
    question: `How do you say "Please" in ${languageName}?`,
    questionFr: `Comment dit-on "S'il vous plaît" en ${languageName}?`,
    correctAnswer: data.please,
    options: [data.please, data.sorry, data.thanks, data.yes]
  });

  // Exercise 9: Translate to English
  exercises.push({
    id: `${languageCode}-${lessonNum}-9`,
    type: 'type-answer',
    question: `Write this in English: "${data.water}"`,
    questionFr: `Écrivez ceci en anglais: "${data.water}"`,
    correctAnswer: 'Water',
    hint: 'A basic necessity for life',
    hintFr: 'Une nécessité de base pour la vie'
  });

  // Exercise 10: What does X mean?
  exercises.push({
    id: `${languageCode}-${lessonNum}-10`,
    type: 'multiple-choice',
    question: `What does "${data.food}" mean?`,
    questionFr: `Que signifie "${data.food}"?`,
    correctAnswer: 'Food',
    options: ['Food', 'Water', 'House', 'Hello']
  });

  return exercises;
};

// Create full stages with 5 lessons each, 10 questions per lesson
const createPlaceholderStages = (languageCode: string, languageName: string, languageNameFr: string): Stage[] => {
  const data = languageData[languageCode];
  
  return [
    {
      id: `${languageCode}-stage-1`,
      stageNumber: 1,
      title: `${languageName} Basics`,
      titleFr: `Bases du ${languageNameFr}`,
      color: 'from-[#F4A300] to-[#FF9500]',
      lessons: [
        {
          id: `${languageCode}-1-1`,
          stageId: `${languageCode}-stage-1`,
          lessonNumber: 1,
          type: 'vocabulary',
          title: 'Greetings',
          titleFr: 'Salutations',
          xpReward: 10,
          exercises: createLessonExercises(languageCode, languageName, 1, data)
        },
        {
          id: `${languageCode}-1-2`,
          stageId: `${languageCode}-stage-1`,
          lessonNumber: 2,
          type: 'vocabulary',
          title: 'Common Phrases',
          titleFr: 'Phrases Courantes',
          xpReward: 10,
          exercises: createLessonExercises(languageCode, languageName, 2, data)
        },
        {
          id: `${languageCode}-1-3`,
          stageId: `${languageCode}-stage-1`,
          lessonNumber: 3,
          type: 'grammar',
          title: 'Basic Words',
          titleFr: 'Mots de Base',
          xpReward: 10,
          exercises: createLessonExercises(languageCode, languageName, 3, data)
        },
        {
          id: `${languageCode}-1-4`,
          stageId: `${languageCode}-stage-1`,
          lessonNumber: 4,
          type: 'vocabulary',
          title: 'Essential Vocabulary',
          titleFr: 'Vocabulaire Essentiel',
          xpReward: 10,
          exercises: createLessonExercises(languageCode, languageName, 4, data)
        },
        {
          id: `${languageCode}-1-5`,
          stageId: `${languageCode}-stage-1`,
          lessonNumber: 5,
          type: 'writing',
          title: 'Practice & Review',
          titleFr: 'Pratique et Révision',
          xpReward: 15,
          exercises: createLessonExercises(languageCode, languageName, 5, data)
        }
      ]
    },
    {
      id: `${languageCode}-stage-2`,
      stageNumber: 2,
      title: `${languageName} Intermediate`,
      titleFr: `${languageNameFr} Intermédiaire`,
      color: 'from-[#006D48] to-[#00A86B]',
      lessons: [
        {
          id: `${languageCode}-2-1`,
          stageId: `${languageCode}-stage-2`,
          lessonNumber: 6,
          type: 'vocabulary',
          title: 'Daily Life',
          titleFr: 'Vie Quotidienne',
          xpReward: 10,
          exercises: createLessonExercises(languageCode, languageName, 6, data)
        },
        {
          id: `${languageCode}-2-2`,
          stageId: `${languageCode}-stage-2`,
          lessonNumber: 7,
          type: 'grammar',
          title: 'More Phrases',
          titleFr: 'Plus de Phrases',
          xpReward: 10,
          exercises: createLessonExercises(languageCode, languageName, 7, data)
        },
        {
          id: `${languageCode}-2-3`,
          stageId: `${languageCode}-stage-2`,
          lessonNumber: 8,
          type: 'vocabulary',
          title: 'Useful Expressions',
          titleFr: 'Expressions Utiles',
          xpReward: 10,
          exercises: createLessonExercises(languageCode, languageName, 8, data)
        },
        {
          id: `${languageCode}-2-4`,
          stageId: `${languageCode}-stage-2`,
          lessonNumber: 9,
          type: 'writing',
          title: 'Building Sentences',
          titleFr: 'Construction de Phrases',
          xpReward: 10,
          exercises: createLessonExercises(languageCode, languageName, 9, data)
        },
        {
          id: `${languageCode}-2-5`,
          stageId: `${languageCode}-stage-2`,
          lessonNumber: 10,
          type: 'vocabulary',
          title: 'Stage 2 Review',
          titleFr: 'Révision Étape 2',
          xpReward: 15,
          exercises: createLessonExercises(languageCode, languageName, 10, data)
        }
      ]
    }
  ];
};

// Convert Igbo lessons to stages
const createIgboStages = (): Stage[] => {
  const stage1Lessons = igboLessons.slice(0, 5); // First 5 lessons
  const stage2Lessons = igboLessons.slice(5, 10); // Next 5 lessons
  
  return [
    {
      id: 'igbo-stage-1',
      languageId: 'igbo',
      stageNumber: 1,
      title: 'Igbo Beginner',
      titleFr: 'Igbo Débutant',
      color: 'from-[#FF1493] to-[#FF69B4]',
      lessons: stage1Lessons
    },
    {
      id: 'igbo-stage-2',
      languageId: 'igbo',
      stageNumber: 2,
      title: 'Igbo Intermediate',
      titleFr: 'Igbo Intermédiaire',
      color: 'from-[#006D48] to-[#00A86B]',
      lessons: stage2Lessons
    }
  ];
};

// Convert Moore lessons to stages
const createMooreStages = (): Stage[] => {
  const stage1Lessons = mooreLessons.slice(0, 5); // First 5 lessons
  const stage2Lessons = mooreLessons.slice(5, 10); // Next 5 lessons

  return [
    {
      id: 'moore-stage-1',
      languageId: 'moore',
      stageNumber: 1,
      title: 'Moore Beginner',
      titleFr: 'Moore Débutant',
      color: 'from-[#8B4513] to-[#D2691E]',
      lessons: stage1Lessons
    },
    {
      id: 'moore-stage-2',
      languageId: 'moore',
      stageNumber: 2,
      title: 'Moore Intermediate',
      titleFr: 'Moore Intermédiaire',
      color: 'from-[#228B22] to-[#32CD32]',
      lessons: stage2Lessons
    }
  ];
};

// Convert Lingala lessons to stages
const createLingalaStages = (): Stage[] => {
  const stage1Lessons = lingalaLessons.slice(0, 5); // First 5 lessons
  const stage2Lessons = lingalaLessons.slice(5, 10); // Next 5 lessons

  return [
    {
      id: 'lingala-stage-1',
      languageId: 'lingala',
      stageNumber: 1,
      title: 'Lingala Beginner',
      titleFr: 'Lingala Débutant',
      color: 'from-[#4169E1] to-[#6495ED]',
      lessons: stage1Lessons
    },
    {
      id: 'lingala-stage-2',
      languageId: 'lingala',
      stageNumber: 2,
      title: 'Lingala Intermediate',
      titleFr: 'Lingala Intermédiaire',
      color: 'from-[#DC143C] to-[#FF6347]',
      lessons: stage2Lessons
    }
  ];
};

// Convert Somali lessons to stages
const createSomaliStages = (): Stage[] => {
  const stage1Lessons = somaliLessons.slice(0, 5); // First 5 lessons
  const stage2Lessons = somaliLessons.slice(5, 10); // Next 5 lessons

  return [
    {
      id: 'somali-stage-1',
      languageId: 'somali',
      stageNumber: 1,
      title: 'Somali Beginner',
      titleFr: 'Somali Débutant',
      color: 'from-[#228B22] to-[#32CD32]',
      lessons: stage1Lessons
    },
    {
      id: 'somali-stage-2',
      languageId: 'somali',
      stageNumber: 2,
      title: 'Somali Intermediate',
      titleFr: 'Somali Intermédiaire',
      color: 'from-[#8B4513] to-[#D2691E]',
      lessons: stage2Lessons
    }
  ];
};

// Convert Arabic lessons to stages
const createArabicStages = (): Stage[] => {
  const stage1Lessons = arabicLessons.slice(0, 5); // First 5 lessons
  const stage2Lessons = arabicLessons.slice(5, 10); // Next 5 lessons

  return [
    {
      id: 'arabic-stage-1',
      languageId: 'arabic',
      stageNumber: 1,
      title: 'Arabic Beginner',
      titleFr: 'Arabe Débutant',
      color: 'from-[#006400] to-[#228B22]',
      lessons: stage1Lessons
    },
    {
      id: 'arabic-stage-2',
      languageId: 'arabic',
      stageNumber: 2,
      title: 'Arabic Intermediate',
      titleFr: 'Arabe Intermédiaire',
      color: 'from-[#8B0000] to-[#DC143C]',
      lessons: stage2Lessons
    }
  ];
};

// Convert Berber lessons to stages
const createBerberStages = (): Stage[] => {
  const stage1Lessons = berberLessons.slice(0, 5); // First 5 lessons
  const stage2Lessons = berberLessons.slice(5, 10); // Next 5 lessons

  return [
    {
      id: 'berber-stage-1',
      languageId: 'berber',
      stageNumber: 1,
      title: 'Berber Beginner',
      titleFr: 'Berbère Débutant',
      color: 'from-[#2F4F4F] to-[#708090]',
      lessons: stage1Lessons
    },
    {
      id: 'berber-stage-2',
      languageId: 'berber',
      stageNumber: 2,
      title: 'Berber Intermediate',
      titleFr: 'Berbère Intermédiaire',
      color: 'from-[#8B4513] to-[#D2691E]',
      lessons: stage2Lessons
    }
  ];
};

// Convert Shona lessons to stages
const createShonaStages = (): Stage[] => {
  const stage1Lessons = shonaLessons.slice(0, 5); // First 5 lessons
  const stage2Lessons = shonaLessons.slice(5, 10); // Next 5 lessons

  return [
    {
      id: 'shona-stage-1',
      languageId: 'shona',
      stageNumber: 1,
      title: 'Shona Beginner',
      titleFr: 'Shona Débutant',
      color: 'from-[#FF4500] to-[#FF6347]',
      lessons: stage1Lessons
    },
    {
      id: 'shona-stage-2',
      languageId: 'shona',
      stageNumber: 2,
      title: 'Shona Intermediate',
      titleFr: 'Shona Intermédiaire',
      color: 'from-[#32CD32] to-[#00FF7F]',
      lessons: stage2Lessons
    }
  ];
};

// Convert Chichewa lessons to stages
const createChichewaStages = (): Stage[] => {
  const stage1Lessons = chichewaLessons.slice(0, 5); // First 5 lessons
  const stage2Lessons = chichewaLessons.slice(5, 10); // Next 5 lessons

  return [
    {
      id: 'chichewa-stage-1',
      languageId: 'chichewa',
      stageNumber: 1,
      title: 'Chichewa Beginner',
      titleFr: 'Chichewa Débutant',
      color: 'from-[#FFD700] to-[#FFA500]',
      lessons: stage1Lessons
    },
    {
      id: 'chichewa-stage-2',
      languageId: 'chichewa',
      stageNumber: 2,
      title: 'Chichewa Intermediate',
      titleFr: 'Chichewa Intermédiaire',
      color: 'from-[#4B0082] to-[#8A2BE2]',
      lessons: stage2Lessons
    }
  ];
};

// Convert Wolof lessons to stages
const createWolofStages = (): Stage[] => {
  const stage1Lessons = wolofLessons.slice(0, 5); // First 5 lessons
  const stage2Lessons = wolofLessons.slice(5, 10); // Next 5 lessons

  return [
    {
      id: 'wolof-stage-1',
      languageId: 'wolof',
      stageNumber: 1,
      title: 'Wolof Beginner',
      titleFr: 'Wolof Débutant',
      color: 'from-[#DC143C] to-[#FF6347]',
      lessons: stage1Lessons
    },
    {
      id: 'wolof-stage-2',
      languageId: 'wolof',
      stageNumber: 2,
      title: 'Wolof Intermediate',
      titleFr: 'Wolof Intermédiaire',
      color: 'from-[#228B22] to-[#32CD32]',
      lessons: stage2Lessons
    }
  ];
};

// Convert Twi lessons to stages
const createTwiStages = (): Stage[] => {
  const stage1Lessons = twiLessons.slice(0, 5); // First 5 lessons
  const stage2Lessons = twiLessons.slice(5, 10); // Next 5 lessons

  return [
    {
      id: 'twi-stage-1',
      languageId: 'twi',
      stageNumber: 1,
      title: 'Twi Beginner',
      titleFr: 'Twi Débutant',
      color: 'from-[#FF8C00] to-[#FFA500]',
      lessons: stage1Lessons
    },
    {
      id: 'twi-stage-2',
      languageId: 'twi',
      stageNumber: 2,
      title: 'Twi Intermediate',
      titleFr: 'Twi Intermédiaire',
      color: 'from-[#8B4513] to-[#D2691E]',
      lessons: stage2Lessons
    }
  ];
};

// Convert Amharic lessons to stages
const createAmharicStages = (): Stage[] => {
  const stage1Lessons = amharicLessons.slice(0, 5); // First 5 lessons
  const stage2Lessons = amharicLessons.slice(5, 10); // Next 5 lessons

  return [
    {
      id: 'amharic-stage-1',
      languageId: 'amharic',
      stageNumber: 1,
      title: 'Amharic Beginner',
      titleFr: 'Amharique Débutant',
      color: 'from-[#006400] to-[#228B22]',
      lessons: stage1Lessons
    },
    {
      id: 'amharic-stage-2',
      languageId: 'amharic',
      stageNumber: 2,
      title: 'Amharic Intermediate',
      titleFr: 'Amharique Intermédiaire',
      color: 'from-[#8B0000] to-[#DC143C]',
      lessons: stage2Lessons
    }
  ];
};

// Export all stages
export const allStages: Record<AfricanLanguage, Stage[]> = {
  swahili: swahiliStages,
  hausa: createPlaceholderStages('hausa', 'Hausa', 'Hausa'),
  yoruba: createPlaceholderStages('yoruba', 'Yoruba', 'Yoruba'),
  zulu: createPlaceholderStages('zulu', 'Zulu', 'Zoulou'),
  amharic: createAmharicStages(),
  igbo: createIgboStages(),
  arabic: createArabicStages(),
  shona: createShonaStages(),
  somali: createSomaliStages(),
  berber: createBerberStages(),
  moore: createMooreStages(),
  lingala: createLingalaStages(),
  twi: createTwiStages(),
  chichewa: createChichewaStages(),
  wolof: createWolofStages()
};

export function getStagesForLanguage(languageId: AfricanLanguage): Stage[] {
  return allStages[languageId] || [];
}

export function getLessonById(languageId: AfricanLanguage, lessonId: string): Lesson | undefined {
  const stages = getStagesForLanguage(languageId);
  for (const stage of stages) {
    const lesson = stage.lessons.find(l => l.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
}
