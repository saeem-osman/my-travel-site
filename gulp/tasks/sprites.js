var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del'),
    gulpSequence = require('gulp-sequence').use(gulp),
    gulpSeries = require('gulp-series'),
    runSequence = require('run-sequence');

  var  config = {
        mode: {
            css: {
                sprite: 'sprite.svg',
                render: {
                    css: {
                        template: './gulp/templates/sprites.css' 
                    }
                }
            }
        }
    }
  
gulp.task('beginClean',function(){
    return del(['./docs/temp/sprite','./docs/assets/images/sprites']);
});

gulp.task('createSprite',['beginClean'],function(){
  return gulp.src('./docs/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./docs/temp/sprite/'));
});

gulp.task('copySpriteGraphic',['createSprite'], function(){
    return gulp.src('./docs/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./docs/assets/images/sprites'));
});

gulp.task('copySpriteCSS',['createSprite'],function(){
    return gulp.src('./docs/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./docs/assets/styles/modules'));
});

gulp.task('endClean',['copySpriteGraphic','copySpriteCSS'], function(){
    return del('./docs/temp/sprite');
})

gulp.task('icons', ['beginClean','createSprite','copySpriteGraphic', 'copySpriteCSS']);