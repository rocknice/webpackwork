var gulp = require('gulp');
const Babel = require('gulp-babel');
gulp.task('Babel', function() {
  	gulp.src('src/**/*.es').
  	pipe(Babel({
  		presets: ["env"]
  	})).
  	pipe(gulp.dest('./build'))
});
gulp.task('default',['Babel'],()=>{
	gulp.watch('src/**/*.es',['Babel'])
});