/**
 * Componente de Card de Sessão de Estudo
 * Design: Minimalismo Funcional com Foco em Produtividade
 * Exibe uma sessão de estudo com horário, disciplina e status
 */

import { Checkbox } from '@/components/ui/checkbox';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { StudySession } from '@/../../shared/types';
import { DISCIPLINES } from '@/../../shared/types';
import { Clock, BookOpen, Zap } from 'lucide-react';

interface StudySessionCardProps {
  session: StudySession;
  onToggleComplete: (id: string) => void;
}

const typeLabels: Record<string, string> = {
  review: 'Revisão',
  research: 'Pesquisa',
  practice: 'Prática',
  flexible: 'Flexível'
};

const typeBadgeColors: Record<string, string> = {
  review: 'bg-blue-100 text-blue-800',
  research: 'bg-purple-100 text-purple-800',
  practice: 'bg-green-100 text-green-800',
  flexible: 'bg-amber-100 text-amber-800'
};

export function StudySessionCard({ session, onToggleComplete }: StudySessionCardProps) {
  const discipline = DISCIPLINES[session.discipline];
  const duration = calculateDuration(session.startTime, session.endTime);

  return (
    <Card className={`p-4 border-l-4 transition-all hover:shadow-md ${
      session.completed
        ? 'border-l-green-500 bg-green-50/30'
        : 'border-l-primary'
    }`}>
      <div className="flex items-start gap-4">
        {/* Checkbox */}
        <div className="flex items-center pt-1">
          <Checkbox
            checked={session.completed}
            onCheckedChange={() => onToggleComplete(session.id)}
            className="h-5 w-5"
          />
        </div>

        {/* Conteúdo principal */}
        <div className="flex-1 min-w-0">
          {/* Header: Disciplina e Tipo */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex-1">
              <h4 className={`font-semibold text-sm ${
                session.completed ? 'line-through text-gray-400' : 'text-foreground'
              }`}>
                {discipline.name}
              </h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                {discipline.code}
              </p>
            </div>
            <Badge variant="outline" className={typeBadgeColors[session.type]}>
              {typeLabels[session.type]}
            </Badge>
          </div>

          {/* Descrição */}
          <p className={`text-sm mb-3 ${
            session.completed ? 'text-gray-400' : 'text-muted-foreground'
          }`}>
            {session.description}
          </p>

          {/* Footer: Horário e Duração */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{session.startTime} - {session.endTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" />
              <span>{duration}min</span>
            </div>
            {session.reminder && (
              <div className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Lembrete {session.reminderTime}min antes</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

function calculateDuration(startTime: string, endTime: string): number {
  const [startHour, startMin] = startTime.split(':').map(Number);
  const [endHour, endMin] = endTime.split(':').map(Number);
  return (endHour * 60 + endMin) - (startHour * 60 + startMin);
}
