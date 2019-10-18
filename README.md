# React Google Books Search

### Overview

React-based Google Books Search app. This SPA (Single Page Application) uses [`react-router-dom`]to navigate, hide and show your React components without changing the route within Express. Using helper/util functions and React lifecycle methods to query and display books based on user searches, this is a full MERN stack application allows users to save books to a database to refer to at a later date. Built with Node, Express and MongoDB, and Socket.io.



# Tools used

* MongoDB
* Mongoose
* React
* Express
* Google Books API
* Foundation via [foundation-sites](https://www.npmjs.com/package/foundation-sites) and [react-foundation](https://www.npmjs.com/package/react-foundation) npm packages
* Socket.io

# How to use

Users of the app can search for books by keyword(s) with an option to filter their search by author name. 

Once books are rendered to the page, clicking the *Save* button will add them to the Favorites page, notifying the user.

On the Favorites page, clicking *Remove* for a book will remove it from this page as well as the Mongo database.

### Live site

* deployed: https://sta-google-books-search.herokuapp.com/

