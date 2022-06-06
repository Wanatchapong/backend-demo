# Back-End RESTful API using Node.js + Express

## 🎉 Quick Start

1. Create .env file at root directory of project
2. Copy all environments variables from .env.example into .env
3. Install dependencies run: `npm install`
4. Run development: `npm run dev`

## 🐳 Docker

1. Run MariaDB: `docker run -d --name mariadb -e MARIADB_USER=demo -e MARIADB_PASSWORD=password -e MARIADB_ROOT_PASSWORD=password -p 3306:3306 mariadb`
2. Create a new database then create new tables `categories` and `products`
3. Run MongDB: `docker run -d --name mariadb -e MARIADB_USER=demo -e MARIADB_PASSWORD=password -e MARIADB_ROOT_PASSWORD=password -p 3306:3306 mariadb`
4. Create a new mongodb database then create new collection `users`
5. Change the environment variables in Dockerfile
6. Build docker image: `docker build -t <image-name>:<version> .`
7. Run docker container in detached mode: `docker run -d -p 8000:8000 --name <container-name> <image-name>:<version>`

### Other docker commands:

- Show list of images: `docker images`
- Show list of all containers processes: `docker ps -a`
- Print app console output: `docker logs <container id>`
- Enter the container: `docker exec -it <container id> /bin/bash`
