![MIT LICENSE](https://img.shields.io/github/license/carlbarfuss/auth_shelf.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/carlbarfuss/auth_shelf.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/carlbarfuss/auth_shelf.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/carlbarfuss/auth_shelf.svg?style=social)

# Authorized

## Description

_Duration: 3 days_

This project showcases using logins to designate authorized routes and access on a page for designated users.  Users can log in, add items to a virtual shelf, and edit/delete their own items.  Users are allowed to view ALL items on the shelf, while limiting access to edit/delete to only the items that they themselves have created.

Passwords are salted/hashed using bcrypt, and filestack is used to handle the image uploads for the images for the items.

## Screen Shot

[Info Page]('./SS1.png')
[Loging Page]('./SS2.png')

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)


## Installation

This application will need an API KEY from [filestack](https://www.filestack.com).  

1. Create a database named `auth_shelf`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. create a .env file in the root directory and add the following to it:
  - [ ] SERVER_SESSION_SECRET={a random string to encrypt your server session
  - [ ] REACT_APP_FILESTACK_API_KEY={your filestack API key}
  - [ ] REACT_APP_EMAIL_USER={account that sends the reset messages from gmail}
  - [ ] REACT_APP_EMAIL_PASSWORD={password for gmail account that sends reset messages}
  - [ ] CLIENT_URL=http://localhost:3000 (replace this if you end up deploying the app to a non-local host)
  - [ ] RESET_PASSWORD_KEY={a random string to encrypt your token}
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Upon starting the app, click "register" to register a new user
2. Home Page will display the logged in user and their ID
3. Info Page will take the user to the "shelf"
  - 1 Users can addd items via the add item button (will require a description and an image url (locally stored images up to 1024x1024))
4. Users can edit items that they own by pressing the Edit item button
5. Users can delete items that they own by pressing the Delete Item button
6. If a user attempts to edit/delete an item that they don't own they will be prompted by an alert.


## Built With

React
Redux
Passport
Bcrypt
JWT(JsonWebToken)



## Acknowledgement
Thanks to the entire team ([Jordan Newberry](https://github.com/jordanNewberry21), [Zuber Abdikadir](https://github.com/zuberabdikadir), [Paul Kastenbauer](https://github.com/kastenbauer27), [Brady Baker](https://github.com/bradybaker), [Carl Barfuss](https://github.com/carlbarfuss)) for working together to create this learning tool.   Also a huge thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.  

