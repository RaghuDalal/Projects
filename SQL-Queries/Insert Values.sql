use ProfileDB


## Create the Table named Country with Column 'ID' and 'Name' ##

create table Country
(
id int primary key identity,
Name varchar(50)
)


## Create the Table named State with Column 'ID', 'Name' and 'Country Reference ID' ##

create table State
(
id int primary key identity,
Name varchar(50),
CountryId int references Country(id)
)

## Create the Table named City with Column 'ID', 'Name' and 'State Reference ID' ##

create table City
(
id int primary key identity,
Name varchar(50),
StateId int references State(id)
)

## Inserting Data into Country Table ##
	
insert Country values ('India')
insert Country values ('USA')
insert Country values ('France')

## Inserting Data into State Table ##

insert State values ('Haryana', 1)
insert State values ('Punjab', 1)
insert State values ('UP', 1)

insert State values ('California', 2)
insert State values ('Texas', 2)

insert State values ('Occitanie', 3)
insert State values ('Grand Est', 3)

## Inserting Data into City Table ##

insert City values ('Hisar', 1)
insert City values ('Bhiwani', 1)
insert City values ('Rohtak', 1)

insert City values ('Patiala', 2)
insert City values ('Sangrur', 2)

insert City values ('Agra', 3)
insert City values ('Prayagraj', 3)

insert City values ('Los Angeles', 4)
insert City values ('San Francisco', 4)

insert City values ('Dallas', 5)
insert City values ('Houston', 5)

insert City values ('Beriers', 6)
insert City values ('Agde', 6)

insert City values ('Strasbourg', 7)



select * from sys.tables
select * from Country
select * from State
select * from City




create table Category
(
id int primary key identity,
CategoryName varchar(50)
)

create table SubCategory
(
id int primary key identity,
SubCategoryName varchar(50),
CategoryId int references Category(id)
)


create table Product
(
id int primary key identity,
ProductName varchar(50),
SubCategoryId int references SubCategory(id)
)

insert Category values ('Mobile')
insert Category values ('Laptop')
insert Category values ('Sports')

select * from Category

insert SubCategory values ('Apple', 1)
insert SubCategory values ('Samsung', 1)
insert SubCategory values ('Xiaomi', 1)

insert SubCategory values ('HP', 2)
insert SubCategory values ('Dell', 2)

insert SubCategory values ('Nike', 3)
insert SubCategory values ('Adidas', 3)

select * from Product

insert Product values ('iPhone X', 1)
insert Product values ('iPhone 11', 1)

insert Product values ('Galaxy S20', 2)
insert Product values ('Galaxy Note 20', 2)

insert Product values ('Redmi Note 10', 3)
insert Product values ('Mi 10', 3)

insert Product values ('Pavalion 15', 4)
insert Product values ('Pavalion 17', 4)

insert Product values ('Dell G14', 5)
insert Product values ('Dell G15', 5)

insert Product values ('Nike Air', 6)

insert Product values ('Adidas Marlin', 7)



alter table Product
add Price bigint

alter table Product
add Warrenty bit

alter table Product
add SellerName varchar(50)

alter table Product
add ManufacturingDATE datetime

alter table Product
add ImportedOrNot bit

alter table Product
add NameOfImporter nvarchar(100)

select * from Product

update Product set Price=90000 , Warrenty=1 , SellerName='Apple India' , ManufacturingDATE='02/21/2020' , ImportedOrNot=1 , NameOfImporter='CloudTail India' where id=1

update Product set Price=100000 , Warrenty=1 , SellerName='Apple India' , ManufacturingDATE='04/06/2020' , ImportedOrNot=1 , NameOfImporter='CloudTail India' where id=2

update Product set Price=65000 , Warrenty=1 , SellerName='Samsung India' , ManufacturingDATE='08/16/2020' , ImportedOrNot=0  where id=3

update Product set Price=78000 , Warrenty=1 , SellerName='Samsung India' , ManufacturingDATE='05/16/2020' , ImportedOrNot=0  where id=4

update Product set Price=10000 , Warrenty=0 , SellerName='Xiaomi' , ManufacturingDATE='05/16/2020' , ImportedOrNot=1 , NameOfImporter='Xiaomi India'  where id=5

update Product set Price=49999 , Warrenty=1 , SellerName='Xiaomi' , ManufacturingDATE='07/23/2020' , ImportedOrNot=1 , NameOfImporter='Xiaomi India'  where id=6

update Product set Price=59999 , Warrenty=1 , SellerName='HP India' , ManufacturingDATE='07/23/2018' , ImportedOrNot=1 , NameOfImporter='HP India'  where id=7

update Product set Price=49999 , Warrenty=0 , SellerName='HP India' , ManufacturingDATE='07/23/2019' , ImportedOrNot=0   where id=8

update Product set Price=100000 , Warrenty=0 , SellerName='Dell India' , ManufacturingDATE='04/06/2017' , ImportedOrNot=1 , NameOfImporter='Dell India' where id=9

select * from Product

update Product set Price=16000 , Warrenty=0 , SellerName='Dell India' , ManufacturingDATE='02/21/2016' , ImportedOrNot=0  where id=10

update Product set Price=1000 , Warrenty=1 , SellerName='Nike INDIA' , ManufacturingDATE='02/21/2019' , ImportedOrNot=1 , NameOfImporter='Nike India'  where id=11

update Product set Price=12000 , Warrenty=1 , SellerName='Adidas INDIA' , ManufacturingDATE='09/26/2020' , ImportedOrNot=1 , NameOfImporter='Adidas India'  where id=12