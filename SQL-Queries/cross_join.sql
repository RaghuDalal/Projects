
select 
emp.id empId,
emp.Name as empname,
mngr.Name as managername
from Employee emp inner join Employee mngr
on emp.ManagerID= mngr.id


select  emp.id, emp.Name from Employee emp

select * from Gift

select  emp.id, emp.Name,gift.Name  from Employee emp cross join Gift
where ManagerID is null and  emp.IsActive=1 and Gift.id=1


select  emp.id, emp.Name,gift.Name  from Employee emp cross join Gift
where ManagerID is not null and  emp.IsActive=1 and Gift.id=2



