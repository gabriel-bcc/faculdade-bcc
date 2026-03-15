# Design Brainstorm - Calendário de Estudos Interativo

## Abordagem 1: Minimalismo Funcional com Foco em Produtividade
**Design Movement:** Bauhaus + Design Moderno Escandinavo

**Probabilidade:** 0.08

**Core Principles:**
- Clareza absoluta: cada elemento tem propósito definido
- Hierarquia visual forte através de tipografia e espaçamento
- Paleta monocromática com destaques em cores vibrantes
- Removição de qualquer ornamentação desnecessária

**Color Philosophy:**
- Fundo: Branco puro (confiança, clareza)
- Primário: Azul-petróleo profundo (foco, estabilidade)
- Destaques: Laranja queimado (urgência, ação)
- Neutros: Cinzas quentes para hierarquia
- Lógica: Cores indicam status (verde=completo, amarelo=em progresso, vermelho=atrasado)

**Layout Paradigm:**
- Grid rigoroso 12 colunas
- Calendário semanal em visualização tipo "timeline" horizontal
- Cards de disciplinas com ícones de status
- Sidebar esquerda com filtros e estatísticas
- Sem elementos decorativos, apenas funcionalidade visual

**Signature Elements:**
- Ícones geométricos minimalistas para cada disciplina
- Barras de progresso sutis em cada sessão de estudo
- Indicadores visuais de "tempo restante" usando linhas
- Badges de dificuldade/prioridade em cores específicas

**Interaction Philosophy:**
- Cliques diretos abrem detalhes sem transições excessivas
- Hover revela informações adicionais (tooltips)
- Drag-and-drop para reorganizar sessões
- Feedback imediato em todas as ações

**Animation:**
- Transições de 200ms para mudanças de estado
- Slide suave ao expandir/colapsar cards
- Pulse sutil em lembretes não lidos
- Sem animações de entrada, apenas transições funcionais

**Typography System:**
- Display: Montserrat Bold (títulos de seção, nomes de disciplinas)
- Body: Inter Regular (descrições, horários)
- Mono: Roboto Mono (códigos de disciplina, horários precisos)
- Hierarquia: 32px → 24px → 16px → 14px

---

## Abordagem 2: Neomorfismo Suave com Foco em Bem-Estar
**Design Movement:** Neumorphism + Wellness Design

**Probabilidade:** 0.07

**Core Principles:**
- Superfícies suaves e arredondadas que evocam conforto
- Profundidade através de sombras sutis (não contrastes duros)
- Paleta warm e acolhedora que reduz fadiga visual
- Foco em experiência emocional positiva durante estudos

**Color Philosophy:**
- Fundo: Bege claro/creme (reduz fadiga ocular, acolhedor)
- Primário: Azul-piscina suave (calma, concentração)
- Secundário: Terracota morno (energia sem agressividade)
- Acentos: Verde-sálvia (equilíbrio, natureza)
- Lógica: Cores representam energia/mood (verde=motivado, azul=focado, laranja=cansado)

**Layout Paradigm:**
- Superfícies flutuantes com sombras suaves (neumorfismo)
- Calendário em formato de "cards empilhados" por dia
- Espaçamento generoso entre elementos
- Sem linhas duras, apenas formas arredondadas
- Fundo com padrão subtil (textura papel)

**Signature Elements:**
- Ícones com traços suaves e preenchimento gradual
- Botões com efeito "pressionado" ao clicar (neumorfismo)
- Indicadores de progresso como anéis circulares
- Ilustrações pequenas de motivação em cada disciplina

**Interaction Philosophy:**
- Cliques produzem sensação de "pressionar" (feedback tátil visual)
- Transições suaves e lentas (400ms) para criar sensação de calma
- Hover revela cor suave de fundo
- Swipe para navegar entre dias da semana

**Animation:**
- Fade-in suave ao carregar (300ms)
- Bounce suave ao expandir cards (easing ease-out)
- Pulsação gentil em lembretes (não agressiva)
- Animação de preenchimento de progresso (linear, 2s)

**Typography System:**
- Display: Poppins SemiBold (títulos, acolhedor mas legível)
- Body: Lato Regular (confortável para leitura prolongada)
- Accent: Playfair Display (citações motivacionais)
- Hierarquia: 36px → 24px → 16px → 14px

---

## Abordagem 3: Dark Mode Futurista com Gamificação
**Design Movement:** Cyberpunk + Gamification Design

**Probabilidade:** 0.06

**Core Principles:**
- Estética futurista com elementos de interface sci-fi
- Gamificação: pontos, badges, streaks, níveis
- Alto contraste para máxima legibilidade em dark mode
- Elementos interativos que parecem "vivos" e responsivos

**Color Philosophy:**
- Fundo: Preto profundo com padrão de grade sutil (espaço digital)
- Primário: Ciano/Neon Blue (energia, futurismo)
- Secundário: Magenta/Rosa Neon (contraste, destaque)
- Acentos: Verde Neon (sucesso, progresso)
- Lógica: Cores indicam tipo de atividade (azul=revisão, magenta=pesquisa, verde=completo)

**Layout Paradigm:**
- Barra lateral com painel de "stats" tipo RPG
- Calendário em formato de "matriz" com células brilhantes
- Efeito de "glow" ao redor de elementos ativos
- Cards com bordas brilhantes (neon effect)
- Padrão de fundo: linhas de grade ou hexágonos

**Signature Elements:**
- Ícones com efeito de glow
- Barras de progresso com gradiente neon
- Badges de achievement com efeito 3D
- Contador de "streak" em destaque
- Partículas visuais ao completar tarefas

**Interaction Philosophy:**
- Cliques produzem efeito de "ripple" brilhante
- Hover ativa glow intenso ao redor do elemento
- Transições rápidas (150ms) para sensação de responsividade
- Notificações com som (opcional) ao completar sessões

**Animation:**
- Entrada rápida com scale + fade (200ms)
- Glow pulsante em elementos ativos
- Partículas de confete ao completar tarefa
- Transição de cor ao mudar status (200ms)
- Animação de "level up" ao atingir meta

**Typography System:**
- Display: Orbitron Bold (futurista, títulos)
- Body: Space Mono Regular (monospace, sci-fi)
- Accent: Courier Prime (logs, dados)
- Hierarquia: 40px → 28px → 16px → 13px

---

## Decisão: Abordagem Escolhida

**Será implementada a Abordagem 1: Minimalismo Funcional com Foco em Produtividade**

Esta abordagem foi escolhida porque:
1. Maximiza clareza e usabilidade para um aplicativo de produtividade
2. Reduz distrações visuais, permitindo foco total no estudo
3. Facilita adição de funcionalidades sem poluição visual
4. Paleta profissional inspira confiança e seriedade
5. Escalável para futuras expansões (mobile, dark mode, etc.)
