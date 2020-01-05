docker-compose -f projects/political_ly/frontend/docker-compose.yml build --no-cache
docker-compose -f projects/political_ly/frontend/docker-compose.yml up -d
rm -rf projects/political_ly/frontend/dist
