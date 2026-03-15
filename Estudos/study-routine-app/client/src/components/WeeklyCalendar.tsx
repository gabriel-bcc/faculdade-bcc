/**
 * Componente de Calendário Semanal
 * Design: Minimalismo Funcional com Foco em Produtividade
 * Exibe todas as sessões de estudo organizadas por dia da semana
 */

import { StudySessionCard } from './StudySessionCard';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { StudySession, DayOfWeek } from '@/../../shared/types';
import { DAYS_OF_WEEK } from '@/../../shared/types';

interface WeeklyCalendarProps {
  sessions: StudySession[];
  onToggleComplete: (id: string) => void;
}

const WEEK_DAYS: DayOfWeek[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export function WeeklyCalendar({ sessions, onToggleComplete }: WeeklyCalendarProps) {
  return (
    <div className="space-y-8">
      {WEEK_DAYS.map(day => {
        const daySessions = sessions.filter(s => s.day === day);
        const completedCount = daySessions.filter(s => s.completed).length;
        const totalCount = daySessions.length;

        if (totalCount === 0) return null;

        return (
          <div key={day} className="space-y-3">
            {/* Header do dia */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {DAYS_OF_WEEK[day]}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {completedCount} de {totalCount} sessões completas
                </p>
              </div>
              {/* Barra de progresso do dia */}
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${(completedCount / totalCount) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-primary">
                  {Math.round((completedCount / totalCount) * 100)}%
                </span>
              </div>
            </div>

            {/* Sessões do dia */}
            <div className="space-y-2">
              {daySessions.map(session => (
                <StudySessionCard
                  key={session.id}
                  session={session}
                  onToggleComplete={onToggleComplete}
                />
              ))}
            </div>

            <Separator className="mt-6" />
          </div>
        );
      })}
    </div>
  );
}
