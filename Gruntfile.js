module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        autoprefixer: {
            dist: {
                files: {
                    'build/style.css': 'style.css'
                }
            }
        },

        concat: {
            dist: {
                src: [
                    'js/libs/*.js', // All JS in the libs folder
                    'js/site.js'  // This specific file
                ],
                dest: 'js/build/production.js',
            }
        },

        uglify: {
          build: {
              src: 'js/build/production.js',
              dest: 'js/build/production.min.js'
          }
        },

        sass: {
          dist: {
              options: {
                  style: 'compressed'
              },
              files: {
                  'styles/build/global.css': 'styles/global.scss'
              }
          }
        },

        watch: {

          scripts: {
              files: ['js/*.js'],
              tasks: ['concat', 'uglify'],
              options: {
                  spawn: false,
              }
          },

          css: {
              files: ['styles/sass/*.scss'],
              tasks: ['sass'],
              options: {
                  spawn: false,
              }
          },

          styles: {
              files: ['styles/build/global.css'],
              tasks: ['autoprefixer']
          }

        },

        imagemin: {
          dynamic: {
              files: [{
                  expand: true,
                  cwd: 'images/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'images/build/'
              }]
          }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['autoprefixer', 'concat', 'uglify', 'watch', 'sass', 'imagemin']);

};
