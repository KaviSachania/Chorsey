# Chorsey

Added 11/22 {

Look at server/db/schema/UsersDbSchema.js before working on anything.

npm start- runs project on localhost:8080
npm start --prefix server- runs server on localhost:3000
npm start --prefix client- runs client on localhost:8080

npm install- installs server and client dependencies <-- run before working on anything
npm install --prefix server- installs server dependencies
npm install --prefix client- installs client dependencies

npm install --prefix server install <libraryName>- install a library to the server program
npm install --prefix client install <libraryName>- install a library to the client program

}



### 11/13 - .gitignore setup to ignore .DS_Store files and *db.js* - this is to allow users to have different usernames and passwords. Future changes to db.js will need to be pulled by force

#### To get rid of the .DS_Stores in your own repositories, and remove db.js from being tracked (so we're all on the same page) enter the following in terminal:

`find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch`

and

`git rm --cached db/db.js`

Webpack development server set up - npm start launches site at localhost:8080. Auto updates with changes.

Run these SQL commands before starting development:

CREATE DATABASE chorsey;
CREATE USER 'chorsey'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON chorsey.* TO 'chorsey'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
USE chorsey;
CREATE TABLE chores (choreId INT NOT NULL PRIMARY KEY, name VARCHAR(255) NOT NULL, description TEXT NULL, dueDate DATE NOT NULL, userId INT NULL, houseId INT NOT NULL, completed BOOLEAN NOT NULL default FALSE);
CREATE TABLE houses (houseId INT NOT NULL PRIMARY KEY, name VARCHAR(255) NOT NULL, userCount INT NOT NULL default 0);
CREATE TABLE users (userId INT NOT NULL PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, houseId INT NOT NULL);

See db.js

Run 'npm install' on the command line before working after receiving new code.
Run server with 'npm start' on the command line.
