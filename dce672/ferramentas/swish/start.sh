docker container start $(docker ps -aq --filter ancestor=swipl/rserve)
docker container start $(docker ps -aq --filter ancestor=swipl/swish)