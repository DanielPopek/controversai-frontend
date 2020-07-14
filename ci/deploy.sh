docker-compose -f projects/political_ly/frontend/docker-compose.yml build --no-cache
docker-compose -f projects/political_ly/frontend/docker-compose.yml up -d
ls -l projects/political_ly/frontend/dist
rm -rf projects/political_ly/frontend/dist
