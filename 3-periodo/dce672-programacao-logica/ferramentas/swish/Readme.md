# Instalação e configuração - SwiSH localmente

## Criar uma pasta para os arquivos de configuração
```
$ mkdir swish
$ cd swish
```

## Baixar as imagens rserve e swish:
```
$ docker pull swipl/rserve
$ docker pull swipl/swish
```

## Criar containers
```
$ docker run -d --net=none --name=rserve swipl/rserve
$ docker run -d -p 3050:3050 --volumes-from rserve -v $(pwd):/data swipl/swish
```

## No navegador
```
http://localhost:3050
```

## Parar os containers (rserve e swish):
```
$ docker container stop $(docker ps -q --filter ancestor=swipl/rserve)
$ docker container stop $(docker ps -q --filter ancestor=swipl/swish)
```

## Iniciar os containers (rserve e swith)

```
$ docker container start $(docker ps -aq --filter ancestor=swipl/rserve)
$ docker container start $(docker ps -aq --filter ancestor=swipl/swish)
```