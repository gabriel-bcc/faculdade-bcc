docker container stop $(docker ps -q --filter ancestor=swipl/rserve)
docker container stop $(docker ps -q --filter ancestor=swipl/swish)