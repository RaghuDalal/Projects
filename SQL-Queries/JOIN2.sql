select * from Country
select * from State

select * from State inner join Country on CountryId=Country.id 

select * from State left join Country on CountryId=Country.id 

select * from Country  full   join State on CountryId=Country.id 


select
s.id as StateID,
s.name as StateNAME,
C.name as CountryNAME,
c.id as CountryID
FROM
State s inner join Country c on CountryID=c.id