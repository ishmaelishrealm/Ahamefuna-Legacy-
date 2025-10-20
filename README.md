# Ahamefuna - African Language Learning App

A gamified language learning application focused on African languages, built with React, TypeScript, and Vite.

## 🌍 Supported Languages

### West Africa
- **Hausa** (Nigeria, Niger, Ghana) - 80M+ speakers
- **Yoruba** (Nigeria, Benin) - 50M+ speakers  
- **Igbo** (Nigeria) - 45M+ speakers
- **Mòoré** (Burkina Faso) - 7M+ speakers
- **Twi (Akan)** (Ghana) - 20M+ speakers
- **Wolof** (Senegal, Gambia) - 12M+ speakers

### East Africa
- **Swahili** (Tanzania, Kenya, Uganda, DRC) - 200M+ speakers
- **Somali** (Somalia, Ethiopia, Kenya) - 20M+ speakers
- **Amharic** (Ethiopia) - 60M+ speakers

### Central Africa
- **Lingala** (DRC, Republic of Congo) - 15M+ speakers

### North Africa
- **Arabic (North African)** (Egypt, Morocco, Algeria, Tunisia) - 300M+ speakers
- **Berber (Tamazight)** (Morocco, Algeria) - 30M+ speakers

### Southern Africa
- **Zulu** (South Africa) - 27M+ speakers
- **Shona** (Zimbabwe) - 15M+ speakers
- **Chichewa (Nyanja)** (Malawi, Zambia, Mozambique) - 20M+ speakers

## ✨ Features

- 🎮 **Gamified Learning**: XP system, levels, hearts, and streaks
- 🌐 **Bilingual Interface**: Available in English and French
- 📚 **Structured Lessons**: Vocabulary, Grammar, Writing, and Culture lessons
- 🎯 **Multiple Exercise Types**: Multiple choice, fill-in-blank, matching, translation
- 💾 **Progress Tracking**: Persistent progress with localStorage
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ahamefuna-language-learning
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🚀 Deployment on Vercel

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite framework and deploy

The `vercel.json` configuration file is included for optimal deployment settings.

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
├── project/                 # Main application code
│   ├── App.tsx             # Main app component
│   ├── components/         # React components
│   ├── data/              # Language and lesson data
│   ├── types/             # TypeScript definitions
│   └── styles/            # Global styles
├── src/                   # Entry point
├── public/                # Static assets
└── dist/                  # Build output
```

## 🎯 Learning System

### Lesson Types
- **Vocabulary**: Learn new words and phrases
- **Grammar**: Understand language structure
- **Writing**: Practice writing skills
- **Culture**: Explore cultural context

### Exercise Types
- **Multiple Choice**: Choose the correct answer
- **Fill in the Blank**: Complete sentences
- **Matching**: Connect related items
- **Translation**: Translate between languages
- **Type Answer**: Type the correct response

### Gamification
- **XP System**: Earn experience points for completing lessons
- **Levels**: Progress through levels based on XP
- **Hearts**: Lose hearts for mistakes, regain over time
- **Streaks**: Maintain daily practice streaks
- **Progress Tracking**: Track completed lessons and learned words

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Unsplash](https://unsplash.com) for the images
- The African language communities for their linguistic expertise

---

**Ahamefuna** - "Let's learn together" in Igbo 🇳🇬
