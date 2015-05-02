angular("app")
	.factory("TaskFactory", function($resource) {
		return $resource('http://localhost:5000/api/task/:ID', {
			ID: '@ID'
		}, {
			'query': {
				method: 'GET',
				isArray: false
			}
		});
	});
