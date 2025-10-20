import { Lesson } from '../types';

export const berberLessons: Lesson[] = [
  // Stage 1, Mission 1: Greetings
  {
    id: 'ber-vocab-1-1',
    stageId: 'berber-stage-1',
    lessonNumber: 1,
    type: 'vocabulary',
    title: 'Basic Greetings',
    titleFr: 'Salutations de base',
    xpReward: 10,
    exercises: [
      {
        id: 'ber-v1-1-1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Berber?',
        questionFr: 'Comment dit-on "Bonjour" en Berbère?',
        correctAnswer: 'Azul',
        correctAnswerFr: 'Azul',
        options: ['Azul', 'Ar tufat', 'Tanemmirt', 'Ssusm iyi']
      },
      {
        id: 'ber-v1-1-2',
        type: 'multiple-choice',
        question: 'What does "Azul" mean?',
        questionFr: 'Que signifie "Azul"?',
        correctAnswer: 'Hello',
        correctAnswerFr: 'Bonjour',
        options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
        optionsFr: ['Bonjour', 'Au revoir', 'Merci', 'S\'il vous plaît']
      },
      {
        id: 'ber-v1-1-3',
        type: 'type-answer',
        question: 'Type the Berber word for "Goodbye"',
        questionFr: 'Tapez le mot Berbère pour "Au revoir"',
        correctAnswer: 'Ar tufat',
        correctAnswerFr: 'Ar tufat'
      },
      {
        id: 'ber-v1-1-4',
        type: 'multiple-choice',
        question: 'What is "Good morning" in Berber?',
        questionFr: 'Comment dit-on "Bonjour" (matin) en Berbère?',
        correctAnswer: 'Azul fell-awen',
        correctAnswerFr: 'Azul fell-awen',
        options: ['Azul fell-awen', 'Azul fell-awen', 'Ar tufat', 'Tanemmirt']
      },
      {
        id: 'ber-v1-1-5',
        type: 'multiple-choice',
        question: '"Amek tella?" means:',
        questionFr: '"Amek tella?" signifie:',
        correctAnswer: 'How are you?',
        correctAnswerFr: 'Comment allez-vous?',
        options: ['Hello', 'How are you?', 'Thank you', 'Goodbye'],
        optionsFr: ['Bonjour', 'Comment allez-vous?', 'Merci', 'Au revoir']
      },
      {
        id: 'ber-v1-1-6',
        type: 'type-answer',
        question: 'Type "Thank you" in Berber',
        questionFr: 'Tapez "Merci" en Berbère',
        correctAnswer: 'Tanemmirt',
        correctAnswerFr: 'Tanemmirt'
      },
      {
        id: 'ber-v1-1-7',
        type: 'multiple-choice',
        question: 'What is "Please" in Berber?',
        questionFr: 'Comment dit-on "S\'il vous plaît" en Berbère?',
        correctAnswer: 'Ssusm iyi',
        correctAnswerFr: 'Ssusm iyi',
        options: ['Ssusm iyi', 'Tanemmirt', 'Ar tufat', 'Azul']
      },
      {
        id: 'ber-v1-1-8',
        type: 'multiple-choice',
        question: 'How do you respond to "Amek tella?"?',
        questionFr: 'Comment répondez-vous à "Amek tella?"?',
        correctAnswer: 'La bas',
        correctAnswerFr: 'La bas',
        options: ['La bas', 'Azul', 'Ar tufat', 'Tanemmirt']
      },
      {
        id: 'ber-v1-1-9',
        type: 'type-answer',
        question: 'Type "Excuse me" in Berber',
        questionFr: 'Tapez "Excusez-moi" en Berbère',
        correctAnswer: 'Smhith iyi',
        correctAnswerFr: 'Smhith iyi'
      },
      {
        id: 'ber-v1-1-10',
        type: 'multiple-choice',
        question: 'What is "Sorry" in Berber?',
        questionFr: 'Comment dit-on "Désolé" en Berbère?',
        correctAnswer: 'Smhith iyi',
        correctAnswerFr: 'Smhith iyi',
        options: ['Smhith iyi', 'Tanemmirt', 'Ssusm iyi', 'Ar tufat']
      },
      {
        id: 'ber-v1-1-11',
        type: 'multiple-choice',
        question: 'How do you say "Nice to meet you" in Berber?',
        questionFr: 'Comment dit-on "Ravi de vous rencontrer" en Berbère?',
        correctAnswer: 'Tanemmirt',
        correctAnswerFr: 'Tanemmirt',
        options: ['Tanemmirt', 'Amek tella?', 'Azul', 'Ar tufat']
      },
      {
        id: 'ber-v1-1-12',
        type: 'type-answer',
        question: 'Type "See you later" in Berber',
        questionFr: 'Tapez "À bientôt" en Berbère',
        correctAnswer: 'Ar tufat',
        correctAnswerFr: 'Ar tufat'
      },
      {
        id: 'ber-v1-1-13',
        type: 'multiple-choice',
        question: 'What is "You\'re welcome" in Berber?',
        questionFr: 'Comment dit-on "De rien" en Berbère?',
        correctAnswer: 'Tanemmirt',
        correctAnswerFr: 'Tanemmirt',
        options: ['Tanemmirt', 'Ssusm iyi', 'Smhith iyi', 'Azul']
      },
      {
        id: 'ber-v1-1-14',
        type: 'multiple-choice',
        question: 'How do you say "Good evening" in Berber?',
        questionFr: 'Comment dit-on "Bonsoir" en Berbère?',
        correctAnswer: 'Azul fell-awen',
        correctAnswerFr: 'Azul fell-awen',
        options: ['Azul fell-awen', 'Azul fell-awen', 'Ar tufat', 'Tanemmirt']
      },
      {
        id: 'ber-v1-1-15',
        type: 'type-answer',
        question: 'Type "Good night" in Berber',
        questionFr: 'Tapez "Bonne nuit" en Berbère',
        correctAnswer: 'Ar tufat',
        correctAnswerFr: 'Ar tufat'
      },
      {
        id: 'ber-v1-1-16',
        type: 'multiple-choice',
        question: 'What is "Yes" in Berber?',
        questionFr: 'Comment dit-on "Oui" en Berbère?',
        correctAnswer: 'Ih',
        correctAnswerFr: 'Ih',
        options: ['Ih', 'Uhu', 'Tanemmirt', 'Azul']
      },
      {
        id: 'ber-v1-1-17',
        type: 'multiple-choice',
        question: 'How do you say "No" in Berber?',
        questionFr: 'Comment dit-on "Non" en Berbère?',
        correctAnswer: 'Uhu',
        correctAnswerFr: 'Uhu',
        options: ['Uhu', 'Ih', 'Ar tufat', 'Ssusm iyi']
      },
      {
        id: 'ber-v1-1-18',
        type: 'type-answer',
        question: 'Type "Maybe" in Berber',
        questionFr: 'Tapez "Peut-être" en Berbère',
        correctAnswer: 'Yella',
        correctAnswerFr: 'Yella'
      },
      {
        id: 'ber-v1-1-19',
        type: 'multiple-choice',
        question: 'What is "I don\'t understand" in Berber?',
        questionFr: 'Comment dit-on "Je ne comprends pas" en Berbère?',
        correctAnswer: 'Ur fehhem ara',
        correctAnswerFr: 'Ur fehhem ara',
        options: ['Ur fehhem ara', 'Tanemmirt', 'Ar tufat', 'Smhith iyi']
      },
      {
        id: 'ber-v1-1-20',
        type: 'multiple-choice',
        question: 'How do you say "I don\'t know" in Berber?',
        questionFr: 'Comment dit-on "Je ne sais pas" en Berbère?',
        correctAnswer: 'Ur ssine ara',
        correctAnswerFr: 'Ur ssine ara',
        options: ['Ur ssine ara', 'Tanemmirt', 'Ar tufat', 'Smhith iyi']
      }
    ]
  },
  // Stage 1, Mission 2: Common Phrases
  {
    id: 'ber-vocab-1-2',
    stageId: 'berber-stage-1',
    lessonNumber: 2,
    type: 'vocabulary',
    title: 'Common Phrases',
    titleFr: 'Phrases courantes',
    xpReward: 10,
    exercises: [
      {
        id: 'ber-v1-2-1',
        type: 'multiple-choice',
        question: 'How do you say "What is your name?" in Berber?',
        questionFr: 'Comment dit-on "Comment vous appelez-vous?" en Berbère?',
        correctAnswer: 'Amek ism-ik?',
        correctAnswerFr: 'Amek ism-ik?',
        options: ['Amek ism-ik?', 'Tanemmirt ism-ik?', 'Ar tufat ism-ik?', 'Ssusm iyi ism-ik?']
      },
      {
        id: 'ber-v1-2-2',
        type: 'type-answer',
        question: 'Type "My name is..." in Berber',
        questionFr: 'Tapez "Je m\'appelle..." en Berbère',
        correctAnswer: 'Ism-iw...',
        correctAnswerFr: 'Ism-iw...'
      },
      {
        id: 'ber-v1-2-3',
        type: 'multiple-choice',
        question: 'What is "Where are you from?" in Berber?',
        questionFr: 'Comment dit-on "D\'où venez-vous?" en Berbère?',
        correctAnswer: 'Anwa tamurt i d-tekkid?',
        correctAnswerFr: 'Anwa tamurt i d-tekkid?',
        options: ['Anwa tamurt i d-tekkid?', 'Tanemmirt tamurt?', 'Ar tufat tamurt?', 'Ssusm iyi tamurt?']
      },
      {
        id: 'ber-v1-2-4',
        type: 'type-answer',
        question: 'Type "I am from..." in Berber',
        questionFr: 'Tapez "Je viens de..." en Berbère',
        correctAnswer: 'Nekk d-usi...',
        correctAnswerFr: 'Nekk d-usi...'
      },
      {
        id: 'ber-v1-2-5',
        type: 'multiple-choice',
        question: 'How do you say "How old are you?" in Berber?',
        questionFr: 'Comment dit-on "Quel âge avez-vous?" en Berbère?',
        correctAnswer: 'Acḥal iseggasen i tesɛed?',
        correctAnswerFr: 'Acḥal iseggasen i tesɛed?',
        options: ['Acḥal iseggasen i tesɛed?', 'Tanemmirt iseggasen?', 'Ar tufat iseggasen?', 'Ssusm iyi iseggasen?']
      },
      {
        id: 'ber-v1-2-6',
        type: 'type-answer',
        question: 'Type "I am ... years old" in Berber',
        questionFr: 'Tapez "J\'ai ... ans" en Berbère',
        correctAnswer: 'Nekk ɣur-i ... iseggasen',
        correctAnswerFr: 'Nekk ɣur-i ... iseggasen'
      },
      {
        id: 'ber-v1-2-7',
        type: 'multiple-choice',
        question: 'What is "Where do you live?" in Berber?',
        questionFr: 'Comment dit-on "Où habitez-vous?" en Berbère?',
        correctAnswer: 'Anwa tamurt i tezzed?',
        correctAnswerFr: 'Anwa tamurt i tezzed?',
        options: ['Anwa tamurt i tezzed?', 'Tanemmirt tamurt?', 'Ar tufat tamurt?', 'Ssusm iyi tamurt?']
      },
      {
        id: 'ber-v1-2-8',
        type: 'type-answer',
        question: 'Type "I live in..." in Berber',
        questionFr: 'Tapez "J\'habite à..." en Berbère',
        correctAnswer: 'Nekk zzedɣ...',
        correctAnswerFr: 'Nekk zzedɣ...'
      },
      {
        id: 'ber-v1-2-9',
        type: 'multiple-choice',
        question: 'How do you say "What do you do?" in Berber?',
        questionFr: 'Comment dit-on "Que faites-vous?" en Berbère?',
        correctAnswer: 'D acu i tettxedmeḍ?',
        correctAnswerFr: 'D acu i tettxedmeḍ?',
        options: ['D acu i tettxedmeḍ?', 'Tanemmirt tettxedmeḍ?', 'Ar tufat tettxedmeḍ?', 'Ssusm iyi tettxedmeḍ?']
      },
      {
        id: 'ber-v1-2-10',
        type: 'type-answer',
        question: 'Type "I am a student" in Berber',
        questionFr: 'Tapez "Je suis étudiant" en Berbère',
        correctAnswer: 'Nekk d-almud',
        correctAnswerFr: 'Nekk d-almud'
      },
      {
        id: 'ber-v1-2-11',
        type: 'multiple-choice',
        question: 'What is "I am learning Berber" in Berber?',
        questionFr: 'Comment dit-on "J\'apprends le Berbère" en Berbère?',
        correctAnswer: 'Nekk la tt-ɣerrem Tamaziɣt',
        correctAnswerFr: 'Nekk la tt-ɣerrem Tamaziɣt',
        options: ['Nekk la tt-ɣerrem Tamaziɣt', 'Tanemmirt Tamaziɣt', 'Ar tufat Tamaziɣt', 'Ssusm iyi Tamaziɣt']
      },
      {
        id: 'ber-v1-2-12',
        type: 'type-answer',
        question: 'Type "I speak a little Berber" in Berber',
        questionFr: 'Tapez "Je parle un peu Berbère" en Berbère',
        correctAnswer: 'Nekk ssawaleɣ Tamaziɣt meẓẓiyen',
        correctAnswerFr: 'Nekk ssawaleɣ Tamaziɣt meẓẓiyen'
      },
      {
        id: 'ber-v1-2-13',
        type: 'multiple-choice',
        question: 'How do you say "I don\'t speak Berber well" in Berber?',
        questionFr: 'Comment dit-on "Je ne parle pas bien Berbère" en Berbère?',
        correctAnswer: 'Ur ssawaleɣ ara Tamaziɣt ilhan',
        correctAnswerFr: 'Ur ssawaleɣ ara Tamaziɣt ilhan',
        options: ['Ur ssawaleɣ ara Tamaziɣt ilhan', 'Tanemmirt Tamaziɣt', 'Ar tufat Tamaziɣt', 'Ssusm iyi Tamaziɣt']
      },
      {
        id: 'ber-v1-2-14',
        type: 'type-answer',
        question: 'Type "Can you help me?" in Berber',
        questionFr: 'Tapez "Pouvez-vous m\'aider?" en Berbère',
        correctAnswer: 'Tzemreḍ ad iyi tɛawneḍ?',
        correctAnswerFr: 'Tzemreḍ ad iyi tɛawneḍ?'
      },
      {
        id: 'ber-v1-2-15',
        type: 'multiple-choice',
        question: 'What is "Of course" in Berber?',
        questionFr: 'Comment dit-on "Bien sûr" en Berbère?',
        correctAnswer: 'Ih',
        correctAnswerFr: 'Ih',
        options: ['Ih', 'Uhu', 'Tanemmirt', 'Ssusm iyi']
      },
      {
        id: 'ber-v1-2-16',
        type: 'multiple-choice',
        question: 'How do you say "I need help" in Berber?',
        questionFr: 'Comment dit-on "J\'ai besoin d\'aide" en Berbère?',
        correctAnswer: 'Nekk ḥesbeɣ tɛawent',
        correctAnswerFr: 'Nekk ḥesbeɣ tɛawent',
        options: ['Nekk ḥesbeɣ tɛawent', 'Tanemmirt tɛawent', 'Ar tufat tɛawent', 'Ssusm iyi tɛawent']
      },
      {
        id: 'ber-v1-2-17',
        type: 'type-answer',
        question: 'Type "Can you repeat that?" in Berber',
        questionFr: 'Tapez "Pouvez-vous répéter?" en Berbère',
        correctAnswer: 'Tzemreḍ ad t-id-tesnulfuḍ?',
        correctAnswerFr: 'Tzemreḍ ad t-id-tesnulfuḍ?'
      },
      {
        id: 'ber-v1-2-18',
        type: 'multiple-choice',
        question: 'What is "Speak slowly" in Berber?',
        questionFr: 'Comment dit-on "Parlez lentement" en Berbère?',
        correctAnswer: 'Sawel s-tawwurt',
        correctAnswerFr: 'Sawel s-tawwurt',
        options: ['Sawel s-tawwurt', 'Sawel tanemmirt', 'Sawel ar tufat', 'Sawel ssusm iyi']
      },
      {
        id: 'ber-v1-2-19',
        type: 'type-answer',
        question: 'Type "I understand" in Berber',
        questionFr: 'Tapez "Je comprends" en Berbère',
        correctAnswer: 'Fehhem',
        correctAnswerFr: 'Fehhem'
      },
      {
        id: 'ber-v1-2-20',
        type: 'multiple-choice',
        question: 'How do you say "That\'s correct" in Berber?',
        questionFr: 'Comment dit-on "C\'est correct" en Berbère?',
        correctAnswer: 'Ih',
        correctAnswerFr: 'Ih',
        options: ['Ih', 'Uhu', 'Tanemmirt', 'Ssusm iyi']
      }
    ]
  }
];
