FROM mysql
ENV TZ="Asia/Tokyo"
CMD ["mysqld","--character-set-server=utf8mb4","--collation-server=utf8mb4_unicode_ci"]
COPY ./db/my.cnf /etc/mysql/conf.d/my.cnf
COPY ./db/sql /docker-entrypoint-initdb.d
