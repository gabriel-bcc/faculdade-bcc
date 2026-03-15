/**
 * Tipos compartilhados para a aplicação de calendário de estudos
 * Design: Minimalismo Funcional com Foco em Produtividade
 */

export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export type DisciplineCode = 'DCE797' | 'DCE530' | 'DCE672' | 'DCE673' | 'DCE121';

export interface Discipline {
  code: DisciplineCode;
  name: string;
  color: 'teal' | 'orange' | 'slate';
  icon: string;
}

export interface StudySession {
  id: string;
  day: DayOfWeek;
  startTime: string; // Format: "HH:MM"
  endTime: string;
  discipline: DisciplineCode;
  type: 'review' | 'research' | 'practice' | 'flexible';
  description: string;
  completed: boolean;
  reminder: boolean;
  reminderTime?: number; // Minutes before session
}

export interface WeeklySchedule {
  sessions: StudySession[];
}

export interface UserProgress {
  completedSessions: number;
  totalSessions: number;
  currentStreak: number;
  disciplineProgress: Record<DisciplineCode, number>;
}

export const DISCIPLINES: Record<DisciplineCode, Discipline> = {
  DCE797: {
    code: 'DCE797',
    name: 'AEDs III',
    color: 'teal',
    icon: '📊'
  },
  DCE530: {
    code: 'DCE530',
    name: 'Orientação a Objetos',
    color: 'teal',
    icon: '🔷'
  },
  DCE672: {
    code: 'DCE672',
    name: 'Programação Lógica',
    color: 'orange',
    icon: '⚙️'
  },
  DCE673: {
    code: 'DCE673',
    name: 'Programação Funcional',
    color: 'orange',
    icon: 'λ'
  },
  DCE121: {
    code: 'DCE121',
    name: 'Matemática Discreta',
    color: 'slate',
    icon: '∑'
  }
};

export const DAYS_OF_WEEK: Record<DayOfWeek, string> = {
  monday: 'Segunda-feira',
  tuesday: 'Terça-feira',
  wednesday: 'Quarta-feira',
  thursday: 'Quinta-feira',
  friday: 'Sexta-feira',
  saturday: 'Sábado',
  sunday: 'Domingo'
};
