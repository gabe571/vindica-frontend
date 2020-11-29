# VINDICA


## About

Vindica is the a React application with a Ruby on Rails backend created to help members find coffee shops with in the greater Seattle Area.  Allowing members to share their experience and add coffee shops to their favorite bars to visit again at a later date , all while protecting their information with JWT authorization.

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
