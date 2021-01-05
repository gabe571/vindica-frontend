# VINDICA


## About

Vindica is a React application with a Ruby on Rails backend created to help members find coffee shops with in the greater Seattle Area.  Allowing members to share their experience and add coffee shops to their favorite bars to visit again at a later date , all while protecting their information with JWT authorization.

## Installation

Reposities can be found here: 
Frontend
https://github.com/gabe571/vindica-frontend
Backend
https://github.com/gabe571/vindica--backend

Run Vindica by simply cloning down both frontend and backend into a single directory.

cd into vindica--backend, run the following:

```
bundle install            #installs gems needed
rails db:create           #creates PostgreSQL database
rails db:migrate          #migrates tables
rails db:seed             #seed database
rails server              #spin up server
```
cd into vindica-frontend, run the following:

```
npm install             #React packages and dependencies
npm start               #open app in browser
```

## Getting Started

### Sign Up/Log In

Start by logging in with your memebership name and password.  If this is your first time please create a new memebership name and password to login to get started.

## Reviews!

This application takes advantage of the Google API to locate coffeeshps in the area, aswell as YELP API to see reviews that have already been given.  

* You can use the google map to see coffeeshops nearest you.
* View the Yelp reviews already given, or see what other members are saying!
* Create your own review of your experience and add to the reviews for all memebers to see.

## Favorites

Add Coffee Shops to your Favorites list!

# Developer

#### Gabriel Castro
Github
https://github.com/gabe571
Linkedin
https://www.linkedin.com/in/gabriel-castro-5063891b0/
Medium
https://gabrielcastro1028.medium.com/
