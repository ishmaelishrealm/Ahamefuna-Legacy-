import { Lesson } from '../../types';

export const hausaLessons: Lesson[] = [
  // VOCABULARY LESSONS (40 questions)
  {
    id: 'ha-vocab-1',
    type: 'vocabulary',
    title: 'Basic Greetings',
    titleFr: 'Salutations de base',
    level: 1,
    xpReward: 10,
    exercises: [
      {
        id: 'ha-v1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Hausa?',
        questionFr: 'Comment dit-on "Bonjour" en Hausa?',
        correctAnswer: 'Sannu',
        options: ['Sannu', 'Nagode', 'Sai anjima', 'Yauwa']
      },
      {
        id: 'ha-v2',
        type: 'multiple-choice',
        question: 'What does "Na gode" mean?',
        questionFr: 'Que signifie "Na gode"?',
        correctAnswer: 'Thank you',
        options: ['Hello', 'Thank you', 'Goodbye', 'Please']
      },
      {
        id: 'ha-v3',
        type: 'type-answer',
        question: 'Type the Hausa word for "Goodbye"',
        questionFr: 'Tapez le mot Hausa pour "Au revoir"',
        correctAnswer: 'Sai anjima'
      },
      {
        id: 'ha-v4',
        type: 'multiple-choice',
        question: 'What is "Good morning" in Hausa?',
        questionFr: 'Comment dit-on "Bonjour" (matin) en Hausa?',
        correctAnswer: 'Ina kwana',
        options: ['Ina kwana', 'Ina yini', 'Barka da rana', 'Sannu']
      },
      {
        id: 'ha-v5',
        type: 'multiple-choice',
        question: '"Yaya dai?" means:',
        questionFr: '"Yaya dai?" signifie:',
        correctAnswer: 'How are you?',
        options: ['Goodbye', 'How are you?', 'Welcome', 'Excuse me']
      }
    ]
  },
  {
    id: 'ha-vocab-2',
    type: 'vocabulary',
    title: 'Numbers 1-10',
    titleFr: 'Numéros 1-10',
    level: 1,
    xpReward: 10,
    exercises: [
      {
        id: 'ha-v6',
        type: 'multiple-choice',
        question: 'What is "One" in Hausa?',
        questionFr: 'Comment dit-on "Un" en Hausa?',
        correctAnswer: 'Daya',
        options: ['Daya', 'Biyu', 'Uku', 'Hudu']
      },
      {
        id: 'ha-v7',
        type: 'type-answer',
        question: 'Type the number "Five" in Hausa',
        questionFr: 'Tapez le nombre "Cinq" en Hausa',
        correctAnswer: 'Biyar'
      },
      {
        id: 'ha-v8',
        type: 'multiple-choice',
        question: '"Goma" means:',
        questionFr: '"Goma" signifie:',
        correctAnswer: 'Ten',
        options: ['Five', 'Eight', 'Ten', 'Seven']
      },
      {
        id: 'ha-v9',
        type: 'multiple-choice',
        question: 'What is "Three" in Hausa?',
        questionFr: 'Comment dit-on "Trois" en Hausa?',
        correctAnswer: 'Uku',
        options: ['Biyu', 'Uku', 'Hudu', 'Biyar']
      },
      {
        id: 'ha-v10',
        type: 'type-answer',
        question: 'Type "Seven" in Hausa',
        questionFr: 'Tapez "Sept" en Hausa',
        correctAnswer: 'Bakwai'
      }
    ]
  },
  {
    id: 'ha-vocab-3',
    type: 'vocabulary',
    title: 'Family Members',
    titleFr: 'Membres de la famille',
    level: 2,
    xpReward: 10,
    exercises: [
      {
        id: 'ha-v11',
        type: 'multiple-choice',
        question: 'What is "Mother" in Hausa?',
        questionFr: 'Comment dit-on "Mère" en Hausa?',
        correctAnswer: 'Uwa',
        options: ['Uwa', 'Uba', 'Yaya', 'Kane']
      },
      {
        id: 'ha-v12',
        type: 'multiple-choice',
        question: '"Uba" means:',
        questionFr: '"Uba" signifie:',
        correctAnswer: 'Father',
        options: ['Mother', 'Father', 'Sister', 'Brother']
      },
      {
        id: 'ha-v13',
        type: 'type-answer',
        question: 'Type the Hausa word for "Brother"',
        questionFr: 'Tapez le mot Hausa pour "Frère"',
        correctAnswer: 'Dan\'uwa'
      },
      {
        id: 'ha-v14',
        type: 'multiple-choice',
        question: 'What is "Sister" in Hausa?',
        questionFr: 'Comment dit-on "Sœur" en Hausa?',
        correctAnswer: 'Yar\'uwa',
        options: ['Yar\'uwa', 'Dan\'uwa', 'Uwa', 'Yaro']
      },
      {
        id: 'ha-v15',
        type: 'type-answer',
        question: 'Type "Child" in Hausa',
        questionFr: 'Tapez "Enfant" en Hausa',
        correctAnswer: 'Yaro'
      }
    ]
  },
  {
    id: 'ha-vocab-4',
    type: 'vocabulary',
    title: 'Common Foods',
    titleFr: 'Aliments courants',
    level: 2,
    xpReward: 10,
    exercises: [
      {
        id: 'ha-v16',
        type: 'multiple-choice',
        question: 'What is "Water" in Hausa?',
        questionFr: 'Comment dit-on "Eau" en Hausa?',
        correctAnswer: 'Ruwa',
        options: ['Ruwa', 'Abinci', 'Shinkafa', 'Fura']
      },
      {
        id: 'ha-v17',
        type: 'multiple-choice',
        question: '"Abinci" means:',
        questionFr: '"Abinci" signifie:',
        correctAnswer: 'Food',
        options: ['Water', 'Food', 'Milk', 'Bread']
      },
      {
        id: 'ha-v18',
        type: 'type-answer',
        question: 'Type the Hausa word for "Rice"',
        questionFr: 'Tapez le mot Hausa pour "Riz"',
        correctAnswer: 'Shinkafa'
      },
      {
        id: 'ha-v19',
        type: 'multiple-choice',
        question: 'What is "Meat" in Hausa?',
        questionFr: 'Comment dit-on "Viande" en Hausa?',
        correctAnswer: 'Nama',
        options: ['Nama', 'Kifi', 'Shinkafa', 'Mai']
      },
      {
        id: 'ha-v20',
        type: 'type-answer',
        question: 'Type "Bread" in Hausa',
        questionFr: 'Tapez "Pain" en Hausa',
        correctAnswer: 'Burodi'
      }
    ]
  },
  {
    id: 'ha-vocab-5',
    type: 'vocabulary',
    title: 'Colors',
    titleFr: 'Couleurs',
    level: 3,
    xpReward: 10,
    exercises: [
      {
        id: 'ha-v21',
        type: 'multiple-choice',
        question: 'What is "Red" in Hausa?',
        questionFr: 'Comment dit-on "Rouge" en Hausa?',
        correctAnswer: 'Ja',
        options: ['Ja', 'Baki', 'Fari', 'Kore']
      },
      {
        id: 'ha-v22',
        type: 'multiple-choice',
        question: '"Kore" means:',
        questionFr: '"Kore" signifie:',
        correctAnswer: 'Green',
        options: ['Red', 'Blue', 'Green', 'Yellow']
      },
      {
        id: 'ha-v23',
        type: 'type-answer',
        question: 'Type "White" in Hausa',
        questionFr: 'Tapez "Blanc" en Hausa',
        correctAnswer: 'Fari'
      },
      {
        id: 'ha-v24',
        type: 'multiple-choice',
        question: 'What is "Black" in Hausa?',
        questionFr: 'Comment dit-on "Noir" en Hausa?',
        correctAnswer: 'Baki',
        options: ['Baki', 'Fari', 'Ja', 'Kore']
      },
      {
        id: 'ha-v25',
        type: 'type-answer',
        question: 'Type "Yellow" in Hausa',
        questionFr: 'Tapez "Jaune" en Hausa',
        correctAnswer: 'Rawaya'
      }
    ]
  },
  {
    id: 'ha-vocab-6',
    type: 'vocabulary',
    title: 'Animals',
    titleFr: 'Animaux',
    level: 3,
    xpReward: 10,
    exercises: [
      {
        id: 'ha-v26',
        type: 'multiple-choice',
        question: 'What is "Dog" in Hausa?',
        questionFr: 'Comment dit-on "Chien" en Hausa?',
        correctAnswer: 'Kare',
        options: ['Kare', 'Kyanwa', 'Zaki', 'Giwa']
      },
      {
        id: 'ha-v27',
        type: 'multiple-choice',
        question: '"Zaki" means:',
        questionFr: '"Zaki" signifie:',
        correctAnswer: 'Lion',
        options: ['Dog', 'Elephant', 'Cat', 'Lion']
      },
      {
        id: 'ha-v28',
        type: 'type-answer',
        question: 'Type "Cat" in Hausa',
        questionFr: 'Tapez "Chat" en Hausa',
        correctAnswer: 'Kyanwa'
      },
      {
        id: 'ha-v29',
        type: 'multiple-choice',
        question: 'What is "Horse" in Hausa?',
        questionFr: 'Comment dit-on "Cheval" en Hausa?',
        correctAnswer: 'Doki',
        options: ['Doki', 'Kare', 'Giwa', 'Akuya']
      },
      {
        id: 'ha-v30',
        type: 'type-answer',
        question: 'Type "Elephant" in Hausa',
        questionFr: 'Tapez "Éléphant" en Hausa',
        correctAnswer: 'Giwa'
      }
    ]
  },
  {
    id: 'ha-vocab-7',
    type: 'vocabulary',
    title: 'Body Parts',
    titleFr: 'Parties du corps',
    level: 4,
    xpReward: 10,
    exercises: [
      {
        id: 'ha-v31',
        type: 'multiple-choice',
        question: 'What is "Head" in Hausa?',
        questionFr: 'Comment dit-on "Tête" en Hausa?',
        correctAnswer: 'Kai',
        options: ['Kai', 'Hannu', 'Kafa', 'Ido']
      },
      {
        id: 'ha-v32',
        type: 'multiple-choice',
        question: '"Ido" means:',
        questionFr: '"Ido" signifie:',
        correctAnswer: 'Eye',
        options: ['Head', 'Hand', 'Eye', 'Foot']
      },
      {
        id: 'ha-v33',
        type: 'type-answer',
        question: 'Type "Hand" in Hausa',
        questionFr: 'Tapez "Main" en Hausa',
        correctAnswer: 'Hannu'
      },
      {
        id: 'ha-v34',
        type: 'multiple-choice',
        question: 'What is "Foot" in Hausa?',
        questionFr: 'Comment dit-on "Pied" en Hausa?',
        correctAnswer: 'Kafa',
        options: ['Kafa', 'Hannu', 'Kai', 'Kunne']
      },
      {
        id: 'ha-v35',
        type: 'type-answer',
        question: 'Type "Mouth" in Hausa',
        questionFr: 'Tapez "Bouche" en Hausa',
        correctAnswer: 'Baki'
      }
    ]
  },
  {
    id: 'ha-vocab-8',
    type: 'vocabulary',
    title: 'Daily Activities',
    titleFr: 'Activités quotidiennes',
    level: 4,
    xpReward: 10,
    exercises: [
      {
        id: 'ha-v36',
        type: 'multiple-choice',
        question: '"Ci" means:',
        questionFr: '"Ci" signifie:',
        correctAnswer: 'To eat',
        options: ['To eat', 'To drink', 'To sleep', 'To walk']
      },
      {
        id: 'ha-v37',
        type: 'type-answer',
        question: 'Type "To sleep" in Hausa',
        questionFr: 'Tapez "Dormir" en Hausa',
        correctAnswer: 'Barci'
      },
      {
        id: 'ha-v38',
        type: 'multiple-choice',
        question: 'What is "To drink" in Hausa?',
        questionFr: 'Comment dit-on "Boire" en Hausa?',
        correctAnswer: 'Sha',
        options: ['Sha', 'Ci', 'Barci', 'Karatu']
      },
      {
        id: 'ha-v39',
        type: 'type-answer',
        question: 'Type "To read" in Hausa',
        questionFr: 'Tapez "Lire" en Hausa',
        correctAnswer: 'Karatu'
      },
      {
        id: 'ha-v40',
        type: 'multiple-choice',
        question: '"Rubuta" means:',
        questionFr: '"Rubuta" signifie:',
        correctAnswer: 'To write',
        options: ['To read', 'To write', 'To speak', 'To listen']
      }
    ]
  },

  // GRAMMAR LESSONS (30 questions)
  {
    id: 'ha-grammar-1',
    type: 'grammar',
    title: 'Personal Pronouns',
    titleFr: 'Pronoms personnels',
    level: 2,
    xpReward: 15,
    exercises: [
      {
        id: 'ha-g1',
        type: 'multiple-choice',
        question: 'What is "I" in Hausa?',
        questionFr: 'Comment dit-on "Je" en Hausa?',
        correctAnswer: 'Ni',
        options: ['Ni', 'Kai/Ke', 'Shi/Ita', 'Mu']
      },
      {
        id: 'ha-g2',
        type: 'multiple-choice',
        question: '"Kai" (masculine) means:',
        questionFr: '"Kai" (masculin) signifie:',
        correctAnswer: 'You',
        options: ['I', 'You', 'He', 'We']
      },
      {
        id: 'ha-g3',
        type: 'fill-blank',
        question: 'Complete: ____ malami ne (I am a teacher)',
        questionFr: 'Compléter: ____ malami ne (Je suis enseignant)',
        correctAnswer: 'Ni',
        hint: 'First person pronoun'
      },
      {
        id: 'ha-g4',
        type: 'multiple-choice',
        question: 'What is "We" in Hausa?',
        questionFr: 'Comment dit-on "Nous" en Hausa?',
        correctAnswer: 'Mu',
        options: ['Mu', 'Ku', 'Su', 'Ni']
      },
      {
        id: 'ha-g5',
        type: 'type-answer',
        question: 'Type "They" in Hausa',
        questionFr: 'Tapez "Ils/Elles" en Hausa',
        correctAnswer: 'Su'
      }
    ]
  },
  {
    id: 'ha-grammar-2',
    type: 'grammar',
    title: 'Present Continuous',
    titleFr: 'Présent continu',
    level: 3,
    xpReward: 15,
    exercises: [
      {
        id: 'ha-g6',
        type: 'fill-blank',
        question: 'Complete: Ni ____ abinci (I am eating food)',
        questionFr: 'Compléter: Ni ____ abinci (Je mange de la nourriture)',
        correctAnswer: 'na ci',
        hint: 'Present continuous form'
      },
      {
        id: 'ha-g7',
        type: 'multiple-choice',
        question: '"Ni na karatu" means:',
        questionFr: '"Ni na karatu" signifie:',
        correctAnswer: 'I am reading',
        options: ['I am eating', 'I am reading', 'I am writing', 'I am sleeping']
      },
      {
        id: 'ha-g8',
        type: 'fill-blank',
        question: 'Complete: Ka ____ ruwa (You are drinking water)',
        questionFr: 'Compléter: Ka ____ ruwa (Tu bois de l\'eau)',
        correctAnswer: 'na sha',
        hint: 'Present continuous'
      },
      {
        id: 'ha-g9',
        type: 'type-answer',
        question: 'Type "He/She is sleeping" in Hausa',
        questionFr: 'Tapez "Il/Elle dort" en Hausa',
        correctAnswer: 'Ya/Ta na barci'
      },
      {
        id: 'ha-g10',
        type: 'multiple-choice',
        question: 'What is "We are going" in Hausa?',
        questionFr: 'Comment dit-on "Nous allons" en Hausa?',
        correctAnswer: 'Mu na tafiya',
        options: ['Ni na tafiya', 'Ka na tafiya', 'Mu na tafiya', 'Su na tafiya']
      }
    ]
  },
  {
    id: 'ha-grammar-3',
    type: 'grammar',
    title: 'Questions Words',
    titleFr: 'Mots interrogatifs',
    level: 3,
    xpReward: 15,
    exercises: [
      {
        id: 'ha-g11',
        type: 'multiple-choice',
        question: '"Wa" means:',
        questionFr: '"Wa" signifie:',
        correctAnswer: 'Who',
        options: ['What', 'Who', 'Where', 'When']
      },
      {
        id: 'ha-g12',
        type: 'type-answer',
        question: 'Type "What" in Hausa',
        questionFr: 'Tapez "Quoi" en Hausa',
        correctAnswer: 'Me'
      },
      {
        id: 'ha-g13',
        type: 'multiple-choice',
        question: 'What is "Where" in Hausa?',
        questionFr: 'Comment dit-on "Où" en Hausa?',
        correctAnswer: 'Ina',
        options: ['Ina', 'Me', 'Yaushe', 'Yaya']
      },
      {
        id: 'ha-g14',
        type: 'fill-blank',
        question: 'Complete: ____ kake? (Where are you?)',
        questionFr: 'Compléter: ____ kake? (Où es-tu?)',
        correctAnswer: 'Ina',
        hint: 'Question word for location'
      },
      {
        id: 'ha-g15',
        type: 'type-answer',
        question: 'Type "How" in Hausa',
        questionFr: 'Tapez "Comment" en Hausa',
        correctAnswer: 'Yaya'
      }
    ]
  },
  {
    id: 'ha-grammar-4',
    type: 'grammar',
    title: 'Possessives',
    titleFr: 'Possessifs',
    level: 4,
    xpReward: 15,
    exercises: [
      {
        id: 'ha-g16',
        type: 'multiple-choice',
        question: 'What is "My" in Hausa?',
        questionFr: 'Comment dit-on "Mon" en Hausa?',
        correctAnswer: 'Na',
        options: ['Na', 'Ka', 'Sa', 'Mu']
      },
      {
        id: 'ha-g17',
        type: 'fill-blank',
        question: 'Complete: Gida ____ (My house)',
        questionFr: 'Compléter: Gida ____ (Ma maison)',
        correctAnswer: 'na',
        hint: 'Possessive pronoun'
      },
      {
        id: 'ha-g18',
        type: 'type-answer',
        question: 'Type "Your" (singular) in Hausa',
        questionFr: 'Tapez "Ton" en Hausa',
        correctAnswer: 'Ka/Ki'
      },
      {
        id: 'ha-g19',
        type: 'multiple-choice',
        question: '"Littafin sa" means:',
        questionFr: '"Littafin sa" signifie:',
        correctAnswer: 'His/Her book',
        options: ['My book', 'Your book', 'His/Her book', 'Our book']
      },
      {
        id: 'ha-g20',
        type: 'fill-blank',
        question: 'Complete: Mota ____ (Our car)',
        questionFr: 'Compléter: Mota ____ (Notre voiture)',
        correctAnswer: 'mu',
        hint: 'Possessive for "we"'
      }
    ]
  },
  {
    id: 'ha-grammar-5',
    type: 'grammar',
    title: 'Past Tense',
    titleFr: 'Temps passé',
    level: 5,
    xpReward: 15,
    exercises: [
      {
        id: 'ha-g21',
        type: 'fill-blank',
        question: 'Complete: Na ____ abinci (I ate food)',
        questionFr: 'Compléter: Na ____ abinci (J\'ai mangé de la nourriture)',
        correctAnswer: 'ci',
        hint: 'Past tense with na'
      },
      {
        id: 'ha-g22',
        type: 'multiple-choice',
        question: '"Na karatu" means:',
        questionFr: '"Na karatu" signifie:',
        correctAnswer: 'I read (past)',
        options: ['I am reading', 'I read (past)', 'I will read', 'I like to read']
      },
      {
        id: 'ha-g23',
        type: 'type-answer',
        question: 'Type "He/She went" in Hausa',
        questionFr: 'Tapez "Il/Elle est allé(e)" en Hausa',
        correctAnswer: 'Ya/Ta tafi'
      },
      {
        id: 'ha-g24',
        type: 'fill-blank',
        question: 'Complete: Sun ____ gida (They arrived home)',
        questionFr: 'Compléter: Sun ____ gida (Ils sont arrivés à la maison)',
        correctAnswer: 'iso',
        hint: 'Past tense'
      },
      {
        id: 'ha-g25',
        type: 'multiple-choice',
        question: 'The past tense marker "na/ka/ya" indicates:',
        questionFr: 'Le marqueur du passé "na/ka/ya" indique:',
        correctAnswer: 'Completed action',
        options: ['Ongoing action', 'Completed action', 'Future action', 'Habitual action']
      }
    ]
  },
  {
    id: 'ha-grammar-6',
    type: 'grammar',
    title: 'Future Tense',
    titleFr: 'Futur',
    level: 5,
    xpReward: 15,
    exercises: [
      {
        id: 'ha-g26',
        type: 'fill-blank',
        question: 'Complete: ____ ci abinci (I will eat food)',
        questionFr: 'Compléter: ____ ci abinci (Je mangerai de la nourriture)',
        correctAnswer: 'Zan',
        hint: 'Future tense marker'
      },
      {
        id: 'ha-g27',
        type: 'multiple-choice',
        question: '"Zan zo" means:',
        questionFr: '"Zan zo" signifie:',
        correctAnswer: 'I will come',
        options: ['I came', 'I am coming', 'I will come', 'I want to come']
      },
      {
        id: 'ha-g28',
        type: 'type-answer',
        question: 'Type "You will go" in Hausa',
        questionFr: 'Tapez "Tu iras" en Hausa',
        correctAnswer: 'Za ka tafi'
      },
      {
        id: 'ha-g29',
        type: 'fill-blank',
        question: 'Complete: ____ kawo ruwa (She will bring water)',
        questionFr: 'Compléter: ____ kawo ruwa (Elle apportera de l\'eau)',
        correctAnswer: 'Za ta',
        hint: 'Future for feminine "she"'
      },
      {
        id: 'ha-g30',
        type: 'multiple-choice',
        question: 'What is the future tense marker?',
        questionFr: 'Quel est le marqueur du futur?',
        correctAnswer: 'Za/Zan/Zai',
        options: ['Na/Ka/Ya', 'Za/Zan/Zai', 'Ina/Kana/Yana', 'Don/Domin']
      }
    ]
  },

  // WRITING LESSONS (20 questions)
  {
    id: 'ha-writing-1',
    type: 'writing',
    title: 'Simple Sentences',
    titleFr: 'Phrases simples',
    level: 2,
    xpReward: 12,
    exercises: [
      {
        id: 'ha-w1',
        type: 'type-answer',
        question: 'Translate: "I am a student"',
        questionFr: 'Traduire: "Je suis étudiant"',
        correctAnswer: 'Ni dalibi ne'
      },
      {
        id: 'ha-w2',
        type: 'type-answer',
        question: 'Translate: "Welcome"',
        questionFr: 'Traduire: "Bienvenue"',
        correctAnswer: 'Barka da zuwa'
      },
      {
        id: 'ha-w3',
        type: 'type-answer',
        question: 'Type: "I want water"',
        questionFr: 'Tapez: "Je veux de l\'eau"',
        correctAnswer: 'Ina son ruwa'
      },
      {
        id: 'ha-w4',
        type: 'type-answer',
        question: 'Translate: "The house is big"',
        questionFr: 'Traduire: "La maison est grande"',
        correctAnswer: 'Gidan babba ne'
      },
      {
        id: 'ha-w5',
        type: 'type-answer',
        question: 'Type: "Good night"',
        questionFr: 'Tapez: "Bonne nuit"',
        correctAnswer: 'Barka da dare'
      }
    ]
  },
  {
    id: 'ha-writing-2',
    type: 'writing',
    title: 'Questions',
    titleFr: 'Questions',
    level: 3,
    xpReward: 12,
    exercises: [
      {
        id: 'ha-w6',
        type: 'type-answer',
        question: 'Translate: "What is your name?"',
        questionFr: 'Traduire: "Comment vous appelez-vous?"',
        correctAnswer: 'Yaya sunanka'
      },
      {
        id: 'ha-w7',
        type: 'type-answer',
        question: 'Type: "Where are you going?"',
        questionFr: 'Tapez: "Où allez-vous?"',
        correctAnswer: 'Ina za ka'
      },
      {
        id: 'ha-w8',
        type: 'type-answer',
        question: 'Translate: "How much is this?"',
        questionFr: 'Traduire: "Combien coûte ceci?"',
        correctAnswer: 'Nawa ne wannan'
      },
      {
        id: 'ha-w9',
        type: 'type-answer',
        question: 'Type: "What do you want?"',
        questionFr: 'Tapez: "Que voulez-vous?"',
        correctAnswer: 'Me kake so'
      },
      {
        id: 'ha-w10',
        type: 'type-answer',
        question: 'Translate: "When will you come?"',
        questionFr: 'Traduire: "Quand viendrez-vous?"',
        correctAnswer: 'Yaushe za ka zo'
      }
    ]
  },
  {
    id: 'ha-writing-3',
    type: 'writing',
    title: 'Daily Conversations',
    titleFr: 'Conversations quotidiennes',
    level: 4,
    xpReward: 12,
    exercises: [
      {
        id: 'ha-w11',
        type: 'type-answer',
        question: 'Translate: "I am going to school"',
        questionFr: 'Traduire: "Je vais à l\'école"',
        correctAnswer: 'Ina zuwa makaranta'
      },
      {
        id: 'ha-w12',
        type: 'type-answer',
        question: 'Type: "She likes to read"',
        questionFr: 'Tapez: "Elle aime lire"',
        correctAnswer: 'Tana son karatu'
      },
      {
        id: 'ha-w13',
        type: 'type-answer',
        question: 'Translate: "We are eating food"',
        questionFr: 'Traduire: "Nous mangeons de la nourriture"',
        correctAnswer: 'Muna cin abinci'
      },
      {
        id: 'ha-w14',
        type: 'type-answer',
        question: 'Type: "They are playing football"',
        questionFr: 'Tapez: "Ils jouent au football"',
        correctAnswer: 'Suna wasan kwallon kafa'
      },
      {
        id: 'ha-w15',
        type: 'type-answer',
        question: 'Translate: "I need help"',
        questionFr: 'Traduire: "J\'ai besoin d\'aide"',
        correctAnswer: 'Ina bukatar taimako'
      }
    ]
  },
  {
    id: 'ha-writing-4',
    type: 'writing',
    title: 'Advanced Sentences',
    titleFr: 'Phrases avancées',
    level: 5,
    xpReward: 12,
    exercises: [
      {
        id: 'ha-w16',
        type: 'type-answer',
        question: 'Translate: "I have been to Kano"',
        questionFr: 'Traduire: "J\'ai été à Kano"',
        correctAnswer: 'Na taba zuwa Kano'
      },
      {
        id: 'ha-w17',
        type: 'type-answer',
        question: 'Type: "She will come tomorrow"',
        questionFr: 'Tapez: "Elle viendra demain"',
        correctAnswer: 'Za ta zo gobe'
      },
      {
        id: 'ha-w18',
        type: 'type-answer',
        question: 'Translate: "I can speak Hausa"',
        questionFr: 'Traduire: "Je peux parler hausa"',
        correctAnswer: 'Ina iya magana Hausa'
      },
      {
        id: 'ha-w19',
        type: 'type-answer',
        question: 'Type: "The weather is good today"',
        questionFr: 'Tapez: "Le temps est bon aujourd\'hui"',
        correctAnswer: 'Yanayi yana da kyau yau'
      },
      {
        id: 'ha-w20',
        type: 'type-answer',
        question: 'Translate: "I love my country"',
        questionFr: 'Traduire: "J\'aime mon pays"',
        correctAnswer: 'Ina son kasata'
      }
    ]
  },

  // CULTURE LESSONS (10 questions)
  {
    id: 'ha-culture-1',
    type: 'culture',
    title: 'Hausa Proverbs',
    titleFr: 'Proverbes hausa',
    level: 5,
    xpReward: 20,
    exercises: [
      {
        id: 'ha-c1',
        type: 'multiple-choice',
        question: 'What does "Karatu shi ne mabudin ilimi" mean?',
        questionFr: 'Que signifie "Karatu shi ne mabudin ilimi"?',
        correctAnswer: 'Reading is the key to knowledge',
        options: ['Reading is the key to knowledge', 'Time is money', 'Practice makes perfect', 'United we stand']
      },
      {
        id: 'ha-c2',
        type: 'multiple-choice',
        question: '"Wanda ya kamu da kura, ya kamu da wutsiya" means:',
        questionFr: '"Wanda ya kamu da kura, ya kamu da wutsiya" signifie:',
        correctAnswer: 'He who catches the rat, catches it by the tail (Perseverance)',
        options: [
          'He who catches the rat, catches it by the tail (Perseverance)',
          'Early bird catches the worm',
          'Knowledge is power',
          'Actions speak louder than words'
        ]
      },
      {
        id: 'ha-c3',
        type: 'multiple-choice',
        question: 'What does "Wanda bai yi banza ba, ba zai ci banza ba" mean?',
        questionFr: 'Que signifie "Wanda bai yi banza ba, ba zai ci banza ba"?',
        correctAnswer: 'He who does not waste, will not eat waste',
        options: [
          'He who does not waste, will not eat waste',
          'A friend in need is a friend indeed',
          'Better late than never',
          'Where there is smoke, there is fire'
        ]
      },
      {
        id: 'ha-c4',
        type: 'multiple-choice',
        question: '"Duniya ta fi kowa" means:',
        questionFr: '"Duniya ta fi kowa" signifie:',
        correctAnswer: 'The world is greater than anyone (Humility)',
        options: [
          'The world is greater than anyone (Humility)',
          'Early bird catches the worm',
          'Strike while the iron is hot',
          'All that glitters is not gold'
        ]
      },
      {
        id: 'ha-c5',
        type: 'multiple-choice',
        question: 'What does "Halin kirki shine mafi kyau" mean?',
        questionFr: 'Que signifie "Halin kirki shine mafi kyau"?',
        correctAnswer: 'Good character is the best',
        options: ['Good character is the best', 'Knowledge is power', 'Time is money', 'Practice makes perfect']
      },
      {
        id: 'ha-c6',
        type: 'multiple-choice',
        question: 'The traditional Hausa attire for men is called:',
        questionFr: 'Le vêtement traditionnel hausa pour hommes s\'appelle:',
        correctAnswer: 'Babban riga',
        options: ['Babban riga', 'Agbada', 'Dashiki', 'Kaftan']
      },
      {
        id: 'ha-c7',
        type: 'multiple-choice',
        question: 'What is "Tuwo"?',
        questionFr: 'Qu\'est-ce que "Tuwo"?',
        correctAnswer: 'A staple food made from grains',
        options: [
          'A staple food made from grains',
          'A traditional dance',
          'A type of drum',
          'A greeting ceremony'
        ]
      },
      {
        id: 'ha-c8',
        type: 'multiple-choice',
        question: 'The Hausa are predominantly found in:',
        questionFr: 'Les Hausa se trouvent principalement au:',
        correctAnswer: 'Northern Nigeria and Niger',
        options: [
          'Northern Nigeria and Niger',
          'Southern Nigeria',
          'Ghana only',
          'Cameroon only'
        ]
      },
      {
        id: 'ha-c9',
        type: 'multiple-choice',
        question: 'What is "Durbar"?',
        questionFr: 'Qu\'est-ce que "Durbar"?',
        correctAnswer: 'A traditional festival featuring horsemen',
        options: [
          'A traditional festival featuring horsemen',
          'A type of food',
          'A musical instrument',
          'A form of greeting'
        ]
      },
      {
        id: 'ha-c10',
        type: 'multiple-choice',
        question: 'Hausa is written using:',
        questionFr: 'Le hausa s\'écrit en utilisant:',
        correctAnswer: 'Latin alphabet (Boko) or Arabic script (Ajami)',
        options: [
          'Latin alphabet (Boko) or Arabic script (Ajami)',
          'Only Arabic script',
          'Only Latin alphabet',
          'Chinese characters'
        ]
      }
    ]
  }
];
