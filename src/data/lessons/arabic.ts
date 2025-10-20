import { Lesson } from '../types';

export const arabicLessons: Lesson[] = [
  // Stage 1, Mission 1: Greetings
  {
    id: 'ar-vocab-1-1',
    stageId: 'arabic-stage-1',
    lessonNumber: 1,
    type: 'vocabulary',
    title: 'Basic Greetings',
    titleFr: 'Salutations de base',
    xpReward: 10,
    exercises: [
      {
        id: 'ar-v1-1-1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Arabic?',
        questionFr: 'Comment dit-on "Bonjour" en Arabe?',
        correctAnswer: 'Marhaba',
        correctAnswerFr: 'Marhaba',
        options: ['Marhaba', 'Ma\'a salama', 'Shukran', 'Min fadlak']
      },
      {
        id: 'ar-v1-1-2',
        type: 'multiple-choice',
        question: 'What does "Marhaba" mean?',
        questionFr: 'Que signifie "Marhaba"?',
        correctAnswer: 'Hello',
        correctAnswerFr: 'Bonjour',
        options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
        optionsFr: ['Bonjour', 'Au revoir', 'Merci', 'S\'il vous plaît']
      },
      {
        id: 'ar-v1-1-3',
        type: 'type-answer',
        question: 'Type the Arabic word for "Goodbye"',
        questionFr: 'Tapez le mot Arabe pour "Au revoir"',
        correctAnswer: 'Ma\'a salama',
        correctAnswerFr: 'Ma\'a salama'
      },
      {
        id: 'ar-v1-1-4',
        type: 'multiple-choice',
        question: 'What is "Good morning" in Arabic?',
        questionFr: 'Comment dit-on "Bonjour" (matin) en Arabe?',
        correctAnswer: 'Sabah al-khair',
        correctAnswerFr: 'Sabah al-khair',
        options: ['Sabah al-khair', 'Masa\' al-khair', 'Layla sa\'ida', 'Marhaba']
      },
      {
        id: 'ar-v1-1-5',
        type: 'multiple-choice',
        question: '"Kayf halak?" means:',
        questionFr: '"Kayf halak?" signifie:',
        correctAnswer: 'How are you?',
        correctAnswerFr: 'Comment allez-vous?',
        options: ['Hello', 'How are you?', 'Thank you', 'Goodbye'],
        optionsFr: ['Bonjour', 'Comment allez-vous?', 'Merci', 'Au revoir']
      },
      {
        id: 'ar-v1-1-6',
        type: 'type-answer',
        question: 'Type "Thank you" in Arabic',
        questionFr: 'Tapez "Merci" en Arabe',
        correctAnswer: 'Shukran',
        correctAnswerFr: 'Shukran'
      },
      {
        id: 'ar-v1-1-7',
        type: 'multiple-choice',
        question: 'What is "Please" in Arabic?',
        questionFr: 'Comment dit-on "S\'il vous plaît" en Arabe?',
        correctAnswer: 'Min fadlak',
        correctAnswerFr: 'Min fadlak',
        options: ['Min fadlak', 'Shukran', 'Ma\'a salama', 'Marhaba']
      },
      {
        id: 'ar-v1-1-8',
        type: 'multiple-choice',
        question: 'How do you respond to "Kayf halak?"?',
        questionFr: 'Comment répondez-vous à "Kayf halak?"?',
        correctAnswer: 'Ana bikhair',
        correctAnswerFr: 'Ana bikhair',
        options: ['Ana bikhair', 'Marhaba', 'Ma\'a salama', 'Shukran']
      },
      {
        id: 'ar-v1-1-9',
        type: 'type-answer',
        question: 'Type "Excuse me" in Arabic',
        questionFr: 'Tapez "Excusez-moi" en Arabe',
        correctAnswer: 'Aasif',
        correctAnswerFr: 'Aasif'
      },
      {
        id: 'ar-v1-1-10',
        type: 'multiple-choice',
        question: 'What is "Sorry" in Arabic?',
        questionFr: 'Comment dit-on "Désolé" en Arabe?',
        correctAnswer: 'Aasif',
        correctAnswerFr: 'Aasif',
        options: ['Aasif', 'Shukran', 'Min fadlak', 'Ma\'a salama']
      },
      {
        id: 'ar-v1-1-11',
        type: 'multiple-choice',
        question: 'How do you say "Nice to meet you" in Arabic?',
        questionFr: 'Comment dit-on "Ravi de vous rencontrer" en Arabe?',
        correctAnswer: 'Tasharrafna',
        correctAnswerFr: 'Tasharrafna',
        options: ['Tasharrafna', 'Kayf halak?', 'Marhaba', 'Ma\'a salama']
      },
      {
        id: 'ar-v1-1-12',
        type: 'type-answer',
        question: 'Type "See you later" in Arabic',
        questionFr: 'Tapez "À bientôt" en Arabe',
        correctAnswer: 'Araka laqiya',
        correctAnswerFr: 'Araka laqiya'
      },
      {
        id: 'ar-v1-1-13',
        type: 'multiple-choice',
        question: 'What is "You\'re welcome" in Arabic?',
        questionFr: 'Comment dit-on "De rien" en Arabe?',
        correctAnswer: 'Afwan',
        correctAnswerFr: 'Afwan',
        options: ['Afwan', 'Min fadlak', 'Aasif', 'Marhaba']
      },
      {
        id: 'ar-v1-1-14',
        type: 'multiple-choice',
        question: 'How do you say "Good evening" in Arabic?',
        questionFr: 'Comment dit-on "Bonsoir" en Arabe?',
        correctAnswer: 'Masa\' al-khair',
        correctAnswerFr: 'Masa\' al-khair',
        options: ['Masa\' al-khair', 'Sabah al-khair', 'Layla sa\'ida', 'Marhaba']
      },
      {
        id: 'ar-v1-1-15',
        type: 'type-answer',
        question: 'Type "Good night" in Arabic',
        questionFr: 'Tapez "Bonne nuit" en Arabe',
        correctAnswer: 'Layla sa\'ida',
        correctAnswerFr: 'Layla sa\'ida'
      },
      {
        id: 'ar-v1-1-16',
        type: 'multiple-choice',
        question: 'What is "Yes" in Arabic?',
        questionFr: 'Comment dit-on "Oui" en Arabe?',
        correctAnswer: 'Na\'am',
        correctAnswerFr: 'Na\'am',
        options: ['Na\'am', 'La', 'Shukran', 'Marhaba']
      },
      {
        id: 'ar-v1-1-17',
        type: 'multiple-choice',
        question: 'How do you say "No" in Arabic?',
        questionFr: 'Comment dit-on "Non" en Arabe?',
        correctAnswer: 'La',
        correctAnswerFr: 'La',
        options: ['La', 'Na\'am', 'Ma\'a salama', 'Min fadlak']
      },
      {
        id: 'ar-v1-1-18',
        type: 'type-answer',
        question: 'Type "Maybe" in Arabic',
        questionFr: 'Tapez "Peut-être" en Arabe',
        correctAnswer: 'Yumkin',
        correctAnswerFr: 'Yumkin'
      },
      {
        id: 'ar-v1-1-19',
        type: 'multiple-choice',
        question: 'What is "I don\'t understand" in Arabic?',
        questionFr: 'Comment dit-on "Je ne comprends pas" en Arabe?',
        correctAnswer: 'La afham',
        correctAnswerFr: 'La afham',
        options: ['La afham', 'Shukran', 'Ma\'a salama', 'Aasif']
      },
      {
        id: 'ar-v1-1-20',
        type: 'multiple-choice',
        question: 'How do you say "I don\'t know" in Arabic?',
        questionFr: 'Comment dit-on "Je ne sais pas" en Arabe?',
        correctAnswer: 'La a\'rif',
        correctAnswerFr: 'La a\'rif',
        options: ['La a\'rif', 'Shukran', 'Ma\'a salama', 'Aasif']
      }
    ]
  },
  // Stage 1, Mission 2: Common Phrases
  {
    id: 'ar-vocab-1-2',
    stageId: 'arabic-stage-1',
    lessonNumber: 2,
    type: 'vocabulary',
    title: 'Common Phrases',
    titleFr: 'Phrases courantes',
    xpReward: 10,
    exercises: [
      {
        id: 'ar-v1-2-1',
        type: 'multiple-choice',
        question: 'How do you say "What is your name?" in Arabic?',
        questionFr: 'Comment dit-on "Comment vous appelez-vous?" en Arabe?',
        correctAnswer: 'Ma ismuka?',
        correctAnswerFr: 'Ma ismuka?',
        options: ['Ma ismuka?', 'Shukran ismuka?', 'Ma\'a salama ismuka?', 'Min fadlak ismuka?']
      },
      {
        id: 'ar-v1-2-2',
        type: 'type-answer',
        question: 'Type "My name is..." in Arabic',
        questionFr: 'Tapez "Je m\'appelle..." en Arabe',
        correctAnswer: 'Ismi...',
        correctAnswerFr: 'Ismi...'
      },
      {
        id: 'ar-v1-2-3',
        type: 'multiple-choice',
        question: 'What is "Where are you from?" in Arabic?',
        questionFr: 'Comment dit-on "D\'où venez-vous?" en Arabe?',
        correctAnswer: 'Min ayna anta?',
        correctAnswerFr: 'Min ayna anta?',
        options: ['Min ayna anta?', 'Shukran ayna?', 'Ma\'a salama ayna?', 'Min fadlak ayna?']
      },
      {
        id: 'ar-v1-2-4',
        type: 'type-answer',
        question: 'Type "I am from..." in Arabic',
        questionFr: 'Tapez "Je viens de..." en Arabe',
        correctAnswer: 'Ana min...',
        correctAnswerFr: 'Ana min...'
      },
      {
        id: 'ar-v1-2-5',
        type: 'multiple-choice',
        question: 'How do you say "How old are you?" in Arabic?',
        questionFr: 'Comment dit-on "Quel âge avez-vous?" en Arabe?',
        correctAnswer: 'Kam umruka?',
        correctAnswerFr: 'Kam umruka?',
        options: ['Kam umruka?', 'Shukran umruka?', 'Ma\'a salama umruka?', 'Min fadlak umruka?']
      },
      {
        id: 'ar-v1-2-6',
        type: 'type-answer',
        question: 'Type "I am ... years old" in Arabic',
        questionFr: 'Tapez "J\'ai ... ans" en Arabe',
        correctAnswer: 'Umri ... sana',
        correctAnswerFr: 'Umri ... sana'
      },
      {
        id: 'ar-v1-2-7',
        type: 'multiple-choice',
        question: 'What is "Where do you live?" in Arabic?',
        questionFr: 'Comment dit-on "Où habitez-vous?" en Arabe?',
        correctAnswer: 'Ayna taskun?',
        correctAnswerFr: 'Ayna taskun?',
        options: ['Ayna taskun?', 'Shukran taskun?', 'Ma\'a salama taskun?', 'Min fadlak taskun?']
      },
      {
        id: 'ar-v1-2-8',
        type: 'type-answer',
        question: 'Type "I live in..." in Arabic',
        questionFr: 'Tapez "J\'habite à..." en Arabe',
        correctAnswer: 'Askun fi...',
        correctAnswerFr: 'Askun fi...'
      },
      {
        id: 'ar-v1-2-9',
        type: 'multiple-choice',
        question: 'How do you say "What do you do?" in Arabic?',
        questionFr: 'Comment dit-on "Que faites-vous?" en Arabe?',
        correctAnswer: 'Ma ta\'mal?',
        correctAnswerFr: 'Ma ta\'mal?',
        options: ['Ma ta\'mal?', 'Shukran ta\'mal?', 'Ma\'a salama ta\'mal?', 'Min fadlak ta\'mal?']
      },
      {
        id: 'ar-v1-2-10',
        type: 'type-answer',
        question: 'Type "I am a student" in Arabic',
        questionFr: 'Tapez "Je suis étudiant" en Arabe',
        correctAnswer: 'Ana talib',
        correctAnswerFr: 'Ana talib'
      },
      {
        id: 'ar-v1-2-11',
        type: 'multiple-choice',
        question: 'What is "I am learning Arabic" in Arabic?',
        questionFr: 'Comment dit-on "J\'apprends l\'Arabe" en Arabe?',
        correctAnswer: 'Ana atakallam al-arabiya',
        correctAnswerFr: 'Ana atakallam al-arabiya',
        options: ['Ana atakallam al-arabiya', 'Shukran al-arabiya', 'Ma\'a salama al-arabiya', 'Min fadlak al-arabiya']
      },
      {
        id: 'ar-v1-2-12',
        type: 'type-answer',
        question: 'Type "I speak a little Arabic" in Arabic',
        questionFr: 'Tapez "Je parle un peu Arabe" en Arabe',
        correctAnswer: 'Atakallam al-arabiya qalilan',
        correctAnswerFr: 'Atakallam al-arabiya qalilan'
      },
      {
        id: 'ar-v1-2-13',
        type: 'multiple-choice',
        question: 'How do you say "I don\'t speak Arabic well" in Arabic?',
        questionFr: 'Comment dit-on "Je ne parle pas bien Arabe" en Arabe?',
        correctAnswer: 'La atakallam al-arabiya jayyidan',
        correctAnswerFr: 'La atakallam al-arabiya jayyidan',
        options: ['La atakallam al-arabiya jayyidan', 'Shukran al-arabiya', 'Ma\'a salama al-arabiya', 'Min fadlak al-arabiya']
      },
      {
        id: 'ar-v1-2-14',
        type: 'type-answer',
        question: 'Type "Can you help me?" in Arabic',
        questionFr: 'Tapez "Pouvez-vous m\'aider?" en Arabe',
        correctAnswer: 'Hal yumkinuka musa\'adati?',
        correctAnswerFr: 'Hal yumkinuka musa\'adati?'
      },
      {
        id: 'ar-v1-2-15',
        type: 'multiple-choice',
        question: 'What is "Of course" in Arabic?',
        questionFr: 'Comment dit-on "Bien sûr" en Arabe?',
        correctAnswer: 'Tab\'an',
        correctAnswerFr: 'Tab\'an',
        options: ['Tab\'an', 'La', 'Shukran', 'Min fadlak']
      },
      {
        id: 'ar-v1-2-16',
        type: 'multiple-choice',
        question: 'How do you say "I need help" in Arabic?',
        questionFr: 'Comment dit-on "J\'ai besoin d\'aide" en Arabe?',
        correctAnswer: 'Ahtaju musa\'ada',
        correctAnswerFr: 'Ahtaju musa\'ada',
        options: ['Ahtaju musa\'ada', 'Shukran musa\'ada', 'Ma\'a salama musa\'ada', 'Min fadlak musa\'ada']
      },
      {
        id: 'ar-v1-2-17',
        type: 'type-answer',
        question: 'Type "Can you repeat that?" in Arabic',
        questionFr: 'Tapez "Pouvez-vous répéter?" en Arabe',
        correctAnswer: 'Hal yumkinuka i\'ada dhalik?',
        correctAnswerFr: 'Hal yumkinuka i\'ada dhalik?'
      },
      {
        id: 'ar-v1-2-18',
        type: 'multiple-choice',
        question: 'What is "Speak slowly" in Arabic?',
        questionFr: 'Comment dit-on "Parlez lentement" en Arabe?',
        correctAnswer: 'Takallam bi-bu\'t',
        correctAnswerFr: 'Takallam bi-bu\'t',
        options: ['Takallam bi-bu\'t', 'Takallam shukran', 'Takallam ma\'a salama', 'Takallam min fadlak']
      },
      {
        id: 'ar-v1-2-19',
        type: 'type-answer',
        question: 'Type "I understand" in Arabic',
        questionFr: 'Tapez "Je comprends" en Arabe',
        correctAnswer: 'Afham',
        correctAnswerFr: 'Afham'
      },
      {
        id: 'ar-v1-2-20',
        type: 'multiple-choice',
        question: 'How do you say "That\'s correct" in Arabic?',
        questionFr: 'Comment dit-on "C\'est correct" en Arabe?',
        correctAnswer: 'Sahih',
        correctAnswerFr: 'Sahih',
        options: ['Sahih', 'Khati\'', 'Shukran', 'Min fadlak']
      }
    ]
  }
];
