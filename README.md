express-webpack-server

Steps to install: 

* git clone
* npm install

------

#### Run Project in Development environment

* npm run dev

------

#### Run Project in Production environment locally

* npm run build (this is to generate the files)
* npm start

------

#### Deploy 
Heroku will be responsable for execute the build after the dependencies are installed.
There's no need to run the command `npm run build` for the deploy, but we should test if everything is all right.

#### Structure folders
* Assets contains all static files, like images, js, css, all files that will be static.
* Source contains the files that will be the source for the webpack compiler
* Configuration contains configuration of the app.
* Server contains the express server for production (static files) and development (webpack compiled files)
* webpack contains the settings for the webpack compiler
* Setup contains the chunks (js code that webpack compiler will produce) and pages that we use in the app


#### Setup Folder
Contains the pages and js chunks for webpack. Each file html and js will be processed by this file.
For the webpack compiler using the html pages we could pass chunk files this are the files webpack compiler generates.

 
