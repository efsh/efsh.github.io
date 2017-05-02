var lunchApp = angular.module('LunchCheck', []);

lunchApp.controller('LunchCheckController', ['$scope', function LunchCheckController($scope){
	
	var vm = $scope;
	
	vm.message = "";
	vm.check = checkItens;
	
	function checkItens(){
		
		var list = vm.itens;
		
		if (list) {
			
			count = list.split(",").length;
		
			if (count > 3) {
				vm.message = "Too much!";				
			} else {
				vm.message = "Enjoy!";
			}
			
		} else {
			
			vm.message = "Please enter data first";
			
		}
	};
}]);