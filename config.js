var path = require('path');

exports.config = {
	// See docs at https://github.com/brunch/brunch/blob/master/docs/config.md
	modules: {
		definition: false,
		wrapper: false
	},
	paths: {
		"public": '../public',
		"watched": ['src', 'vendor']
	},
	files: {
		javascripts: {
			joinTo: {
				'js/app.js': /^src/,
				'js/vendor.js': [
					/^vendor/,

					// external libs
					'vendor/modernizr/modernizr.js',
					
					//'vendor/bootstrap-sass-official/assets/javascripts/bootstrap.js',

					// angular
					'vendor/angular/angular.js',
					'vendor/angular-resource/angular-resource.js',
					'vendor/angular-sanitize/angular-sanitize.js',
					'vendor/angular-ui-router/release/angular-ui-router.js'
				]
			},
			order: {
				before: [
					// angular
					'bower_components/angular/angular.js'

					// bootstrap
					//'bower_components/bootstrap/dist/js/bootstrap.js'
				]
			}
		},
		stylesheets: {
			joinTo: {
				'css/app.css': /^src/
			}
		}
	},

	/*server: {
		path: 'server.js',
		port: 3333,
		base: 'public'
	},*/

	conventions: {
		assets: /app(\\|\/)assets(\\|\/)/
	},

	sourceMaps: true
};