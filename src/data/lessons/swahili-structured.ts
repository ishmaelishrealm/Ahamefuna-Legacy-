import { Stage } from '../../types';

export const swahiliStages: Stage[] = [
  // STAGE 1: Foundations
  {
    id: 'sw-stage-1',
    stageNumber: 1,
    title: 'Swahili Basics',
    titleFr: 'Bases du Swahili',
    color: 'from-[#F4A300] to-[#FF9500]',
    lessons: [
      // Lesson 1: Basic Greetings & Numbers
      {
        id: 'sw-1-1',
        stageId: 'sw-stage-1',
        lessonNumber: 1,
        type: 'vocabulary',
        title: 'Greetings & Numbers',
        titleFr: 'Salutations & Numéros',
        xpReward: 10,
        exercises: [
          {
            id: 'sw-1-1-1',
            type: 'multiple-choice',
            question: 'How do you say "Hello" in Swahili?',
            questionFr: 'Comment dit-on "Bonjour" en Swahili?',
            correctAnswer: 'Jambo',
            options: ['Jambo', 'Habari', 'Asante', 'Kwaheri']
          },
          {
            id: 'sw-1-1-2',
            type: 'multiple-choice',
            question: 'What does "Asante" mean?',
            questionFr: 'Que signifie "Asante"?',
            correctAnswer: 'Thank you',
            correctAnswerFr: 'Merci',
            options: ['Hello', 'Thank you', 'Goodbye', 'Please'],
            optionsFr: ['Bonjour', 'Merci', 'Au revoir', 'S\'il vous plaît']
          },
          {
            id: 'sw-1-1-3',
            type: 'type-answer',
            question: 'Type the Swahili word for "Goodbye"',
            questionFr: 'Tapez le mot Swahili pour "Au revoir"',
            correctAnswer: 'Kwaheri'
          },
          {
            id: 'sw-1-1-4',
            type: 'multiple-choice',
            question: 'What is "Good morning" in Swahili?',
            questionFr: 'Comment dit-on "Bonjour" (matin) en Swahili?',
            correctAnswer: 'Habari za asubuhi',
            options: ['Habari za asubuhi', 'Habari za jioni', 'Usiku mwema', 'Asante sana']
          },
          {
            id: 'sw-1-1-5',
            type: 'multiple-choice',
            question: '"Karibu" means:',
            questionFr: '"Karibu" signifie:',
            correctAnswer: 'Welcome',
            correctAnswerFr: 'Bienvenue',
            options: ['Goodbye', 'Welcome', 'Sorry', 'Excuse me'],
            optionsFr: ['Au revoir', 'Bienvenue', 'Désolé', 'Excusez-moi']
          },
          {
            id: 'sw-1-1-6',
            type: 'multiple-choice',
            question: 'What is "One" in Swahili?',
            questionFr: 'Comment dit-on "Un" en Swahili?',
            correctAnswer: 'Moja',
            options: ['Moja', 'Mbili', 'Tatu', 'Nne']
          },
          {
            id: 'sw-1-1-7',
            type: 'type-answer',
            question: 'Type the number "Five" in Swahili',
            questionFr: 'Tapez le nombre "Cinq" en Swahili',
            correctAnswer: 'Tano'
          },
          {
            id: 'sw-1-1-8',
            type: 'multiple-choice',
            question: '"Kumi" means:',
            questionFr: '"Kumi" signifie:',
            correctAnswer: 'Ten',
            correctAnswerFr: 'Dix',
            options: ['Five', 'Eight', 'Ten', 'Seven'],
            optionsFr: ['Cinq', 'Huit', 'Dix', 'Sept']
          },
          {
            id: 'sw-1-1-9',
            type: 'multiple-choice',
            question: 'What is "Three" in Swahili?',
            questionFr: 'Comment dit-on "Trois" en Swahili?',
            correctAnswer: 'Tatu',
            options: ['Mbili', 'Tatu', 'Nne', 'Tano']
          },
          {
            id: 'sw-1-1-10',
            type: 'type-answer',
            question: 'Type "Seven" in Swahili',
            questionFr: 'Tapez "Sept" en Swahili',
            correctAnswer: 'Saba'
          }
        ]
      },
      // Lesson 2: Family & Food
      {
        id: 'sw-1-2',
        stageId: 'sw-stage-1',
        lessonNumber: 2,
        type: 'vocabulary',
        title: 'Family & Food',
        titleFr: 'Famille & Nourriture',
        xpReward: 10,
        exercises: [
          {
            id: 'sw-1-2-1',
            type: 'multiple-choice',
            question: 'What is "Mother" in Swahili?',
            questionFr: 'Comment dit-on "Mère" en Swahili?',
            correctAnswer: 'Mama',
            options: ['Mama', 'Baba', 'Dada', 'Kaka']
          },
          {
            id: 'sw-1-2-2',
            type: 'multiple-choice',
            question: '"Baba" means:',
            questionFr: '"Baba" signifie:',
            correctAnswer: 'Father',
            correctAnswerFr: 'Père',
            options: ['Mother', 'Father', 'Sister', 'Brother'],
            optionsFr: ['Mère', 'Père', 'Sœur', 'Frère']
          },
          {
            id: 'sw-1-2-3',
            type: 'type-answer',
            question: 'Type the Swahili word for "Sister"',
            questionFr: 'Tapez le mot Swahili pour "Sœur"',
            correctAnswer: 'Dada'
          },
          {
            id: 'sw-1-2-4',
            type: 'multiple-choice',
            question: 'What is "Brother" in Swahili?',
            questionFr: 'Comment dit-on "Frère" en Swahili?',
            correctAnswer: 'Kaka',
            options: ['Kaka', 'Dada', 'Mama', 'Mtoto']
          },
          {
            id: 'sw-1-2-5',
            type: 'type-answer',
            question: 'Type "Child" in Swahili',
            questionFr: 'Tapez "Enfant" en Swahili',
            correctAnswer: 'Mtoto'
          },
          {
            id: 'sw-1-2-6',
            type: 'multiple-choice',
            question: 'What is "Water" in Swahili?',
            questionFr: 'Comment dit-on "Eau" en Swahili?',
            correctAnswer: 'Maji',
            options: ['Maji', 'Chai', 'Maziwa', 'Chakula']
          },
          {
            id: 'sw-1-2-7',
            type: 'multiple-choice',
            question: '"Chakula" means:',
            questionFr: '"Chakula" signifie:',
            correctAnswer: 'Food',
            correctAnswerFr: 'Nourriture',
            options: ['Water', 'Food', 'Tea', 'Milk'],
            optionsFr: ['Eau', 'Nourriture', 'Thé', 'Lait']
          },
          {
            id: 'sw-1-2-8',
            type: 'type-answer',
            question: 'Type the Swahili word for "Bread"',
            questionFr: 'Tapez le mot Swahili pour "Pain"',
            correctAnswer: 'Mkate'
          },
          {
            id: 'sw-1-2-9',
            type: 'multiple-choice',
            question: 'What is "Rice" in Swahili?',
            questionFr: 'Comment dit-on "Riz" en Swahili?',
            correctAnswer: 'Wali',
            options: ['Wali', 'Mkate', 'Nyama', 'Samaki']
          },
          {
            id: 'sw-1-2-10',
            type: 'type-answer',
            question: 'Type "Fruit" in Swahili',
            questionFr: 'Tapez "Fruit" en Swahili',
            correctAnswer: 'Matunda'
          }
        ]
      },
      // Lesson 3: Colors & Animals
      {
        id: 'sw-1-3',
        stageId: 'sw-stage-1',
        lessonNumber: 3,
        type: 'vocabulary',
        title: 'Colors & Animals',
        titleFr: 'Couleurs & Animaux',
        xpReward: 10,
        exercises: [
          {
            id: 'sw-1-3-1',
            type: 'multiple-choice',
            question: 'What is "Red" in Swahili?',
            questionFr: 'Comment dit-on "Rouge" en Swahili?',
            correctAnswer: 'Nyekundu',
            options: ['Nyekundu', 'Bluu', 'Kijani', 'Manjano']
          },
          {
            id: 'sw-1-3-2',
            type: 'multiple-choice',
            question: '"Kijani" means:',
            questionFr: '"Kijani" signifie:',
            correctAnswer: 'Green',
            correctAnswerFr: 'Vert',
            options: ['Red', 'Blue', 'Green', 'Yellow'],
            optionsFr: ['Rouge', 'Bleu', 'Vert', 'Jaune']
          },
          {
            id: 'sw-1-3-3',
            type: 'type-answer',
            question: 'Type "White" in Swahili',
            questionFr: 'Tapez "Blanc" en Swahili',
            correctAnswer: 'Nyeupe'
          },
          {
            id: 'sw-1-3-4',
            type: 'multiple-choice',
            question: 'What is "Black" in Swahili?',
            questionFr: 'Comment dit-on "Noir" en Swahili?',
            correctAnswer: 'Nyeusi',
            options: ['Nyeusi', 'Nyeupe', 'Kijani', 'Bluu']
          },
          {
            id: 'sw-1-3-5',
            type: 'type-answer',
            question: 'Type "Yellow" in Swahili',
            questionFr: 'Tapez "Jaune" en Swahili',
            correctAnswer: 'Manjano'
          },
          {
            id: 'sw-1-3-6',
            type: 'multiple-choice',
            question: 'What is "Lion" in Swahili?',
            questionFr: 'Comment dit-on "Lion" en Swahili?',
            correctAnswer: 'Simba',
            options: ['Simba', 'Tembo', 'Paka', 'Mbwa']
          },
          {
            id: 'sw-1-3-7',
            type: 'multiple-choice',
            question: '"Tembo" means:',
            questionFr: '"Tembo" signifie:',
            correctAnswer: 'Elephant',
            correctAnswerFr: 'Éléphant',
            options: ['Lion', 'Elephant', 'Cat', 'Dog'],
            optionsFr: ['Lion', 'Éléphant', 'Chat', 'Chien']
          },
          {
            id: 'sw-1-3-8',
            type: 'type-answer',
            question: 'Type "Dog" in Swahili',
            questionFr: 'Tapez "Chien" en Swahili',
            correctAnswer: 'Mbwa'
          },
          {
            id: 'sw-1-3-9',
            type: 'multiple-choice',
            question: 'What is "Bird" in Swahili?',
            questionFr: 'Comment dit-on "Oiseau" en Swahili?',
            correctAnswer: 'Ndege',
            options: ['Ndege', 'Paka', 'Simba', 'Kuku']
          },
          {
            id: 'sw-1-3-10',
            type: 'type-answer',
            question: 'Type "Cat" in Swahili',
            questionFr: 'Tapez "Chat" en Swahili',
            correctAnswer: 'Paka'
          }
        ]
      },
      // Lesson 4: Personal Pronouns & Body Parts
      {
        id: 'sw-1-4',
        stageId: 'sw-stage-1',
        lessonNumber: 4,
        type: 'grammar',
        title: 'Pronouns & Body',
        titleFr: 'Pronoms & Corps',
        xpReward: 15,
        exercises: [
          {
            id: 'sw-1-4-1',
            type: 'multiple-choice',
            question: 'What is "I" in Swahili?',
            questionFr: 'Comment dit-on "Je" en Swahili?',
            correctAnswer: 'Mimi',
            options: ['Mimi', 'Wewe', 'Yeye', 'Sisi']
          },
          {
            id: 'sw-1-4-2',
            type: 'multiple-choice',
            question: '"Wewe" means:',
            questionFr: '"Wewe" signifie:',
            correctAnswer: 'You',
            correctAnswerFr: 'Tu/Vous',
            options: ['I', 'You', 'He/She', 'We'],
            optionsFr: ['Je', 'Tu/Vous', 'Il/Elle', 'Nous']
          },
          {
            id: 'sw-1-4-3',
            type: 'type-answer',
            question: 'Type "We" in Swahili',
            questionFr: 'Tapez "Nous" en Swahili',
            correctAnswer: 'Sisi'
          },
          {
            id: 'sw-1-4-4',
            type: 'multiple-choice',
            question: 'What is "They" in Swahili?',
            questionFr: 'Comment dit-on "Ils/Elles" en Swahili?',
            correctAnswer: 'Wao',
            options: ['Wao', 'Sisi', 'Yeye', 'Mimi']
          },
          {
            id: 'sw-1-4-5',
            type: 'type-answer',
            question: 'Type "Head" in Swahili',
            questionFr: 'Tapez "Tête" en Swahili',
            correctAnswer: 'Kichwa'
          },
          {
            id: 'sw-1-4-6',
            type: 'multiple-choice',
            question: 'What is "Hand" in Swahili?',
            questionFr: 'Comment dit-on "Main" en Swahili?',
            correctAnswer: 'Mkono',
            options: ['Mkono', 'Mguu', 'Jicho', 'Sikio']
          },
          {
            id: 'sw-1-4-7',
            type: 'multiple-choice',
            question: '"Mguu" means:',
            questionFr: '"Mguu" signifie:',
            correctAnswer: 'Leg/Foot',
            correctAnswerFr: 'Jambe/Pied',
            options: ['Hand', 'Leg/Foot', 'Eye', 'Ear'],
            optionsFr: ['Main', 'Jambe/Pied', 'Œil', 'Oreille']
          },
          {
            id: 'sw-1-4-8',
            type: 'type-answer',
            question: 'Type "Eye" in Swahili',
            questionFr: 'Tapez "Œil" en Swahili',
            correctAnswer: 'Jicho'
          },
          {
            id: 'sw-1-4-9',
            type: 'multiple-choice',
            question: 'What is "Mouth" in Swahili?',
            questionFr: 'Comment dit-on "Bouche" en Swahili?',
            correctAnswer: 'Mdomo',
            options: ['Mdomo', 'Pua', 'Sikio', 'Kichwa']
          },
          {
            id: 'sw-1-4-10',
            type: 'type-answer',
            question: 'Type "Nose" in Swahili',
            questionFr: 'Tapez "Nez" en Swahili',
            correctAnswer: 'Pua'
          }
        ]
      },
      // Lesson 5: Simple Sentences
      {
        id: 'sw-1-5',
        stageId: 'sw-stage-1',
        lessonNumber: 5,
        type: 'grammar',
        title: 'Simple Sentences',
        titleFr: 'Phrases Simples',
        xpReward: 15,
        exercises: [
          {
            id: 'sw-1-5-1',
            type: 'multiple-choice',
            question: '"I am" in Swahili is:',
            questionFr: '"Je suis" en Swahili est:',
            correctAnswer: 'Mimi ni',
            options: ['Mimi ni', 'Wewe ni', 'Yeye ni', 'Sisi ni']
          },
          {
            id: 'sw-1-5-2',
            type: 'type-answer',
            question: 'Type "I am happy" in Swahili (Hint: furaha = happy)',
            questionFr: 'Tapez "Je suis content" en Swahili (Indice: furaha = content)',
            correctAnswer: 'Mimi ni furaha'
          },
          {
            id: 'sw-1-5-3',
            type: 'multiple-choice',
            question: '"Ninakula" means:',
            questionFr: '"Ninakula" signifie:',
            correctAnswer: 'I am eating',
            correctAnswerFr: 'Je mange',
            options: ['I am eating', 'You are eating', 'He is eating', 'We are eating'],
            optionsFr: ['Je mange', 'Tu manges', 'Il mange', 'Nous mangeons']
          },
          {
            id: 'sw-1-5-4',
            type: 'type-answer',
            question: 'Type "I love" in Swahili (Hint: penda = love)',
            questionFr: 'Tapez "J\'aime" en Swahili (Indice: penda = aimer)',
            correctAnswer: 'Ninapenda'
          },
          {
            id: 'sw-1-5-5',
            type: 'multiple-choice',
            question: 'What does "Ninasoma" mean?',
            questionFr: 'Que signifie "Ninasoma"?',
            correctAnswer: 'I am reading',
            correctAnswerFr: 'Je lis',
            options: ['I am writing', 'I am reading', 'I am speaking', 'I am listening'],
            optionsFr: ['J\'écris', 'Je lis', 'Je parle', 'J\'écoute']
          },
          {
            id: 'sw-1-5-6',
            type: 'type-answer',
            question: 'Type "Good night" in Swahili',
            questionFr: 'Tapez "Bonne nuit" en Swahili',
            correctAnswer: 'Usiku mwema'
          },
          {
            id: 'sw-1-5-7',
            type: 'multiple-choice',
            question: '"Pole pole" means:',
            questionFr: '"Pole pole" signifie:',
            correctAnswer: 'Slowly',
            correctAnswerFr: 'Lentement',
            options: ['Quickly', 'Slowly', 'Carefully', 'Loudly'],
            optionsFr: ['Rapidement', 'Lentement', 'Prudemment', 'Fort']
          },
          {
            id: 'sw-1-5-8',
            type: 'multiple-choice',
            question: 'How do you say "I understand"?',
            questionFr: 'Comment dit-on "Je comprends"?',
            correctAnswer: 'Ninaelewa',
            options: ['Ninaelewa', 'Sielwi', 'Ninasoma', 'Ninajua']
          },
          {
            id: 'sw-1-5-9',
            type: 'type-answer',
            question: 'Type "How are you?" in Swahili',
            questionFr: 'Tapez "Comment allez-vous?" en Swahili',
            correctAnswer: 'Habari yako'
          },
          {
            id: 'sw-1-5-10',
            type: 'multiple-choice',
            question: '"Nzuri" means:',
            questionFr: '"Nzuri" signifie:',
            correctAnswer: 'Good/Fine',
            correctAnswerFr: 'Bien',
            options: ['Bad', 'Good/Fine', 'So-so', 'Excellent'],
            optionsFr: ['Mal', 'Bien', 'Comme ci comme ça', 'Excellent']
          }
        ]
      }
    ]
  }
];
