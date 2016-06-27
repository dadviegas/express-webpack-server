## Prototype express-webpack-server

#### Steps to install: 

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

### Pages:
```javascript
{
  // title: the title of the page
  // template: html template we want to use
  // filename: the file that will be generated
  // chunks: webpack chunks that the page uses
  index: {
    title: 'Boilerplate',
    template: getResource('index.html'),
    // getResource specifies the file from the source directory.
    filename: './index.html',
    chunks: ['index', 'css']
  },
  glyphicons: {
    title: 'Boilerplate glyphicons',
    template: getResource('glyphicons.html'),
    filename: './glyphicons.html',
    chunks: ['css']
    // this case it will only use the chunk for the compiled sass
  },
  'pages/form': {
    title: 'Boilerplate form',
    template: getResource('pages/form/index.html'),
    filename: './pages/form/index.html',
    chunks: ['css', 'pages/form']
    // this case will have the compiled css and the js necessary for the form page
  }
}
```
 
### Chunks:
```javascript
{
   // compiled sass with this file
   // will be reused for all chunks, except if we want another style file
   css: getJSResource('css.js'),
   // js for html pages files if necessary
   index: getJSResource('index.js'),
   'pages/form': getJSResource('pages/form/index.js')
}
```

For development of other pages should be enough to add the html page in the source folder then add the new pages in the setup (pages and chunks part)
