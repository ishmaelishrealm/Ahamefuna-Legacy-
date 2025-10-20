import { Lesson } from '../../types';

export const zuluLessons: Lesson[] = [
  {
    id: 'zu-vocab-1',
    type: 'vocabulary',
    title: 'Basic Greetings',
    titleFr: 'Salutations de base',
    level: 1,
    xpReward: 10,
    exercises: [
      {
        id: 'zu-v1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Zulu?',
        questionFr: 'Comment dit-on "Bonjour" en Zulu?',
        correctAnswer: 'Sawubona',
        options: ['Sawubona', 'Ngiyabonga', 'Hamba kahle', 'Yebo']
      },
      {
        id: 'zu-v2',
        type: 'multiple-choice',
        question: 'What does "Ngiyabonga" mean?',
        questionFr: 'Que signifie "Ngiyabonga"?',
        correctAnswer: 'Thank you',
        options: ['Hello', 'Thank you', 'Goodbye', 'Yes']
      },
      {
        id: 'zu-v3',
        type: 'type-answer',
        question: 'Type the Zulu word for "Goodbye"',
        questionFr: 'Tapez le mot Zulu pour "Au revoir"',
        correctAnswer: 'Hamba kahle'
      },
      {
        id: 'zu-v4',
        type: 'multiple-choice',
        question: 'What is "Yes" in Zulu?',
        questionFr: 'Comment dit-on "Oui" en Zulu?',
        correctAnswer: 'Yebo',
        options: ['Yebo', 'Cha', 'Sawubona', 'Ngiyabonga']
      },
      {
        id: 'zu-v5',
        type: 'multiple-choice',
        question: '"Unjani?" means:',
        questionFr: '"Unjani?" signifie:',
        correctAnswer: 'How are you?',
        options: ['Goodbye', 'How are you?', 'Welcome', 'Thank you']
      }
    ]
  }
];
