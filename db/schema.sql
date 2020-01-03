psql cirque


INSERT INTO carrusel (images, rooms, occupancy, reviews, ratings, price, mismo) VALUES (ARRAY ['https://odis.homeaway.com/odis/listing/41f832e5-2b11-40f9-a025-81fef22082eb.f10.jpg'], 101, 2, 3, 4, 'Tijuana', 60, 5);



-- DROP DATABASE IF EXISTS cirque;

-- CREATE DATABASE cirque;

-- \q

CREATE TABLE carrusel (
  listingid SERIAL PRIMARY KEY,
  images TEXT[],
  rooms int,
  occupancy int,
  reviews int,
  ratings int,
  price int,
  mismo INT[]
);

CREATE TEMP TABLE timer (time1 time, time2 time);
INSERT INTO timer (time1) select now()::time;

UPDATE timer set time2=now()::time;
SELECT time2-time1 as time_Elapsed from timer;