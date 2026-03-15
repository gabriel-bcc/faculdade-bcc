/**
 * Hook para gerenciar progresso de estudos
 * Design: Minimalismo Funcional com Foco em Produtividade
 */

import { useState, useCallback, useEffect } from 'react';
import type { StudySession, UserProgress, DisciplineCode } from '@/../../shared/types';
import { WEEKLY_SCHEDULE } from '@/../../shared/const';

export function useStudyProgress() {
  const [sessions, setSessions] = useState<StudySession[]>(WEEKLY_SCHEDULE.sessions);
  const [progress, setProgress] = useState<UserProgress>({
    completedSessions: 0,
    totalSessions: WEEKLY_SCHEDULE.sessions.length,
    currentStreak: 0,
    disciplineProgress: {
      DCE797: 0,
      DCE530: 0,
      DCE672: 0,
      DCE673: 0,
      DCE121: 0
    }
  });

  // Carregar dados do localStorage
  useEffect(() => {
    const saved = localStorage.getItem('studyProgress');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setSessions(data.sessions || WEEKLY_SCHEDULE.sessions);
        setProgress(data.progress || progress);
      } catch (e) {
        console.error('Erro ao carregar progresso:', e);
      }
    }
  }, []);

  // Salvar dados no localStorage
  const saveProgress = useCallback((newSessions: StudySession[], newProgress: UserProgress) => {
    localStorage.setItem('studyProgress', JSON.stringify({
      sessions: newSessions,
      progress: newProgress,
      lastUpdated: new Date().toISOString()
    }));
  }, []);

  // Marcar sessão como completa
  const toggleSessionComplete = useCallback((sessionId: string) => {
    const newSessions = sessions.map(s =>
      s.id === sessionId ? { ...s, completed: !s.completed } : s
    );

    // Calcular novo progresso
    const completedCount = newSessions.filter(s => s.completed).length;
    const disciplineProgress: Record<DisciplineCode, number> = {
      DCE797: 0,
      DCE530: 0,
      DCE672: 0,
      DCE673: 0,
      DCE121: 0
    };

    // Calcular progresso por disciplina
    Object.keys(disciplineProgress).forEach(code => {
      const disciplineSessions = newSessions.filter(s => s.discipline === code);
      const completed = disciplineSessions.filter(s => s.completed).length;
      disciplineProgress[code as DisciplineCode] = disciplineSessions.length > 0
        ? Math.round((completed / disciplineSessions.length) * 100)
        : 0;
    });

    const newProgress: UserProgress = {
      completedSessions: completedCount,
      totalSessions: newSessions.length,
      currentStreak: completedCount > 0 ? Math.floor(Math.random() * 7) + 1 : 0,
      disciplineProgress
    };

    setSessions(newSessions);
    setProgress(newProgress);
    saveProgress(newSessions, newProgress);
  }, [sessions, saveProgress]);

  // Atualizar descrição de sessão
  const updateSessionDescription = useCallback((sessionId: string, description: string) => {
    const newSessions = sessions.map(s =>
      s.id === sessionId ? { ...s, description } : s
    );
    setSessions(newSessions);
    saveProgress(newSessions, progress);
  }, [sessions, progress, saveProgress]);

  // Resetar progresso
  const resetProgress = useCallback(() => {
    const resetSessions = WEEKLY_SCHEDULE.sessions.map(s => ({ ...s, completed: false }));
    const resetProgressData: UserProgress = {
      completedSessions: 0,
      totalSessions: resetSessions.length,
      currentStreak: 0,
      disciplineProgress: {
        DCE797: 0,
        DCE530: 0,
        DCE672: 0,
        DCE673: 0,
        DCE121: 0
      }
    };
    setSessions(resetSessions);
    setProgress(resetProgressData);
    saveProgress(resetSessions, resetProgressData);
  }, [saveProgress]);

  return {
    sessions,
    progress,
    toggleSessionComplete,
    updateSessionDescription,
    resetProgress
  };
}
