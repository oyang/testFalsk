angular('app')
	.controller('TaskController', ['$scope', 'TaskFactory', '$state'

		function($scope, TaskFactory, $state) {
			$scope.tasks = TaskFactory.query();

			$scope.addtask = function() {
				return taskFactory.save($scope.newtask, function() {
					$scope.tasks = TaskFactory.query();
					return $scope.newtask = null;
				});
			};

			$scope.removetask = function(taskID) {
				return TaskFactory["delete"]({
					ID: taskID
				}, function() {
					return $scope.tasks = TaskFactory.query();
				});
			};

			return $scope.viewtask = function(taskID) {
				return $state.go('task.detail' + taskID);
			};
		}
	]);
