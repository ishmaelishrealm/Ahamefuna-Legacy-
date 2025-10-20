import { Lesson } from '../types';

export const igboLessons: Lesson[] = [
  // STAGE 1 - MISSION 1: GREETINGS (20 questions, 10 will be randomly selected)
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
        correctAnswerFr: 'Ndewo',
        options: ['Ndewo', 'Ka ọ dị', 'Daalụ', 'Biko'],
        optionsFr: ['Ndewo', 'Ka ọ dị', 'Daalụ', 'Biko']
      },
      {
        id: 'ig-v2',
        type: 'multiple-choice',
        question: 'What does "Ndewo" mean?',
        questionFr: 'Que signifie "Ndewo"?',
        correctAnswer: 'Hello',
        correctAnswerFr: 'Bonjour',
        options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
        optionsFr: ['Bonjour', 'Au revoir', 'Merci', 'S\'il vous plaît']
      },
      {
        id: 'ig-v3',
        type: 'type-answer',
        question: 'Type the Igbo word for "Goodbye"',
        questionFr: 'Tapez le mot Igbo pour "Au revoir"',
        correctAnswer: 'Ka ọ dị'
      },
      {
        id: 'ig-v4',
        type: 'multiple-choice',
        question: 'What is "Good morning" in Igbo?',
        questionFr: 'Comment dit-on "Bonjour" (matin) en Igbo?',
        correctAnswer: 'Ụtụtụ ọma',
        options: ['Ụtụtụ ọma', 'Ehihie ọma', 'Ka ọ dị', 'Ndewo']
      },
      {
        id: 'ig-v5',
        type: 'multiple-choice',
        question: '"Ka ọ dị" means:',
        questionFr: '"Ka ọ dị" signifie:',
        correctAnswer: 'Goodbye',
        options: ['Hello', 'Goodbye', 'Thank you', 'Please']
      },
      {
        id: 'ig-v6',
        type: 'multiple-choice',
        question: 'How do you say "Good evening" in Igbo?',
        questionFr: 'Comment dit-on "Bonsoir" en Igbo?',
        correctAnswer: 'Ehihie ọma',
        options: ['Ụtụtụ ọma', 'Ehihie ọma', 'Abalị ọma', 'Ndewo']
      },
      {
        id: 'ig-v7',
        type: 'type-answer',
        question: 'Type "Good night" in Igbo',
        questionFr: 'Tapez "Bonne nuit" en Igbo',
        correctAnswer: 'Abalị ọma'
      },
      {
        id: 'ig-v8',
        type: 'multiple-choice',
        question: 'What does "Kedu ka ị mere?" mean?',
        questionFr: 'Que signifie "Kedu ka ị mere?"?',
        correctAnswer: 'How are you?',
        options: ['How are you?', 'What is your name?', 'Where are you?', 'How old are you?']
      },
      {
        id: 'ig-v9',
        type: 'multiple-choice',
        question: 'How do you respond to "Kedu ka ị mere?"',
        questionFr: 'Comment répondre à "Kedu ka ị mere?"?',
        correctAnswer: 'Adị m mma',
        options: ['Adị m mma', 'Aha m bụ...', 'Anọ m ebe a', 'Adị m afọ...']
      },
      {
        id: 'ig-v10',
        type: 'type-answer',
        question: 'Type "I am fine" in Igbo',
        questionFr: 'Tapez "Je vais bien" en Igbo',
        correctAnswer: 'Adị m mma'
      },
      {
        id: 'ig-v11',
        type: 'multiple-choice',
        question: 'What is "Welcome" in Igbo?',
        questionFr: 'Comment dit-on "Bienvenue" en Igbo?',
        correctAnswer: 'Nnọọ',
        options: ['Nnọọ', 'Ndewo', 'Daalụ', 'Biko']
      },
      {
        id: 'ig-v12',
        type: 'multiple-choice',
        question: '"Nnọọ" means:',
        questionFr: '"Nnọọ" signifie:',
        correctAnswer: 'Welcome',
        options: ['Hello', 'Welcome', 'Thank you', 'Goodbye']
      },
      {
        id: 'ig-v13',
        type: 'type-answer',
        question: 'Type "See you later" in Igbo',
        questionFr: 'Tapez "À bientôt" en Igbo',
        correctAnswer: 'Ka anyị hụ mgbe ọzọ'
      },
      {
        id: 'ig-v14',
        type: 'multiple-choice',
        question: 'How do you say "Nice to meet you" in Igbo?',
        questionFr: 'Comment dit-on "Ravi de vous rencontrer" en Igbo?',
        correctAnswer: 'Ọ dị m ụtọ izute gị',
        options: ['Ọ dị m ụtọ izute gị', 'Ndewo', 'Ka ọ dị', 'Daalụ']
      },
      {
        id: 'ig-v15',
        type: 'multiple-choice',
        question: 'What does "Ọ dị m ụtọ izute gị" mean?',
        questionFr: 'Que signifie "Ọ dị m ụtọ izute gị"?',
        correctAnswer: 'Nice to meet you',
        options: ['Nice to meet you', 'How are you?', 'What is your name?', 'Where are you from?']
      },
      {
        id: 'ig-v16',
        type: 'type-answer',
        question: 'Type "Excuse me" in Igbo',
        questionFr: 'Tapez "Excusez-moi" en Igbo',
        correctAnswer: 'Biko'
      },
      {
        id: 'ig-v17',
        type: 'multiple-choice',
        question: 'How do you say "Please" in Igbo?',
        questionFr: 'Comment dit-on "S\'il vous plaît" en Igbo?',
        correctAnswer: 'Biko',
        options: ['Biko', 'Daalụ', 'Ndewo', 'Ka ọ dị']
      },
      {
        id: 'ig-v18',
        type: 'multiple-choice',
        question: 'What is "Sorry" in Igbo?',
        questionFr: 'Comment dit-on "Désolé" en Igbo?',
        correctAnswer: 'Ndo',
        options: ['Ndo', 'Biko', 'Daalụ', 'Ndewo']
      },
      {
        id: 'ig-v19',
        type: 'type-answer',
        question: 'Type "Thank you very much" in Igbo',
        questionFr: 'Tapez "Merci beaucoup" en Igbo',
        correctAnswer: 'Daalụ nke ukwuu'
      },
      {
        id: 'ig-v20',
        type: 'multiple-choice',
        question: 'How do you say "You\'re welcome" in Igbo?',
        questionFr: 'Comment dit-on "De rien" en Igbo?',
        correctAnswer: 'Kedu ka ị mere',
        options: ['Kedu ka ị mere', 'Ndewo', 'Ka ọ dị', 'Daalụ']
      }
    ]
  },

  // STAGE 1 - MISSION 2: COMMON PHRASES (20 questions, 10 will be randomly selected)
  {
    id: 'ig-vocab-2',
    type: 'vocabulary',
    title: 'Common Phrases',
    titleFr: 'Phrases courantes',
    level: 1,
    xpReward: 10,
    exercises: [
      {
        id: 'ig-v21',
        type: 'multiple-choice',
        question: 'How do you say "What is your name?" in Igbo?',
        questionFr: 'Comment dit-on "Comment vous appelez-vous?" en Igbo?',
        correctAnswer: 'Kedu aha gị?',
        options: ['Kedu aha gị?', 'Kedu ka ị mere?', 'Ebe ka ị si?', 'Kedu afọ gị?']
      },
      {
        id: 'ig-v22',
        type: 'multiple-choice',
        question: 'What does "Kedu aha gị?" mean?',
        questionFr: 'Que signifie "Kedu aha gị?"?',
        correctAnswer: 'What is your name?',
        options: ['What is your name?', 'How are you?', 'Where are you from?', 'How old are you?']
      },
      {
        id: 'ig-v23',
        type: 'type-answer',
        question: 'Type "My name is..." in Igbo',
        questionFr: 'Tapez "Je m\'appelle..." en Igbo',
        correctAnswer: 'Aha m bụ...'
      },
      {
        id: 'ig-v24',
        type: 'multiple-choice',
        question: 'How do you say "Where are you from?" in Igbo?',
        questionFr: 'Comment dit-on "D\'où venez-vous?" en Igbo?',
        correctAnswer: 'Ebe ka ị si?',
        options: ['Ebe ka ị si?', 'Kedu aha gị?', 'Kedu ka ị mere?', 'Ebe ka ị na-aga?']
      },
      {
        id: 'ig-v25',
        type: 'multiple-choice',
        question: '"Ebe ka ị si?" means:',
        questionFr: '"Ebe ka ị si?" signifie:',
        correctAnswer: 'Where are you from?',
        options: ['Where are you from?', 'Where are you going?', 'Where do you live?', 'Where is it?']
      },
      {
        id: 'ig-v26',
        type: 'type-answer',
        question: 'Type "I am from..." in Igbo',
        questionFr: 'Tapez "Je viens de..." en Igbo',
        correctAnswer: 'Esi m...'
      },
      {
        id: 'ig-v27',
        type: 'multiple-choice',
        question: 'How do you say "How old are you?" in Igbo?',
        questionFr: 'Comment dit-on "Quel âge avez-vous?" en Igbo?',
        correctAnswer: 'Kedu afọ gị?',
        options: ['Kedu afọ gị?', 'Kedu aha gị?', 'Kedu ka ị mere?', 'Ebe ka ị si?']
      },
      {
        id: 'ig-v28',
        type: 'multiple-choice',
        question: 'What does "Kedu afọ gị?" mean?',
        questionFr: 'Que signifie "Kedu afọ gị?"?',
        correctAnswer: 'How old are you?',
        options: ['How old are you?', 'What is your name?', 'How are you?', 'Where are you from?']
      },
      {
        id: 'ig-v29',
        type: 'type-answer',
        question: 'Type "I am ... years old" in Igbo',
        questionFr: 'Tapez "J\'ai ... ans" en Igbo',
        correctAnswer: 'Adị m afọ...'
      },
      {
        id: 'ig-v30',
        type: 'multiple-choice',
        question: 'How do you say "Where do you live?" in Igbo?',
        questionFr: 'Comment dit-on "Où habitez-vous?" en Igbo?',
        correctAnswer: 'Ebe ka ị bi?',
        options: ['Ebe ka ị bi?', 'Ebe ka ị si?', 'Ebe ka ị na-aga?', 'Ebe ọ dị?']
      },
      {
        id: 'ig-v31',
        type: 'multiple-choice',
        question: '"Ebe ka ị bi?" means:',
        questionFr: '"Ebe ka ị bi?" signifie:',
        correctAnswer: 'Where do you live?',
        options: ['Where do you live?', 'Where are you from?', 'Where are you going?', 'Where is it?']
      },
      {
        id: 'ig-v32',
        type: 'type-answer',
        question: 'Type "I live in..." in Igbo',
        questionFr: 'Tapez "J\'habite à..." en Igbo',
        correctAnswer: 'Ana m ebi na...'
      },
      {
        id: 'ig-v33',
        type: 'multiple-choice',
        question: 'How do you say "What do you do?" in Igbo?',
        questionFr: 'Comment dit-on "Que faites-vous?" en Igbo?',
        correctAnswer: 'Gịnị ka ị na-eme?',
        options: ['Gịnị ka ị na-eme?', 'Kedu aha gị?', 'Kedu ka ị mere?', 'Ebe ka ị si?']
      },
      {
        id: 'ig-v34',
        type: 'multiple-choice',
        question: 'What does "Gịnị ka ị na-eme?" mean?',
        questionFr: 'Que signifie "Gịnị ka ị na-eme?"?',
        correctAnswer: 'What do you do?',
        options: ['What do you do?', 'What is your name?', 'How are you?', 'Where are you from?']
      },
      {
        id: 'ig-v35',
        type: 'type-answer',
        question: 'Type "I am a student" in Igbo',
        questionFr: 'Tapez "Je suis étudiant" en Igbo',
        correctAnswer: 'Abụ m nwa akwụkwọ'
      },
      {
        id: 'ig-v36',
        type: 'multiple-choice',
        question: 'How do you say "I am a teacher" in Igbo?',
        questionFr: 'Comment dit-on "Je suis enseignant" en Igbo?',
        correctAnswer: 'Abụ m onye nkuzi',
        options: ['Abụ m onye nkuzi', 'Abụ m nwa akwụkwọ', 'Abụ m dọkịta', 'Abụ m onye ọrụ']
      },
      {
        id: 'ig-v37',
        type: 'multiple-choice',
        question: 'What does "Abụ m onye nkuzi" mean?',
        questionFr: 'Que signifie "Abụ m onye nkuzi"?',
        correctAnswer: 'I am a teacher',
        options: ['I am a teacher', 'I am a student', 'I am a doctor', 'I am a worker']
      },
      {
        id: 'ig-v38',
        type: 'type-answer',
        question: 'Type "I am a doctor" in Igbo',
        questionFr: 'Tapez "Je suis médecin" en Igbo',
        correctAnswer: 'Abụ m dọkịta'
      },
      {
        id: 'ig-v39',
        type: 'multiple-choice',
        question: 'How do you say "I am learning Igbo" in Igbo?',
        questionFr: 'Comment dit-on "J\'apprends l\'Igbo" en Igbo?',
        correctAnswer: 'Ana m amụ Igbo',
        options: ['Ana m amụ Igbo', 'Ana m amụ Bekee', 'Ana m amụ French', 'Ana m amụ Arabic']
      },
      {
        id: 'ig-v40',
        type: 'multiple-choice',
        question: 'What does "Ana m amụ Igbo" mean?',
        questionFr: 'Que signifie "Ana m amụ Igbo"?',
        correctAnswer: 'I am learning Igbo',
        options: ['I am learning Igbo', 'I am learning English', 'I am learning French', 'I am learning Arabic']
      }
    ]
  },

  // STAGE 1 - MISSION 3: BASIC WORDS (20 questions, 10 will be randomly selected)
  {
    id: 'ig-vocab-3',
    type: 'vocabulary',
    title: 'Basic Words',
    titleFr: 'Mots de base',
    level: 1,
    xpReward: 10,
    exercises: [
      {
        id: 'ig-v41',
        type: 'multiple-choice',
        question: 'How do you say "Yes" in Igbo?',
        questionFr: 'Comment dit-on "Oui" en Igbo?',
        correctAnswer: 'Ee',
        options: ['Ee', 'Mba', 'Biko', 'Ndewo']
      },
      {
        id: 'ig-v42',
        type: 'multiple-choice',
        question: 'What does "Ee" mean?',
        questionFr: 'Que signifie "Ee"?',
        correctAnswer: 'Yes',
        options: ['Yes', 'No', 'Please', 'Hello']
      },
      {
        id: 'ig-v43',
        type: 'type-answer',
        question: 'Type "No" in Igbo',
        questionFr: 'Tapez "Non" en Igbo',
        correctAnswer: 'Mba'
      },
      {
        id: 'ig-v44',
        type: 'multiple-choice',
        question: 'How do you say "Water" in Igbo?',
        questionFr: 'Comment dit-on "Eau" en Igbo?',
        correctAnswer: 'Mmiri',
        options: ['Mmiri', 'Nri', 'Ụlọ', 'Ego']
      },
      {
        id: 'ig-v45',
        type: 'multiple-choice',
        question: '"Mmiri" means:',
        questionFr: '"Mmiri" signifie:',
        correctAnswer: 'Water',
        options: ['Water', 'Food', 'House', 'Money']
      },
      {
        id: 'ig-v46',
        type: 'type-answer',
        question: 'Type "Food" in Igbo',
        questionFr: 'Tapez "Nourriture" en Igbo',
        correctAnswer: 'Nri'
      },
      {
        id: 'ig-v47',
        type: 'multiple-choice',
        question: 'How do you say "House" in Igbo?',
        questionFr: 'Comment dit-on "Maison" en Igbo?',
        correctAnswer: 'Ụlọ',
        options: ['Ụlọ', 'Mmiri', 'Nri', 'Ego']
      },
      {
        id: 'ig-v48',
        type: 'multiple-choice',
        question: 'What does "Ụlọ" mean?',
        questionFr: 'Que signifie "Ụlọ"?',
        correctAnswer: 'House',
        options: ['House', 'Water', 'Food', 'Money']
      },
      {
        id: 'ig-v49',
        type: 'type-answer',
        question: 'Type "Money" in Igbo',
        questionFr: 'Tapez "Argent" en Igbo',
        correctAnswer: 'Ego'
      },
      {
        id: 'ig-v50',
        type: 'multiple-choice',
        question: 'How do you say "Book" in Igbo?',
        questionFr: 'Comment dit-on "Livre" en Igbo?',
        correctAnswer: 'Akwụkwọ',
        options: ['Akwụkwọ', 'Ego', 'Ụlọ', 'Nri']
      },
      {
        id: 'ig-v51',
        type: 'multiple-choice',
        question: '"Akwụkwọ" means:',
        questionFr: '"Akwụkwọ" signifie:',
        correctAnswer: 'Book',
        options: ['Book', 'Money', 'House', 'Food']
      },
      {
        id: 'ig-v52',
        type: 'type-answer',
        question: 'Type "Car" in Igbo',
        questionFr: 'Tapez "Voiture" en Igbo',
        correctAnswer: 'Ụgbọ ala'
      },
      {
        id: 'ig-v53',
        type: 'multiple-choice',
        question: 'How do you say "Tree" in Igbo?',
        questionFr: 'Comment dit-on "Arbre" en Igbo?',
        correctAnswer: 'Osisi',
        options: ['Osisi', 'Ụgbọ ala', 'Akwụkwọ', 'Ego']
      },
      {
        id: 'ig-v54',
        type: 'multiple-choice',
        question: 'What does "Osisi" mean?',
        questionFr: 'Que signifie "Osisi"?',
        correctAnswer: 'Tree',
        options: ['Tree', 'Car', 'Book', 'Money']
      },
      {
        id: 'ig-v55',
        type: 'type-answer',
        question: 'Type "Sun" in Igbo',
        questionFr: 'Tapez "Soleil" en Igbo',
        correctAnswer: 'Anyanwụ'
      },
      {
        id: 'ig-v56',
        type: 'multiple-choice',
        question: 'How do you say "Moon" in Igbo?',
        questionFr: 'Comment dit-on "Lune" en Igbo?',
        correctAnswer: 'Ọnwa',
        options: ['Ọnwa', 'Anyanwụ', 'Osisi', 'Ụgbọ ala']
      },
      {
        id: 'ig-v57',
        type: 'multiple-choice',
        question: 'What does "Ọnwa" mean?',
        questionFr: 'Que signifie "Ọnwa"?',
        correctAnswer: 'Moon',
        options: ['Moon', 'Sun', 'Tree', 'Car']
      },
      {
        id: 'ig-v58',
        type: 'type-answer',
        question: 'Type "Fire" in Igbo',
        questionFr: 'Tapez "Feu" en Igbo',
        correctAnswer: 'Ọkụ'
      },
      {
        id: 'ig-v59',
        type: 'multiple-choice',
        question: 'How do you say "Earth" in Igbo?',
        questionFr: 'Comment dit-on "Terre" en Igbo?',
        correctAnswer: 'Ụwa',
        options: ['Ụwa', 'Ọkụ', 'Ọnwa', 'Anyanwụ']
      },
      {
        id: 'ig-v60',
        type: 'multiple-choice',
        question: 'What does "Ụwa" mean?',
        questionFr: 'Que signifie "Ụwa"?',
        correctAnswer: 'Earth',
        options: ['Earth', 'Fire', 'Moon', 'Sun']
      }
    ]
  },

  // STAGE 1 - MISSION 4: ESSENTIAL VOCABULARY (20 questions, 10 will be randomly selected)
  {
    id: 'ig-vocab-4',
    type: 'vocabulary',
    title: 'Essential Vocabulary',
    titleFr: 'Vocabulaire essentiel',
    level: 1,
    xpReward: 10,
    exercises: [
      {
        id: 'ig-v61',
        type: 'multiple-choice',
        question: 'How do you say "Family" in Igbo?',
        questionFr: 'Comment dit-on "Famille" en Igbo?',
        correctAnswer: 'Ezinụlọ',
        options: ['Ezinụlọ', 'Ndị enyi', 'Ndị ọrụ', 'Ndị nkuzi']
      },
      {
        id: 'ig-v62',
        type: 'multiple-choice',
        question: 'What does "Ezinụlọ" mean?',
        questionFr: 'Que signifie "Ezinụlọ"?',
        correctAnswer: 'Family',
        options: ['Family', 'Friends', 'Workers', 'Teachers']
      },
      {
        id: 'ig-v63',
        type: 'type-answer',
        question: 'Type "Mother" in Igbo',
        questionFr: 'Tapez "Mère" en Igbo',
        correctAnswer: 'Nne'
      },
      {
        id: 'ig-v64',
        type: 'multiple-choice',
        question: 'How do you say "Father" in Igbo?',
        questionFr: 'Comment dit-on "Père" en Igbo?',
        correctAnswer: 'Nna',
        options: ['Nna', 'Nne', 'Nwa', 'Nwanne']
      },
      {
        id: 'ig-v65',
        type: 'multiple-choice',
        question: '"Nna" means:',
        questionFr: '"Nna" signifie:',
        correctAnswer: 'Father',
        options: ['Father', 'Mother', 'Child', 'Sibling']
      },
      {
        id: 'ig-v66',
        type: 'type-answer',
        question: 'Type "Child" in Igbo',
        questionFr: 'Tapez "Enfant" en Igbo',
        correctAnswer: 'Nwa'
      },
      {
        id: 'ig-v67',
        type: 'multiple-choice',
        question: 'How do you say "Brother" in Igbo?',
        questionFr: 'Comment dit-on "Frère" en Igbo?',
        correctAnswer: 'Nwanne nwoke',
        options: ['Nwanne nwoke', 'Nwanne nwaanyị', 'Nna', 'Nne']
      },
      {
        id: 'ig-v68',
        type: 'multiple-choice',
        question: 'What does "Nwanne nwoke" mean?',
        questionFr: 'Que signifie "Nwanne nwoke"?',
        correctAnswer: 'Brother',
        options: ['Brother', 'Sister', 'Father', 'Mother']
      },
      {
        id: 'ig-v69',
        type: 'type-answer',
        question: 'Type "Sister" in Igbo',
        questionFr: 'Tapez "Sœur" en Igbo',
        correctAnswer: 'Nwanne nwaanyị'
      },
      {
        id: 'ig-v70',
        type: 'multiple-choice',
        question: 'How do you say "Friend" in Igbo?',
        questionFr: 'Comment dit-on "Ami" en Igbo?',
        correctAnswer: 'Enyi',
        options: ['Enyi', 'Ezinụlọ', 'Ndị ọrụ', 'Ndị nkuzi']
      },
      {
        id: 'ig-v71',
        type: 'multiple-choice',
        question: '"Enyi" means:',
        questionFr: '"Enyi" signifie:',
        correctAnswer: 'Friend',
        options: ['Friend', 'Family', 'Worker', 'Teacher']
      },
      {
        id: 'ig-v72',
        type: 'type-answer',
        question: 'Type "Work" in Igbo',
        questionFr: 'Tapez "Travail" en Igbo',
        correctAnswer: 'Ọrụ'
      },
      {
        id: 'ig-v73',
        type: 'multiple-choice',
        question: 'How do you say "School" in Igbo?',
        questionFr: 'Comment dit-on "École" en Igbo?',
        correctAnswer: 'Ụlọ akwụkwọ',
        options: ['Ụlọ akwụkwọ', 'Ụlọ ọrụ', 'Ụlọ ahịa', 'Ụlọ ọgwụ']
      },
      {
        id: 'ig-v74',
        type: 'multiple-choice',
        question: 'What does "Ụlọ akwụkwọ" mean?',
        questionFr: 'Que signifie "Ụlọ akwụkwọ"?',
        correctAnswer: 'School',
        options: ['School', 'Office', 'Market', 'Hospital']
      },
      {
        id: 'ig-v75',
        type: 'type-answer',
        question: 'Type "Market" in Igbo',
        questionFr: 'Tapez "Marché" en Igbo',
        correctAnswer: 'Ahịa'
      },
      {
        id: 'ig-v76',
        type: 'multiple-choice',
        question: 'How do you say "Hospital" in Igbo?',
        questionFr: 'Comment dit-on "Hôpital" en Igbo?',
        correctAnswer: 'Ụlọ ọgwụ',
        options: ['Ụlọ ọgwụ', 'Ụlọ akwụkwọ', 'Ụlọ ọrụ', 'Ahịa']
      },
      {
        id: 'ig-v77',
        type: 'multiple-choice',
        question: 'What does "Ụlọ ọgwụ" mean?',
        questionFr: 'Que signifie "Ụlọ ọgwụ"?',
        correctAnswer: 'Hospital',
        options: ['Hospital', 'School', 'Office', 'Market']
      },
      {
        id: 'ig-v78',
        type: 'type-answer',
        question: 'Type "Church" in Igbo',
        questionFr: 'Tapez "Église" en Igbo',
        correctAnswer: 'Ụlọ ụka'
      },
      {
        id: 'ig-v79',
        type: 'multiple-choice',
        question: 'How do you say "Time" in Igbo?',
        questionFr: 'Comment dit-on "Temps" en Igbo?',
        correctAnswer: 'Oge',
        options: ['Oge', 'Ụbọchị', 'Ụtụtụ', 'Ehihie']
      },
      {
        id: 'ig-v80',
        type: 'multiple-choice',
        question: 'What does "Oge" mean?',
        questionFr: 'Que signifie "Oge"?',
        correctAnswer: 'Time',
        options: ['Time', 'Day', 'Morning', 'Afternoon']
      }
    ]
  },

  // STAGE 1 - MISSION 5: PRACTICE & REVIEW (20 questions, 10 will be randomly selected)
  {
    id: 'ig-vocab-5',
    type: 'vocabulary',
    title: 'Practice & Review',
    titleFr: 'Pratique et révision',
    level: 1,
    xpReward: 15,
    exercises: [
      {
        id: 'ig-v81',
        type: 'multiple-choice',
        question: 'Complete: "Ndewo, ___ ka ị mere?"',
        questionFr: 'Compléter: "Ndewo, ___ ka ị mere?"',
        correctAnswer: 'Kedu',
        options: ['Kedu', 'Ebe', 'Gịnị', 'Kedu aha']
      },
      {
        id: 'ig-v82',
        type: 'multiple-choice',
        question: 'What is the correct response to "Kedu ka ị mere?"',
        questionFr: 'Quelle est la bonne réponse à "Kedu ka ị mere?"?',
        correctAnswer: 'Adị m mma',
        options: ['Adị m mma', 'Aha m bụ...', 'Esi m...', 'Ana m ebi na...']
      },
      {
        id: 'ig-v83',
        type: 'type-answer',
        question: 'Type the Igbo word for "Thank you"',
        questionFr: 'Tapez le mot Igbo pour "Merci"',
        correctAnswer: 'Daalụ'
      },
      {
        id: 'ig-v84',
        type: 'multiple-choice',
        question: 'How do you say "Good morning" in Igbo?',
        questionFr: 'Comment dit-on "Bonjour" (matin) en Igbo?',
        correctAnswer: 'Ụtụtụ ọma',
        options: ['Ụtụtụ ọma', 'Ehihie ọma', 'Abalị ọma', 'Ndewo']
      },
      {
        id: 'ig-v85',
        type: 'multiple-choice',
        question: 'What does "Ka ọ dị" mean?',
        questionFr: 'Que signifie "Ka ọ dị"?',
        correctAnswer: 'Goodbye',
        options: ['Goodbye', 'Hello', 'Thank you', 'Please']
      },
      {
        id: 'ig-v86',
        type: 'type-answer',
        question: 'Type "Please" in Igbo',
        questionFr: 'Tapez "S\'il vous plaît" en Igbo',
        correctAnswer: 'Biko'
      },
      {
        id: 'ig-v87',
        type: 'multiple-choice',
        question: 'How do you say "Water" in Igbo?',
        questionFr: 'Comment dit-on "Eau" en Igbo?',
        correctAnswer: 'Mmiri',
        options: ['Mmiri', 'Nri', 'Ụlọ', 'Ego']
      },
      {
        id: 'ig-v88',
        type: 'multiple-choice',
        question: 'What does "Nri" mean?',
        questionFr: 'Que signifie "Nri"?',
        correctAnswer: 'Food',
        options: ['Food', 'Water', 'House', 'Money']
      },
      {
        id: 'ig-v89',
        type: 'type-answer',
        question: 'Type "House" in Igbo',
        questionFr: 'Tapez "Maison" en Igbo',
        correctAnswer: 'Ụlọ'
      },
      {
        id: 'ig-v90',
        type: 'multiple-choice',
        question: 'How do you say "Family" in Igbo?',
        questionFr: 'Comment dit-on "Famille" en Igbo?',
        correctAnswer: 'Ezinụlọ',
        options: ['Ezinụlọ', 'Enyi', 'Ndị ọrụ', 'Ndị nkuzi']
      },
      {
        id: 'ig-v91',
        type: 'multiple-choice',
        question: 'What does "Nne" mean?',
        questionFr: 'Que signifie "Nne"?',
        correctAnswer: 'Mother',
        options: ['Mother', 'Father', 'Child', 'Sister']
      },
      {
        id: 'ig-v92',
        type: 'type-answer',
        question: 'Type "Father" in Igbo',
        questionFr: 'Tapez "Père" en Igbo',
        correctAnswer: 'Nna'
      },
      {
        id: 'ig-v93',
        type: 'multiple-choice',
        question: 'How do you say "School" in Igbo?',
        questionFr: 'Comment dit-on "École" en Igbo?',
        correctAnswer: 'Ụlọ akwụkwọ',
        options: ['Ụlọ akwụkwọ', 'Ụlọ ọrụ', 'Ụlọ ahịa', 'Ụlọ ọgwụ']
      },
      {
        id: 'ig-v94',
        type: 'multiple-choice',
        question: 'What does "Enyi" mean?',
        questionFr: 'Que signifie "Enyi"?',
        correctAnswer: 'Friend',
        options: ['Friend', 'Family', 'Worker', 'Teacher']
      },
      {
        id: 'ig-v95',
        type: 'type-answer',
        question: 'Type "Yes" in Igbo',
        questionFr: 'Tapez "Oui" en Igbo',
        correctAnswer: 'Ee'
      },
      {
        id: 'ig-v96',
        type: 'multiple-choice',
        question: 'How do you say "No" in Igbo?',
        questionFr: 'Comment dit-on "Non" en Igbo?',
        correctAnswer: 'Mba',
        options: ['Mba', 'Ee', 'Biko', 'Ndewo']
      },
      {
        id: 'ig-v97',
        type: 'multiple-choice',
        question: 'What does "Ụlọ ọgwụ" mean?',
        questionFr: 'Que signifie "Ụlọ ọgwụ"?',
        correctAnswer: 'Hospital',
        options: ['Hospital', 'School', 'Office', 'Market']
      },
      {
        id: 'ig-v98',
        type: 'type-answer',
        question: 'Type "Time" in Igbo',
        questionFr: 'Tapez "Temps" en Igbo',
        correctAnswer: 'Oge'
      },
      {
        id: 'ig-v99',
        type: 'multiple-choice',
        question: 'Complete: "Aha m bụ ___" (My name is...)',
        questionFr: 'Compléter: "Aha m bụ ___" (Je m\'appelle...)',
        correctAnswer: '...',
        options: ['...', 'Ee', 'Mba', 'Biko']
      },
      {
        id: 'ig-v100',
        type: 'multiple-choice',
        question: 'What is the Igbo word for "Welcome"?',
        questionFr: 'Quel est le mot Igbo pour "Bienvenue"?',
        correctAnswer: 'Nnọọ',
        options: ['Nnọọ', 'Ndewo', 'Daalụ', 'Biko']
      }
    ]
  },

  // STAGE 2 - MISSION 6: DAILY LIFE (20 questions, 10 will be randomly selected)
  {
    id: 'ig-vocab-6',
    type: 'vocabulary',
    title: 'Daily Life',
    titleFr: 'Vie quotidienne',
    level: 2,
    xpReward: 15,
    exercises: [
      {
        id: 'ig-v101',
        type: 'multiple-choice',
        question: 'How do you say "I wake up" in Igbo?',
        questionFr: 'Comment dit-on "Je me réveille" en Igbo?',
        correctAnswer: 'Ana m eteta',
        options: ['Ana m eteta', 'Ana m ehi ụra', 'Ana m eri nri', 'Ana m aga ọrụ']
      },
      {
        id: 'ig-v102',
        type: 'multiple-choice',
        question: 'What does "Ana m eteta" mean?',
        questionFr: 'Que signifie "Ana m eteta"?',
        correctAnswer: 'I wake up',
        options: ['I wake up', 'I sleep', 'I eat', 'I go to work']
      },
      {
        id: 'ig-v103',
        type: 'type-answer',
        question: 'Type "I sleep" in Igbo',
        questionFr: 'Tapez "Je dors" en Igbo',
        correctAnswer: 'Ana m ehi ụra'
      },
      {
        id: 'ig-v104',
        type: 'multiple-choice',
        question: 'How do you say "I eat" in Igbo?',
        questionFr: 'Comment dit-on "Je mange" en Igbo?',
        correctAnswer: 'Ana m eri nri',
        options: ['Ana m eri nri', 'Ana m eteta', 'Ana m ehi ụra', 'Ana m aga ọrụ']
      },
      {
        id: 'ig-v105',
        type: 'multiple-choice',
        question: '"Ana m eri nri" means:',
        questionFr: '"Ana m eri nri" signifie:',
        correctAnswer: 'I eat',
        options: ['I eat', 'I wake up', 'I sleep', 'I go to work']
      },
      {
        id: 'ig-v106',
        type: 'type-answer',
        question: 'Type "I go to work" in Igbo',
        questionFr: 'Tapez "Je vais au travail" en Igbo',
        correctAnswer: 'Ana m aga ọrụ'
      },
      {
        id: 'ig-v107',
        type: 'multiple-choice',
        question: 'How do you say "I study" in Igbo?',
        questionFr: 'Comment dit-on "J\'étudie" en Igbo?',
        correctAnswer: 'Ana m amụ',
        options: ['Ana m amụ', 'Ana m aga ọrụ', 'Ana m eri nri', 'Ana m eteta']
      },
      {
        id: 'ig-v108',
        type: 'multiple-choice',
        question: 'What does "Ana m amụ" mean?',
        questionFr: 'Que signifie "Ana m amụ"?',
        correctAnswer: 'I study',
        options: ['I study', 'I go to work', 'I eat', 'I wake up']
      },
      {
        id: 'ig-v109',
        type: 'type-answer',
        question: 'Type "I play" in Igbo',
        questionFr: 'Tapez "Je joue" en Igbo',
        correctAnswer: 'Ana m egwu'
      },
      {
        id: 'ig-v110',
        type: 'multiple-choice',
        question: 'How do you say "I cook" in Igbo?',
        questionFr: 'Comment dit-on "Je cuisine" en Igbo?',
        correctAnswer: 'Ana m esi nri',
        options: ['Ana m esi nri', 'Ana m egwu', 'Ana m amụ', 'Ana m aga ọrụ']
      },
      {
        id: 'ig-v111',
        type: 'multiple-choice',
        question: '"Ana m esi nri" means:',
        questionFr: '"Ana m esi nri" signifie:',
        correctAnswer: 'I cook',
        options: ['I cook', 'I play', 'I study', 'I go to work']
      },
      {
        id: 'ig-v112',
        type: 'type-answer',
        question: 'Type "I clean" in Igbo',
        questionFr: 'Tapez "Je nettoie" en Igbo',
        correctAnswer: 'Ana m ehicha'
      },
      {
        id: 'ig-v113',
        type: 'multiple-choice',
        question: 'How do you say "I wash" in Igbo?',
        questionFr: 'Comment dit-on "Je lave" en Igbo?',
        correctAnswer: 'Ana m asa',
        options: ['Ana m asa', 'Ana m ehicha', 'Ana m esi nri', 'Ana m egwu']
      },
      {
        id: 'ig-v114',
        type: 'multiple-choice',
        question: 'What does "Ana m asa" mean?',
        questionFr: 'Que signifie "Ana m asa"?',
        correctAnswer: 'I wash',
        options: ['I wash', 'I clean', 'I cook', 'I play']
      },
      {
        id: 'ig-v115',
        type: 'type-answer',
        question: 'Type "I read" in Igbo',
        questionFr: 'Tapez "Je lis" en Igbo',
        correctAnswer: 'Ana m agụ'
      },
      {
        id: 'ig-v116',
        type: 'multiple-choice',
        question: 'How do you say "I write" in Igbo?',
        questionFr: 'Comment dit-on "J\'écris" en Igbo?',
        correctAnswer: 'Ana m ede',
        options: ['Ana m ede', 'Ana m agụ', 'Ana m asa', 'Ana m ehicha']
      },
      {
        id: 'ig-v117',
        type: 'multiple-choice',
        question: 'What does "Ana m ede" mean?',
        questionFr: 'Que signifie "Ana m ede"?',
        correctAnswer: 'I write',
        options: ['I write', 'I read', 'I wash', 'I clean']
      },
      {
        id: 'ig-v118',
        type: 'type-answer',
        question: 'Type "I listen" in Igbo',
        questionFr: 'Tapez "J\'écoute" en Igbo',
        correctAnswer: 'Ana m ege ntị'
      },
      {
        id: 'ig-v119',
        type: 'multiple-choice',
        question: 'How do you say "I speak" in Igbo?',
        questionFr: 'Comment dit-on "Je parle" en Igbo?',
        correctAnswer: 'Ana m ekwu',
        options: ['Ana m ekwu', 'Ana m ege ntị', 'Ana m ede', 'Ana m agụ']
      },
      {
        id: 'ig-v120',
        type: 'multiple-choice',
        question: 'What does "Ana m ekwu" mean?',
        questionFr: 'Que signifie "Ana m ekwu"?',
        correctAnswer: 'I speak',
        options: ['I speak', 'I listen', 'I write', 'I read']
      }
    ]
  },

  // STAGE 2 - MISSION 7: MORE PHRASES (20 questions, 10 will be randomly selected)
  {
    id: 'ig-vocab-7',
    type: 'vocabulary',
    title: 'More Phrases',
    titleFr: 'Plus de phrases',
    level: 2,
    xpReward: 15,
    exercises: [
      {
        id: 'ig-v121',
        type: 'multiple-choice',
        question: 'How do you say "I am hungry" in Igbo?',
        questionFr: 'Comment dit-on "J\'ai faim" en Igbo?',
        correctAnswer: 'Agụụ na-agụ m',
        options: ['Agụụ na-agụ m', 'Mmiri na-agụ m', 'Ụra na-agụ m', 'Ọkụ na-agụ m']
      },
      {
        id: 'ig-v122',
        type: 'multiple-choice',
        question: 'What does "Agụụ na-agụ m" mean?',
        questionFr: 'Que signifie "Agụụ na-agụ m"?',
        correctAnswer: 'I am hungry',
        options: ['I am hungry', 'I am thirsty', 'I am tired', 'I am hot']
      },
      {
        id: 'ig-v123',
        type: 'type-answer',
        question: 'Type "I am thirsty" in Igbo',
        questionFr: 'Tapez "J\'ai soif" en Igbo',
        correctAnswer: 'Mmiri na-agụ m'
      },
      {
        id: 'ig-v124',
        type: 'multiple-choice',
        question: 'How do you say "I am tired" in Igbo?',
        questionFr: 'Comment dit-on "Je suis fatigué" en Igbo?',
        correctAnswer: 'Ụra na-agụ m',
        options: ['Ụra na-agụ m', 'Agụụ na-agụ m', 'Mmiri na-agụ m', 'Ọkụ na-agụ m']
      },
      {
        id: 'ig-v125',
        type: 'multiple-choice',
        question: '"Ụra na-agụ m" means:',
        questionFr: '"Ụra na-agụ m" signifie:',
        correctAnswer: 'I am tired',
        options: ['I am tired', 'I am hungry', 'I am thirsty', 'I am hot']
      },
      {
        id: 'ig-v126',
        type: 'type-answer',
        question: 'Type "I am hot" in Igbo',
        questionFr: 'Tapez "J\'ai chaud" en Igbo',
        correctAnswer: 'Ọkụ na-agụ m'
      },
      {
        id: 'ig-v127',
        type: 'multiple-choice',
        question: 'How do you say "I am cold" in Igbo?',
        questionFr: 'Comment dit-on "J\'ai froid" en Igbo?',
        correctAnswer: 'Oyi na-atụ m',
        options: ['Oyi na-atụ m', 'Ọkụ na-agụ m', 'Ụra na-agụ m', 'Agụụ na-agụ m']
      },
      {
        id: 'ig-v128',
        type: 'multiple-choice',
        question: 'What does "Oyi na-atụ m" mean?',
        questionFr: 'Que signifie "Oyi na-atụ m"?',
        correctAnswer: 'I am cold',
        options: ['I am cold', 'I am hot', 'I am tired', 'I am hungry']
      },
      {
        id: 'ig-v129',
        type: 'type-answer',
        question: 'Type "I am happy" in Igbo',
        questionFr: 'Tapez "Je suis heureux" en Igbo',
        correctAnswer: 'Obi dị m ụtọ'
      },
      {
        id: 'ig-v130',
        type: 'multiple-choice',
        question: 'How do you say "I am sad" in Igbo?',
        questionFr: 'Comment dit-on "Je suis triste" en Igbo?',
        correctAnswer: 'Obi adịghị m mma',
        options: ['Obi adịghị m mma', 'Obi dị m ụtọ', 'Oyi na-atụ m', 'Ọkụ na-agụ m']
      },
      {
        id: 'ig-v131',
        type: 'multiple-choice',
        question: '"Obi adịghị m mma" means:',
        questionFr: '"Obi adịghị m mma" signifie:',
        correctAnswer: 'I am sad',
        options: ['I am sad', 'I am happy', 'I am cold', 'I am hot']
      },
      {
        id: 'ig-v132',
        type: 'type-answer',
        question: 'Type "I am angry" in Igbo',
        questionFr: 'Tapez "Je suis en colère" en Igbo',
        correctAnswer: 'Iwe na-ewe m'
      },
      {
        id: 'ig-v133',
        type: 'multiple-choice',
        question: 'How do you say "I am sick" in Igbo?',
        questionFr: 'Comment dit-on "Je suis malade" en Igbo?',
        correctAnswer: 'Ana m arịa ọrịa',
        options: ['Ana m arịa ọrịa', 'Iwe na-ewe m', 'Obi adịghị m mma', 'Obi dị m ụtọ']
      },
      {
        id: 'ig-v134',
        type: 'multiple-choice',
        question: 'What does "Ana m arịa ọrịa" mean?',
        questionFr: 'Que signifie "Ana m arịa ọrịa"?',
        correctAnswer: 'I am sick',
        options: ['I am sick', 'I am angry', 'I am sad', 'I am happy']
      },
      {
        id: 'ig-v135',
        type: 'type-answer',
        question: 'Type "I am well" in Igbo',
        questionFr: 'Tapez "Je vais bien" en Igbo',
        correctAnswer: 'Adị m mma'
      },
      {
        id: 'ig-v136',
        type: 'multiple-choice',
        question: 'How do you say "I am busy" in Igbo?',
        questionFr: 'Comment dit-on "Je suis occupé" en Igbo?',
        correctAnswer: 'Ana m arụ ọrụ',
        options: ['Ana m arụ ọrụ', 'Adị m mma', 'Ana m arịa ọrịa', 'Iwe na-ewe m']
      },
      {
        id: 'ig-v137',
        type: 'multiple-choice',
        question: 'What does "Ana m arụ ọrụ" mean?',
        questionFr: 'Que signifie "Ana m arụ ọrụ"?',
        correctAnswer: 'I am busy',
        options: ['I am busy', 'I am well', 'I am sick', 'I am angry']
      },
      {
        id: 'ig-v138',
        type: 'type-answer',
        question: 'Type "I am free" in Igbo',
        questionFr: 'Tapez "Je suis libre" en Igbo',
        correctAnswer: 'Enweghị m ọrụ'
      },
      {
        id: 'ig-v139',
        type: 'multiple-choice',
        question: 'How do you say "I am ready" in Igbo?',
        questionFr: 'Comment dit-on "Je suis prêt" en Igbo?',
        correctAnswer: 'Adị m njikere',
        options: ['Adị m njikere', 'Enweghị m ọrụ', 'Ana m arụ ọrụ', 'Adị m mma']
      },
      {
        id: 'ig-v140',
        type: 'multiple-choice',
        question: 'What does "Adị m njikere" mean?',
        questionFr: 'Que signifie "Adị m njikere"?',
        correctAnswer: 'I am ready',
        options: ['I am ready', 'I am free', 'I am busy', 'I am well']
      }
    ]
  },

  // STAGE 2 - MISSION 8: USEFUL EXPRESSIONS (20 questions, 10 will be randomly selected)
  {
    id: 'ig-vocab-8',
    type: 'vocabulary',
    title: 'Useful Expressions',
    titleFr: 'Expressions utiles',
    level: 2,
    xpReward: 15,
    exercises: [
      {
        id: 'ig-v141',
        type: 'multiple-choice',
        question: 'How do you say "I don\'t understand" in Igbo?',
        questionFr: 'Comment dit-on "Je ne comprends pas" en Igbo?',
        correctAnswer: 'Aghọtaghị m',
        options: ['Aghọtaghị m', 'Amaghị m', 'Achọghị m', 'Agaghị m']
      },
      {
        id: 'ig-v142',
        type: 'multiple-choice',
        question: 'What does "Aghọtaghị m" mean?',
        questionFr: 'Que signifie "Aghọtaghị m"?',
        correctAnswer: 'I don\'t understand',
        options: ['I don\'t understand', 'I don\'t know', 'I don\'t want', 'I won\'t go']
      },
      {
        id: 'ig-v143',
        type: 'type-answer',
        question: 'Type "I don\'t know" in Igbo',
        questionFr: 'Tapez "Je ne sais pas" en Igbo',
        correctAnswer: 'Amaghị m'
      },
      {
        id: 'ig-v144',
        type: 'multiple-choice',
        question: 'How do you say "I don\'t want" in Igbo?',
        questionFr: 'Comment dit-on "Je ne veux pas" en Igbo?',
        correctAnswer: 'Achọghị m',
        options: ['Achọghị m', 'Aghọtaghị m', 'Amaghị m', 'Agaghị m']
      },
      {
        id: 'ig-v145',
        type: 'multiple-choice',
        question: '"Achọghị m" means:',
        questionFr: '"Achọghị m" signifie:',
        correctAnswer: 'I don\'t want',
        options: ['I don\'t want', 'I don\'t understand', 'I don\'t know', 'I won\'t go']
      },
      {
        id: 'ig-v146',
        type: 'type-answer',
        question: 'Type "I can\'t" in Igbo',
        questionFr: 'Tapez "Je ne peux pas" en Igbo',
        correctAnswer: 'Enweghị m ike'
      },
      {
        id: 'ig-v147',
        type: 'multiple-choice',
        question: 'How do you say "I can" in Igbo?',
        questionFr: 'Comment dit-on "Je peux" en Igbo?',
        correctAnswer: 'Enwere m ike',
        options: ['Enwere m ike', 'Enweghị m ike', 'Achọghị m', 'Aghọtaghị m']
      },
      {
        id: 'ig-v148',
        type: 'multiple-choice',
        question: 'What does "Enwere m ike" mean?',
        questionFr: 'Que signifie "Enwere m ike"?',
        correctAnswer: 'I can',
        options: ['I can', 'I can\'t', 'I don\'t want', 'I don\'t understand']
      },
      {
        id: 'ig-v149',
        type: 'type-answer',
        question: 'Type "I will" in Igbo',
        questionFr: 'Tapez "Je vais" en Igbo',
        correctAnswer: 'Aga m'
      },
      {
        id: 'ig-v150',
        type: 'multiple-choice',
        question: 'How do you say "I won\'t" in Igbo?',
        questionFr: 'Comment dit-on "Je ne vais pas" en Igbo?',
        correctAnswer: 'Agaghị m',
        options: ['Agaghị m', 'Aga m', 'Enwere m ike', 'Enweghị m ike']
      },
      {
        id: 'ig-v151',
        type: 'multiple-choice',
        question: '"Agaghị m" means:',
        questionFr: '"Agaghị m" signifie:',
        correctAnswer: 'I won\'t',
        options: ['I won\'t', 'I will', 'I can', 'I can\'t']
      },
      {
        id: 'ig-v152',
        type: 'type-answer',
        question: 'Type "I have" in Igbo',
        questionFr: 'Tapez "J\'ai" en Igbo',
        correctAnswer: 'Enwere m'
      },
      {
        id: 'ig-v153',
        type: 'multiple-choice',
        question: 'How do you say "I don\'t have" in Igbo?',
        questionFr: 'Comment dit-on "Je n\'ai pas" en Igbo?',
        correctAnswer: 'Enweghị m',
        options: ['Enweghị m', 'Enwere m', 'Achọghị m', 'Aghọtaghị m']
      },
      {
        id: 'ig-v154',
        type: 'multiple-choice',
        question: 'What does "Enweghị m" mean?',
        questionFr: 'Que signifie "Enweghị m"?',
        correctAnswer: 'I don\'t have',
        options: ['I don\'t have', 'I have', 'I don\'t want', 'I don\'t understand']
      },
      {
        id: 'ig-v155',
        type: 'type-answer',
        question: 'Type "I like" in Igbo',
        questionFr: 'Tapez "J\'aime" en Igbo',
        correctAnswer: 'Ọ masịrị m'
      },
      {
        id: 'ig-v156',
        type: 'multiple-choice',
        question: 'How do you say "I don\'t like" in Igbo?',
        questionFr: 'Comment dit-on "Je n\'aime pas" en Igbo?',
        correctAnswer: 'Ọ masịghị m',
        options: ['Ọ masịghị m', 'Ọ masịrị m', 'Enweghị m', 'Enwere m']
      },
      {
        id: 'ig-v157',
        type: 'multiple-choice',
        question: 'What does "Ọ masịghị m" mean?',
        questionFr: 'Que signifie "Ọ masịghị m"?',
        correctAnswer: 'I don\'t like',
        options: ['I don\'t like', 'I like', 'I don\'t have', 'I have']
      },
      {
        id: 'ig-v158',
        type: 'type-answer',
        question: 'Type "I love" in Igbo',
        questionFr: 'Tapez "J\'aime beaucoup" en Igbo',
        correctAnswer: 'Ahụrụ m n\'anya'
      },
      {
        id: 'ig-v159',
        type: 'multiple-choice',
        question: 'How do you say "I hate" in Igbo?',
        questionFr: 'Comment dit-on "Je déteste" en Igbo?',
        correctAnswer: 'Akpọrọ m asị',
        options: ['Akpọrọ m asị', 'Ahụrụ m n\'anya', 'Ọ masịghị m', 'Ọ masịrị m']
      },
      {
        id: 'ig-v160',
        type: 'multiple-choice',
        question: 'What does "Akpọrọ m asị" mean?',
        questionFr: 'Que signifie "Akpọrọ m asị"?',
        correctAnswer: 'I hate',
        options: ['I hate', 'I love', 'I don\'t like', 'I like']
      }
    ]
  },

  // STAGE 2 - MISSION 9: BUILDING SENTENCES (20 questions, 10 will be randomly selected)
  {
    id: 'ig-vocab-9',
    type: 'vocabulary',
    title: 'Building Sentences',
    titleFr: 'Construction de phrases',
    level: 2,
    xpReward: 15,
    exercises: [
      {
        id: 'ig-v161',
        type: 'multiple-choice',
        question: 'Complete: "Ana m ___ nri" (I am eating food)',
        questionFr: 'Compléter: "Ana m ___ nri" (Je mange de la nourriture)',
        correctAnswer: 'eri',
        options: ['eri', 'esi', 'aga', 'amụ']
      },
      {
        id: 'ig-v162',
        type: 'multiple-choice',
        question: 'Complete: "Ana m ___ mmiri" (I am drinking water)',
        questionFr: 'Compléter: "Ana m ___ mmiri" (Je bois de l\'eau)',
        correctAnswer: 'a',
        options: ['a', 'eri', 'esi', 'aga']
      },
      {
        id: 'ig-v163',
        type: 'type-answer',
        question: 'Complete: "Ana m ___ ọrụ" (I am going to work)',
        questionFr: 'Compléter: "Ana m ___ ọrụ" (Je vais au travail)',
        correctAnswer: 'aga'
      },
      {
        id: 'ig-v164',
        type: 'multiple-choice',
        question: 'Complete: "Ana m ___ Igbo" (I am learning Igbo)',
        questionFr: 'Compléter: "Ana m ___ Igbo" (J\'apprends l\'Igbo)',
        correctAnswer: 'amụ',
        options: ['amụ', 'aga', 'eri', 'esi']
      },
      {
        id: 'ig-v165',
        type: 'multiple-choice',
        question: 'Complete: "Ana m ___ nri" (I am cooking food)',
        questionFr: 'Compléter: "Ana m ___ nri" (Je cuisine de la nourriture)',
        correctAnswer: 'esi',
        options: ['esi', 'amụ', 'aga', 'eri']
      },
      {
        id: 'ig-v166',
        type: 'type-answer',
        question: 'Complete: "Ana m ___ akwụkwọ" (I am reading a book)',
        questionFr: 'Compléter: "Ana m ___ akwụkwọ" (Je lis un livre)',
        correctAnswer: 'agụ'
      },
      {
        id: 'ig-v167',
        type: 'multiple-choice',
        question: 'Complete: "Ana m ___ ihe" (I am writing something)',
        questionFr: 'Compléter: "Ana m ___ ihe" (J\'écris quelque chose)',
        correctAnswer: 'ede',
        options: ['ede', 'agụ', 'esi', 'amụ']
      },
      {
        id: 'ig-v168',
        type: 'multiple-choice',
        question: 'Complete: "Ana m ___ egwu" (I am playing music)',
        questionFr: 'Compléter: "Ana m ___ egwu" (Je joue de la musique)',
        correctAnswer: 'egwu',
        options: ['egwu', 'ede', 'agụ', 'esi']
      },
      {
        id: 'ig-v169',
        type: 'type-answer',
        question: 'Complete: "Ana m ___ ụlọ" (I am cleaning the house)',
        questionFr: 'Compléter: "Ana m ___ ụlọ" (Je nettoie la maison)',
        correctAnswer: 'ehicha'
      },
      {
        id: 'ig-v170',
        type: 'multiple-choice',
        question: 'Complete: "Ana m ___ uwe" (I am washing clothes)',
        questionFr: 'Compléter: "Ana m ___ uwe" (Je lave les vêtements)',
        correctAnswer: 'asa',
        options: ['asa', 'ehicha', 'egwu', 'ede']
      },
      {
        id: 'ig-v171',
        type: 'multiple-choice',
        question: 'Complete: "Ana m ___ n\'ụlọ" (I am at home)',
        questionFr: 'Compléter: "Ana m ___ n\'ụlọ" (Je suis à la maison)',
        correctAnswer: 'nọ',
        options: ['nọ', 'aga', 'bịa', 'pụọ']
      },
      {
        id: 'ig-v172',
        type: 'type-answer',
        question: 'Complete: "Ana m ___ ụlọ" (I am coming home)',
        questionFr: 'Compléter: "Ana m ___ ụlọ" (Je rentre à la maison)',
        correctAnswer: 'bịa'
      },
      {
        id: 'ig-v173',
        type: 'multiple-choice',
        question: 'Complete: "Ana m ___ ụlọ" (I am leaving home)',
        questionFr: 'Compléter: "Ana m ___ ụlọ" (Je quitte la maison)',
        correctAnswer: 'pụọ',
        options: ['pụọ', 'bịa', 'nọ', 'aga']
      },
      {
        id: 'ig-v174',
        type: 'multiple-choice',
        question: 'Complete: "Ana m ___ n\'ọrụ" (I am at work)',
        questionFr: 'Compléter: "Ana m ___ n\'ọrụ" (Je suis au travail)',
        correctAnswer: 'nọ',
        options: ['nọ', 'aga', 'bịa', 'pụọ']
      },
      {
        id: 'ig-v175',
        type: 'type-answer',
        question: 'Complete: "Ana m ___ n\'ụlọ akwụkwọ" (I am at school)',
        questionFr: 'Compléter: "Ana m ___ n\'ụlọ akwụkwọ" (Je suis à l\'école)',
        correctAnswer: 'nọ'
      },
      {
        id: 'ig-v176',
        type: 'multiple-choice',
        question: 'Complete: "Ana m ___ n\'ahịa" (I am at the market)',
        questionFr: 'Compléter: "Ana m ___ n\'ahịa" (Je suis au marché)',
        correctAnswer: 'nọ',
        options: ['nọ', 'aga', 'bịa', 'pụọ']
      },
      {
        id: 'ig-v177',
        type: 'multiple-choice',
        question: 'Complete: "Ana m ___ n\'ụlọ ọgwụ" (I am at the hospital)',
        questionFr: 'Compléter: "Ana m ___ n\'ụlọ ọgwụ" (Je suis à l\'hôpital)',
        correctAnswer: 'nọ',
        options: ['nọ', 'aga', 'bịa', 'pụọ']
      },
      {
        id: 'ig-v178',
        type: 'type-answer',
        question: 'Complete: "Ana m ___ n\'ụlọ ụka" (I am at church)',
        questionFr: 'Compléter: "Ana m ___ n\'ụlọ ụka" (Je suis à l\'église)',
        correctAnswer: 'nọ'
      },
      {
        id: 'ig-v179',
        type: 'multiple-choice',
        question: 'Complete: "Ana m ___ n\'ụlọ ahịa" (I am at the store)',
        questionFr: 'Compléter: "Ana m ___ n\'ụlọ ahịa" (Je suis au magasin)',
        correctAnswer: 'nọ',
        options: ['nọ', 'aga', 'bịa', 'pụọ']
      },
      {
        id: 'ig-v180',
        type: 'multiple-choice',
        question: 'Complete: "Ana m ___ n\'ụlọ ọrụ" (I am at the office)',
        questionFr: 'Compléter: "Ana m ___ n\'ụlọ ọrụ" (Je suis au bureau)',
        correctAnswer: 'nọ',
        options: ['nọ', 'aga', 'bịa', 'pụọ']
      }
    ]
  },

  // STAGE 2 - MISSION 10: STAGE 2 REVIEW (20 questions, 10 will be randomly selected)
  {
    id: 'ig-vocab-10',
    type: 'vocabulary',
    title: 'Stage 2 Review',
    titleFr: 'Révision étape 2',
    level: 2,
    xpReward: 20,
    exercises: [
      {
        id: 'ig-v181',
        type: 'multiple-choice',
        question: 'What does "Ana m eteta" mean?',
        questionFr: 'Que signifie "Ana m eteta"?',
        correctAnswer: 'I wake up',
        options: ['I wake up', 'I sleep', 'I eat', 'I go to work']
      },
      {
        id: 'ig-v182',
        type: 'multiple-choice',
        question: 'How do you say "I am hungry" in Igbo?',
        questionFr: 'Comment dit-on "J\'ai faim" en Igbo?',
        correctAnswer: 'Agụụ na-agụ m',
        options: ['Agụụ na-agụ m', 'Mmiri na-agụ m', 'Ụra na-agụ m', 'Ọkụ na-agụ m']
      },
      {
        id: 'ig-v183',
        type: 'type-answer',
        question: 'Type "I don\'t understand" in Igbo',
        questionFr: 'Tapez "Je ne comprends pas" en Igbo',
        correctAnswer: 'Aghọtaghị m'
      },
      {
        id: 'ig-v184',
        type: 'multiple-choice',
        question: 'What does "Enwere m ike" mean?',
        questionFr: 'Que signifie "Enwere m ike"?',
        correctAnswer: 'I can',
        options: ['I can', 'I can\'t', 'I don\'t want', 'I don\'t understand']
      },
      {
        id: 'ig-v185',
        type: 'multiple-choice',
        question: 'How do you say "I like" in Igbo?',
        questionFr: 'Comment dit-on "J\'aime" en Igbo?',
        correctAnswer: 'Ọ masịrị m',
        options: ['Ọ masịrị m', 'Ọ masịghị m', 'Enwere m', 'Enweghị m']
      },
      {
        id: 'ig-v186',
        type: 'type-answer',
        question: 'Type "I am cooking food" in Igbo',
        questionFr: 'Tapez "Je cuisine de la nourriture" en Igbo',
        correctAnswer: 'Ana m esi nri'
      },
      {
        id: 'ig-v187',
        type: 'multiple-choice',
        question: 'What does "Ana m agụ akwụkwọ" mean?',
        questionFr: 'Que signifie "Ana m agụ akwụkwọ"?',
        correctAnswer: 'I am reading a book',
        options: ['I am reading a book', 'I am writing something', 'I am playing music', 'I am cleaning the house']
      },
      {
        id: 'ig-v188',
        type: 'multiple-choice',
        question: 'How do you say "I am at home" in Igbo?',
        questionFr: 'Comment dit-on "Je suis à la maison" en Igbo?',
        correctAnswer: 'Ana m nọ n\'ụlọ',
        options: ['Ana m nọ n\'ụlọ', 'Ana m aga ụlọ', 'Ana m bịa ụlọ', 'Ana m pụọ ụlọ']
      },
      {
        id: 'ig-v189',
        type: 'type-answer',
        question: 'Type "I am happy" in Igbo',
        questionFr: 'Tapez "Je suis heureux" en Igbo',
        correctAnswer: 'Obi dị m ụtọ'
      },
      {
        id: 'ig-v190',
        type: 'multiple-choice',
        question: 'What does "Ana m arụ ọrụ" mean?',
        questionFr: 'Que signifie "Ana m arụ ọrụ"?',
        correctAnswer: 'I am busy',
        options: ['I am busy', 'I am well', 'I am sick', 'I am angry']
      },
      {
        id: 'ig-v191',
        type: 'multiple-choice',
        question: 'How do you say "I don\'t have" in Igbo?',
        questionFr: 'Comment dit-on "Je n\'ai pas" en Igbo?',
        correctAnswer: 'Enweghị m',
        options: ['Enweghị m', 'Enwere m', 'Achọghị m', 'Aghọtaghị m']
      },
      {
        id: 'ig-v192',
        type: 'type-answer',
        question: 'Type "I am washing clothes" in Igbo',
        questionFr: 'Tapez "Je lave les vêtements" en Igbo',
        correctAnswer: 'Ana m asa uwe'
      },
      {
        id: 'ig-v193',
        type: 'multiple-choice',
        question: 'What does "Ọ masịghị m" mean?',
        questionFr: 'Que signifie "Ọ masịghị m"?',
        correctAnswer: 'I don\'t like',
        options: ['I don\'t like', 'I like', 'I don\'t have', 'I have']
      },
      {
        id: 'ig-v194',
        type: 'multiple-choice',
        question: 'How do you say "I am tired" in Igbo?',
        questionFr: 'Comment dit-on "Je suis fatigué" en Igbo?',
        correctAnswer: 'Ụra na-agụ m',
        options: ['Ụra na-agụ m', 'Agụụ na-agụ m', 'Mmiri na-agụ m', 'Ọkụ na-agụ m']
      },
      {
        id: 'ig-v195',
        type: 'type-answer',
        question: 'Type "I am coming home" in Igbo',
        questionFr: 'Tapez "Je rentre à la maison" en Igbo',
        correctAnswer: 'Ana m bịa ụlọ'
      },
      {
        id: 'ig-v196',
        type: 'multiple-choice',
        question: 'What does "Ana m ede ihe" mean?',
        questionFr: 'Que signifie "Ana m ede ihe"?',
        correctAnswer: 'I am writing something',
        options: ['I am writing something', 'I am reading a book', 'I am playing music', 'I am cleaning the house']
      },
      {
        id: 'ig-v197',
        type: 'multiple-choice',
        question: 'How do you say "I am ready" in Igbo?',
        questionFr: 'Comment dit-on "Je suis prêt" en Igbo?',
        correctAnswer: 'Adị m njikere',
        options: ['Adị m njikere', 'Enweghị m ọrụ', 'Ana m arụ ọrụ', 'Adị m mma']
      },
      {
        id: 'ig-v198',
        type: 'type-answer',
        question: 'Type "I am at school" in Igbo',
        questionFr: 'Tapez "Je suis à l\'école" en Igbo',
        correctAnswer: 'Ana m nọ n\'ụlọ akwụkwọ'
      },
      {
        id: 'ig-v199',
        type: 'multiple-choice',
        question: 'What does "Ahụrụ m n\'anya" mean?',
        questionFr: 'Que signifie "Ahụrụ m n\'anya"?',
        correctAnswer: 'I love',
        options: ['I love', 'I hate', 'I don\'t like', 'I like']
      },
      {
        id: 'ig-v200',
        type: 'multiple-choice',
        question: 'How do you say "I am at the market" in Igbo?',
        questionFr: 'Comment dit-on "Je suis au marché" en Igbo?',
        correctAnswer: 'Ana m nọ n\'ahịa',
        options: ['Ana m nọ n\'ahịa', 'Ana m aga ahịa', 'Ana m bịa ahịa', 'Ana m pụọ ahịa']
      }
    ]
  }
];
