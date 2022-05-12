DROP DATABASE IF EXISTS bigdata_db;
CREATE DATABASE bigdata_db;

USE bigdata_DB;



CREATE TABLE top5000(
  position INT NOT NULL,
  artist varchar(100),
  song VARCHAR(100) NOT NULL,
  ano int not null,
  raw_total decimal(10,4) null,
  raw_usa decimal(10,4) null,
  raw_uk decimal(10,4) null,
  raw_eur decimal(10,4) null,
  raw_row decimal(10,4) null,
  PRIMARY KEY (position)
);

select * from top5000;
insert into top5000(position, artist, song, ano)
values(1, "fugitivos", "loca", 1993), (2, "los acostas","contra el dragon", 1994);