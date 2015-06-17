module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		dirs: {
			dest: './',
			css: 'css',
			scss: 'scss'
		},
		connect: {
		  server: {
			options: {
			  port: 8001,
			  base: '<%= dirs.dest %>',
			  livereload: true
			}
		  }
		},
		validation: {
			options: {
				reset: grunt.option('reset') || false,
				//reportpath: false,
				//stoponerror: false
			},
			files: {
				src: ['*.html']
			}
		},
		compass: {
			dist: {
				options: {
					config: "config.rb"
				},
			}
		},
		watch: {
			src: {
				files: [ 'index.html', '<%= dirs.css %>/*' ],
				options: {
					livereload: 35730,
				},
				tasks: ['validation']
			},
			compass_compile: {
				files: [ '<%= dirs.scss %>/*' ],
				tasks: ['compass']
			}
		}
	});

	// Load grunt plugins.
	grunt.loadNpmTasks('grunt-html-validation');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.registerTask('default', ['connect', 'watch']);
};
