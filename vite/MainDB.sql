create database Ecomm;
use Ecomm;

create table userdetails(
userid int auto_increment primary key,
username char(25),
password char(25)
);

insert into userdetails(username,password) values("Pranesh","1234");
select * from userdetails;