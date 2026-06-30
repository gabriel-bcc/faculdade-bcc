-- 01 Pertence à Lista (f_in) --
-- O que pede: Criar uma função f_in que recebe um número inteiro a e uma lista de inteiros b. Ela deve retornar um booleano dizendo se o número está ou não na lista.  Assinatura: f_in :: Int -> [Int] -> Bool --

f_in :: Int -> [Int] -> Bool
f_in _ [] = False
f_in x (y:ys)
    |x == y = True
    |otherwise = f_in x ys

-- Explicação: Se a lista estiver vazia ([]), o elemento com certeza não está lá, então retornamos False. Se tiver elementos, separamos o primeiro elemento (y) do resto da lista (ys). Se x == y, encontramos o elemento (True). Se não for, continuamos procurando recursivamente no resto da lista (ys). (Nota: Você também poderia resolver usando a função nativa: f_in x b = elem x b). --


-- ________________________________________________________________ --


-- 02 Processando uma Lista de Listas (f2) --
-- O que pede: Criar uma função f2 que recebe um inteiro e uma lista de listas ([[Int]]). Utilizando a função f_in criada anteriormente, ela deve retornar uma lista de tuplas, onde cada tupla contém o resultado do teste (Bool) e a sublista correspondente.  Assinatura: f2 :: Int -> [[Int]] -> [(Bool, [Int])] --

f2::Int -> [[Int]] -> [(Bool,[Int])]
f2 x l = [(f_in x li, li) | li <- l]

-- Explicação: Aqui usamos uma compreensão de lista (list comprehension). Lemos isso como: "Gere um par (f_in x li, li) para cada sublista li que estiver dentro da lista principal l". --


-- ________________________________________________________________ --


-- 03 Empacotando o Resultado (f3) --
-- O que pede: Criar uma função f3 que recebe um inteiro e a lista de listas. Ela deve retornar uma tupla contendo esse mesmo inteiro e o resultado da função f2.  Assinatura: f3 :: Int -> [[Int]] -> (Int, [(Bool, [Int])]) --

f3 :: Int -> [[Int]] -> (Int, [(Bool, [Int])])
f3 x l = (x, f2 x l)

-- Explicação: Essa é puramente estrutural. Nós reaproveitamos a função f2 que já criamos e simplesmente montamos uma nova tupla colocando o elemento x na primeira posição e o resultado de f2 x l na segunda. --


-- ________________________________________________________________ --


-- 04 Filtrando os Falsos (f4) --
-- O que pede: Criar uma função f4 que recebe a estrutura gerada na questão anterior e devolve uma lista de listas contendo apenas as sublistas onde o valor booleano associado for False.  Assinatura: f4 :: (Int, [(Bool, [Int])]) -> [[Int]] --

f4 :: (Int, [(Bool, [Int ])]) -> [[Int]]
f4 (_, lista) = [sublista | (bool, sublista) <- lista, not bool]

-- Explicação: Usamos o casamento de padrões no argumento (_, lista) para ignorar o primeiro número inteiro (já que não precisamos dele)  e focar apenas na lista de tuplas. Na list comprehension, filtramos os elementos usando a condição not bool (ou seja, quando o booleano for False), extraindo apenas a sublista. --


-- ________________________________________________________________ --


-- 05 Comparação de Strings Caractere a Caractere (f5) --
-- O que pede: Receber duas strings (S e R) e comparar seus caracteres nas mesmas posições. O retorno deve ser uma lista de booleanos indicando se os caracteres são iguais ou diferentes, limitando-se ao tamanho da menor string (n).  Assinatura: f5 :: String -> String -> [Bool] --

f5 :: String -> String -> [Bool]
f5 [] _ = []
f5 _ [] = []
f5 (x:xs) (y:ys) = (x == y) : f5 xs ys

-- Explicação: Se qualquer uma das strings for vazia ([]), a recursão para e retorna uma lista vazia, garantindo que respeitamos o tamanho da menor string. Caso contrário, comparamos os primeiros caracteres (x == y) e colamos o resultado (:) na chamada recursiva do restante das strings (xs e ys).(Dica de mestre: Em Haskell, Strings são apenas listas de caracteres. Você poderia resolver essa função inteira com apenas uma linha usando a função nativa zipWith: f5 = zipWith (==)). --
