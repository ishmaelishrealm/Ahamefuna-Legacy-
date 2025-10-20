import { Lesson } from '../../types';

// Amharic Lessons
export const amharicLessons: Lesson[] = [
  {
    id: 'am-vocab-1',
    type: 'vocabulary',
    title: 'Basic Greetings',
    titleFr: 'Salutations de base',
    level: 1,
    xpReward: 10,
    exercises: [
      {
        id: 'am-v1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Amharic?',
        questionFr: 'Comment dit-on "Bonjour" en Amharique?',
        correctAnswer: 'Selam',
        options: ['Selam', 'Ameseginalehu', 'Dehna hun', 'Awo']
      },
      {
        id: 'am-v2',
        type: 'multiple-choice',
        question: 'What does "Ameseginalehu" mean?',
        questionFr: 'Que signifie "Ameseginalehu"?',
        correctAnswer: 'Thank you',
        options: ['Hello', 'Thank you', 'Goodbye', 'Please']
      },
      {
        id: 'am-v3',
        type: 'type-answer',
        question: 'Type the Amharic word for "Goodbye"',
        questionFr: 'Tapez le mot Amharique pour "Au revoir"',
        correctAnswer: 'Dehna hun'
      }
    ]
  }
];

// Igbo Lessons
export const igboLessons: Lesson[] = [
  {
    id: 'ig-vocab-1',
    type: 'vocabulary',
    title: 'Basic Greetings',
    titleFr: 'Salutations de base',
    level: 1,
    xpReward: 10,
    exercises: [
      {
        id: 'ig-v1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Igbo?',
        questionFr: 'Comment dit-on "Bonjour" en Igbo?',
        correctAnswer: 'Ndewo',
        options: ['Ndewo', 'Daalụ', 'Ka ọ dị', 'Ee']
      },
      {
        id: 'ig-v2',
        type: 'multiple-choice',
        question: 'What does "Daalụ" mean?',
        questionFr: 'Que signifie "Daalụ"?',
        correctAnswer: 'Thank you',
        options: ['Hello', 'Thank you', 'Goodbye', 'Yes']
      },
      {
        id: 'ig-v3',
        type: 'type-answer',
        question: 'Type the Igbo word for "Goodbye"',
        questionFr: 'Tapez le mot Igbo pour "Au revoir"',
        correctAnswer: 'Ka ọ dị'
      }
    ]
  }
];

// Arabic (North African) Lessons
export const arabicLessons: Lesson[] = [
  {
    id: 'ar-vocab-1',
    type: 'vocabulary',
    title: 'Basic Greetings',
    titleFr: 'Salutations de base',
    level: 1,
    xpReward: 10,
    exercises: [
      {
        id: 'ar-v1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Arabic?',
        questionFr: 'Comment dit-on "Bonjour" en Arabe?',
        correctAnswer: 'Marhaba',
        options: ['Marhaba', 'Shukran', 'Ma\'a salama', 'Na\'am']
      },
      {
        id: 'ar-v2',
        type: 'multiple-choice',
        question: 'What does "Shukran" mean?',
        questionFr: 'Que signifie "Shukran"?',
        correctAnswer: 'Thank you',
        options: ['Hello', 'Thank you', 'Goodbye', 'Please']
      },
      {
        id: 'ar-v3',
        type: 'type-answer',
        question: 'Type the Arabic word for "Peace be upon you"',
        questionFr: 'Tapez en Arabe "Que la paix soit sur vous"',
        correctAnswer: 'Assalamu alaikum'
      }
    ]
  }
];

// Shona Lessons
export const shonaLessons: Lesson[] = [
  {
    id: 'sn-vocab-1',
    type: 'vocabulary',
    title: 'Basic Greetings',
    titleFr: 'Salutations de base',
    level: 1,
    xpReward: 10,
    exercises: [
      {
        id: 'sn-v1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Shona?',
        questionFr: 'Comment dit-on "Bonjour" en Shona?',
        correctAnswer: 'Mhoro',
        options: ['Mhoro', 'Ndatenda', 'Chisarai zvakanaka', 'Hongu']
      },
      {
        id: 'sn-v2',
        type: 'multiple-choice',
        question: 'What does "Ndatenda" mean?',
        questionFr: 'Que signifie "Ndatenda"?',
        correctAnswer: 'Thank you',
        options: ['Hello', 'Thank you', 'Goodbye', 'Yes']
      },
      {
        id: 'sn-v3',
        type: 'type-answer',
        question: 'Type the Shona word for "Goodbye"',
        questionFr: 'Tapez le mot Shona pour "Au revoir"',
        correctAnswer: 'Chisarai zvakanaka'
      }
    ]
  }
];

// Somali Lessons
export const somaliLessons: Lesson[] = [
  {
    id: 'so-vocab-1',
    type: 'vocabulary',
    title: 'Basic Greetings',
    titleFr: 'Salutations de base',
    level: 1,
    xpReward: 10,
    exercises: [
      {
        id: 'so-v1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Somali?',
        questionFr: 'Comment dit-on "Bonjour" en Somali?',
        correctAnswer: 'Salaan',
        options: ['Salaan', 'Mahadsanid', 'Nabadgelyo', 'Haa']
      },
      {
        id: 'so-v2',
        type: 'multiple-choice',
        question: 'What does "Mahadsanid" mean?',
        questionFr: 'Que signifie "Mahadsanid"?',
        correctAnswer: 'Thank you',
        options: ['Hello', 'Thank you', 'Goodbye', 'Yes']
      },
      {
        id: 'so-v3',
        type: 'type-answer',
        question: 'Type the Somali word for "Goodbye"',
        questionFr: 'Tapez le mot Somali pour "Au revoir"',
        correctAnswer: 'Nabadgelyo'
      }
    ]
  }
];

// Berber Lessons
export const berberLessons: Lesson[] = [
  {
    id: 'ber-vocab-1',
    type: 'vocabulary',
    title: 'Basic Greetings',
    titleFr: 'Salutations de base',
    level: 1,
    xpReward: 10,
    exercises: [
      {
        id: 'ber-v1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Berber?',
        questionFr: 'Comment dit-on "Bonjour" en Berbère?',
        correctAnswer: 'Azul',
        options: ['Azul', 'Tanemmirt', 'Ar tufat', 'Ih']
      },
      {
        id: 'ber-v2',
        type: 'multiple-choice',
        question: 'What does "Tanemmirt" mean?',
        questionFr: 'Que signifie "Tanemmirt"?',
        correctAnswer: 'Thank you',
        options: ['Hello', 'Thank you', 'Goodbye', 'Yes']
      },
      {
        id: 'ber-v3',
        type: 'type-answer',
        question: 'Type the Berber word for "Goodbye"',
        questionFr: 'Tapez le mot Berbère pour "Au revoir"',
        correctAnswer: 'Ar tufat'
      }
    ]
  }
];

// Mòoré Lessons
export const mooreLessons: Lesson[] = [
  {
    id: 'mo-vocab-1',
    type: 'vocabulary',
    title: 'Basic Greetings',
    titleFr: 'Salutations de base',
    level: 1,
    xpReward: 10,
    exercises: [
      {
        id: 'mo-v1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Mòoré?',
        questionFr: 'Comment dit-on "Bonjour" en Mòoré?',
        correctAnswer: 'Ne y\'ibéogo',
        options: ['Ne y\'ibéogo', 'Barka', 'Fo wakat', 'Ɛɛn']
      },
      {
        id: 'mo-v2',
        type: 'multiple-choice',
        question: 'What does "Barka" mean?',
        questionFr: 'Que signifie "Barka"?',
        correctAnswer: 'Thank you',
        options: ['Hello', 'Thank you', 'Goodbye', 'Yes']
      },
      {
        id: 'mo-v3',
        type: 'type-answer',
        question: 'Type the Mòoré word for "Goodbye"',
        questionFr: 'Tapez le mot Mòoré pour "Au revoir"',
        correctAnswer: 'Fo wakat'
      }
    ]
  }
];

// Lingala Lessons
export const lingalaLessons: Lesson[] = [
  {
    id: 'ln-vocab-1',
    type: 'vocabulary',
    title: 'Basic Greetings',
    titleFr: 'Salutations de base',
    level: 1,
    xpReward: 10,
    exercises: [
      {
        id: 'ln-v1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Lingala?',
        questionFr: 'Comment dit-on "Bonjour" en Lingala?',
        correctAnswer: 'Mbote',
        options: ['Mbote', 'Melesi', 'Kende malamu', 'Ee']
      },
      {
        id: 'ln-v2',
        type: 'multiple-choice',
        question: 'What does "Melesi" mean?',
        questionFr: 'Que signifie "Melesi"?',
        correctAnswer: 'Thank you',
        options: ['Hello', 'Thank you', 'Goodbye', 'Yes']
      },
      {
        id: 'ln-v3',
        type: 'type-answer',
        question: 'Type the Lingala word for "Goodbye"',
        questionFr: 'Tapez le mot Lingala pour "Au revoir"',
        correctAnswer: 'Kende malamu'
      }
    ]
  }
];

// Twi Lessons
export const twiLessons: Lesson[] = [
  {
    id: 'tw-vocab-1',
    type: 'vocabulary',
    title: 'Basic Greetings',
    titleFr: 'Salutations de base',
    level: 1,
    xpReward: 10,
    exercises: [
      {
        id: 'tw-v1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Twi?',
        questionFr: 'Comment dit-on "Bonjour" en Twi?',
        correctAnswer: 'Akwaaba',
        options: ['Akwaaba', 'Medaase', 'Nante yie', 'Aane']
      },
      {
        id: 'tw-v2',
        type: 'multiple-choice',
        question: 'What does "Medaase" mean?',
        questionFr: 'Que signifie "Medaase"?',
        correctAnswer: 'Thank you',
        options: ['Hello', 'Thank you', 'Goodbye', 'Yes']
      },
      {
        id: 'tw-v3',
        type: 'type-answer',
        question: 'Type the Twi word for "Goodbye"',
        questionFr: 'Tapez le mot Twi pour "Au revoir"',
        correctAnswer: 'Nante yie'
      }
    ]
  }
];

// Chichewa Lessons
export const chichewaLessons: Lesson[] = [
  {
    id: 'ny-vocab-1',
    type: 'vocabulary',
    title: 'Basic Greetings',
    titleFr: 'Salutations de base',
    level: 1,
    xpReward: 10,
    exercises: [
      {
        id: 'ny-v1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Chichewa?',
        questionFr: 'Comment dit-on "Bonjour" en Chichewa?',
        correctAnswer: 'Moni',
        options: ['Moni', 'Zikomo', 'Pitani bwino', 'Inde']
      },
      {
        id: 'ny-v2',
        type: 'multiple-choice',
        question: 'What does "Zikomo" mean?',
        questionFr: 'Que signifie "Zikomo"?',
        correctAnswer: 'Thank you',
        options: ['Hello', 'Thank you', 'Goodbye', 'Yes']
      },
      {
        id: 'ny-v3',
        type: 'type-answer',
        question: 'Type the Chichewa word for "Goodbye"',
        questionFr: 'Tapez le mot Chichewa pour "Au revoir"',
        correctAnswer: 'Pitani bwino'
      }
    ]
  }
];

// Wolof Lessons
export const wolofLessons: Lesson[] = [
  {
    id: 'wo-vocab-1',
    type: 'vocabulary',
    title: 'Basic Greetings',
    titleFr: 'Salutations de base',
    level: 1,
    xpReward: 10,
    exercises: [
      {
        id: 'wo-v1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Wolof?',
        questionFr: 'Comment dit-on "Bonjour" en Wolof?',
        correctAnswer: 'Salaam aleekum',
        options: ['Salaam aleekum', 'Jërejëf', 'Mangi dem', 'Waaw']
      },
      {
        id: 'wo-v2',
        type: 'multiple-choice',
        question: 'What does "Jërejëf" mean?',
        questionFr: 'Que signifie "Jërejëf"?',
        correctAnswer: 'Thank you',
        options: ['Hello', 'Thank you', 'Goodbye', 'Yes']
      },
      {
        id: 'wo-v3',
        type: 'type-answer',
        question: 'Type the Wolof word for "Goodbye"',
        questionFr: 'Tapez le mot Wolof pour "Au revoir"',
        correctAnswer: 'Mangi dem'
      }
    ]
  }
];
