/**
 * Componente de Painel de Progresso
 * Design: Minimalismo Funcional com Foco em Produtividade
 * Exibe estatísticas gerais e progresso por disciplina
 */

import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import type { UserProgress } from '@/../../shared/types';
import { DISCIPLINES } from '@/../../shared/types';
import { Flame, Target, TrendingUp } from 'lucide-react';

interface ProgressPanelProps {
  progress: UserProgress;
}

export function ProgressPanel({ progress }: ProgressPanelProps) {
  const overallProgress = Math.round((progress.completedSessions / progress.totalSessions) * 100);

  return (
    <div className="space-y-6">
      {/* Estatísticas Gerais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total de Sessões */}
        <Card className="p-6 border-l-4 border-l-primary">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium">Progresso Geral</p>
              <p className="text-3xl font-bold text-primary mt-2">
                {progress.completedSessions}/{progress.totalSessions}
              </p>
              <p className="text-xs text-muted-foreground mt-1">sessões completas</p>
            </div>
            <Target className="w-8 h-8 text-primary/20" />
          </div>
          <Progress value={overallProgress} className="mt-4" />
        </Card>

        {/* Streak */}
        <Card className="p-6 border-l-4 border-l-accent">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium">Sequência</p>
              <p className="text-3xl font-bold text-accent mt-2">
                {progress.currentStreak}
              </p>
              <p className="text-xs text-muted-foreground mt-1">dias seguidos</p>
            </div>
            <Flame className="w-8 h-8 text-accent/20" />
          </div>
        </Card>

        {/* Taxa de Conclusão */}
        <Card className="p-6 border-l-4 border-l-green-500">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium">Taxa de Conclusão</p>
              <p className="text-3xl font-bold text-green-600 mt-2">
                {overallProgress}%
              </p>
              <p className="text-xs text-muted-foreground mt-1">da semana</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500/20" />
          </div>
        </Card>
      </div>

      {/* Progresso por Disciplina */}
      <Card className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Progresso por Disciplina</h3>
        <div className="space-y-4">
          {Object.entries(progress.disciplineProgress).map(([code, percentage]) => {
            const discipline = DISCIPLINES[code as keyof typeof DISCIPLINES];
            if (!discipline) return null;

            return (
              <div key={code} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{discipline.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {discipline.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {code}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-primary">
                    {percentage}%
                  </span>
                </div>
                <Progress value={percentage} className="h-2" />
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
