create database if not exists books;
    use books;

create table if not exists books (
    id int auto_increment primary key,
    name varchar(255),
    price int,
    quantity  int,
    author varchar(255)
);
