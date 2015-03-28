module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		dirs: {
			dest: './',
		},
		express: {
			all: {
				options: {
					bases: ['<%= dirs.dest %>'],
					port: 8080,
					hostname: "0.0.0.0",
					livereload: true
				}
			}
		},
		validation: {
			options: {
				reset: grunt.option('reset') || false,
				stoponerror: false,
				relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'] //ignores these errors 
			},
			files: {
				src: ['<%= dirs.dest %>/index.html']
			}
		},
		watch: {
			files: ['<%= dirs.src %>/outline.md'],
			options: {
				livereload: true
			},
			tasks: ['validation']
		}
	});

	// Load grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-html-validation');
	grunt.loadNpmTasks('grunt-express');

	// Default task.
	grunt.registerTask('default', ['express', 'watch']);
};
