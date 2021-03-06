{
	baseUrl : '../',
	name : 'bower_components/almond/almond.js',
	include : ['apitizer'],
	out : '../dist/apitizer.js',
	wrap : {
		startFile : './start.frag',
		endFile: './end.frag'
	},
	optimize : 'none',
	exclude : ['jquery'],
	paths: {
		can      : 'bower_components/canjs/amd/can',
		jquery   : 'bower_components/jquery/dist/jquery',
		faker    : 'bower_components/Faker.js/Faker',
		tv4      : 'bower_components/tv4/tv4',
		RandExp  : 'bower_components/Randexp.js/index',
		taffy    : 'bower_components/taffydb/taffy'
	},
	shim : {
		faker : {
			exports : 'Faker'
		},
		taffy : {
			exports : 'TAFFY'
		}
	},
	wrapShim : true,
	packages : [{
		name : 'lodash',
		location : 'bower_components/lodash-amd/modern'
	}]
}