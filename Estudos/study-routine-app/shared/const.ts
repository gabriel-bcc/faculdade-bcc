export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

/**
 * Constantes e dados da aplicação de calendário de estudos
 * Design: Minimalismo Funcional com Foco em Produtividade
 */

import type { StudySession, WeeklySchedule } from './types';

export const WEEKLY_SCHEDULE: WeeklySchedule = {
  sessions: [
    // Segunda-feira
    {
      id: 'mon-1',
      day: 'monday',
      startTime: '19:00',
      endTime: '20:00',
      discipline: 'DCE797',
      type: 'review',
      description: 'Revisão AEDs III - Foco nos tópicos abordados na aula do dia',
      completed: false,
      reminder: true,
      reminderTime: 15
    },
    {
      id: 'mon-2',
      day: 'monday',
      startTime: '20:00',
      endTime: '21:00',
      discipline: 'DCE530',
      type: 'review',
      description: 'Revisão Orientação a Objetos - Foco nos tópicos abordados na aula do dia',
      completed: false,
      reminder: true,
      reminderTime: 15
    },
    {
      id: 'mon-3',
      day: 'monday',
      startTime: '21:00',
      endTime: '22:00',
      discipline: 'DCE797',
      type: 'research',
      description: 'Pesquisa/Aprofundamento - Alternar entre AEDs III e Orientação a Objetos',
      completed: false,
      reminder: true,
      reminderTime: 15
    },
    // Terça-feira
    {
      id: 'tue-1',
      day: 'tuesday',
      startTime: '19:00',
      endTime: '20:00',
      discipline: 'DCE672',
      type: 'review',
      description: 'Revisão Programação Lógica - Foco nos tópicos abordados na aula da tarde',
      completed: false,
      reminder: true,
      reminderTime: 15
    },
    {
      id: 'tue-2',
      day: 'tuesday',
      startTime: '20:00',
      endTime: '21:00',
      discipline: 'DCE797',
      type: 'review',
      description: 'Revisão AEDs III ou Orientação a Objetos - Escolha a disciplina com maior dificuldade',
      completed: false,
      reminder: true,
      reminderTime: 15
    },
    {
      id: 'tue-3',
      day: 'tuesday',
      startTime: '21:00',
      endTime: '22:00',
      discipline: 'DCE672',
      type: 'research',
      description: 'Pesquisa/Aprofundamento em Programação Lógica',
      completed: false,
      reminder: true,
      reminderTime: 15
    },
    // Quarta-feira
    {
      id: 'wed-1',
      day: 'wednesday',
      startTime: '19:00',
      endTime: '20:00',
      discipline: 'DCE121',
      type: 'review',
      description: 'Revisão Matemática Discreta - Foco nos tópicos abordados na aula da tarde',
      completed: false,
      reminder: true,
      reminderTime: 15
    },
    {
      id: 'wed-2',
      day: 'wednesday',
      startTime: '20:00',
      endTime: '21:00',
      discipline: 'DCE673',
      type: 'review',
      description: 'Revisão Programação Funcional - Foco nos tópicos abordados na aula da tarde',
      completed: false,
      reminder: true,
      reminderTime: 15
    },
    {
      id: 'wed-3',
      day: 'wednesday',
      startTime: '21:00',
      endTime: '22:00',
      discipline: 'DCE121',
      type: 'research',
      description: 'Pesquisa/Aprofundamento - Alternar entre Matemática Discreta e Programação Funcional',
      completed: false,
      reminder: true,
      reminderTime: 15
    },
    // Quinta-feira
    {
      id: 'thu-1',
      day: 'thursday',
      startTime: '12:00',
      endTime: '13:00',
      discipline: 'DCE797',
      type: 'practice',
      description: 'Estudo Aprofundado AEDs III - Resolver exercícios complexos',
      completed: false,
      reminder: true,
      reminderTime: 15
    },
    {
      id: 'thu-2',
      day: 'thursday',
      startTime: '13:00',
      endTime: '14:00',
      discipline: 'DCE530',
      type: 'practice',
      description: 'Estudo Aprofundado Orientação a Objetos - Projetos práticos',
      completed: false,
      reminder: true,
      reminderTime: 15
    },
    {
      id: 'thu-3',
      day: 'thursday',
      startTime: '14:00',
      endTime: '15:00',
      discipline: 'DCE672',
      type: 'practice',
      description: 'Estudo Aprofundado Programação Lógica - Diferentes paradigmas',
      completed: false,
      reminder: true,
      reminderTime: 15
    },
    {
      id: 'thu-4',
      day: 'thursday',
      startTime: '19:00',
      endTime: '20:00',
      discipline: 'DCE121',
      type: 'review',
      description: 'Revisão Matemática Discreta - Foco nos tópicos abordados na aula',
      completed: false,
      reminder: true,
      reminderTime: 15
    },
    {
      id: 'thu-5',
      day: 'thursday',
      startTime: '20:00',
      endTime: '21:00',
      discipline: 'DCE121',
      type: 'research',
      description: 'Pesquisa/Aprofundamento em Matemática Discreta',
      completed: false,
      reminder: true,
      reminderTime: 15
    },
    // Sexta-feira - Rodízio de todas as disciplinas
    {
      id: 'fri-1',
      day: 'friday',
      startTime: '09:00',
      endTime: '10:30',
      discipline: 'DCE797',
      type: 'flexible',
      description: 'Bloco Flexível 1 - AEDs III: Exercícios práticos ou revisão de estruturas',
      completed: false,
      reminder: true,
      reminderTime: 15
    },
    {
      id: 'fri-2',
      day: 'friday',
      startTime: '10:30',
      endTime: '12:00',
      discipline: 'DCE530',
      type: 'flexible',
      description: 'Bloco Flexível 2 - Orientação a Objetos: Projetos ou padrões de design',
      completed: false,
      reminder: true,
      reminderTime: 15
    },
    {
      id: 'fri-3',
      day: 'friday',
      startTime: '14:00',
      endTime: '15:30',
      discipline: 'DCE672',
      type: 'flexible',
      description: 'Bloco Flexível 3 - Programação Lógica: Problemas ou lógica avançada',
      completed: false,
      reminder: true,
      reminderTime: 15
    },
    {
      id: 'fri-4',
      day: 'friday',
      startTime: '15:30',
      endTime: '17:00',
      discipline: 'DCE673',
      type: 'flexible',
      description: 'Bloco Flexível 4 - Programação Funcional: Conceitos ou exercícios',
      completed: false,
      reminder: true,
      reminderTime: 15
    },
    {
      id: 'fri-5',
      day: 'friday',
      startTime: '17:00',
      endTime: '18:30',
      discipline: 'DCE121',
      type: 'flexible',
      description: 'Bloco Flexível 5 - Matemática Discreta: Provas ou exercícios desafiadores',
      completed: false,
      reminder: true,
      reminderTime: 15
    }
  ]
};

export const TIPS = [
  'Active Recall e Spaced Repetition: Tente se lembrar ativamente do que estudou e revise em intervalos crescentes.',
  'Resolução de Exercícios: A prática é fundamental em programação e matemática. Resolva o máximo possível.',
  'Grupos de Estudo: Explicar um conceito para outra pessoa solidifica seu próprio entendimento.',
  'Descanso e Alimentação: Um bom sono e alimentação saudável são essenciais para concentração.',
  'Pausas Regulares: Use a técnica Pomodoro (25 min estudo, 5 min pausa) para evitar esgotamento.',
  'Recursos Online: Explore Coursera, edX, YouTube educativo e documentações oficiais.'
];

export const COLOR_MAP = {
  teal: '#1a5f7a',
  orange: '#c85a17',
  slate: '#6b7280'
};
