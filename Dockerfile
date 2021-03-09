FROM mysql
ENV TZ="Asia/Tokyo"
CMD ["mysqld","--character-set-server=utf8mb4","--collation-server=utf8mb4_unicode_ci"]
COPY ./docker/db/my.cnf /etc/mysql/conf.d/my.cnf
COPY ./docker/db/sql /docker-entrypoint-initdb.d
# node.js の環境変数を定義する
FROM node:12
ENV TZ=Asia/Tokyo
ENV DEBUG=app:*
WORKDIR /app
COPY ./myapp ./
RUN npm install
EXPOSE 3000
