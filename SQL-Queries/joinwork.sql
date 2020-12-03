inner join 
outer join 
	full outer join
	left outer join
	right outer join 
cross join 
self join

select * from Country
select * from State

insert into State values ('No Cntry',null)

insert into Country values ('Nap')


select * from State inner join Country on CountryId=Country.id 


select * from State left  join Country on CountryId=Country.id 

select * from Country  left  join State on CountryId=Country.id 

select * from State right  join Country on CountryId=Country.id 


select * from Country  full   join State on CountryId=Country.id 



select * from State inner join Country on CountryId=Country.id 


select 
ct.id as CityId,
ct.Name as CityName,
s.id as Stateid,
s.Name as StateName,
c.Name as CountryName
from
City ct inner join State s on StateId= s.id
inner join Country c on CountryId=c.id

 select * from State


