solucao(S) :-
    resolve(S, [1,2,3,4],
            [1,2,3,4],
            [3,2,1,0,-1,-2,-3],
            [2,3,4,5,6,7,8]).

resolve([], [], _, _, _).
resolve([C|LC], [L|LL], CO, DS, DI) :-
    apaga(C, CO, CO1),
    NS is L - C,
    apaga(NS, DS, DS1),
    NI is L + C,
    apaga(NI, DI, DI1),
    resolve(LC, LL, CO1, DS1, DI1).

apaga(A, [A|B], B).
apaga(X, [Y|Z], [Y|Z1]) :-
    apaga(X, Z, Z1).
