import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    games: [
      {
        id: '1',
        title: 'Contas Matemáticas - Fácil',
        description: 'Neste quiz você irá aprender melhor a usar contas básicas de matemática.',
        questionsGame: [
          {
            name: 'Quanto é 4 + 4',
            answers: ['2', '4', '8', '16'],
            correctAnswer: '8',
          },
          {
            name: 'Quanto é 150 + 140',
            answers: ['230', '89', '290', '300'],
            correctAnswer: '290',
          },
          {
            name: 'Quanto é 0 + (- 30)',
            answers: ['30', '-30', '0', '4'],
            correctAnswer: '-30',
          },
          {
            name: 'Quanto é 1 + 1',
            answers: ['1', '2', '3', '4'],
            correctAnswer: '2',
          },
        ]
      },
      {
        id: '2',
        title: 'Contas Matemáticas - Intemediária',
        description: 'Neste quiz você irá aprender melhor a usar contas intermediária de matemática.',
        questionsGame: [
          {
            name: 'Quanto é 4 / 4',
            answers: ['1', '2', '4', '8'],
            correctAnswer: '1',
          },
          {
            name: 'Quanto é 8 / 2',
            answers: ['1', '2', '4', '8'],
            correctAnswer: '4',
          },
          {
            name: 'Quanto é 10 / 0',
            answers: ['0', '2', '4', 'undefined'],
            correctAnswer: 'undefined',
          },
          {
            name: 'Quanto é 4 / 1',
            answers: ['1', '2', '4', '8'],
            correctAnswer: '4',
          },
        ]
      },
      {
        id: '3',
        title: 'Contas Matemáticas - Difícil',
        description: 'Neste quiz você irá aprender melhor a usar contas difíceis de matemática.',
        questionsGame: [
          {
            name: 'Quanto é 4 * 4',
            answers: ['2', '4', '8', '16'],
            correctAnswer: '16',
          },
          {
            name: 'Quanto é 8 * 8',
            answers: ['8', '16', '32', '64'],
            correctAnswer: '64',
          },
          {
            name: 'Quanto é 1 * 1',
            answers: ['1', '2', '3', '4'],
            correctAnswer: '1',
          },
          {
            name: 'Quanto é 3 * 3',
            answers: ['1', '3', '9', '27'],
            correctAnswer: '9',
          },
        ]
      }
    ]
  },
  reducers: {
    
  }
})

export const quiz = quizSlice.reducer