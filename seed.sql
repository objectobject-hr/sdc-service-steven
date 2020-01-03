DROP TABLE IF EXISTS timer;
CREATE TEMP TABLE timer (time1 time, time2 time);
INSERT INTO timer (time1) select now()::time;

COPY carrusel(rooms, occupancy, reviews)
FROM '/Users/sfcontra/Documents/hrcourse/sdc-proxy-steven/sdc-service-steven/data.csv' DELIMITER ',' CSV;

UPDATE timer set time2=now()::time;
SELECT time2-time1 as time_Elapsed from timer;
