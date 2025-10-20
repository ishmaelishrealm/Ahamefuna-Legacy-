import { Lesson } from '../types';

export const somaliLessons: Lesson[] = [
  // Stage 1, Mission 1: Greetings
  {
    id: 'so-vocab-1-1',
    stageId: 'somali-stage-1',
    lessonNumber: 1,
    type: 'vocabulary',
    title: 'Basic Greetings',
    titleFr: 'Salutations de base',
    xpReward: 10,
    exercises: [
      {
        id: 'so-v1-1-1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Somali?',
        questionFr: 'Comment dit-on "Bonjour" en Somali?',
        correctAnswer: 'Salaan',
        correctAnswerFr: 'Salaan',
        options: ['Salaan', 'Nabadgelyo', 'Mahadsanid', 'Fadlan']
      },
      {
        id: 'so-v1-1-2',
        type: 'multiple-choice',
        question: 'What does "Salaan" mean?',
        questionFr: 'Que signifie "Salaan"?',
        correctAnswer: 'Hello',
        correctAnswerFr: 'Bonjour',
        options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
        optionsFr: ['Bonjour', 'Au revoir', 'Merci', 'S\'il vous plaît']
      },
      {
        id: 'so-v1-1-3',
        type: 'type-answer',
        question: 'Type the Somali word for "Goodbye"',
        questionFr: 'Tapez le mot Somali pour "Au revoir"',
        correctAnswer: 'Nabadgelyo',
        correctAnswerFr: 'Nabadgelyo'
      },
      {
        id: 'so-v1-1-4',
        type: 'multiple-choice',
        question: 'What is "Good morning" in Somali?',
        questionFr: 'Comment dit-on "Bonjour" (matin) en Somali?',
        correctAnswer: 'Subax wanaagsan',
        correctAnswerFr: 'Subax wanaagsan',
        options: ['Subax wanaagsan', 'Galab wanaagsan', 'Habeen wanaagsan', 'Salaan']
      },
      {
        id: 'so-v1-1-5',
        type: 'multiple-choice',
        question: '"Sidee tahay?" means:',
        questionFr: '"Sidee tahay?" signifie:',
        correctAnswer: 'How are you?',
        correctAnswerFr: 'Comment allez-vous?',
        options: ['Hello', 'How are you?', 'Thank you', 'Goodbye'],
        optionsFr: ['Bonjour', 'Comment allez-vous?', 'Merci', 'Au revoir']
      },
      {
        id: 'so-v1-1-6',
        type: 'type-answer',
        question: 'Type "Thank you" in Somali',
        questionFr: 'Tapez "Merci" en Somali',
        correctAnswer: 'Mahadsanid',
        correctAnswerFr: 'Mahadsanid'
      },
      {
        id: 'so-v1-1-7',
        type: 'multiple-choice',
        question: 'What is "Please" in Somali?',
        questionFr: 'Comment dit-on "S\'il vous plaît" en Somali?',
        correctAnswer: 'Fadlan',
        correctAnswerFr: 'Fadlan',
        options: ['Fadlan', 'Mahadsanid', 'Nabadgelyo', 'Salaan']
      },
      {
        id: 'so-v1-1-8',
        type: 'multiple-choice',
        question: 'How do you respond to "Sidee tahay?"?',
        questionFr: 'Comment répondez-vous à "Sidee tahay?"?',
        correctAnswer: 'Waan fiicanahay',
        correctAnswerFr: 'Waan fiicanahay',
        options: ['Waan fiicanahay', 'Salaan', 'Nabadgelyo', 'Mahadsanid']
      },
      {
        id: 'so-v1-1-9',
        type: 'type-answer',
        question: 'Type "Excuse me" in Somali',
        questionFr: 'Tapez "Excusez-moi" en Somali',
        correctAnswer: 'Raali ahaan',
        correctAnswerFr: 'Raali ahaan'
      },
      {
        id: 'so-v1-1-10',
        type: 'multiple-choice',
        question: 'What is "Sorry" in Somali?',
        questionFr: 'Comment dit-on "Désolé" en Somali?',
        correctAnswer: 'Waan ka xumahay',
        correctAnswerFr: 'Waan ka xumahay',
        options: ['Waan ka xumahay', 'Mahadsanid', 'Fadlan', 'Nabadgelyo']
      },
      {
        id: 'so-v1-1-11',
        type: 'multiple-choice',
        question: 'How do you say "Nice to meet you" in Somali?',
        questionFr: 'Comment dit-on "Ravi de vous rencontrer" en Somali?',
        correctAnswer: 'Kulanka ayaa farxad leh',
        correctAnswerFr: 'Kulanka ayaa farxad leh',
        options: ['Kulanka ayaa farxad leh', 'Sidee tahay?', 'Salaan', 'Nabadgelyo']
      },
      {
        id: 'so-v1-1-12',
        type: 'type-answer',
        question: 'Type "See you later" in Somali',
        questionFr: 'Tapez "À bientôt" en Somali',
        correctAnswer: 'Markale',
        correctAnswerFr: 'Markale'
      },
      {
        id: 'so-v1-1-13',
        type: 'multiple-choice',
        question: 'What is "You\'re welcome" in Somali?',
        questionFr: 'Comment dit-on "De rien" en Somali?',
        correctAnswer: 'Mahadsanid',
        correctAnswerFr: 'Mahadsanid',
        options: ['Mahadsanid', 'Fadlan', 'Raali ahaan', 'Salaan']
      },
      {
        id: 'so-v1-1-14',
        type: 'multiple-choice',
        question: 'How do you say "Good evening" in Somali?',
        questionFr: 'Comment dit-on "Bonsoir" en Somali?',
        correctAnswer: 'Galab wanaagsan',
        correctAnswerFr: 'Galab wanaagsan',
        options: ['Galab wanaagsan', 'Subax wanaagsan', 'Habeen wanaagsan', 'Salaan']
      },
      {
        id: 'so-v1-1-15',
        type: 'type-answer',
        question: 'Type "Good night" in Somali',
        questionFr: 'Tapez "Bonne nuit" en Somali',
        correctAnswer: 'Habeen wanaagsan',
        correctAnswerFr: 'Habeen wanaagsan'
      },
      {
        id: 'so-v1-1-16',
        type: 'multiple-choice',
        question: 'What is "Yes" in Somali?',
        questionFr: 'Comment dit-on "Oui" en Somali?',
        correctAnswer: 'Haa',
        correctAnswerFr: 'Haa',
        options: ['Haa', 'Maya', 'Mahadsanid', 'Salaan']
      },
      {
        id: 'so-v1-1-17',
        type: 'multiple-choice',
        question: 'How do you say "No" in Somali?',
        questionFr: 'Comment dit-on "Non" en Somali?',
        correctAnswer: 'Maya',
        correctAnswerFr: 'Maya',
        options: ['Maya', 'Haa', 'Nabadgelyo', 'Fadlan']
      },
      {
        id: 'so-v1-1-18',
        type: 'type-answer',
        question: 'Type "Maybe" in Somali',
        questionFr: 'Tapez "Peut-être" en Somali',
        correctAnswer: 'Laga yaabaa',
        correctAnswerFr: 'Laga yaabaa'
      },
      {
        id: 'so-v1-1-19',
        type: 'multiple-choice',
        question: 'What is "I don\'t understand" in Somali?',
        questionFr: 'Comment dit-on "Je ne comprends pas" en Somali?',
        correctAnswer: 'Ma fahmin',
        correctAnswerFr: 'Ma fahmin',
        options: ['Ma fahmin', 'Mahadsanid', 'Nabadgelyo', 'Raali ahaan']
      },
      {
        id: 'so-v1-1-20',
        type: 'multiple-choice',
        question: 'How do you say "I don\'t know" in Somali?',
        questionFr: 'Comment dit-on "Je ne sais pas" en Somali?',
        correctAnswer: 'Ma ogi',
        correctAnswerFr: 'Ma ogi',
        options: ['Ma ogi', 'Mahadsanid', 'Nabadgelyo', 'Raali ahaan']
      }
    ]
  },
  // Stage 1, Mission 2: Common Phrases
  {
    id: 'so-vocab-1-2',
    stageId: 'somali-stage-1',
    lessonNumber: 2,
    type: 'vocabulary',
    title: 'Common Phrases',
    titleFr: 'Phrases courantes',
    xpReward: 10,
    exercises: [
      {
        id: 'so-v1-2-1',
        type: 'multiple-choice',
        question: 'How do you say "What is your name?" in Somali?',
        questionFr: 'Comment dit-on "Comment vous appelez-vous?" en Somali?',
        correctAnswer: 'Magacaagu waa maxay?',
        correctAnswerFr: 'Magacaagu waa maxay?',
        options: ['Magacaagu waa maxay?', 'Mahadsanid maxay?', 'Nabadgelyo maxay?', 'Fadlan maxay?']
      },
      {
        id: 'so-v1-2-2',
        type: 'type-answer',
        question: 'Type "My name is..." in Somali',
        questionFr: 'Tapez "Je m\'appelle..." en Somali',
        correctAnswer: 'Magacaygu waa...',
        correctAnswerFr: 'Magacaygu waa...'
      },
      {
        id: 'so-v1-2-3',
        type: 'multiple-choice',
        question: 'What is "Where are you from?" in Somali?',
        questionFr: 'Comment dit-on "D\'où venez-vous?" en Somali?',
        correctAnswer: 'Halkee ka timid?',
        correctAnswerFr: 'Halkee ka timid?',
        options: ['Halkee ka timid?', 'Mahadsanid ka timid?', 'Nabadgelyo ka timid?', 'Fadlan ka timid?']
      },
      {
        id: 'so-v1-2-4',
        type: 'type-answer',
        question: 'Type "I am from..." in Somali',
        questionFr: 'Tapez "Je viens de..." en Somali',
        correctAnswer: 'Waxaan ka imid...',
        correctAnswerFr: 'Waxaan ka imid...'
      },
      {
        id: 'so-v1-2-5',
        type: 'multiple-choice',
        question: 'How do you say "How old are you?" in Somali?',
        questionFr: 'Comment dit-on "Quel âge avez-vous?" en Somali?',
        correctAnswer: 'Imisa jir ayaad tahay?',
        correctAnswerFr: 'Imisa jir ayaad tahay?',
        options: ['Imisa jir ayaad tahay?', 'Mahadsanid jir?', 'Nabadgelyo jir?', 'Fadlan jir?']
      },
      {
        id: 'so-v1-2-6',
        type: 'type-answer',
        question: 'Type "I am ... years old" in Somali',
        questionFr: 'Tapez "J\'ai ... ans" en Somali',
        correctAnswer: 'Waxaan ahay ... jir',
        correctAnswerFr: 'Waxaan ahay ... jir'
      },
      {
        id: 'so-v1-2-7',
        type: 'multiple-choice',
        question: 'What is "Where do you live?" in Somali?',
        questionFr: 'Comment dit-on "Où habitez-vous?" en Somali?',
        correctAnswer: 'Halkee ku nooshahay?',
        correctAnswerFr: 'Halkee ku nooshahay?',
        options: ['Halkee ku nooshahay?', 'Mahadsanid ku nooshahay?', 'Nabadgelyo ku nooshahay?', 'Fadlan ku nooshahay?']
      },
      {
        id: 'so-v1-2-8',
        type: 'type-answer',
        question: 'Type "I live in..." in Somali',
        questionFr: 'Tapez "J\'habite à..." en Somali',
        correctAnswer: 'Waxaan ku noolahay...',
        correctAnswerFr: 'Waxaan ku noolahay...'
      },
      {
        id: 'so-v1-2-9',
        type: 'multiple-choice',
        question: 'How do you say "What do you do?" in Somali?',
        questionFr: 'Comment dit-on "Que faites-vous?" en Somali?',
        correctAnswer: 'Maxaad samaysaa?',
        correctAnswerFr: 'Maxaad samaysaa?',
        options: ['Maxaad samaysaa?', 'Mahadsanid samaysaa?', 'Nabadgelyo samaysaa?', 'Fadlan samaysaa?']
      },
      {
        id: 'so-v1-2-10',
        type: 'type-answer',
        question: 'Type "I am a student" in Somali',
        questionFr: 'Tapez "Je suis étudiant" en Somali',
        correctAnswer: 'Waxaan ahay arday',
        correctAnswerFr: 'Waxaan ahay arday'
      },
      {
        id: 'so-v1-2-11',
        type: 'multiple-choice',
        question: 'What is "I am learning Somali" in Somali?',
        questionFr: 'Comment dit-on "J\'apprends le Somali" en Somali?',
        correctAnswer: 'Waxaan baranayaa Soomaali',
        correctAnswerFr: 'Waxaan baranayaa Soomaali',
        options: ['Waxaan baranayaa Soomaali', 'Mahadsanid Soomaali', 'Nabadgelyo Soomaali', 'Fadlan Soomaali']
      },
      {
        id: 'so-v1-2-12',
        type: 'type-answer',
        question: 'Type "I speak a little Somali" in Somali',
        questionFr: 'Tapez "Je parle un peu Somali" en Somali',
        correctAnswer: 'Waxaan ku hadlaa Soomaali yar',
        correctAnswerFr: 'Waxaan ku hadlaa Soomaali yar'
      },
      {
        id: 'so-v1-2-13',
        type: 'multiple-choice',
        question: 'How do you say "I don\'t speak Somali well" in Somali?',
        questionFr: 'Comment dit-on "Je ne parle pas bien Somali" en Somali?',
        correctAnswer: 'Ma ku hadli karo Soomaali si fiican',
        correctAnswerFr: 'Ma ku hadli karo Soomaali si fiican',
        options: ['Ma ku hadli karo Soomaali si fiican', 'Mahadsanid Soomaali', 'Nabadgelyo Soomaali', 'Fadlan Soomaali']
      },
      {
        id: 'so-v1-2-14',
        type: 'type-answer',
        question: 'Type "Can you help me?" in Somali',
        questionFr: 'Tapez "Pouvez-vous m\'aider?" en Somali',
        correctAnswer: 'Ma i caawin kartaa?',
        correctAnswerFr: 'Ma i caawin kartaa?'
      },
      {
        id: 'so-v1-2-15',
        type: 'multiple-choice',
        question: 'What is "Of course" in Somali?',
        questionFr: 'Comment dit-on "Bien sûr" en Somali?',
        correctAnswer: 'Haa',
        correctAnswerFr: 'Haa',
        options: ['Haa', 'Maya', 'Mahadsanid', 'Fadlan']
      },
      {
        id: 'so-v1-2-16',
        type: 'multiple-choice',
        question: 'How do you say "I need help" in Somali?',
        questionFr: 'Comment dit-on "J\'ai besoin d\'aide" en Somali?',
        correctAnswer: 'Waxaan u baahanahay caawimaad',
        correctAnswerFr: 'Waxaan u baahanahay caawimaad',
        options: ['Waxaan u baahanahay caawimaad', 'Mahadsanid caawimaad', 'Nabadgelyo caawimaad', 'Fadlan caawimaad']
      },
      {
        id: 'so-v1-2-17',
        type: 'type-answer',
        question: 'Type "Can you repeat that?" in Somali',
        questionFr: 'Tapez "Pouvez-vous répéter?" en Somali',
        correctAnswer: 'Ma dib u dhihi kartaa?',
        correctAnswerFr: 'Ma dib u dhihi kartaa?'
      },
      {
        id: 'so-v1-2-18',
        type: 'multiple-choice',
        question: 'What is "Speak slowly" in Somali?',
        questionFr: 'Comment dit-on "Parlez lentement" en Somali?',
        correctAnswer: 'Ku hadal si tartiib ah',
        correctAnswerFr: 'Ku hadal si tartiib ah',
        options: ['Ku hadal si tartiib ah', 'Ku hadal mahadsanid', 'Ku hadal nabadgelyo', 'Ku hadal fadlan']
      },
      {
        id: 'so-v1-2-19',
        type: 'type-answer',
        question: 'Type "I understand" in Somali',
        questionFr: 'Tapez "Je comprends" en Somali',
        correctAnswer: 'Waan fahmay',
        correctAnswerFr: 'Waan fahmay'
      },
      {
        id: 'so-v1-2-20',
        type: 'multiple-choice',
        question: 'How do you say "That\'s correct" in Somali?',
        questionFr: 'Comment dit-on "C\'est correct" en Somali?',
        correctAnswer: 'Waa sax',
        correctAnswerFr: 'Waa sax',
        options: ['Waa sax', 'Waa khalad', 'Mahadsanid', 'Fadlan']
      }
    ]
  }
];
