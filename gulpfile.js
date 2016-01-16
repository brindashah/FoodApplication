'use strict';
var gulp = require('gulp')

var paths = {
    srcScriptsPlugins: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-ui-router/build/angular-ui-router.min.js',
  
    ],
    srcScriptsFiles: [
     'app.js"',
     'Common/dataservice.js',
     'Common/Constants.js',
     'Home/HomeModule.js',
     'Nutrient/NutrientModule.js',
     'HomeController.js',
     'NutrientController.js'
    ],
    srcStylesFiles: [
    'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ]
};

// styles task
gulp.task('styles', function () {

    var concat = require('gulp-concat'),
        plumber = require('gulp-plumber');
    var minifyCss = require('gulp-minify-css');


    return gulp.src(paths.srcStylesFiles)
      .pipe(plumber({
          errorHandler: function (e) {
              console.log(e.toString());
              this.emit('end');
          }
      }))
      .pipe(minifyCss())
      .pipe(concat('main.min.css'))
      .pipe(gulp.dest(''));

});


// scripts task
gulp.task('scripts', function () {

    var concat = require('gulp-concat'),
        plumber = require('gulp-plumber'),
        uglify = require('gulp-uglify');

    return gulp.src(paths.srcScriptsPlugins.concat(paths.srcScriptsFiles))
      .pipe(plumber({
          errorHandler: function (e) {
              console.log(e.toString());
              this.emit('end');
          }
      }))
     .pipe(uglify())
      .pipe(concat('main.min.js'))
      .pipe(gulp.dest(''));


});

// default task
gulp.task('default', [
  'styles',
  'scripts'
]);


