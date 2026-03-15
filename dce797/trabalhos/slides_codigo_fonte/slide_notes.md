# Divisão da Apresentação (5 Integrantes)

**Duração Total Estimada:** 8 a 10 minutos (aprox. 1:30 a 2:00 por pessoa).

---

## APRESENTADOR 1: Introdução e Contexto (Slides 1 e 2)

**# 1 - Prova de NP-Completude: Do 3-SAT ao Independent Set**
Olá a todos. Somos o grupo [Nomes] e hoje vamos realizar uma das provas mais clássicas da Teoria da Computação. O nosso objetivo é demonstrar que o problema do **Independent Set** é tão difícil quanto o famoso **3-SAT**. Para isso, utilizaremos a técnica de redução, transformando lógica booleana em grafos.

**# 2 - Introdução à Complexidade Computacional**
Para entender essa prova, precisamos das classes de complexidade. A classe **P** contém problemas que resolvemos rápido. A classe **NP** agrupa problemas difíceis de resolver, mas fáceis de verificar. Os **NP-Completos** são os mais difíceis em NP. Se resolvermos um deles rápido, provamos que P=NP. O 3-SAT é o nosso ponto de partida, pois já sabemos que ele é NP-Completo.

---

## APRESENTADOR 2: Definição dos Problemas (Slides 3 e 4)

**# 3 - Problema 1: 3-SAT (O Problema Base)**
O **3-SAT** é a base da nossa prova. Ele pergunta se existe uma combinação de Verdadeiro/Falso que satisfaça uma fórmula onde cada cláusula tem exatamente 3 literais (como x ou não x). Como o 3-SAT é reconhecidamente NP-Completo pelo Teorema de Cook-Levin, ele é a ferramenta perfeita para provar a dificuldade de outros problemas.

**# 4 - Problema 2: Independent Set (O Alvo)**
O nosso alvo é o **Independent Set**. Em um grafo, um conjunto independente é um subconjunto de vértices onde **nenhum par possui uma aresta entre si**. O problema pergunta: dado um grafo G e um número k, existe um conjunto independente de tamanho pelo menos k? Veremos que este problema gráfico esconde a mesma complexidade lógica do 3-SAT.

---

## APRESENTADOR 3: A Prova em NP e a Redução (Slides 5 e 6)

**# 5 - Passo 1: Provando que Independent Set ∈ NP**
Primeiro, provamos que o Independent Set está em **NP**. Se alguém nos der um conjunto de vértices como "certificado", podemos verificar em tempo polinomial se o tamanho é pelo menos k e se não há arestas entre eles. Essa verificação leva tempo O(V²), o que confirma que o problema pertence à classe NP.

**# 6 - Passo 2: A Redução Polinomial**
Agora, a **Redução**. Vamos criar uma função que transforma qualquer fórmula 3-SAT em um grafo. A regra é: a fórmula deve ser satisfatível **se, e somente se**, o grafo tiver um conjunto independente de tamanho **m**, onde m é o número de cláusulas. Usaremos "gadgets" e arestas de conflito para isso.

---

## APRESENTADOR 4: Construção dos Gadgets e Exemplo (Slides 7, 8 e 9)

**# 7 - Construção do Grafo: Os Triângulos**
A construção começa criando um **vértice para cada literal** de cada cláusula. Conectamos os 3 literais de cada cláusula entre si, formando um **triângulo**. Em um triângulo, podemos escolher **no máximo um** vértice para o conjunto independente. Isso nos força a escolher exatamente um literal "verdadeiro" por cláusula.

**# 8 - Arestas de Consistência Lógica**
Para evitar que escolhamos "x" e "não x" ao mesmo tempo, adicionamos **arestas de conflito** entre literais contraditórios em triângulos diferentes. Isso garante que o Independent Set respeite as leis da lógica: se você escolhe x como verdadeiro em um lugar, não pode escolher não x em outro.

**# 9 - Exemplo de Redução Visual**
Vejam este exemplo: Φ = (x ∨ y ∨ ¬z) ∧ (¬x ∨ ¬y ∨ z). Temos dois triângulos. Conectamos x a ¬x, y a ¬y e ¬z a z. Qualquer conjunto independente de tamanho 2 aqui representará uma solução válida para a fórmula original.

---

## APRESENTADOR 5: Corretude e Conclusão (Slides 10, 11 e 12)

**# 10 - Corretude: Da Lógica para o Grafo**
Se a fórmula é satisfatível, cada cláusula tem um literal verdadeiro. Escolhemos esses literais no grafo. Como a atribuição é consistente, não haverá arestas de conflito entre eles. Como escolhemos um por triângulo, não há arestas de cláusula. Temos, então, um Independent Set de tamanho m.

**# 11 - Corretude: Do Grafo para a Lógica**
Inversamente, se o grafo tem um Independent Set de tamanho m, ele deve ter um vértice de cada triângulo. Atribuímos "Verdadeiro" a esses literais. As arestas de conflito garantem que a atribuição é válida. Como cada cláusula tem um representante, a fórmula é satisfeita.

**# 12 - Conclusão e Referências**
Provamos que o Independent Set é NP-Completo. Ele está em NP e o 3-SAT reduz-se a ele. Essa prova é a base para entender muitos outros problemas difíceis em computação. Obrigado pela atenção e estamos abertos a perguntas!
