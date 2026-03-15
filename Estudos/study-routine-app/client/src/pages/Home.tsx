/**
 * Página Principal - Calendário de Estudos Interativo
 * Design: Minimalismo Funcional com Foco em Produtividade
 * Integra calendário semanal, progresso e dicas
 */

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { WeeklyCalendar } from '@/components/WeeklyCalendar';
import { ProgressPanel } from '@/components/ProgressPanel';
import { TipsSection } from '@/components/TipsSection';
import { useStudyProgress } from '@/hooks/useStudyProgress';
import { RotateCcw, Calendar, BarChart3 } from 'lucide-react';

export default function Home() {
  const { sessions, progress, toggleSessionComplete, resetProgress } = useStudyProgress();
  const [activeTab, setActiveTab] = useState<'calendar' | 'progress'>('calendar');

  // Efeito para verificar lembretes
  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      sessions.forEach(session => {
        if (session.reminder && !session.completed) {
          const [hour, min] = session.startTime.split(':').map(Number);
          const sessionTime = new Date();
          sessionTime.setHours(hour, min, 0);
          
          if (session.reminderTime) {
            const reminderTime = new Date(sessionTime.getTime() - session.reminderTime * 60000);
            if (Math.abs(now.getTime() - reminderTime.getTime()) < 60000) {
              // Mostrar notificação
              if ('Notification' in window && Notification.permission === 'granted') {
                new Notification('Lembrete de Estudo', {
                  body: `Sua sessão de ${session.description} começa em ${session.reminderTime} minutos!`,
                  icon: '📚'
                });
              }
            }
          }
        }
      });
    };

    const interval = setInterval(checkReminders, 60000);
    return () => clearInterval(interval);
  }, [sessions]);

  // Solicitar permissão de notificação
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header com Hero */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start justify-between gap-6 mb-8">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                  Meu Cronograma de Estudos
                </h1>
                <p className="text-lg text-muted-foreground">
                  Organize suas sessões de estudo, acompanhe seu progresso e mantenha-se motivado com lembretes inteligentes.
                </p>
              </div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663397320189/7wq2mKfEgay3X9kuxPU7Sx/hero-calendar-FJF3qUkjqD2rfTroPZiLGE.webp"
                alt="Calendário de Estudos"
                className="w-32 h-32 rounded-lg object-cover shadow-md hidden md:block"
              />
            </div>

            {/* Tabs de Navegação */}
            <div className="flex gap-2">
              <Button
                variant={activeTab === 'calendar' ? 'default' : 'outline'}
                onClick={() => setActiveTab('calendar')}
                className="gap-2"
              >
                <Calendar className="w-4 h-4" />
                Calendário
              </Button>
              <Button
                variant={activeTab === 'progress' ? 'default' : 'outline'}
                onClick={() => setActiveTab('progress')}
                className="gap-2"
              >
                <BarChart3 className="w-4 h-4" />
                Progresso
              </Button>
              <Button
                variant="outline"
                onClick={resetProgress}
                className="gap-2 ml-auto"
              >
                <RotateCcw className="w-4 h-4" />
                Resetar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          {/* Tab: Calendário */}
          {activeTab === 'calendar' && (
            <div className="space-y-12">
              <WeeklyCalendar
                sessions={sessions}
                onToggleComplete={toggleSessionComplete}
              />

              <Separator className="my-8" />

              {/* Seção de Dicas */}
              <div>
                <TipsSection />
              </div>
            </div>
          )}

          {/* Tab: Progresso */}
          {activeTab === 'progress' && (
            <div className="space-y-8">
              <ProgressPanel progress={progress} />

              <Separator className="my-8" />

              {/* Informações Adicionais */}
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Sobre sua Rotina de Estudos
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Esta rotina foi cuidadosamente planejada para equilibrar revisão de conteúdo em sala com pesquisa aprofundada. Você tem <strong>16 sessões de estudo</strong> distribuídas ao longo da semana.
                  </p>
                  <p>
                    <strong>Segunda a Quarta:</strong> Estude a partir das 19h, após as aulas, para revisar o conteúdo do dia e aprofundar seu conhecimento.
                  </p>
                  <p>
                    <strong>Quinta-feira:</strong> Aproveite o tempo livre entre 12h e 15h para estudo prático e aprofundado, além de revisão noturna.
                  </p>
                  <p>
                    <strong>Sexta-feira:</strong> Blocos flexíveis para revisar a semana, fazer exercícios ou trabalhar em projetos.
                  </p>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 mt-16">
        <div className="container py-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm text-muted-foreground text-center">
              Desenvolvido com foco em produtividade e bem-estar acadêmico • Consistência é mais importante que intensidade
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
