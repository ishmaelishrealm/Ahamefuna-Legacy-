import { Lesson } from '../types';

// Placeholder - To be expanded with full 100 questions
export const yorubaLessons: Lesson[] = [
  {
    id: 'yo-vocab-1',
    type: 'vocabulary',
    title: 'Basic Greetings',
    titleFr: 'Salutations de base',
    level: 1,
    xpReward: 10,
    exercises: [
      {
        id: 'yo-v1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Yoruba?',
        questionFr: 'Comment dit-on "Bonjour" en Yoruba?',
        correctAnswer: 'Ẹ káàbọ̀',
        options: ['Ẹ káàbọ̀', 'Ẹ ṣé', 'Ó dàbọ̀', 'Báwo']
      },
      {
        id: 'yo-v2',
        type: 'multiple-choice',
        question: 'What does "Ẹ ṣé" mean?',
        questionFr: 'Que signifie "Ẹ ṣé"?',
        correctAnswer: 'Thank you',
        options: ['Hello', 'Thank you', 'Goodbye', 'Please']
      },
      {
        id: 'yo-v3',
        type: 'type-answer',
        question: 'Type the Yoruba word for "Goodbye"',
        questionFr: 'Tapez le mot Yoruba pour "Au revoir"',
        correctAnswer: 'Ó dàbọ̀'
      },
      {
        id: 'yo-v4',
        type: 'multiple-choice',
        question: 'What is "Good morning" in Yoruba?',
        questionFr: 'Comment dit-on "Bonjour" (matin) en Yoruba?',
        correctAnswer: 'Ẹ káàrọ̀',
        options: ['Ẹ káàrọ̀', 'Ẹ káàsan', 'Ó dàrọ̀', 'Báwo']
      },
      {
        id: 'yo-v5',
        type: 'multiple-choice',
        question: '"Báwo ni?" means:',
        questionFr: '"Báwo ni?" signifie:',
        correctAnswer: 'How are you?',
        options: ['Goodbye', 'How are you?', 'Welcome', 'Good night']
      }
    ]
  }
];
