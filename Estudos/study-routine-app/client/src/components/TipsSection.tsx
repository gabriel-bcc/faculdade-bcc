/**
 * Componente de Seção de Dicas
 * Design: Minimalismo Funcional com Foco em Produtividade
 * Exibe dicas e recursos para otimizar o estudo
 */

import { Card } from '@/components/ui/card';
import { Lightbulb, BookMarked, Users, Coffee, Zap, Globe } from 'lucide-react';
import { TIPS } from '@/../../shared/const';

const tipIcons = [Lightbulb, BookMarked, Users, Coffee, Zap, Globe];

export function TipsSection() {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-foreground mb-2">Dicas para Otimizar seus Estudos</h3>
        <p className="text-sm text-muted-foreground">
          Confira algumas estratégias comprovadas para melhorar seu aprendizado
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TIPS.map((tip, index) => {
          const Icon = tipIcons[index % tipIcons.length];
          const [title, ...descParts] = tip.split(': ');
          const description = descParts.join(': ');

          return (
            <Card key={index} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary mt-0.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-foreground">
                    {title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
