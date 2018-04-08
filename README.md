# user_control #


## Overview ##

* This project is a module for user registration and viewing of the list of registered users.

* Its main purpose is to serve as an application to receive load tests using the [OpenSTA](http://opensta.org/) tool.

* The performance results of the application can be tracked in the [Wiki](https://github.com/LukasGaedicke/user_control/wiki) of this repository.

### Download Code ###

```bash
>cd ~/workspace
>git clone https://github.com/LukasGaedicke/user_control.git
```

### Steps for use this aplication in Ubuntu ###

* Install MySql-Server:
```bash
Tutorial of installation in: https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-16-04
```

* Install NodeJS:
```bash
Tutorial of installation in: https://nodesource.com/blog/installing-node-js-tutorial-ubuntu/
```

* Install dependencies of project:
```bash
>cd ~/workspace
>npm install 
```

* Create database of project:
```bash
>mysql -u USER -p
>create database user_control;
>use user_control;
>CREATE TABLE user ( user_id int not null primary key auto_increment, LastName varchar(255), FirstName varchar(255), Address varchar(255), City varchar(255) );
```
* Alter data of connection with MysqlServer: 
```bash
>cd ~/workspace/user_control-master/config
>nano connetion.js
And alter according to your connection data:
*host: YOUR_HOST
*user: YOUR_USER_MYSQL
*password: YOUR_PASS_MYSQL
```

### Start Aplication on Ubuntu: ###
```bash
cd ~/workspace/user_control-master
nodemon server.js

To access, in your browser url type: https://YOUR_HOST:3000 
```

Bugs? Create one [issue](https://github.com/LukasGaedicke/user_control/issues), or collaborate =D, Enjoy! 

