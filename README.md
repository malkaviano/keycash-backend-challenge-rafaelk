# keycash-backend-challenge-rafaelk
Keycash Programming Test

How to get the docker postgres working locally, you don't need it if you have a postgres.

docker pull postgres:11

docker run --name keycash-postgres -p 5432:5432 -e POSTGRES_DB=keycash -e POSTGRES_USER=keycash -e POSTGRESS_PASSWORD=keycash -d postgres:11

npm install

npm build

npm run migration:run