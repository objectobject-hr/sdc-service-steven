DROP DATABASE IF EXISTS cirque;

CREATE DATABASE cirque;

\q;



CREATE TABLE carrusel (
  listingID SERIAL PRIMARY KEY,
  images TEXT[],
  rooms int NOT NULL,
  occupancy int NOT NULL,
  reviews int,
  ratings int,
  donde varchar(50) NOT NULL,
  price int,
  mismo int
);

INSERT INTO carrusel (images, rooms, occupancy, reviews, ratings, donde, price, mismo) VALUES (ARRAY ['https://odis.homeaway.com/odis/listing/41f832e5-2b11-40f9-a025-81fef22082eb.f10.jpg'], 101, 2, 3, 4, 'Tijuana', 60, 5);