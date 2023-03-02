USE grpc-db;

CREATE TABLE roots (
    id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(50) NOT NULL,
    user_pwd VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE blogs (
    id INT NOT NULL AUTO_INCREMENT,
    title TEXT NOT NULL,
    details TEXT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO roots (user_name,user_pwd) VALUES ("Gdd479gg","mf79gs47sqo");