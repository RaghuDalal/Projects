create database Assignment
use Assignment

create table Category
(
id int primary key identity,
Name varchar(100),
IsActive bit,
ParentID int references Category(id)
)

insert Category values ('Electronics',1,Null)
insert Category values ('Laptop',1,1)
insert Category values ('DellSmall',1,2)
insert Category values ('DellLarge',1,2)
insert Category values ('DS-13',1,3)
insert Category values ('DL-17',1,4)
insert Category values ('DellGaming',1,2)

select * from Category

SELECT
c.name as Level_0,
c.IsActive as Level_0_Status,

ca.name as Level_1,
ca.IsActive as Level_1_Status,

cat.name as Level_2,
cat.IsActive as Level_2_Status,

cate.name as Level_3,
cate.IsActive as Level_3_Status

FROM
Category c inner join Category ca on c.ParentID=ca.id 
inner join Category cat on ca.ParentID=cat.id
left join Category cate on cat.ParentID=cate.id