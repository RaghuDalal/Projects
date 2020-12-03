create table Employee
(
id int primary key identity,
Name varchar(50),
DOB datetime,
DOJ datetime,
MobileNo bigint,
Address varchar(100),
CityId int references City(id),
MailID varchar(50),
IsActive bit,
ManagerID int references Employee(id)
)



insert Employee values (
'Rahul',
'05/05/1998',
'03/08/2020',
7894561232,
'#255 Sector 50,Patiala',
4,
'Vikas@gmail.com',
1,
1
)

select * from City


insert Employee values (
'Kaalu',
'12/08/1980',
'03/07/2000',
7894561232,
'78, 5th Ave,Dallas',
10,
'kaaliya@gmail.com',
0,
null
)

select * from Employee
select
emp.id as EmployeeID,
emp.name as EmployeeName,
emp.DOB as DateOfBirth,
emp.DOJ as DateOfJoining,
emp.IsActive as IsActive,
ct.name as CityName,
em.name as ManagerName
from
Employee emp inner join City ct on CityId= ct.id
inner join Employee em on emp.ManagerID=em.id



