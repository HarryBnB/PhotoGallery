DROP DATABASE IF EXISTS gallery;

CREATE DATABASE gallery;

USE gallery;

CREATE TABLE photos (
  photo_id INT NOT NULL AUTO_INCREMENT,
  photo_url VARCHAR(255) NULL,
  intro VARCHAR(255) NULL,
  property_id INT NULL,
  PRIMARY KEY (photo_id)
);