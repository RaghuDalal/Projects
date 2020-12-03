create table Category
(
id int primary key identity,
Name varchar(50),
Status varchar(8)
)

insert Category values ('Fruits & Vegetables','Active')
insert Category values ('Dairy & Eggs','Active')
insert Category values ('Beverages','Active')
insert Category values ('Snacks','Active')
insert Category values ('Home Care','Active')
insert Category values ('Personal Care','Active')
insert Category values ('Electronics','Active')

select * from Category



create table Product
(
id int primary key identity,
Name varchar(50),
CategoryID int references Category(id),
ListingDate datetime,
Status varchar(8),
SellerID int references Shop(id)
)
select * from Product
insert Product values('Galaxy S10',7,'10/30/2019','Active',3)
insert Product values('FaceWash',6,'03/15/2020','Active',4)
insert Product values('Tomato',1,'09/15/2020','Active',1)
insert Product values('Pepsi',3,'01/30/2020','Active',5)
insert Product values('Jio Router',7,'09/16/2020','Active',2)
insert Product values('Bikaji Bhujia',4,'12/09/2019','Active',4)
insert Product values('Lizol',5,'11/27/2019','Active',4)
insert Product values('Milk',2,'09/16/2020','Active',1)

alter table Product 
add Price bigint

update Product set Price=70000 where id=1

update Product set Price=130 where id=2
update Product set Price=80 where id=3
update Product set Price=60 where id=4
update Product set Price=750 where id=5
update Product set Price=250 where id=6
update Product set Price=150 where id=7
update Product set Price=25 where id=8


create table Shop
(
id int primary key identity,
Name varchar(50),
Location varchar(50),
Status varchar(8)
)

insert Shop values ('BigBazar','Hisar','Active')
insert Shop values ('Reliance','Delhi','Active')
insert Shop values ('Samsung','Noida','Active')
insert Shop values ('Unilever','Gurugram','Active')
insert Shop values ('Pepsico Inc','Banglore','Active')
select * from Shop


create table [User]
(
id int primary key identity,
Name varchar(50),
email varchar(100),
Address varchar(100),
Status varchar(8)
)
select * from [User]

insert [User] values ('Joginder Singh',
'johndoe@example.com',
'#0000, St No. 8, Shahid Karnail Singh Nagar, MBD Mall, Frozpur road, Ludhiana, 141001',
'Active')

insert [User] values ('Amritpal Singh',
'amritpal@example.com',
'#0000, Sector 15, Kaimari road, Hisar, 125001',
'Active')


insert [User] values ('John Smith',
'john@example.com',
'1A, Sector 1A, CBD Belapur, Navi Mumbai, Maharashtra 400614',
'Active')

insert [User] values ('Jassica William',
'Jassica@example.com',
'Gaothan, Shivajinagar, Pune, Maharashtra 411005',
'Active')

insert [User] values ('Davinder Singh',
'Davinder@example.com',
'10/88, Block 10, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002',
'Active')

insert [User] values ('Vishal Kumar',
'vishal@example.com',
'PLOT NO.1, Ground Chhattisgarh Bhavan, 1, Great Eastern Rd, Raipur, Chhattisgarh 492001',
'Active')



create table Orders
(
id int primary key identity,
ProductID int references Product(id),
UserID int references [User](id),
OrderDate datetime,
Status varchar(16)
)


insert Orders values (1,2,'09/08/2020','Pending')
insert Orders values (7,3,'09/16/2020','Pending')
insert Orders values (5,4,'08/20/2020','Delivered')
insert Orders values (6,5,'08/30/2020','Delivered')
insert Orders values (8,1,'09/17/2020','Pending')
insert Orders values (4,2,'09/10/2020','Delivered')
insert Orders values (3,6,'09/12/2020','Pending')
insert Orders values (2,3,'09/14/2020','Pending')

select * from Orders

select * from sys.tables

select * from Category
select * from Product
select * from Shop
select * from[User]
select * from Orders



select
O.id as OrderID,
U.name as CustomerName,
U.email as CustomerEmail,
U.address as CustomerAddress,
O.OrderDate as Order_Date,
P.ListingDate as ProductListingDate,
P.Name AS ProductName,
c.Name as CategoryName,
S.Name as SellerName,
S.location as SellerLocation,
P.Price as Price,
O.Status as OrderStatus
from
Orders O inner join Product P on ProductID=P.id 
inner join Category C on CategoryID=C.id
inner join Shop S on SellerID=S.id
inner join [User] U on UserID=U.id
