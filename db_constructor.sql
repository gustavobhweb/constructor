DROP DATABASE IF EXISTS constructor;
CREATE DATABASE constructor;
USE constructor;

CREATE TABLE tbl_users(
cod_user INT UNSIGNED AUTO_INCREMENT NOT NULL,
email VARCHAR(200) NOT NULL,
pass VARCHAR(255) NOT NULL,
name VARCHAR(100) NOT NULL,
dateCad DATETIME NOT NULL,
PRIMARY KEY(cod_user)
);

CREATE TABLE tbl_projects(
cod_project INT UNSIGNED AUTO_INCREMENT NOT NULL,
name VARCHAR(100) NOT NULL,
description TEXT NOT NULL,
tbl_users_cod_user INT UNSIGNED NOT NULL,
PRIMARY KEY(cod_project),
FOREIGN KEY(tbl_users_cod_user) REFERENCES tbl_users(cod_user)
);

CREATE TABLE tbl_objects(
cod_object INT UNSIGNED AUTO_INCREMENT NOT NULL,
id VARCHAR(255) NOT NULL,
htmlCode TEXT NOT NULL,
tbl_projects_cod_project INT UNSIGNED NOT NULL,
PRIMARY KEY(cod_object),
FOREIGN KEY(tbl_projects_cod_project) REFERENCES tbl_projects(cod_project)
);

CREATE TABLE tbl_default_objects(
cod_default_object INT UNSIGNED AUTO_INCREMENT NOT NULL,
htmlCode TEXT NOT NULL,
PRIMARY KEY(cod_default_object)
);

INSERT INTO tbl_default_objects VALUES(NULL, "<div style='position:absolute;width:70%;height:70%;background:#4C4CFF'></div>");
INSERT INTO tbl_default_objects VALUES(NULL, "<div style='position:absolute;width:70%;height:70%;background:#fdd555;border-radius:100%'></div>");
INSERT INTO tbl_default_objects VALUES(NULL, "<div style='position:absolute;width:70%;height:70%;background:#add555;border-radius:5% 100% 5% 100%'></div>");