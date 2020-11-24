# Exercícios do workshop da semana Full Stack do Prof Luiz Duarte

Site: https://www.luiztools.com.br/

## Objetivos

- Construir um encurtador de URL (estilo bit.ly) no formato de micro-SaaS (Software as a Service) usando apenas JavaScript no frontend e backend;
- Aprender a criar um frontend bonito mesmo sem ter o menor talento para design usando ReactJS;
- Criar um backend usando Web API RESTful em Node.js e TypeScript pra deixar aplicação escalável e ganhar produtividade no desenvolvimento;
- Armazenar os dados com MySQL usando Sequelize para poupar tempo nas operações.
- O passo a passo de como publicar o projeto do workshop na AWS.

## Instrutores

- Luiz Duarte (https://www.linkedin.com/in/luiztools/)
- Daniel Castro (https://www.linkedin.com/in/danielcsrs/)

## Alterações

- Configurado para usar es-lint + prettier
- Usado interface no lugar de type
- Utilizado ts-node + nodemon

## Para rodar o projeto

### Rodar um container docker com MySQL

docker container run --name wkfs-db -p 3306:3306 -e MYSQL_ROOT_PASSWORD=RootPassword -e MYSQL_DATABASE=WKFS -e MYSQL_USER=user -e MYSQL_PASSWORD=password -d mysql:8.0.22
