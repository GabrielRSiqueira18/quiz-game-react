import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    games: [
      {
        id: '1',
        title: 'Contas Matemáticas - Fácil',
        description: 'Neste quiz você irá aprender melhor a usar contas básicas de matemática.',
        question: {
          name: 'Quanto é 1 + 1',
          answers: ['1', '2', '3', '4'],
          correctAnswer: '1',
        }
      },
      {
        id: '2',
        title: 'Contas Matemáticas - Difícil',
        description: 'Neste quiz você irá aprender melhor a usar contas intemediárias de matemática.',
        question: {
          name: 'Quanto é 4 * 4',
          answers: ['2', '4', '8', '16'],
          correctAnswer: '16',
        }
      }
    ]
  },
  reducers: {}
})

export const player = quizSlice.reducer