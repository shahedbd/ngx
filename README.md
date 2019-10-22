# Ngx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



# Notes
* Deploy
```From Terminal:
$ npm install http-server -g

From Angular Project Dir. Lets say your Angular project name is ngx.
$ ng build
$ http-server dist/ngx
Starting up http-server, serving dist/ngx
Available on:
  http://127.0.0.1:8080  http://192.168.43.54:8080
Hit CTRL-C to stop the server
```



## Steps
```
01. Go to Project directory
cd /Users/mlbd.shahidul/git/TechLearning/Angular/RnD

02. Create new project
ng new ngx
cd ngx

03. Run Project
ng serve or ng serve --open 

By Setting port: ng serve --port 4201
Now go to: http://localhost:4201/


04. Install bootstrap
npm install bootstrap --save
Set bootstrap; 
add it inside the angular.json file
"styles": [
   "src/styles.css",
   "./node_modules/bootstrap/dist/css/bootstrap.min.css"
 ],

 
 05. 
 ng g c nv
 ng g c Home

 ng g m CRUD
 ng g c basicinfo
 ng g c createbasicinfo
 ng g c updatebasicinfo


 06. Show basic info: API data prep

Run API: JSON  Server
Dir path: cd /Users/mlbd.shahidul/git/TechLearning/Angular/jsonServer
> json-server --watch db.json

URL: http://localhost:3000/posts




 npm i @angular/forms    -- No needed

 npm i ngx-pagination
 npm i ng2-search-filter
 npm i ngx-order-pipe





 07. Create 

 08. Update

 09. Delete
npm i sweetalert2




10. Date picker: 
ng add ngx-bootstrap  --component datepicker



11. pagination
ng add ngx-bootstrap  --component pagination


12. npm install dateformat 
no nbeed

13. npm install ngx-toastr --save
https://github.com/scttcper/ngx-toastr
```