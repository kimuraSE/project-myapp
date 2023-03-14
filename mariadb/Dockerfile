FROM mariadb:latest

RUN apt-get update -y

COPY /sql/script.sql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=grpc-db
ENV MYSQL_USER=docker
ENV MYSQL_PASSWORD=docker
ENV TZ=Asia/Tokyo

EXPOSE 3306
CMD ["mysqld"]